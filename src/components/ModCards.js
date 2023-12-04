import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ModCards = ({imageSource, text, subtext}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Mod', {imageSource, text, subtext});
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: wp(3),
        }}>
        <ImageBackground
          source={imageSource}
          style={{
            overflow: 'hidden',
            borderRadius: wp(10),
            opacity: 0.8,
            margin: wp(1),
          }}>
          <View
            style={{
              borderRadius: wp(10),
              width: wp('44%'),
              height: hp('22%'),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}>
            <Text
              style={{
                fontFamily: 'Dosis-Bold',
                fontSize: wp(6),
                color: 'white',
              }}>
              {text}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default ModCards;
