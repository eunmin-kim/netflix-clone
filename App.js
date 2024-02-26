import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/page/auth/LoginPage.jsx';

function App() {
  return (
      <View style={styles.container}>
        <Login />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
