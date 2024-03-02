import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NetflixButtons = () => {
    // 각 버튼의 onPress 핸들러는 예제 목적으로만 console.log를 사용합니다.
    const handlePlayPress = () => console.log('Play button pressed');
    const handleAddPress = () => console.log('Add button pressed');
    const handleInfoPress = () => console.log('Info button pressed');

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handlePlayPress}>
                <Icon name="play" size={20} color="#FFF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleAddPress}>
                <Icon name="plus" size={20} color="#FFF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleInfoPress}>
                <Icon name="info-circle" size={20} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'red', // 넷플릭스 테마 색상
        padding: 10,
        borderRadius: 5, // 약간의 둥근 모서리
        marginHorizontal: 5, // 버튼 사이의 간격
    },
});

export default NetflixButtons;
