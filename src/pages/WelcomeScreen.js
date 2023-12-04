import React, {useEffect} from 'react';
import {Text,View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../colors/Colors';
import Video from 'react-native-video';
import video from '../Images/Değişime Hoş Geldin.mp4';
const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // 5 saniye sonra anasayfaya yönlendirme yapılıyor
      navigation.navigate('Home'); // 'AnaSayfa' burada uygulamanızda var olan bir ekranın adı olmalıdır.
    }, 1000);

    return () => clearTimeout(timeout); // Komponent temizlendiğinde timeout'u temizle
  }, []);

  return (
    <View>
      <Video
        source={video} // Video kaynağını buraya ekleyin
        style={{ width: '100%',height:'100%'}} // Video boyutu
        controls={true} // Kontrollerin görüntülenmesi
        paused={false} // Başlangıçta durdurulmuş olup olmadığı
        resizeMode="contain" // Video boyutlandırma modu (contain, cover, stretch)
      />
    </View>
  );
};

export default WelcomeScreen;
