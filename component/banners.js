import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,ImageBackground
} from 'react-native';

const Banners = () => {
  return (
  
      
      <ImageBackground
        style={styles.cointiner} imageStyle={{ borderRadius: 10}}
        source={{
          uri: 'https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/alt-593ecb243e2ba-3814-345dbcf80631a29c1fec1d17f919669a@1x.jpg',
        }}
      >
      <Text style={styles.text} >Get 20% off</Text>
      </ImageBackground>
     
     

  );
};
const styles = StyleSheet.create({
  cointiner: {
    height: 200,
    backgroundColor: '#41aa55',
    margin: 15,
    borderRadius: 15,
  },
  text:{
 marginTop:'45%',
 marginLeft:20,
 fontSize:25,
 color:'#ffffff',
 fontFamily:'Poppins-SemiBold'
  },
});
export default Banners;
