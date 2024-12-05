import './App.css';
import Header from './component/header.jsx';
import Footer from './component/footer.jsx';
import Obligatoire from './page/Obligatoire.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Obligatoire />
      <Footer />
    </div>
  );
}

export default App;
