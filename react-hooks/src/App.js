import { useInput } from './useInput';

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const notAcess = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen, notAcess);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
