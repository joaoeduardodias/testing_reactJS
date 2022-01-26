import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { Input } from '../Input';
import { Container } from './styles';

interface CreateIndexerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CreateIndexerModal({
  isOpen,
  onRequestClose,
}: CreateIndexerModalProps): JSX.Element {
  function handleCreateNewIndexer(): void {
    console.log('criar');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <MdClose />
      </button>
      <Container onSubmit={handleCreateNewIndexer}>
        <h2>Cadastrar Indexador</h2>
        <Input id="symbol" label="Simbolo" />
        <Input id="name" label="Nome" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
