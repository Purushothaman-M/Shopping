import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categorys from '../component/categorys';

const Deals = () => {
  const Data = [
    {
      name: 'Pumpkin',
      weight: '1kg',
      rating: '4.6',
      price: '$60',
      src:require('../image/pumpkin1.png')
    },
    {
      name: 'Sunflower Oil',
      weight: '1kg',
      rating: '4.0',
      src:require('../image/sunoil.png'),
      price: '$60',
    },
    {
      name: 'Cauliflower',
      weight: '1kg',
      rating: '5.0',
      src:require('../image/cauliflowerfood.png'),
      price: '$60',
    },
    {
      name: 'Baguette bread',
      weight: '1kg',
      rating: '5.0',
      src:require('../image/bread1.png'),
      price: '$60',
    },
    {
      name: 'Baguette bread',
      weight: '1kg',
      rating: '5.0',
      src:require('../image/bread1.png'),
      price: '$60',
    },
    {
      name: 'Baguette bread',
      weight: '1kg',
      rating: '5.0',
      src:require('../image/bread1.png'),
      price: '$60',
    },
  ];

  const itemView = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.continer}>
        <Image style={styles.image} source={item.src} />
        <Image style={styles.heart} source={require('../image/heart.png')} />
          <Text style={styles.name}>{item.name}</Text>
         
          <View style={{flexDirection:'row',bottom:25}}>
          <Text style={styles.item}>{item.price}</Text>
          <Image style={styles.star} source={require('../image/star.png')} />
<Text style={{color:'#282e6c'}}>
    {item.rating}
</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginBottom:25}}>
      <View style={styles.subcontiner}>
        <Text style={styles.text}>Today Grocery Deals</Text>
      </View>

      <FlatList data={Data} renderItem={itemView} numColumns={3} />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily:'Poppins-SemiBold',
    color:'#282e6c'
  },
  continer: {
    height: 125,
    width: 125,

    marginLeft: 3,
    marginTop: 3,
    backgroundColor:'#ffffff'
  },
  subcontiner:{
    height: 50,
    // width: 90,
     marginTop: 25,
    backgroundColor:'#ffffff',
    padding: 10,
  },
  name:{
      
      alignSelf:'center',
      fontFamily:'Poppins-Medium',
      bottom:30,
      color:'#282e6c'
    
  },
  heart:{
      height:15,
      width:15,
      left:'70%',
      margin:10,
      bottom:70,
tintColor:'#C7C7C7'
  },
  item:{
      marginLeft:10,
      fontFamily:'Poppins-Regular',
      color:'#282e6c'
  },
  star: {
    height: 10,
    width: 10,
    marginTop: 2,
    marginLeft: 50,
  },
  image:{
    marginTop:10,
    height:60,
    width:60,
    alignSelf:'center'
  }
});
export default Deals;
