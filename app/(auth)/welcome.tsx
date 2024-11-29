import CustomButton from '@/components/ui/CustomButton';
import Dot from '@/components/ui/Dot';
import { ONBOARDING_DATA } from '@/constants';
import { getFontFamily } from '@/utils/fontFamily';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

const OnBoarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const isLastSlide = ONBOARDING_DATA.length - 1 === activeIndex;

  const onChangeSlider = (index: number) => {
    setActiveIndex(index);
  };

  const onPressSkipHandler = () => {
    if (isLastSlide) {
      router.replace('/(root)');
    } else {
      swiperRef?.current?.scrollBy(1);
    }
  };

  return (
    <SafeAreaView className="flex w-full h-full bg-caribbeanGreen">
      <TouchableOpacity className="w-full p-5 items-end justify-end">
        <Text
          style={{
            fontFamily: getFontFamily('regular'),
          }}
          className="text-base text-honeydew tracking-widest"
          onPress={onPressSkipHandler}>
          Skip
        </Text>
      </TouchableOpacity>

      <View className="relative h-[200px] flex items-center max-w-[290px] mx-auto justify-center">
        <Text
          className="text-center text-3xl text-cyprus leading-9"
          style={{
            fontFamily: getFontFamily('semibold'),
          }}>
          {ONBOARDING_DATA[activeIndex].title}
        </Text>
      </View>

      <View className="w-full min-h-[610px] bg-honeydew rounded-t-[70px]">
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<Dot isActive />}
          activeDot={<Dot />}
          onIndexChanged={onChangeSlider}>
          {ONBOARDING_DATA.map((item) => (
            <View
              key={item.id}
              className="w-full h-full flex flex-col gap-y-16 items-center justify-start pt-[70px] pb-[241px]">
              <View className="w-[230px] h-[230px] flex items-center justify-center bg-lightGreen rounded-full">
                <Image
                  source={item.image as ImageSourcePropType}
                  className="w-[280px] h-[280px]"
                  resizeMode="contain"
                />
              </View>

              {isLastSlide ? (
                <CustomButton onPress={onPressSkipHandler}>Login In</CustomButton>
              ) : (
                <Text
                  className="text-3xl text-cyprus"
                  style={{
                    fontFamily: getFontFamily('semibold'),
                  }}
                  onPress={onPressSkipHandler}>
                  {isLastSlide ? 'Start Your Journey' : 'Next'}
                </Text>
              )}
            </View>
          ))}
        </Swiper>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
