import React from 'react';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Wrapper, Container, Logo, CartButton, CartCounter} from './styles';

export default function Header({navigation}) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <Logo />
        <CartButton onPress={() => navigation.navigate('cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <CartCounter>{cartSize || 0}</CartCounter>
        </CartButton>
      </Container>
    </Wrapper>
  );
}
