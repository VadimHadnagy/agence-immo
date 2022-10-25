import './css/App.css';
import CardImmo from './components/card.jsx'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <h1>Featured <span id='bold'>Properties</span></h1>
          <div className="separate"></div>
          <p id='sousTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium non autem ducimus!</p>
          <p id='sousTitle'>Lorem ipsum dolor sit amet consectetur, adipisicing <elit className=""></elit></p>
          <CardImmo></CardImmo>
        </div>
        <div className="placementbutton">
        <a href="#" id='button'>MORE PROPERTIES</a>
        <a href="#" id='button'>ALL PROPERTIES</a>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
