import './App.css';
import { Screen } from './components/Screen';
import { ButtonsGroup } from './components/ButtonsGroup';
import { OperandsGroups } from './components/OperandsGroup';
import { Wrapper } from './components/Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Screen />
      <ButtonsGroup />
      <OperandsGroups />
    </Wrapper>
  );
}

export default App;
