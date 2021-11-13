import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import SearchHeader from './components/screens/search';
import SearchView from './components/screens/FlightResults';
import FlightSearchResultsScreen from './components/screens/FlightSearchResults';

const App = () => {
  const [search, setSearch] = React.useState(false);

  return (
    <View style={styles.container}>
      <SearchHeader />
      <View style={styles.buttonContainer}>
        <Button
          title="Search Flights"
          style={styles.SearchButton}
          onPress={() => {
            setSearch(true);
          }}
        />
      </View>
      {search ? <SearchView /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '40%',
    alignSelf: 'center',
  },
  SearchButton: {
    backgroundColor: '#008080',
    color: 'white',
    fontSize: 20,
    padding: 10,
    borderRadius: 15,
  },
});

export default App;
