import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Categorys from './categorys';
import Banners from './banners';
import Homescreen from './screens/Homescreen';
import Dummy from './dummy';
import Deals from './deals';
import Checkout from './screens/checkout';

const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
    
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: [
          {
            backgroundColor: 'white',
            paddingBottom: 20,
            height: 70,
            position: 'relative',
          },
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                // centring Tab Button...
                position: 'absolute',
                top: 15,
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  marginBottom: 2,
                }}
                source={require('../image/home.png')}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Order"
        component={Checkout}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                // centring Tab Button...
                position: 'absolute',
                top: 15,
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  marginBottom: 2,
                }}
                source={require('../image/clipboard.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="shop"
        component={Banners}
        options={{
          headerShown: false,
          
          tabBarIcon: ({}) => (
            <TouchableOpacity >
              <View
                style={{
                  width: 55,
                  height: 55,
                  backgroundColor: '#41aa55',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <Image
                  style={{height: 20, width: 20, tintColor: '#ffffff'}}
                  source={require('../image/basket.png')}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Dummy}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
      
                position: 'absolute',
                top: 15,
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  marginBottom: 2,
                }}
                source={require('../image/heart.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Deals}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                // centring Tab Button...
                position: 'absolute',
                top: 15,
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  marginBottom: 2,
                }}
                source={require('../image/user.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
   
  );
};

export default Tabs;
