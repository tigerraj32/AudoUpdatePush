/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,  {useEffect}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CodePushWrapper from './codepush';

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <Text> Rajan Twanabashu</Text>
        <Text> Zakipoint Health</Text>
        <Text> We are making great product</Text>
        
        
      </View>
    </>
  );
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
});

export default CodePushWrapper(App)