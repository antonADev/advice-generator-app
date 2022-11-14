import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Theme from '../../../Theme';

import Spinner from '../spinner/spinner.component';

import desktopImage from '../../assets/pattern-divider-desktop.svg';
import mobileImage from '../../assets/pattern-divider-mobile.svg';
import { ReactComponent as Icon } from '../../assets/icon-dice.svg';
import { fetchAdviceData } from '../../features/adviceSlice';

import {
  MainWrapper,
  HeaderWrapper,
  AdviceHeader,
  AdviceWrapper,
  AdvicePara,
  DiceButton,
} from './main.styles';

const MainComponent = () => {
  const dispatch = useDispatch();
  const { status, data, message } = useSelector((state) => state.adviceData);

  const handleSearchAdvice = () => {
    dispatch(fetchAdviceData());
  };
  return (
    <Theme>
      <MainWrapper>
        {status === 'loading' ? <Spinner /> : null}
        {status === 'idle' ? (
          <>
            <HeaderWrapper>
              <AdviceHeader>{`Advice #${data.slip.id}`}</AdviceHeader>
            </HeaderWrapper>
            <AdviceWrapper>
              <AdvicePara>{`"${data.slip.advice}"`}</AdvicePara>
              <picture>
                <source srcSet={desktopImage} media='(min-width:768px)' />
                <img src={mobileImage} alt='newsImage' />
              </picture>
            </AdviceWrapper>
            <DiceButton
              onClick={() => {
                handleSearchAdvice();
              }}>
              <Icon />
            </DiceButton>
          </>
        ) : null}
        {status === 'error' ? (
          <>
            <p>{message}</p>
          </>
        ) : null}
      </MainWrapper>
    </Theme>
  );
};

export default MainComponent;
