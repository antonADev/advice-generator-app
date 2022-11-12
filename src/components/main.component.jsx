import React from 'react';
import Theme from '../../Theme';

import {
  MainWrapper,
  HeaderWrapper,
  AdviceHeader,
  AdviceWrapper,
  AdvicePara,
  DiceButton,
} from './main.styles';

import desktopImage from '../assets/pattern-divider-desktop.svg';
import mobileImage from '../assets/pattern-divider-mobile.svg';
import { ReactComponent as Icon } from '../assets/icon-dice.svg';
const MainComponent = () => {
  return (
    <Theme>
      <MainWrapper>
        <HeaderWrapper>
          <AdviceHeader>Advice #117</AdviceHeader>
        </HeaderWrapper>
        <AdviceWrapper>
          <AdvicePara>
            "It is easy to sit up and take notice, what's difficult is getting
            up and taking action"
          </AdvicePara>
          <picture>
            <source srcSet={desktopImage} media='(min-width:768px)' />
            <img src={mobileImage} alt='newsImage' />
          </picture>
        </AdviceWrapper>
        <DiceButton>
          <Icon />
        </DiceButton>
      </MainWrapper>
    </Theme>
  );
};

export default MainComponent;
