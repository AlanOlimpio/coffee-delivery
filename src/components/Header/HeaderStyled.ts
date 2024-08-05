import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: space-between;
  padding: 2rem 0;
  flex-wrap: wrap;
  > img {
    cursor: pointer;
  }
`;

export const HeaderwrapperRight = styled.header`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const HeaderButton = styled.div`
  ${({ theme }) => css`
    position: relative;
    span {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      font-size: ${theme.font.size.text.xs};
      font-weight: bold;
      color: ${theme.font.color['white']};
      background: ${theme.font.color['yellow-dark']};
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  `}
`;
