import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Container } from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps): JSX.Element {
  return (
    <Container>
      <MdKeyboardArrowLeft size={40} />
      <strong>{title}</strong>
    </Container>
  );
}
