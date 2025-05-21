// 좌석 예약 & 취소 UI //

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SeatReservationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={styles.logoMom}>맘</Text>
        <Text style={styles.logoRest}>편한자리</Text>
      </Text>

    <View style={styles.titleWrapper}>
      <Text style={styles.title}>임산부 좌석 예약</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F3',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,

  },
  logoMom: {
    color: '#7D6073', // 맘 색상
  },
  logoRest: {
    color: '#C599B6', // 편한자리 색상
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  titleWrapper:{
   width: '100%',
   alignItems: 'flex-start',
   paddingHorizontal: 20,
   marginBottom: 20,
  },
});
