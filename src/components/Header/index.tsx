import { Container } from './styles';

interface HeaderProps {
  title: string;
  openNewIndexModal: (modal: string) => void;
}

export function Header({ title, openNewIndexModal }: HeaderProps): JSX.Element {
  return (
    <Container>
      <div>
        <strong>{title}</strong>
      </div>
      <button type="button" onClick={() => openNewIndexModal('newIndexer')}>
        Novo
      </button>
    </Container>
  );
}
