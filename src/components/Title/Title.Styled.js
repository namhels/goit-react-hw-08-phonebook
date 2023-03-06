import styled, { css } from 'styled-components';

const Headline = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.halloween[0]};
  transition: all 300ms;
  :hover {
    transform: scale(1.1);
    filter: drop-shadow(4px 8px 3px ${p => p.theme.colors.halloween[1]});
  }

  ${p =>
    p.HeadlineLogo &&
    css`
      padding-bottom: 0;
      font-size: 45px;
      -webkit-text-stroke: 4px ${p => p.theme.colors.halloween[0]};
      -webkit-text-fill-color: transparent;
    `}
`;

export { Headline };
