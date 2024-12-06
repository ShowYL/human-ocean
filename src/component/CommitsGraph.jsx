import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';

const CommitsGraph = ({ repos }) => {
    const [commitsData, setCommitsData] = useState([]);
    const svgRef = useRef();

    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const allCommits = await Promise.all(
                    repos.map(repo => axios.get(`https://api.github.com/repos/${repo.owner}/${repo.name}/commits`))
                );
                const mergedCommits = allCommits.flatMap(response => response.data);

                const uniqueAuthors = new Map();
                mergedCommits.forEach(commit => {
                    const authorName = commit.commit.author.name;
                    const authorAvatar = commit.author ? commit.author.avatar_url : 'https://github.com/ghost.png';
                    if (!uniqueAuthors.has(authorName)) {
                        uniqueAuthors.set(authorName, {
                            author: authorName,
                            avatar: authorAvatar,
                            count: 0
                        });
                    }
                    uniqueAuthors.get(authorName).count += 1;
                });

                // Filter out duplicate authors
                const filteredAuthors = Array.from(uniqueAuthors.values()).filter((author, index, self) =>
                    index === self.findIndex((t) => (
                        t.author === author.author
                    ))
                );

                setCommitsData(filteredAuthors);
            } catch (error) {
                console.error('Error fetching commits:', error);
            }
        };

        fetchCommits();
    }, [repos]);

    useEffect(() => {
        if (commitsData.length === 0) return;

        const margin = { top: 20, right: 30, bottom: 60, left: 40 };
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(commitsData.map(d => d.author))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(commitsData, d => d.count)])
            .nice()
            .range([height, 0]);

        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .remove();

        svg.append('g')
            .call(d3.axisLeft(y));

        svg.selectAll('.bar')
            .data(commitsData)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.author))
            .attr('y', d => y(d.count))
            .attr('width', x.bandwidth())
            .attr('height', d => height - y(d.count))
            .attr('fill', '#69b3a2');

        svg.selectAll('clipPath')
            .data(commitsData)
            .enter()
            .append('clipPath')
            .attr('id', (d, i) => `clip-${i}`)
            .append('circle')
            .attr('cx', d => x(d.author) + x.bandwidth() / 2)
            .attr('cy', height + 17)
            .attr('r', 12);

        svg.selectAll('.avatar')
            .data(commitsData)
            .enter()
            .append('image')
            .attr('class', 'avatar')
            .attr('x', d => x(d.author) + x.bandwidth() / 2 - 12)
            .attr('y', height + 5)
            .attr('width', 24)
            .attr('height', 24)
            .attr('xlink:href', d => d.avatar)
            .attr('clip-path', (d, i) => `url(#clip-${i})`);

    }, [commitsData]);

    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default CommitsGraph;
