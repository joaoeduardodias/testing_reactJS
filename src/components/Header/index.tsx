import { Container } from './styles';

interface HeaderProps {
  title: string;
  openNewIndexModal: () => void;
}

export function Header({ title, openNewIndexModal }: HeaderProps): JSX.Element {
  return (
    <Container>
      <div>
        <strong>{title}</strong>
      </div>
      <button type="button" onClick={openNewIndexModal}>
        Novo
      </button>
    </Container>
  );
}
