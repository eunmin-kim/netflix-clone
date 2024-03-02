import React from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';

const images = [
    '../../../assets/images/content/circle_american-gangster.png',
    '../../../assets/images/content/circle_black-panther.png',
    '../../../assets/images/content/circle_breaking-bad.png',
    '../../../assets/images/content/circle_guardians-vol2.png',
    '../../../assets/images/content/circle_star-wars-the-last-jedi.png',
    '../../../assets/images/content/circle_the-dark-knight.png',
];

const windowWidth = Dimensions.get('window').width;

const CircleImageSlider = () => {
    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewStyle}
        >
            {images.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewStyle: {
        flexGrow: 0, // ScrollView가 자식 요소들의 크기에 맞게 성장하지 않도록 설정
    },
    imageContainer: {
        width: windowWidth, // 화면 너비에 맞춤
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250, // 이미지 크기 조정
        height: 250, // 이미지 크기 조정
        borderRadius: 125, // 이미지를 원형으로 만듦
        marginHorizontal: 10, // 이미지 사이의 가로 간격
    },
});

export default CircleImageSlider;