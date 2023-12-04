import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../colors/Colors';
import {useRoute} from '@react-navigation/native'; // route'yi içe aktarıyoruz
import BlockCard from '../components/BlockCard';

export default function ModScreen() {
  const route = useRoute(); // route parametresini alıyoruz

  const {imageSource, text} = route.params; // route.params'tan gelen imageSource ve text'i alıyoruz
  const data = [
    {
      id: '1',
      subtext: [
        'Başarısızlık, başarının sadece bir parçasıdır; en önemlisi pes etmemek ve her başarısızlıkla daha güçlü bir şekilde yeniden ayağa kalkmaktır.',
      ],
    },
    {
      id: '2',

      subtext: [
        'Hayat, verilen zorluklarla değil, bu zorluklara karşı verilen tepkilerle ilgilidir. Her durumda olumlu bir tutumla ilerlemek, her zaman yeni fırsatlar yaratabilir.',
      ],
    },
    {
      id: '3',

      subtext: [
        'Bugün yapacağın küçük adımlar, yarın ulaşacağın büyük başarıların temelini oluşturur.',
      ],
    },
    {
      id: '4',

      subtext: [
        'Engeller, hedefe ulaşmak için durmanızı değil, yolunuzu değiştirmenizi gerektirir. Yolunuza devam edin ve her engeli aşmak için yeni bir fırsat olarak görün.',
      ],
    },
    {
      id: '5',

      subtext: [
        'Başkalarının başarılarından daha az olmadığınızı hatırlayın. Kendi potansiyelinizi keşfedin ve kendi benzersiz yolunuzda ilerleyin.',
      ],
    },
    {
      id: '6',

      subtext: [
        'Başarılı insanlar, güçlüklerle yüzleşirken sıradan insanlardan farklı olarak asla vazgeçmezler. Zorluklar, başarıya giden yolda sadece bir duraklama noktasıdır.',
      ],
    },
    {
      id: '7',

      subtext: [
        'Her gün bir öncekinden biraz daha iyi olun. Küçük adımlar, uzun bir yolculuğun başlangıcıdır ve sürekli gelişim, büyük başarıların anahtarıdır.',
      ],
    },
    {
      id: '8',

      subtext: [
        'Gelecek, bugünkü kararlarınızla şekillenir. Bu yüzden bugün yapacağınız işlere ve adımlara dikkat edin, çünkü gelecekteki başarınız onlara dayanır.',
      ],
    },
    // Diğer öğeler
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.lightGreen,
      }}>
      <View
        style={{
          shadowColor: 'blue',
          shadowOffset: {width: 4, height: 16},
          shadowOpacity: 1,
          shadowRadius: 1,
          elevation: 18,
          backgroundColor: 'black',
        }}>
        <ImageBackground source={imageSource} resizeMode="cover">
          <View
            style={{
              height: hp(25),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: wp('9%'),
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

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={(
          {item}, // renderItem prop'una doğru şekilde bir fonksiyon atandı
        ) => (
          <BlockCard
            imageSource={item.imageSource}
            text={item.text}
            subtext={item.subtext}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        contentContainerStyle={{justifyContent: 'space-between'}}
      />
    </View>
  );
}
