import React, {useState} from 'react';
import DatePicker from 'react-native-modern-datepicker';

const Picker = ({showingDate, setshowingDate}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const closePicker = date => {
    setshowingDate(false);
    setSelectedDate(date);
  };

  return showingDate ? (
    <DatePicker onSelectedChange={date => closePicker(date)} />
  ) : null;
};

export default Picker;
