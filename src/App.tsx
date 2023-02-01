import './App.css';
import { Screen } from './components/Screen';
import { ButtonsGroup } from './components/ButtonsGroup';
import { OperandsGroups } from './components/OperandsGroup';

function App() {
  return (
    <div className="container">
      <Screen />
      <ButtonsGroup />
      <OperandsGroups />
    </div>
  );
}

export default App;
