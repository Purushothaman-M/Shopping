import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Categorys = () => {
  return (
    <View>
      <View style={styles.cointiner}>
      <Image
        style={styles.style}
        source={{
          uri: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/e6xaox01plthmuitto0x',
        }}
      />
        <Image
        style={styles.style}
        source={{
          uri: 'https://greekreporter.com/wp-content/uploads/2014/08/Greek-Fruit.jpg',
        }}
      />
       <Image
        style={styles.style}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.811ssVdB3Ilk-h0Q5NQEIAHaD4?w=327&h=180&c=7&o=5&pid=1.7',
        }}
      />
        <Image
        style={styles.style}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.Q9UAfGyEY4jxti7iy_nHEQHaFb?w=232&h=180&c=7&o=5&pid=1.7',
        }}
      />
      </View>
      <View style={styles.subcointiner}>
        <Text style={styles.text} >Vegetable</Text>
        <Text style={styles.text2} >Fruits</Text>
        <Text style={styles.text} >Meat</Text>
        <Text style={styles.text} >Seafood</Text>
       
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cointiner: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent:'space-evenly'
  },
  subcointiner:{
    flexDirection: 'row',
justifyContent:'space-around'
  },
  style: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#41aa55',
    
    
  },
  text:{
     
      marginTop:15,
      fontFamily:'Poppins-SemiBold',
      color:'#282e6c'

  },
  text2:{
    marginTop:15,
    right:10,
    fontFamily:'Poppins-SemiBold',
    color:'#282e6c'

},

});
export default Categorys;
