import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';  
import HomeScreen from '../screens/HomeScreen';     
import SeatReservationScreen from '../screens/SeatReservationScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name='SeatReservation' component={SeatReservationScreen} options={{title: '좌석 예약 & 취소'}}/>
    </Stack.Navigator>
  );
}
