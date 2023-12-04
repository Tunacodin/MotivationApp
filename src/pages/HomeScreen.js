import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import ModCards from '../components/ModCards'; // Varsayılan olarak ModCards dosyasından alındığını varsayalım
import Colors from '../colors/Colors'; // Colors dosyasından alındığını varsayalım
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function HomeScreen({navigation}) {
  const data = [
    {
      id: '1',
      imageSource: require('../Images/motive.jpg'),
      text: 'MOTİVASYON',
      subtext: ['Siz de bunu yapabilirsiniz!'],
    },
    {
      id: '2',
      imageSource: require('../Images/happiness.jpg'),
      text: 'MUTLULUK',
      subtext: ['Siz de bunu yapabilirsiniz!'],
    },
    {
      id: '3',
      imageSource: require('../Images/focus.png'),
      text: 'ODAKLANMA',
      subtext: ['Siz de bunu yapabilirsiniz!'],
    },
    {
      id: '4',
      imageSource: require('../Images/success.webp'),
      text: 'BAŞARI',
      subtext: ['Siz de bunu yapabilirsiniz!'],
    },
    {
      id: '5',
      imageSource: require('../Images/favor.jpg'),
      text: 'İYİLİK YAPMAK',
      subtext: ['Siz de bunu yapabilirsiniz!'],
    },
    {
      id: '6',
      imageSource: require('../Images/spor.jpg'),
      text: 'SPOR',
      subtext: ['Siz de bunu yapabilirsiniz!'],
    },
    {
      id: '7',
      imageSource: require('../Images/fasting.webp'),
      text: 'ORUÇ',
      subtext: ['Siz de bunu yapabilirsiniz!'],
    },
    {
      id: '8',
      imageSource: require('../Images/kabullenme.jpg'),
      text: 'KABULLENME',
      subtext: ['Siz de bunu yapabilirsiniz!'],
    },
    // Diğer öğeler
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.lightGreen,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={(
          {item}, // renderItem prop'una doğru şekilde bir fonksiyon atandı
        ) => (
          <ModCards
            imageSource={item.imageSource}
            text={item.text}
            subtext={item.subtext}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{justifyContent: 'space-between'}}
      />
    </View>
  );
}
