import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header.jsx';
import Footer from './component/footer.jsx';
import Obligatoire from './page/Obligatoire.jsx';
import Credits from './page/Credits.jsx';
import Form from './page/Form.jsx'


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Obligatoire />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/the-form" element={<Form />} />
            {/* <Route path="/captcha" element={<Captcha />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
