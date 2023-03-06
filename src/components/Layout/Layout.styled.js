import styled from '@emotion/styled';

export const Div = styled.div`
  position: relative;
  user-select: none;

  opacity: ${props => {
    return props.progress ? 0.2 : 1;
  }};
  pointer-events: ${props => {
    return props.progress ? 'none' : 'auto';
  }};
`;
