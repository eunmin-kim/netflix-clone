import {View,Text, Image, Button} from "react-native";
import React from 'react';
import { NavigationContainer } from '@react-navigation';
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
            <View>

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

export default MainPage;
