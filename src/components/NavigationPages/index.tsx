import { useEffect, useState } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { Container, PaginationButton, PaginationItem } from './styles';

interface NavigationPagesProps {
  totalItems: number;
  onSetCurrentPage: (page: number) => void;
  currentPage: number;
  loadData: () => void;
}

export function NavigationPages({
  totalItems,
  onSetCurrentPage,
  currentPage,
  loadData,
}: NavigationPagesProps): JSX.Element {
  const [totalPages, setTotalPages] = useState<number[]>([]);
  useEffect(() => {
    const pages = Math.ceil(totalItems / 10); // number 10 is limit.

    const arrayPages: number[] = [];
    for (let i = 1; i <= pages; i++) {
      arrayPages.push(i);
    }
    setTotalPages(arrayPages);
  }, [totalItems]);

  function handleAlterPage(page: number): void {
    onSetCurrentPage(page);
    console.log(page);
    loadData();
  }

  return (
    <Container>
      <div>Qtd: {totalItems}</div>
      <PaginationButton>
        {currentPage > 1 ? (
          <PaginationItem onClick={() => handleAlterPage(currentPage - 1)}>
            <MdNavigateBefore size={18} /> Voltar
          </PaginationItem>
        ) : (
          <PaginationItem disabled>
            <MdNavigateBefore size={18} /> Voltar
          </PaginationItem>
        )}
        {totalPages.map(page => (
          <PaginationItem
            key={page}
            onClick={() => handleAlterPage(page)}
            isSelect={page === currentPage}
          >
            {page}
          </PaginationItem>
        ))}
        {currentPage < totalPages.length ? (
          <PaginationItem onClick={() => handleAlterPage(currentPage + 1)}>
            Próximo <MdNavigateNext size={18} />
          </PaginationItem>
        ) : (
          <PaginationItem disabled>
            Próximo <MdNavigateNext size={18} />
          </PaginationItem>
        )}
      </PaginationButton>
    </Container>
  );
}
