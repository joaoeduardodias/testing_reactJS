import styled from 'styled-components';

interface PaginationItemProps {
  isSelect?: boolean;
  disabled?: boolean;
}

export const Container = styled.footer`
  width: 90%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const PaginationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationItem = styled.div<PaginationItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.6rem;
  cursor: pointer;
  transition: 0.5s;
  ${props =>
    props.isSelect && {
      background: '#6d6d6d',
      padding: '5px',
      borderRadius: '4px',
    }}
  ${props =>
    props.disabled && {
      color: '#d4d4d4',
      cursor: 'not-allowed',
    }}
`;
