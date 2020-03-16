import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
  background: #000;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const CartButton = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const CartCounter = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  text-align: center;
  color: #fff;
  background: #7159c1;
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  font-size: 12px;
  padding: 2px;
  overflow: hidden;
`;
