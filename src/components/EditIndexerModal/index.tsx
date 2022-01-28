import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { Input } from '../Input';
import { Container } from './styles';

interface EditIndexerModalProps {
  isOpen: boolean;
  onRequestClose: (modal: string) => void;
  idIndexer?: number;
}

export function EditIndexerModal({
  isOpen,
  onRequestClose,
  idIndexer,
}: EditIndexerModalProps): JSX.Element {
  function handleEditIndexer(id?: number): void {
    console.log(`editar   ${id}`);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose('editIndexer')}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => onRequestClose('editIndexer')}
        className="react-modal-close"
      >
        <MdClose />
      </button>
      <Container onSubmit={() => handleEditIndexer(idIndexer)}>
        <h2>Editar Indexador</h2>
        <Input id="symbol" label="Simbolo" />
        <Input id="name" label="Nome" />
        <button type="submit">Editar</button>
      </Container>
    </Modal>
  );
}
