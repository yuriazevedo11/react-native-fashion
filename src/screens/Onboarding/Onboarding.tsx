import React, { useRef } from 'react';
import { Dimensions, Image } from 'react-native';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import theme from '@/theme';
import { AuthenticationProps } from '@/routes/types';

import Slide from './Slide';
import SlideContent from './SlideContent';
import Dot from './Dot';
import {
  Container,
  Slider,
  Pagination,
  Footer,
  Underlay,
  FooterContent,
  SlidesWrapper,
  PictureUnderlay,
} from './Onboarding.styles';

const { width } = Dimensions.get('window');

const SLIDES = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      "Consufed about your outfits? Don't worry! Find the best outfir here!",
    color: '#BFEAF5',
    picture: {
      uri: require('../../../assets/slider-image-1.png'),
      width: 408,
      height: 512,
    },
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    picture: {
      uri: require('../../../assets/slider-image-2.png'),
      width: 408,
      height: 512,
    },
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    picture: {
      uri: require('../../../assets/slider-image-3.png'),
      width: 408,
      height: 512,
    },
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Fell Good',
    description: 'Discover the lastest fashion and explore your personality',
    color: '#FFDDDD',
    picture: {
      uri: require('../../../assets/slider-image-4.png'),
      width: 408,
      height: 512,
    },
  },
];

const Onboarding: React.FC<AuthenticationProps<'Onboarding'>> = ({
  navigation,
}) => {
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: SLIDES.map((_, index) => width * index),
    outputRange: SLIDES.map(({ color }) => color),
  });

  const scrollRef = useRef<Animated.ScrollView>(null);

  return (
    <Container>
      <Slider style={{ backgroundColor }}>
        {SLIDES.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.7) * width,
              index * width,
              (index + 0.7) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });

          const pictureWidth = width - theme.borderRadii.xl;

          return (
            <PictureUnderlay key={picture.uri} style={{ opacity }}>
              <Image
                source={picture.uri}
                style={{
                  width: pictureWidth,
                  height: (pictureWidth * picture.height) / picture.width,
                }}
              />
            </PictureUnderlay>
          );
        })}
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
            {SLIDES.map(({ title, subtitle, description }, index) => {
              const last = index === SLIDES.length - 1;

              return (
                <SlideContent
                  key={title}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scrollRef?.current?.getNode().scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      });
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </SlidesWrapper>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Onboarding;
