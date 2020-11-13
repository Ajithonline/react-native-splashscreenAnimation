/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

const App: () => React$Node = () => {
  const logoAnim = useRef(new Animated.Value(0)).current;
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(logoAnim, {
      duration: 3000,
      toValue: 1,
      delay: 2500,
      useNativeDriver: true,
    }).start();
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.1,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2500,
      useNativeDriver: true,
    }).start();
  }, [logoAnim, moveAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.Image
          style={{width: 100, height: 100, opacity: logoAnim}}
          source={require('./assets/images/logo.png')}
        />
        <Animated.View style={{flexDirection: 'row', marginLeft: moveAnim}}>
          <Animated.Text style={[styles.logoText]}>D</Animated.Text>
          <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
            evscamp
          </Animated.Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default App;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#52b372',
  },
  logoText: {
    fontSize: 35,
    marginTop: 20,
    color: 'white',
    fontWeight: '700',
  },
  contentContainer: {
    top: '40%',
    alignItems: 'center',
  },
});
