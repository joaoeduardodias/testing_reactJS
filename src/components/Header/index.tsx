import { MdKeyboardArrowLeft } from 'react-icons/md';
import Link from 'next/link';
import { Container } from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps): JSX.Element {
  return (
    <Container>
      <div>
        <Link href="/">
          <a>
            <MdKeyboardArrowLeft size={40} />
          </a>
        </Link>
        <strong>{title}</strong>
      </div>
      <button type="button">Novo</button>
    </Container>
  );
}
