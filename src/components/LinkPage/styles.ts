import styled from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 100%;
  background: ${props => props.color};
  color: var(--shape);
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 4px;
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${props => darken(0.1, props.color)};
  }
`;
