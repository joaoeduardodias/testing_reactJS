import { Container } from './styles';

interface InputProps {
  id: string;
  label: string;
}

export function Input({ id, label }: InputProps): JSX.Element {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} placeholder={label} />
    </Container>
  );
}
