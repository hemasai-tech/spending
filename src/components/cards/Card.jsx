import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const Card = () => {

  const header = () => {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt}>Spending Summary</Text>
        </View>
        <TouchableOpacity>
          <Text style={[styles.headerTxt,{textDecorationLine:'underline'}]}>Edit</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.card}>
      {header()}
      <Text style={styles.content}>This is some sample content inside the card. You can add more components here as needed.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    fontSize: 14,
    color: '#444',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTxt: {
    fontWeight: '500',
    fontSize: 16,
    color:'#000',
    fontFamily:'Space Grotesk'
  }
});

export default Card;
