import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

import Swal from 'sweetalert2';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import axios from 'axios';
import { Input } from '../Input';
import { Container } from './styles';

interface Indexer {
  simbolo: string;
  nome: string;
  id: number;
}

interface EditIndexerModalProps {
  isOpen: boolean;
  onRequestClose: (modal: string) => void;
  loadData: () => void;
  indexer: Indexer;
}

export function EditIndexerModal({
  isOpen,
  indexer,
  loadData,
  onRequestClose,
}: EditIndexerModalProps): JSX.Element {
  const formRef = useRef(null);
  const initialData = {
    name: indexer.nome,
    symbol: indexer.simbolo,
  };

  function handleEditIndexer(data: any): void {
    axios
      .patch(
        `https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores/${indexer.id}`,
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
          title: 'Indexador Editado com sucesso!',
        });
        loadData();
        onRequestClose('editIndexer');
      })
      .catch(response => console.error(response));
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

      <Form
        ref={formRef}
        initialData={initialData}
        onSubmit={handleEditIndexer}
      >
        <Container>
          <h2>Editar Indexador</h2>
          <Input id="symbol" label="Simbolo" />
          <Input id="name" label="Nome" />
          <button type="submit">Editar</button>
        </Container>
      </Form>
    </Modal>
  );
}
