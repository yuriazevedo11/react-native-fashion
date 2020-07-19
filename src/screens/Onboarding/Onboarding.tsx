import React from 'react';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';

import Slide from './Slide';
import {
  Container,
  Slider,
  Footer,
  Underlay,
  Overlay,
} from './Onboarding.styles';

const { width } = Dimensions.get('window');

const SLIDES = [
  { label: 'Relaxed', color: '#BFEAF5' },
  { label: 'Playful', color: '#BEECC4' },
  { label: 'Excentric', color: '#FFE4D9' },
  { label: 'Funky', color: '#FFDDDD' },
];

const Onboarding: React.FC = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: SLIDES.map((_, index) => width * index),
    outputRange: SLIDES.map(({ color }) => color),
  });

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          {...{ onScroll }}
        >
          {SLIDES.map(({ label }, index) => (
            <Slide key={label} right={!!(index % 2)} {...{ label }} />
          ))}
        </Animated.ScrollView>
      </Slider>

      <Footer>
        <Underlay style={{ backgroundColor }} />
        <Overlay />
      </Footer>
    </Container>
  );
};

export default Onboarding;
