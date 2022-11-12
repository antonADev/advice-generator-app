import styled from 'styled-components';

// MainWrapper,
//   HeaderWrapper,
//   AdviceHeader,
//   AdviceWrapper,
//   AdvicePara,
//   DiceButton,

export const MainWrapper = styled.main`
  position: relative;
  background-color: ${(props) => props.theme.colors.darkGrayishBlue};
  border-radius: 10px;
  width: 92vw;
  min-height: 39vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderWrapper = styled.header`
  letter-spacing: 4px;
  margin: 2.5rem 0 1.5rem;
  text-transform: uppercase;
`;

export const AdviceHeader = styled.h1`
  color: ${(props) => props.theme.colors.neonGreen};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 0;
`;

export const AdviceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  & > * {
    margin: 1.4rem 0;
  }
`;

export const AdvicePara = styled.p`
  font-size: ${(props) => props.theme.fontSizes.regular};
  font-weight: 800;
  margin: 0;
`;

export const DiceButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.neonGreen};
  display: flex;
  padding: 1.3rem;
  position: absolute;
  bottom: -2rem;
`;
