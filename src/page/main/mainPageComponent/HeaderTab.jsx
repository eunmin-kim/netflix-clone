import SafeAreaView from 'react-native-safe-area-context';
import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
const HeaderTab = () => {
    return(
        <SafeAreaView>
            <View style={styles.logo}>
                <Image
                    source={require('../../../../assets/images/netflix-logo-full.png')}/>
                <Text>Series</Text>
                <Text>Films</Text>
                <Text>My List</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo: {
        alignItems:'row',
        padding:20,
        width: 100,
        height: 30,
    }
});
export default HeaderTab;