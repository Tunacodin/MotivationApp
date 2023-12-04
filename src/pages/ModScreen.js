import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../colors/Colors';
import {useRoute} from '@react-navigation/native'; // route'yi içe aktarıyoruz

export default function ModScreen() {
  const route = useRoute(); // route parametresini alıyoruz

  const {imageSource, text} = route.params; // route.params'tan gelen imageSource ve text'i alıyoruz

  return (
    <View style={{flex: 1}}>
      <View>
        <ImageBackground source={imageSource} resizeMode="cover">
          <View
            style={{
              height: hp(25),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp('5.5%'),
                color: 'black',
                fontFamily: 'Dosis-Bold',
                backgroundColor: 'rgba(255,255,255,0.6)',
                paddingHorizontal: wp(20.5),
                paddingVertical: wp(1),
              }}>
              {text}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View></View>
    </View>
  );
}
