import Input from './components/UI/Input';
import Button from './components/UI/Button';
import Container from './components/UI/Container';
//import Form from './components/Form';
import FormImperative, { type FormHandle } from './components/UI/FormImperative';
import { useRef } from 'react';

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);
  const handleSave = (data: unknown) => {
    // const extractedData = data as { name: string; age: string };
    if (
      !data ||
      typeof data !== 'object' ||
      !('name' in data) ||
      !('age' in data)
    ) {
      return;
    }
    console.log(data);
    customForm.current?.clear();
  };
  return (
    <main>
      {/* <Form onSave={handleSave}>
        <Input label="Name:" id="name" type="text" ref={ref} />
        <Input label="Age:" id="age" type="number" />
        <p>
          <Button>Safe</Button>
        </p>
      </Form> */}
      <FormImperative onSave={handleSave} ref={customForm}>
        <Input label="Name:" id="name" type="text" ref={ref} />
        <Input label="Age:" id="age" type="number" />
        <p>
          <Button>Safe</Button>
        </p>
      </FormImperative>
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
