//Flight search results screen

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const searchResults = [
  {
    id: '1',
    airline: 'Air India',
    flightNumber: 'AI-123',
    departure: 'Delhi',
    arrival: 'Mumbai',
    departureTime: '12:00',
    arrivalTime: '15:00',
    price: 'Rs. 1000',
    image:
      'https://www.airindia.in/sites/default/files/styles/airline_logo_style/public/airline_logo/air-india-logo.png?itok=QZ-_jZ-_',
  },
  {
    id: '2',
    airline: 'IndiGo',
    flightNumber: 'IG-123',
    departure: 'Delhi',
    arrival: 'Mumbai',
    departureTime: '12:00',
    arrivalTime: '15:00',
    price: 'Rs. 1000',
    image:
      'https://www.airindia.in/sites/default/files/styles/airline_logo_style/public/airline_logo/air-india-logo.png?itok=QZ-_jZ-_',
  },
  {
    id: '3',
    airline: 'Air India',
    flightNumber: 'AI-123',
    departure: 'Delhi',
    arrival: 'Mumbai',
    departureTime: '12:00',
    arrivalTime: '15:00',
    price: 'Rs. 1000',
    image:
      'https://www.airindia.in/sites/default/files/styles/airline_logo_style/public/airline_logo/air-india-logo.png?itok=QZ-_jZ-_',
  },
  {
    id: '4',
    airline: 'IndiGo',
    flightNumber: 'IG-123',
    departure: 'Delhi',
    arrival: 'Mumbai',
    departureTime: '12:00',
    arrivalTime: '15:00',
    price: 'Rs. 1000',
    image:
      'https://www.airindia.in/sites/default/files/styles/airline_logo_style/public/airline_logo/air-india-logo.png?itok=QZ-_jZ-_',
  },
];

const searchView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Flight Results</Text>
      </View>
      <View style={styles.searchResults}>
        <FlatList
          data={searchResults}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('FlightDetails');
                }}>
                <View style={styles.flightResult}>
                  <View style={styles.flightImage}>
                    <Image
                      source={{uri: item.image}}
                      style={{width: 100, height: 50}}
                    />
                  </View>
                  <View style={styles.flightDetails}>
                    <View style={styles.flightAirline}>
                      <Text style={styles.flightAirlineText}>
                        {item.airline}
                      </Text>
                    </View>
                    <View style={styles.flightNumber}>
                      <Text style={styles.flightNumberText}>
                        {item.flightNumber}
                      </Text>
                    </View>
                    <View style={styles.flightTime}>
                      <Text style={styles.flightTimeText}>
                        {item.departure}
                      </Text>
                      <Text style={styles.flightTimeText}>
                        {item.departureTime}
                      </Text>
                    </View>
                    <View style={styles.flightTime}>
                      <Text style={styles.flightTimeText}>{item.arrival}</Text>
                      <Text style={styles.flightTimeText}>
                        {item.arrivalTime}
                      </Text>
                    </View>
                    <View style={styles.flightPrice}>
                      <Text style={styles.flightPriceText}>{item.price}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
  },
  searchResults: {
    flex: 1,
  },
  flightResult: {
    flexDirection: 'row',
    padding: 10,
  },
  flightImage: {
    flex: 1,
  },
  flightDetails: {
    flex: 3,
    paddingLeft: 5,
  },
  flightAirline: {
    flex: 1,
  },
  flightAirlineText: {
    fontSize: 20,
  },
  flightNumber: {
    flex: 1,
  },
  flightNumberText: {
    fontSize: 16,
  },
  flightTime: {
    flex: 1,
  },
  flightTimeText: {
    fontSize: 14,
  },
  flightPrice: {
    flex: 1,
  },
  flightPriceText: {
    fontSize: 18,
  },
});

export default searchView;
