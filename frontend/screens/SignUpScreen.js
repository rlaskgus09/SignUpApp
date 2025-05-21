import { Alert } from 'react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleEmailCheck = () => {
    alert('이메일 중복 확인');
  };

  const handleSendVerification = () => {
    alert('인증번호 전송');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF7F3'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>회원가입</Text>

        {/* 이름 입력 */}
        <TextInput
          style={styles.input}
          placeholder="이름"
          placeholderTextColor="#D3AEAE"
          value={name}
          onChangeText={setName}
        />

        {/* 이메일 입력 + 중복 확인 */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.emailInput}
            placeholder="이메일"
            placeholderTextColor="#D3AEAE"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View style={styles.emailButton}>
            <TouchableOpacity style={styles.roundButton} onPress={handleEmailCheck}>
              <Text style={styles.buttonText}>중복 확인</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 비밀번호 입력 */}
        <TextInput
          style={[styles.input, {color: '#D3AEAE'}]}
          placeholder="비밀번호"
          placeholderTextColor="#D3AEAE"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* 비밀번호 확인 */}
        <TextInput
          style={styles.input}
          placeholder="비밀번호 확인"
          placeholderTextColor="#D3AEAE"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* 비밀번호 안내 문구 */}
        <Text style={styles.helperText}>
          사용하실 비밀번호를 한 번 더 입력해 주세요.
        </Text>

        {/* 휴대폰 번호 입력 + 인증 요청 */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.phoneInput}
            placeholder="휴대폰 번호"
            placeholderTextColor="#D3AEAE"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <View style={styles.phoneButton}>
            <TouchableOpacity style={styles.roundButton} onPress={handleSendVerification}>
              <Text style={styles.buttonText}>인증 요청</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 인증번호 입력 */}
        <TextInput
          style={styles.input}
          placeholder="인증번호 입력"
          placeholderTextColor="#D3AEAE"
          value={verificationCode}
          onChangeText={setVerificationCode}
          keyboardType="number-pad"
        />

        {/* 회원가입하기 버튼 */}
        <TouchableOpacity style={styles.submitButton} onPress={() => {
          Alert.alert('회원가입이 완료되었습니다.');
          navigation.navigate('Home');
         console.log('회원가입하기 클릭');
        navigation.navigate('Home');
        }}>
        <Text style={styles.submitButtonText}>회원가입하기</Text>
        </TouchableOpacity>
      </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  emailInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingRight: 100,
  },
  emailButton: {
    position: 'absolute',
    right: 5,
    top: 2,
    bottom: 2,
    justifyContent: 'center',
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 15,
  },

  helperText:{
    fontSize: 12,
    marginTop: -10,
    marginBottom: 15,
    marginLeft: 4,

  },

  phoneInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingRight: 100,
  },

  phoneButton: {
    position: 'absolute',
    right: 5,
    top: 2,
    bottom: 2,
    justifyContent: 'center',
  },

  roundButton: {
    backgroundColor: '#E6B2BA',
    paddingVertical: 10,
    paddingHorizontal: 10,  
    borderRadius: 25,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,  
    fontWeight: 'bold',
  },

  submitButton: {
    backgroundColor: '#E6B2BA',
    paddingVertical: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  
  submitButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  }, 
});
