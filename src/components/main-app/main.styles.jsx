import styled from 'styled-components';

export const MainWrapper = styled.main`
  position: relative;
  background-color: ${(props) => props.theme.colors.darkGrayishBlue};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: -50%;
  min-width: 340px;
  max-width: 540px;
  width: 340px;
  @media ${(props) => props.theme.deviceMin.tablet} {
    top: 0;
    min-height: 330px;
    min-width: 550px;
    width: 100%;
  }
`;

export const HeaderWrapper = styled.header`
  letter-spacing: 4px;
  margin: 2.5rem 0 1.5rem;
  text-transform: uppercase;
  @media ${(props) => props.theme.deviceMin.tablet} {
    margin: 3rem 0 1.55rem;
  }
`;

export const AdviceHeader = styled.h1`
  color: ${(props) => props.theme.colors.neonGreen};
  font-size: clamp(
    ${(props) => props.theme.fontSizes.smallMobile},
    -0.875rem + 5.333vw,
    ${(props) => props.theme.fontSizes.smallDesktop}
  );
  font-weight: 500;
  margin: 0;
`;

export const AdviceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.5rem;
  padding: 0 1.5rem;
  @media ${(props) => props.theme.deviceMin.tablet} {
    padding: 0 4rem;
  }
`;

export const AdvicePara = styled.p`
  font-size: clamp(
    ${(props) => props.theme.fontSizes.regularMobile},
    -0.875rem + 5.333vw,
    ${(props) => props.theme.fontSizes.regularDesktop}
  );
  font-weight: 700;
  line-height: 1.38;
  padding-bottom: 1.3rem;
  @media ${(props) => props.theme.deviceMin.tablet} {
    min-height: 9.5rem;
    padding-bottom: 0;
  }
`;

export const DiceButton = styled.button`
  background-color: ${(props) => props.theme.colors.neonGreen};
  border: none;
  border-radius: 50%;
  bottom: -2rem;
  display: flex;
  padding: 1.3rem;
  position: absolute;

  :hover {
    -webkit-box-shadow: 0px 0px 40px 1px #52ffa8;
    box-shadow: 0px 0px 40px 1px #52ffa8;
    transition: box-shadow 0.5s;
  }
`;
