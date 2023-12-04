import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ModCards = ({imageSource, text}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Mod', {imageSource, text});
      }}>
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
            }}>
            {text}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ModCards;
