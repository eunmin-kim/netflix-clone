import {StyleSheet, View, Text, Image, Button} from "react-native";
import React from 'react';
import BottomTab from './mainPageComponent/BottomTab';
import HomeScreen from "./mainPageComponent/HomeScreen";
import HeaderTab from "./mainPageComponent/HeaderTab";


function MainPage() {
    return (
        <View>
            <View style={styles.headerContainer}>
                <HeaderTab />
            </View>
            <View>
                <HomeScreen />
            </View>
            <View>
                <BottomTab />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        paddingHorizontal: 10,
        backgroundColor: '#000',
    },

});

export default MainPage;
