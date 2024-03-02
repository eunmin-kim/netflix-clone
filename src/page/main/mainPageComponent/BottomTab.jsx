import {View, Text} from "react-native";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
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

const BottomTab = () => {
    return (
        <View>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = 'home';
                            } else if (route.name === 'Search') {
                                iconName = 'search';
                            } else if (route.name === 'Download') {
                                iconName = 'download';
                            } else if (route.name === 'More') {
                                iconName = 'ellipsis-h';
                            }

                            // 다른 아이콘들도 여기에 추가할 수 있습니다.
                            return <Icon name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Search" component={SearchScreen} />
                    <Tab.Screen name="Download" component={DownloadScreen} />
                    <Tab.Screen name="More" component={MoreScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default BottomTab;