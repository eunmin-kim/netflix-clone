import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    Alert
} from 'react-native';

import logo from '../assets/icon.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(username.length < 8 || username.length > 12) {
            Alert.alert('아이디는 8~12 글자여야 합니다.');
            return;
        }
        if(password.length < 8 || password.length > 12) {
            Alert.alert('비밀번호는 8~12글자여야 합니다.');
            return;
        }

        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <Image source={logo}/>
            <TextInput
                style={[styles.input, { color: 'white' }]}
                placeholder="아이디"
                placeholderTextColor="white"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={[styles.input, { color: 'white' }]}
                placeholder="비밀번호"
                placeholderTextColor="white"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
                <Text style={styles.adminText}>회원이 아니신가요?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    input: {
        width: 375,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingRadius: 25,
        paddingLeft: 20,
        marginBottom: 20,
    },
    button: {
        width: 375,
        height: 40,
        backgroundColor: '#e50914',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    adminText: {
        fontSize: 16,
        color: '#ccc',
        fontFamily: 'Arial',
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
    },
});

export default Login;

