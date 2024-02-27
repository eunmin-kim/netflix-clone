import {StyleSheet, View, Text, Image, Button} from "react-native";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const HomeScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>
        </View>
    );
}

const SearchScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Search</Text>
        </View>
    );
}

const DownloadScreen = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Download</Text>
        </View>
    );
}

const MoreScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>More</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();



function MainPage() {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Image
                    source={require('../../../assets/images/netflix-logo-full.png')}
                    style={styles.logo}
                />
            </View>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Search" component={SearchScreen} />
                    <Tab.Screen name="Download" component={DownloadScreen} />
                    <Tab.Screen name="More" component={MoreScreen} />
                </Tab.Navigator>
            </NavigationContainer>
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
    logo: {
        width: 100,
        height: 30,
    }
});

export default MainPage;
