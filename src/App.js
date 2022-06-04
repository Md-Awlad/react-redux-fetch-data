import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>React Redux fetch Data</h1>
      <Todos/>
    </div>
  );
}

export default App;

// step1: install all package
// step2: constant define
// step3: async action create
// step4: reducer
// step5: create store
// step6: provide store
// step7: use store
// step8: adding css
