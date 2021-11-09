import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count <= 0) {
      setCount(0);
    } else setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Button onPress={decrement} title="-" />
      <Text>Passengers : {count}</Text>
      <Button
        style={styles.counterButton}
        onPress={() => setCount(count + 1)}
        title="+"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
  counterButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
  },
});

export default Counter;
