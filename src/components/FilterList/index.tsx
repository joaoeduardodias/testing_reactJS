import { FormEvent } from 'react';
import { Container } from './styles';

interface FilterListProps {
  orderByDescending: (value: boolean) => void;
  loadData: () => void;
}

export function FilterList({
  orderByDescending,
  loadData,
}: FilterListProps): JSX.Element {
  function handleSelectOrderBy(e: any): void {
    if (e.target.value === 'true') {
      orderByDescending(true);
      loadData();
    } else {
      orderByDescending(false);
      loadData();
    }
  }

  return (
    <Container>
      <span>Ordenar por:</span>
      <select name="orderingBy" id="orderingBy" onChange={handleSelectOrderBy}>
        <option value="true">Ordem Decrescente</option>
        <option value="false" defaultChecked>
          Ordem Crescente
        </option>
      </select>
    </Container>
  );
}
