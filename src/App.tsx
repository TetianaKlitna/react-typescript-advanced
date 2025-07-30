import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';
import Form from './components/Form';
import { useRef } from 'react';

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const handleSave = (data: unknown) => {
    console.log(data)
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  };
  return (
    <main>
      <Form onSave={handleSave}>
        <Input label="Name:" id="name" type="text" ref={ref} />
        <Input label="Age:" id="age" type="number" />
        <p>
          <Button>Safe</Button>
        </p>
      </Form>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>
      <Container as={Button} onClick={() => alert('Hello')}>
        Click me!
      </Container>
    </main>
  );
}

export default App;
