import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = (props) => {
  const { navigation } = props
  
/**
 * The function `checkEmailLogin` checks if a user is logged in based on their email and navigates to
 * the SpendingDashboard or Login screen accordingly.
 */

  const checkEmailLogin = async () => {
    let loggedIn = await AsyncStorage.getItem('userEmail')
    if (!!loggedIn) {
      navigation.navigate("SpendingDashboard")
    } else {
      navigation.navigate("Login")
    }
  }

  useEffect(() => {
    checkEmailLogin()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  welcome:{
    fontWeight:'condensed',
    fontSize:40,
    textAlign:'center',
    fontFamily:'SpaceGrotesk-SemiBold'
  }
})