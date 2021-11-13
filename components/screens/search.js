import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import Picker from './dateInput';
import Counter from './passengerCounter';
import searchView from './FlightResults';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SearchHeader = () => {
  const [showDate, setshowDate] = useState(false);
  const [SelectedDate, setDate] = useState(new Date());

  const [showDate2, setshowDate2] = useState(false);
  const [SelectedDate2, setDate2] = useState(new Date());
  const dateHandler = () => {
    setshowDate(true);
  };
  const dateHandler2 = () => {
    setshowDate2(true);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.headerContainer}>
        <Text style={styles.header}>Flight Booking</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity style={styles.tripOptions}>
          <Text>One Way</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tripOptions}>
          <Text>Round Trip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="From"></TextInput>
        <TextInput style={styles.input} placeholder="To"></TextInput>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.dateOptions} onPress={dateHandler}>
          <Text>Start Date </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateOptions} onPress={dateHandler2}>
          <Text>Return Date</Text>
        </TouchableOpacity>
      </View>
      <Picker
        showingDate={showDate}
        setshowingDate={setshowDate}
        current={SelectedDate}
        selected={SelectedDate}
        mode="time"
        minuteInterval={30}
        style={{borderRadius: 10}}
        onSelectedChange={date => setDate(date)}
      />
      <Picker
        showingDate={showDate2}
        setshowingDate={setshowDate2}
        current={SelectedDate2}
        selected={SelectedDate2}
        mode="time"
        minuteInterval={30}
        style={{borderRadius: 10}}
        onSelectedChange={date => setDate2(date)}
      />
      <Counter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenView: {
    height: 100,
    width: 100,
  },
  headerContainer: {
    alignItems: 'center',
    padding: 2,
    borderBottomWidth: 1,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
    padding: 1,
  },
  container: {
    display: 'flex',
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 'auto',
  },
  container2: {
    padding: 2,
    flexDirection: 'row',
  },
  tripOptions: {
    borderWidth: 2,
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingTop: 5,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
  },
  input: {
    flex: 2,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  dateOptions: {
    flex: 2,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  SearchButton: {
    margin: 10,
    borderRadius: 10,
    width: 50,
    paddingHorizontal: 50,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
  },
});
export default SearchHeader;
