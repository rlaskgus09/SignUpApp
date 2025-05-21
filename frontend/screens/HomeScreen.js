import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> 
        <Text style={styles.textMom}>맘</Text>
        <Text style={styles.textRest}>편한자리</Text>
      </Text> 
      
      <View style={styles.card}>
        <TouchableOpacity onPress={() => alert('임신확인서 보기')}>
          <Text style={styles.cardText}>📄 내 임신확인서 보기</Text>
        </TouchableOpacity>
      </View>  
      
      <View style={styles.infoContainer}>
        <Text style={styles.greeting}>안녕하세요, 000님!</Text>
        <Text style={styles.verification}>임산부 인증 완료✅</Text>
      </View>
    
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('실시간 좌석 조회')}>
          <Text style={styles.buttonText}>실시간{'\n'} 좌석 조회</Text>
          <Ionicons name="location-sharp" size={30} color="black" style={{marginBottom: 10}} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SeatReservation')} 
        >
          <Text style={styles.buttonText}>좌석{'\n'} 예약 & 취소</Text>
          <Ionicons name="search" size={30} color="black" style={{marginBottom: 10}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => alert('좌석 이용 내역')}>
          <Text style={styles.buttonText}>좌석 이용 내역</Text>
          <Ionicons name="menu" size={30} color="black" style={{marginBottom: 10}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => alert('내 정보 관리')}>
          <Text style={styles.buttonText}>내 정보 관리</Text>
          <Ionicons name="person-outline" size={30} color="black" style={{marginBottom: 10}} />
        </TouchableOpacity>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF7F3',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  icon:{
    marginTop: 10,
    alignItems: 'center',
  },
  title:{
    marginBottom: 60,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 60,
  },
  textMom: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#7D6073',
  },
  textRest: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#C599B6',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D1D1D1', 
    paddingVertical: 35,
    paddingHorizontal: 80,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    marginTop: -35,
  },
  cardText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  infoContainer:{
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  greeting:{
    fontSize:20,
    fontWeight:'500',
    color: '#333',
    marginBottom: 5,
  },
  verification:{
    fontSize: 18,
    color: '#4A4A4A',
  },
  gridContainer:{
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button:{
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    width: '45%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
});
