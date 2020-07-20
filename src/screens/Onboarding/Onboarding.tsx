import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import Animated, { multiply, divide } from 'react-native-reanimated';
import { interpolateColor, useScrollHandler } from 'react-native-redash';

import Slide from './Slide';
import BottomSlide from './BottomSlide';
import Dot from './Dot';
import {
  Container,
  Slider,
  Pagination,
  Footer,
  Underlay,
  FooterContent,
  SlidesWrapper,
} from './Onboarding.styles';

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
  const { scrollHandler, x } = useScrollHandler();
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
          bounces={false}
          {...scrollHandler}
        >
          {SLIDES.map(({ title }, index) => (
            <Slide key={title} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Slider>

      <Footer>
        <Underlay style={{ backgroundColor }} />
        <FooterContent>
          <Pagination>
            {SLIDES.map(({ title }, index) => (
              <Dot key={title} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </Pagination>

          <SlidesWrapper
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
          </SlidesWrapper>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Onboarding;
