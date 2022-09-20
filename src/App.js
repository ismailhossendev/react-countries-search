
import './App.css';
import Countries from './component/Countries/Countries';
import Header from './component/Header/Header';


function App(props) {
  
  return (
    <div className=" w-9/12 mx-auto">
      <header className="text-center">
       <Header></Header>
      </header>
      <div>
      <Countries></Countries>
      </div>
    </div>
  );
}

export default App;
