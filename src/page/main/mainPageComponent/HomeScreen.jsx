import * as React from 'react';
import {StyleSheet, ImageBackground,Image, View, TouchableOpacity} from "react-native";
import CircleImageSlider from "./Circle";
import NetflixButtons from "./NetflixButtons";
const HomeScreen = () => {
    return (
        <View style={styles.headerContainer}>
            <ImageBackground
                source={require('../../../../assets/images/content/peaky-blinders.jpg')}
            />
            <NetflixButtons />
            <View style={styles.centerContainer}>
                <Text>Previews</Text>
                <CircleImageSlider />
                <Text>Movie</Text>
                <Image
                    source={require('../../../../assets/images/content/circle_american-gangster.png')}/>
                <Image
                    source={require('../../../../assets/images/content/circle_black-panther.png')} />
                <Image
                    source={require('../../../../assets/images/content/circle_breaking-bad.png')} />
                <Image
                    source={require('../../../../assets/images/content/circle_guardians-vol2.png')} />
                <Image
                    source={require('../../../../assets/images/content/circle_the-dark-knight.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerContainer: {
        flex:1,
        flexDirection: "row",
        alignItems: 'center',
        padding: 10,
    },
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

export default HomeScreen;