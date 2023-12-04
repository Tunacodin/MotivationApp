import React from 'react';
import {
  Pressable,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const BlockCard = ({imageSource, text, subtext}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      underlayColor="black"
      style={{
        width: wp(95),
        height: hp(30),
        marginVertical: hp(0.5),
        alignSelf: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        shadowColor: 'black',
        shadowOffset: {width: -4, height: 10},
        shadowRadius: 8,
        shadowOpacity: 1,
        elevation: 17,
      }}>
      <View
        style={{
          width: wp(95),
          backgroundColor: 'black',

          height: hp(5),
          borderColor: 'black',
          shadowColor: 'purple',
          shadowOffset: {width: 4, height: 16},
          shadowOpacity: 1,
          shadowRadius: 1,
          elevation: 18,
          backgroundColor: 'black',
          borderTopStartRadius: 12,
          borderTopEndRadius: 12,
          borderWidth: 1,
        }}></View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        <Text
          style={{
            fontSize: wp(6),
            color: 'black',
            textAlign: 'center',
            fontFamily: 'Dosis-Medium',
            paddingVertical: hp(2),
            paddingHorizontal: wp(2),
          }}>
          {subtext}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BlockCard;
