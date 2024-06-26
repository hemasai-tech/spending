import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  )
}

export default LoadingIndicator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
})