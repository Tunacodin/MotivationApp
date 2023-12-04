import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import ModCards from '../components/ModCards'; // Varsayılan olarak ModCards dosyasından alındığını varsayalım
import Colors from '../colors/Colors'; // Colors dosyasından alındığını varsayalım

export default function HomeScreen({navigation}) {
  const data = [
    {
      id: '1',
      imageSource: require('../Images/motive.jpg'),
      text: 'MOTİVASYON',
    },
    {
      id: '2',
      imageSource: require('../Images/happiness.jpg'),
      text: 'MUTLULUK',
    },
    {id: '3', imageSource: require('../Images/focus.png'), text: 'ODAKLANMA'},
    {id: '4', imageSource: require('../Images/success.webp'), text: 'BAŞARI'},
    {
      id: '5',
      imageSource: require('../Images/favor.jpg'),
      text: 'İYİLİK YAPMAK',
    },
    {
      id: '6',
      imageSource: require('../Images/spor.jpg'),
      text: 'SPOR',
    },
    {
      id: '7',
      imageSource: require('../Images/fasting.webp'),
      text: 'ORUÇ',
    },
    {
      id: '8',
      imageSource: require('../Images/kabullenme.jpg'),
      text: 'KABULLENME',
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
        paddingTop: 10,
      }}>
      <FlatList
        data={data}
        renderItem={(
          {item}, // renderItem prop'una doğru şekilde bir fonksiyon atandı
        ) => <ModCards imageSource={item.imageSource} text={item.text} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{justifyContent: 'space-between'}}
      />
    </View>
  );
}
