import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native'
import { PrimaryButton, PrimaryButtonText, Title } from '../../styles/global';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Container, } from './styles'

const Details = () => {
  const { navigate } = useNavigation()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <Container>
      <Title>Gutes Essen</Title>
      
      <DateTimePickerModal
        isVisible={true}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Container>
  );
}

export default Details;