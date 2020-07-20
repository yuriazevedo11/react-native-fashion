import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = height * 0.57;

export const Container = styled.View.attrs({
  width,
})``;

export const TitleContainer = styled.View`
  height: 100px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'SFProText-Bold';
  font-size: 70px;
  line-height: 75px;
  color: #fff;
  text-align: center;
`;
