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
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Ffront-view-exactly-of-a-widebody-aircraft-sunset-at-the-airport-picture-id1270650301%3Fb%3D1%26k%3D20%26m%3D1270650301%26s%3D170667a%26w%3D0%26h%3DffzNiuHPSd9RZC1dOv_o3VOF3JXkrjq5orJgQhysSNI%3D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Faeroplane&tbnid=nzgWHAuNxMNHaM&vet=12ahUKEwiFter7lJX0AhWzKbcAHWC-DK4QMygGegUIARDpAQ..i&docid=zUO50cMzwM52bM&w=509&h=339&q=aeroplane&ved=2ahUKEwiFter7lJX0AhWzKbcAHWC-DK4QMygGegUIARDpAQ',
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

const SearchView = () => {
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
              <View style={styles.flightResult}>
                <View style={styles.flightImage}>
                  <Image
                    source={{
                      uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Ffront-view-exactly-of-a-widebody-aircraft-sunset-at-the-airport-picture-id1270650301%3Fb%3D1%26k%3D20%26m%3D1270650301%26s%3D170667a%26w%3D0%26h%3DffzNiuHPSd9RZC1dOv_o3VOF3JXkrjq5orJgQhysSNI%3D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Faeroplane&tbnid=nzgWHAuNxMNHaM&vet=12ahUKEwiFter7lJX0AhWzKbcAHWC-DK4QMygGegUIARDpAQ..i&docid=zUO50cMzwM52bM&w=509&h=339&q=aeroplane&ved=2ahUKEwiFter7lJX0AhWzKbcAHWC-DK4QMygGegUIARDpAQ',
                    }}
                    style={{width: 100, height: 40}}
                  />
                </View>
                <View style={styles.flightDetails}>
                  <View style={styles.flightAirline}>
                    <Text style={styles.flightAirlineText}>{item.airline}</Text>
                  </View>
                  <View style={styles.flightNumber}>
                    <Text style={styles.flightNumberText}>
                      {item.flightNumber}
                    </Text>
                  </View>
                  <View style={styles.flightTime}>
                    <Text style={styles.flightTimeText}>{item.departure}</Text>
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
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
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
    flex: 1,
    color: '#fff',
    flexDirection: 'row',
    padding: 10,
  },
  flightImage: {},
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

export default SearchView;
