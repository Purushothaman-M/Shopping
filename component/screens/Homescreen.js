import React, {useState, useEffect} from 'react';
import Statusbar from '../style/statusbar';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import Banners from '../banners';
import Categorys from '../categorys';
import Deals from '../deals';
import Dummy from '../dummy';


const Homescreen = () => {
  return (
    
    <View style={{flex:1}}>
      <Statusbar />
      
      <ScrollView>
      <View style={styles.cointiner}>
        <Image
          style={styles.location}
          source={require('../../image/placeholder.png')}
        />
        <Text style={styles.locationtext}>Current Location</Text>
        <Image style={styles.drop} source={require('../../image/dropdown.png')} />
        <Image style={styles.bell} source={require('../../image/alarm.png')} />
      </View>
      <Text style={styles.city}>Dhaka,Uttara</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.menustyle}>
          <Image style={styles.menu} source={require('../../image/menu.png')} />
        </View>
        <TextInput
          style={styles.searchbar}
          placeholder="search for product"></TextInput>
           <View style={styles.menustyle}>
          <Image style={styles.menu} source={require('../../image/settings.png')} />
        </View>
      </View>
      <Image style={styles.search} source={require('../../image/loupe.png')} />
      
      <Banners/>
      <Categorys/>
<Deals/>
<Dummy/>
<Deals/>
</ScrollView>

    </View>
   
  );
};
const styles = StyleSheet.create({
  cointiner: {
    marginTop: 15,
    marginLeft: 15,
    flexDirection: 'row',
  },
  location: {
    height: 20,
    width: 20,
  },
  locationtext: {
    marginLeft: 2,
    fontFamily:'Poppins-Medium',
    color:'#282e6c'
  },
  drop: {
    height: 10,
    width: 10,
    marginLeft: 5,
    marginTop: 4,
  },
  bell: {
    height: 20,
    width: 20,
    marginLeft: '54%',
  },
  city: {
    marginLeft: 38,
    fontFamily:'Poppins-Regular',
    color:'#282e6c'
  },
  menustyle: {
    height: 40,
    width: 40,
    backgroundColor: '#ffffff',
    marginTop: 25,
    marginLeft: 15,
    padding: 5,
  
    borderRadius:5
  },
  menu: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    
  },
  searchbar: {
    height: 40,
    width: '65%',
    backgroundColor: '#ffffff',
    marginTop: 25,
    marginLeft: 15,
    borderWidth: 0.2,
    paddingLeft: 40,
    borderRadius:3
  },
  search: {
    height: 20,
    width: 20,
    marginLeft: 80,
    bottom: 30,
  },
});
export default Homescreen;
