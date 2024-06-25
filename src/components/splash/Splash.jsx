import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = (props) => {
  const { navigation } = props

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
    <View>
      <Text>Welcome!</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})