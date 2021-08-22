import React, {useState, useEffect} from 'react';
import Statusbar from '../../component/style/statusbar';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

const Checkout = () => {
  const Data = [
    {
      name: 'Pumpkin',
      weight: '1kg',
      rating: '4.6',
      review: '255',
      quantity: '3',
      price: '$60',
      src:require('../../image/pumpkin1.png'),
    },
    {
      name: 'Sunflower Oil',
      weight: '1kg',
      rating: '4.0',
      review: '125',
      quantity: '2',
      price: '$60',
      src:require('../../image/sunoil.png'),
    },
    {
      name: 'Cauliflower',
      weight: '1kg',
      rating: '5.0',
      review: '658',
      quantity: '4',
      price: '$60',
      src:require('../../image/cauliflowerfood.png'),
    },
    {
      name: 'Baguette bread',
      weight: '1kg',
      rating: '5.0',
      review: '658',
      quantity: '4',
      price: '$60',
      src:require('../../image/bread1.png'),
    },
  ];

  const itemView = ({item}) => {
    return (
      
        <TouchableOpacity>
        <View
          style={{
            height: 95,
            backgroundColor: 'white',
            margin: 10,
            flexDirection: 'row',
            
          }}>
          <View
            style={{
              height: 95,
              width: 95,
              backgroundColor: '#deffe4',
            }}>
               <Image style={styles.image} source={item.src} />
            </View>
          <View>
            <Text style={{margin: 10, fontSize: 18,fontFamily:'Poppins-SemiBold',color:'#282e6c',marginBottom:1}}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginLeft: 10, fontSize: 12,fontFamily:'poppins-SemiBold',color:'#282e6c'}}>{item.weight}</Text>
              <Image style={styles.star} source={require('../../image/star.png')} />
              <Text style={{marginLeft: 5, fontSize: 12,fontFamily:'Poppins-Medium',color:'#282e6c'}}>{item.rating}</Text>
              <Text style={{ fontSize: 12,fontFamily:'Poppins-Medium',color:'#282e6c'}}>
                ({item.review} Review)
              </Text>
            </View>
            <Text style={{marginLeft: 10,marginTop:3, fontSize: 12,fontFamily:'Poppins-Medium',}}>
              {item.quantity} x {item.price}
            </Text>
          </View>
        </View>
        </TouchableOpacity>
     
    );
  };

  return (
    <View>
      <Statusbar />
      <View style={styles.cointiner}>
        <TouchableOpacity>
          <Image
            style={styles.backarrow}
            source={require('../../image/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.checkout}>Checkout</Text>
      </View>
<ScrollView>
      <FlatList data={Data} renderItem={itemView} />
      </ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          height: '50%',
          marginTop: 30,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopColor: 'black',
        }}>
        <View style={{flexDirection: 'row', margin:20 }}>
          <Text style={{fontFamily:'Poppins-Regular',color:'#282e6c'}}>Sub Total</Text>
          <Text style={{marginLeft: 80}}>:</Text>
          <Text style={{marginLeft: '45%',color:'#282e6c'}}>$88.10</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 20,fontFamily:'Poppins-Regular',color:'#282e6c'}}>Shipping Fee</Text>
          <Text style={{marginLeft: 60}}>:</Text>
          <Text style={{marginLeft: '40%',color:'#282e6c'}}>$00.00</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 20}}>
          <Text style={{fontFamily:'Poppins-Regular',color:'#282e6c'}}>Estimating Tax</Text>
          <Text style={{marginLeft: 54}}>:</Text>
          <Text style={{marginLeft: '44%',color:'#282e6c'}}>$88.10</Text>
        </View>
        <View
          style={{
            height: 0.5,
            width: '90%',
            backgroundColor: 'black',
            alignSelf: 'center',
          }}></View>
        <View style={{flexDirection: 'row', margin: 10, marginLeft: 20}}>
          <Text style={{fontWeight: 'bold',fontFamily:'Poppins-Regular'}}>Total</Text>
          <Text style={{marginLeft: 105, fontWeight: 'bold'}}>:</Text>
          <Text style={{marginLeft: '45%', fontWeight: 'bold'}}>$80.10</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            width: '50%',
            borderRadius: 5,
            backgroundColor: '#41aa55',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#ffffff',
              padding: 10,
              fontSize: 18,
              fontFamily:'Poppins-Regular',
              color:'#282e6c'
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
    
  );
};
const styles = StyleSheet.create({
  cointiner: {
    marginTop: 15,
    flexDirection: 'row',
    marginBottom:20
  },
  backarrow: {
    height: 13,
    width: 13,
    marginLeft: 10,
    marginTop: 4,
  },
  checkout: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    fontFamily:'Poppins-Regular',
    color:'#282e6c'
  },
  star: {
    height: 10,
    width: 10,
    marginTop: 2,
    marginLeft: 10,
  },
  image:{
    marginTop:8,
    height:80,
    width:80,
    alignSelf:'center'
  },
  card:{
    backgroundColor: 'white',
    height: '35%',
    marginTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopColor: 'black',
    
  }
});
export default Checkout;
