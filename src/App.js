import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import Table from './components/Table';

function App() {
  return (
    <div>
     <div className='idx'>
      <Index/>

     </div>

   
      <div className='tables'>
      <Table/>

      </div>
    </div>
  );
}

export default App;
