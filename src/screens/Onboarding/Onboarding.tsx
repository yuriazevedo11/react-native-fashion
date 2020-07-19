import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';

import Slide from './Slide';
import {
  Container,
  Slider,
  Footer,
  Underlay,
  FooterContent,
} from './Onboarding.styles';
import BottomSlide from './BottomSlide';

const { width } = Dimensions.get('window');

const SLIDES = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      "Consufed about your outfits? Don't worry! Find the best outfir here!",
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Fell Good',
    description: 'Discover the lastest fashion and explore your personality',
    color: '#FFDDDD',
  },
];

const Onboarding: React.FC = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: SLIDES.map((_, index) => width * index),
    outputRange: SLIDES.map(({ color }) => color),
  });

  const scrollRef = useRef<Animated.ScrollView>(null);

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          {...{ onScroll }}
        >
          {SLIDES.map(({ title }, index) => (
            <Slide key={title} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Slider>

      <Footer>
        <Underlay style={{ backgroundColor }} />
        <FooterContent
          style={{
            width: width * SLIDES.length,
            transform: [{ translateX: multiply(x, -1) }],
          }}
        >
          {SLIDES.map(({ title, subtitle, description }, index) => (
            <BottomSlide
              key={title}
              last={index === SLIDES.length - 1}
              onPress={() =>
                scrollRef?.current?.getNode().scrollTo({
                  x: width * (index + 1),
                  animated: true,
                })
              }
              {...{ subtitle, description }}
            />
          ))}
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Onboarding;
