import { useEffect, useState } from 'react';
import { Container } from './styles';

interface NavigationPagesProps {
  totalItems: number;
}

export function NavigationPages({
  totalItems,
}: NavigationPagesProps): JSX.Element {
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const pages = Math.ceil(totalItems / 10);
    setTotalPages(pages);
  }, [totalItems]);

  return (
    <Container>
      <button type="button">voltar</button>
      <button type="button">proximo</button>
    </Container>
  );
}
