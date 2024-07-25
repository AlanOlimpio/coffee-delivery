import styled from 'styled-components';

export const containerMaxWidth = '70rem';

export const LayoutContainer = styled.div`
  max-width: ${containerMaxWidth};
  margin: 0 auto;
  border-radius: 8px;
  display: block;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    padding: 0 5rem;
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;
