import React from 'react';
import {Pressable, ImageBackground, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const BlockCard = () => {
  return (
    <Pressable>
      <ImageBackground
        source={imageSource}
        style={{
          overflow: 'hidden',
          borderRadius: wp(10),
          opacity: 0.7,
        }}>
        <View
          style={{
            borderRadius: wp(10),
            width: wp('40%'),
            height: hp('20%'),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}>
          <Text
            style={{
              fontFamily: 'Dosis-Bold',
              fontSize: wp(6),
              color: 'white',
              opacity: 1,
            }}>
            {text}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default BlockCard;
