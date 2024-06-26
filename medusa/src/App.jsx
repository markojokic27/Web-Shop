import './App.css';
import Medusa from './Medusa';
import { FormProvider } from './context/formContext';

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Medusa/>
      </FormProvider>
    </div>
  );
}

export default App;
