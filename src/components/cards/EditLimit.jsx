import React, { useEffect, useState, memo ,useCallback} from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Slider from '@react-native-community/slider';

const EditLimit = (props) => {
  const { navigation, route } = props;
  const { arrayCat } = route.params;
  const [totalAmount, setTotalAmount] = useState(0);
  const [categories, setCategories] = useState(arrayCat);

  useEffect(() => {
    let amount = categories.reduce((total, item) => total + item.spendingLimit, 0)
    setTotalAmount(amount)
  }, [categories])

/* The `handleSliderChange` function is a callback function created using the `useCallback` hook in
React. This function is responsible for updating the `categories` state based on the slider value
and the index of the category being modified. */
  const handleSliderChange = useCallback((value, index) => {
    const updatedCategories = categories.map((cat, i) => 
      i === index ? { ...cat, amountSpentVal: value } : cat
    );
    setCategories(updatedCategories);
  },[categories]);

/**
 * The `headerCard` function returns a React component displaying a header with total spending limit
 * information.
 * @returns A headerCard component is being returned. It consists of a View component with styles
 * applied, containing a TouchableOpacity component with an onPress event that navigates to the "Card"
 * screen with parameters, an Icon component displaying a chevron-left icon, a Text component with the
 * text "Total Spending Limit", and another Text component displaying the totalAmount variable prefixed
 * with "AED".
 */
  const headerCard = () => {
    return (
      <View style={styles.headerCard}>
        <TouchableOpacity onPress={() => navigation.navigate("Card", {
          from: 'Edit',
          categories: categories
        })}>
          <Icon name="chevron-left" size={40} />
        </TouchableOpacity>
        <Text style={styles.head}>
          Total Spending Limit
        </Text>
        <Text style={styles.value}>
          AED {totalAmount}
        </Text>
      </View>
    )
  }
/* The `SliderComp` component is a memoized functional component created using the `memo` function from
React. It takes two props, `item` and `index`, and returns a `Slider` component with specific
configurations. Here's a breakdown of what the `SliderComp` component is doing: */

  const SliderComp = memo(({ item, index }) => {
    return (
      <Slider
        style={{ width: 'auto', height: 50 }}
        minimumValue={0}
        maximumValue={item.spendingLimit}
        minimumTrackTintColor={item.color}
        maximumTrackTintColor="#000000"
        thumbTintColor={item.color}
        value={item.amountSpentVal}
        step={10}
        onValueChange={(value) => handleSliderChange(value, index)}
      />
    )
  });
/* The `renderCard` function is a component that returns a card view for each item in the list of
categories. Here's a breakdown of what the `renderCard` function is doing: */

  const renderCard = ({ item, index }) => {
    return (
      <View style={styles.card}>
        <View style={styles.iconView}>
          <View style={styles.rowView}>
            <Image source={item.icon} style={styles.img} />
            <Text style={styles.category}>{item.category}</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.category}>AED {item.spendingLimit}</Text>
            <Icon name="edit-3" size={23} color="#1D1D2C" />
          </View>
        </View>
        <View>
          <SliderComp item={item} index={index} />
        </View>
      </View>
    )
  };
/**
 * The `showList` function returns a component that displays a list of categories using a FlatList
 * component in React.
 * @returns A `View` component containing a `FlatList` component is being returned. The `FlatList`
 * component is rendering items from the `categories` data array using the `renderCard` function as the
 * renderItem prop. Each item in the list is assigned a unique key using the `keyExtractor` prop.
 */

  const showList = () => {
    return (
      <View style={styles.list}>
        <FlatList
          data={categories}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }

  return (
    <>
      {headerCard()}
      {showList()}
    </>
  )
}

export default EditLimit

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    marginHorizontal: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    height: 'auto'
  },
  list: {
    marginVertical: 20,
    flex: 1
  },
  headerCard: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    height: 'auto',
  },
  img: {
    height: 24,
    width: 24
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowView: {
    flexDirection: 'row'
  },
  value: {
    color: '#1D1D2C',
    fontSize: 28,
    fontWeight: '500',
    fontFamily: 'SpaceGrotesk-SemiBold',
    marginHorizontal: 20
  },
  head: {
    fontFamily: 'SpaceGrotesk-SemiBold',
    color: '#1D1D2C',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 25,
    marginHorizontal: 20
  },
  category: {
    color: '#1D1D2C',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'SpaceGrotesk-SemiBold',
    marginHorizontal: 4
  }
})
