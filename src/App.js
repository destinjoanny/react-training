import './App.css';
import './css/styles.css'
import StatefullExample from './day1-practice/components/beforeHooks/statefull';
import FetchDataHooks from './day1-practice/FetchHooks';
import CounterApp from './day1-practice/counterApp';
import CounterHooks from './day1-practice/Hooks/CounterHooks';
import TransferApp from './day2-practice/components';

function App() {

  return (
    <div className="App bg-gray-100 w-2/4 my-16 p-8 rounded">
      <h2 className="text-lg font-bold">Hello Everyone</h2>
      <TransferApp />
      <FetchDataHooks />
    </div>
  );
}

export default App;
