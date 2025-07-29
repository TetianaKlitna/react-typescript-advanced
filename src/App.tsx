import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <>
      <Input label="Your name:" id="name" type="text" />
      <Input label="Your age:" id="age" type="number" />
      <p>
        <Button el="button">A Button</Button>
      </p>
      <p>
        <Button el="link" href="https://google.com">A Link</Button>
      </p>
    </>
  );
}

export default App;
