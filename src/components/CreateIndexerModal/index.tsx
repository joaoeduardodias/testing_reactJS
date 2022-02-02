import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { Input } from '../Input';
import { Container } from './styles';

interface CreateIndexerModalProps {
  isOpen: boolean;
  onRequestClose: (modal: string) => void;
  loadData: () => void;
}

export function CreateIndexerModal({
  isOpen,
  onRequestClose,
  loadData,
}: CreateIndexerModalProps): JSX.Element {
  const formRef = useRef(null);

  async function handleCreateNewIndexer(data: any): Promise<void> {
    axios
      .post(
        'https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores',
        {
          nome: data.name,
          simbolo: data.symbol,
        }
      )
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          iconColor: '#0534F0',
          title: 'Indexador criado com sucesso!',
        });
        loadData();
        onRequestClose('newIndexer');
      })
      .catch(function (error) {
        if (error.response) {
          switch (error.response.status) {
            case 409:
              Swal.fire({
                title: error.response.data.errors.errorMessage,
                text: 'Este indexador já existe, se deseja editá-lo, clique no botão de editar!.',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#0534F0',
              });
              break;

            default:
              Swal.fire({
                title: error.response.data.errors.errorMessage,
                text: 'Por favor, tente novamente mais tarde, ou contate o suporte.',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#0534F0',
              });
          }
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose('newIndexer')}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => onRequestClose('newIndexer')}
        className="react-modal-close"
      >
        <MdClose />
      </button>
      <Form ref={formRef} onSubmit={handleCreateNewIndexer}>
        <Container>
          <h2>Cadastrar Indexador</h2>
          <Input id="symbol" label="Simbolo" />
          <Input id="name" label="Nome" />
          <button type="submit">Cadastrar</button>
        </Container>
      </Form>
    </Modal>
  );
}
