import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Card from './cards/Card'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoadingIndicator from './LoadingIndicator'

const SpendingDashboard = (props) => {
  const { navigation } = props
  const [loader, setLoader] = useState(false);

  const onLogout = () => {
    setLoader(true);
    AsyncStorage.clear();
    setTimeout(() => {
      setLoader(false)
      navigation.navigate("Login");
    }, 10000)
  }
/**
 * The `header` function in JavaScript React renders a header component with a title "Spending
 * Dashboard" and a logout button.
 * @returns A header component is being returned. It consists of a View component with two child
 * components - a Text component displaying "Spending Dashboard" and a TouchableOpacity component with
 * a Text component displaying "Logout".
 */
  const header = () => {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt}>Spending Dashboard</Text>
        </View>
        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.headerTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <>
      {!loader ? <View style={styles.container}>
        {header()}
        <Card />
      </View>
        :
        <LoadingIndicator />
      }
    </>
  )
}

export default SpendingDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F0F5'
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
  },
  headerTxt: {
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
    fontFamily: 'SpaceGrotesk-Bold'
  }
})