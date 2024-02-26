import React, {useState} from 'react';
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

const MIN_LENGTH = 8;
const MAX_LENGTH = 12;
const WHITE = 'white';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validateInput = (input, name) => {
        if (input.length < MIN_LENGTH || input.length > MAX_LENGTH) {
            Alert.alert(`${name}은 ${MIN_LENGTH}~${MAX_LENGTH} 글자여야 합니다.`);
            return false;
        }
        return true;
    };

    const handleLogin = () => {
        if (!validateInput(username, '아이디') || !validateInput(password, '비밀번호')) return;
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <Image source={logo}/>
            <TextInput
                style={[styles.input, {color: WHITE}]}
                placeholder="아이디"
                placeholderTextColor={WHITE}
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={[styles.input, {color: WHITE}]}
                placeholder="비밀번호"
                placeholderTextColor={WHITE}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            }} activeOpacity={0.7}>
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
        color: WHITE,
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

