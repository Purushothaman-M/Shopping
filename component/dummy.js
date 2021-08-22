import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,FlatList} from 'react-native';

 const Dummy =()=>{
     return(
        
      <Image
      style={styles.cointiner}
      source={{
        uri: 'https://th.bing.com/th/id/OIP.v1Z57qFPDxKYFoFHGZIvyQHaC7?w=284&h=138&c=7&o=5&pid=1.7'
      }}
    />
        
     )
 }
 const styles = StyleSheet.create({
    cointiner: {
      height: 200,
      backgroundColor: '#41aa55',
      borderRadius: 10,
      margin:15,
    },
 })
 export default Dummy;