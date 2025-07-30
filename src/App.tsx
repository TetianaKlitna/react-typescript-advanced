import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';

function App() {
  return (
    <main>
      <Input label="Your name:" id="name" type="text" />
      <Input label="Your age:" id="age" type="number" />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>
      <Container as={Button} onClick={() => alert('Hello')}>Click me!</Container>
    </main>
  );
}

export default App;
