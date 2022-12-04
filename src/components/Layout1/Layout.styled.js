import styled from '@emotion/styled';

export const Div = styled.div`
  position: relative;

  padding: 16px 20px;

  border: 1px solid #000;
  border-radius: 12px;
  background-color: #e7e7e7;

  opacity: ${props => {
    return props.progress ? 0.2 : 1;
  }};
  pointer-events: ${props => {
    return props.progress ? 'none' : 'auto';
  }};
`;
