import './App.css';
import Activity from './components/activity';
import MisionValores from './components/misionValores';
import ContactData from './components/contactData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          DIJAVA TECHNOLOGIES
        </h1>
        <MisionValores className='MisionValores'/>
        <Activity className='Activity'/>
        <ContactData className='Contact-Data'/>
      </header>
      <footer className='App-footer'>
      <a href='https://forms.gle/PBHVcw2atxGcT6ae6' target='_blank' rel='noreferrer'><img src='https://1000marcas.net/wp-content/uploads/2019/11/Logo-Gmail.jpg' alt='whats app contact'></img></a>
      </footer>
    </div>
  );
}

export default App;
