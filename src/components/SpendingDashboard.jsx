import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Card from './cards/Card'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SpendingDashboard = (props) => {
  const { navigation } = props

  const onLogout = () => {
    AsyncStorage.clear();
    navigation.navigate("Login");
  }
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
    <View style={styles.container}>
      {header()}
      <Card />
    </View>
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