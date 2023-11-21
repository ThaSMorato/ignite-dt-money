import React from 'react';

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import logoImg from '../../assets/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="DT Money" />
        <NewTransactionButton>Nova Transacao</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
