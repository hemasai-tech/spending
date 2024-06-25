import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CircularProgress } from 'react-native-circular-progress';

const Card = () => {
  const [fillValue, setFillValue] = useState(50);
  const [progressColor, setProgressColor] = useState('#35C937');
  const [spendingLimit, setSpendingLimit] = useState(4567.78);
  const [amountSpentVal, setAmountSpentVal] = useState(898.90);
  const [selectedId, setSelectedId] = useState(null);
  const [titleSelcted, setTitleSelected] = useState("Total Spendings");

  const categoriesArr = [
    {
      id: 0,
      category: "Clothing",
      icon: require('../../../images/TShirt.png'),
      amountSpent: 30,
      spendingLimit: 250,
      amountSpentVal: 100,
      color: '#DABB4F',
    },
    {
      id: 1,
      category: "Beauty",
      icon: require('../../../images/mirror.png'),
      amountSpent: 40,
      spendingLimit: 300,
      amountSpentVal: 140,
      color: '#5281AC',
    },
    {
      id: 2,
      category: "Health & Fitness",
      icon: require('../../../images/health.png'),
      amountSpent: 20,
      spendingLimit: 450,
      amountSpentVal: 80,
      color: '#EE9E38',
    },
    {
      id: 3,
      category: "Food",
      icon: require('../../../images/food.png'),
      amountSpent: 60,
      spendingLimit: 200,
      amountSpentVal: 100,
      color: '#5281AC',
    },
    {
      id: 4,
      category: "Housing",
      icon: require('../../../images/House.png'),
      amountSpent: 45,
      spendingLimit: 280,
      amountSpentVal: 130,
      color: '#DFA1A7',
    },
    {
      id: 5,
      category: "Beauty",
      icon: require('../../../images/beauty.png'),
      amountSpent: 70,
      spendingLimit: 500,
      amountSpentVal: 240,
      color: '#5ACCD1',
    },
  ];

  const header = () => {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt}>Spending Summary</Text>
        </View>
        <TouchableOpacity>
          <Text style={[styles.headerTxt, { textDecorationLine: 'underline' }]}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const cardHeader = () => {
    return (
      <View style={styles.cardHeader}>
        <TouchableOpacity style={styles.iconView}>
          <MaterialIcons name="chevron-left" size={34} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.date}>June 2024</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconView}>
          <MaterialIcons name="chevron-right" size={34} />
        </TouchableOpacity>
      </View>
    );
  };

  const progressBar = () => {
    return (
      <View style={styles.progressBar}>
        <CircularProgress
          size={300}
          width={15}
          fill={fillValue}
          tintColor={progressColor}
          arcSweepAngle={180}
          rotation={-90}
          backgroundColor="#F1F0F5"
          lineCap='round'
        >
          {
            (fill) => (
              <View style={styles.fillCard}>
                <Text style={styles.fillText}>
                  {fill} %
                </Text>
                <Text style={[styles.fillText, { fontSize: 18 }]}>
                  {titleSelcted}
                </Text>
              </View>
            )
          }
        </CircularProgress>
      </View>
    );
  };

  const limitValue = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.limit}>Spending limit</Text>
          <Text style={styles.limitTxt}>AED {spendingLimit}</Text>
        </View>
        <View>
          <Text style={styles.limit}>
            Amount spent
          </Text>
          <Text style={styles.limitTxt}>
            AED {amountSpentVal}
          </Text>
        </View>
      </View>
    );
  };

  const onCategoryClick = (item) => {
    if (selectedId === item.id) {
      setFillValue(50);
      setProgressColor('#35C937');
      setAmountSpentVal(898.90);
      setSpendingLimit(4567.78);
      setSelectedId(null);
      setTitleSelected("Total Spendings")
    } else {
      setFillValue(item.amountSpent);
      setProgressColor(item.color);
      setAmountSpentVal(item.amountSpentVal);
      setSpendingLimit(item.spendingLimit);
      setSelectedId(item.id);
      setTitleSelected(item.category)
    }
  };

  const renderCategoryIcons = ({ item }) => {
    return (
      <View style={styles.categoryView}>
        <CircularProgress
          size={60}
          width={3}
          fill={item.amountSpent}
          tintColor={selectedId === item.id ? '#fff' : item.color}
          rotation={-90}
          backgroundColor="#fff"
          lineCap='round'
        >
          {
            (fill) => (
              <>
                <TouchableOpacity style={{
                  backgroundColor: selectedId === item.id ? item.color : '#fff',
                  padding: 15,
                  borderRadius: 30
                }}
                  onPress={() => onCategoryClick(item)}
                >
                  <Image source={item.icon} style={[
                    styles.img,
                    { tintColor: selectedId === item.id ? '#fff' : item.color }
                  ]}
                  />
                </TouchableOpacity>
              </>
            )
          }
        </CircularProgress>
        <Text style={styles.categoryTxt}>{item.category}</Text>
      </View>
    );
  };

  const categoriesDisplay = () => {
    return (
      <View style={styles.list}>
        <FlatList
          numColumns={3}
          key={3}
          data={categoriesArr}
          renderItem={renderCategoryIcons}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  return (
    <View style={styles.card}>
      {header()}
      {cardHeader()}
      {progressBar()}
      {limitValue()}
      {categoriesDisplay()}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    height: 'auto'
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
    color: '#000',
    fontFamily: 'SpaceGrotesk-SemiBold'
  },
  fillText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk-SemiBold',
    color: '#000',
  },
  progressBar: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  fillCard: {
    alignItems: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  iconView: {
    backgroundColor: '#F1F0F5',
    borderRadius: 5
  },
  date: {
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '500'
  },
  img: {
    height: 30,
    width: 30
  },
  categoryView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  categoryTxt: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  list: {
    paddingVertical: 15
  },
  limit: {
    fontFamily: 'MontSerrat',
    fontSize: 14,
    letterSpacing: 1.3,
    fontWeight: '500',
    color: '#1D1D2C'
  },
  limitTxt: {
    fontFamily: 'MontSerrat',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#1D1D2C'
  },
});

export default Card;
