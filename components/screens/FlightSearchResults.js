//Components to show flight search results
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const FlightSearchResults = [
  {
    id: '1',
    Airline: 'Air India',
    FlightNo: 'AI-1234',
    Departure: 'Bangalore',
    DepartureTime: '12:00',
    Arrival: 'Hyderabad',
    ArrivalTime: '13:00',
    Fare: 'Rs. 1000',
    Image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: '2',
    Airline: 'Air India',
    FlightNo: 'AI-1235',
    Departure: 'Mumbai',
    DepartureTime: '12:00',
    Arrival: 'Delhi',
    ArrivalTime: '13:00',
    Fare: 'Rs. 1000',
    Image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: '3',
    Airline: 'Air India',
    FlightNo: 'AI-1236',
    Departure: 'Chennai',
    DepartureTime: '12:00',
    Arrival: 'Kolkata',
    ArrivalTime: '13:00',
    Fare: 'Rs. 1000',
  },
];

const FlightSearchResultsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={FlightSearchResults}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.flightItem}>
              <View style={styles.flightItemHeader}>
                <View style={styles.airlineImage}>
                  <Image
                    source={{uri: item.Image}}
                    style={styles.airlineImage}
                  />
                </View>
                <View style={styles.flightDetails}>
                  <Text style={styles.flightNo}>{item.FlightNo}</Text>
                  <Text style={styles.airline}>{item.Airline}</Text>
                  <Text style={styles.departure}>{item.Departure}</Text>
                  <Text style={styles.departureTime}>{item.DepartureTime}</Text>
                  <Text style={styles.arrival}>{item.Arrival}</Text>
                  <Text style={styles.arrivalTime}>{item.ArrivalTime}</Text>
                </View>
              </View>
              <View style={styles.fare}>
                <Text style={styles.fareText}>{item.Fare}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flightItem: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#fff',
  },
  flightItemHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  airlineImage: {
    width: 50,
    height: 50,
  },
  flightDetails: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  flightNo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  airline: {
    fontSize: 16,
  },
  departure: {
    fontSize: 14,
  },
  departureTime: {
    fontSize: 14,
    color: '#ccc',
  },
  arrival: {
    fontSize: 14,
  },
  arrivalTime: {
    fontSize: 14,
    color: '#ccc',
  },
  fare: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  fareText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00a65a',
  },
});

export default FlightSearchResultsScreen;
