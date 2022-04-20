import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Image
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ alignItems: "center", marginTop: 30}}>
        <Image style={{ width: 250, height: 60}} source={{ uri: "https://devblogs.microsoft.com/xamarin/wp-content/uploads/sites/44/2019/10/AppCenter_Logo.png"}} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Text style={{ fontSize: 18, fontWeight: "bold"}}>App Center Version : 1.0 (1)</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
