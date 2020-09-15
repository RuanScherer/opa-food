import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { PrimaryButton, PrimaryButtonText, RegularText, Container, Title, TextField } from '../../styles/global';
import { ItemImage, CounterBox, CounterButton } from './styles'
import { FontAwesome5 } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';

const MenuItem = () => {
  const [count, setCount] = useState(1)
  const { navigate, goBack } = useNavigation()

  function decrease() {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <Container>
      <TouchableOpacity 
        activeOpacity={0.6}
        style={{ marginBottom: 20 }}
        onPress={goBack}>
        <FontAwesome5 name="arrow-left" size={20}/>
      </TouchableOpacity>
      <ItemImage source={{ uri: "https://acconstorage.blob.core.windows.net/acconpictures/15909721793275905880963504793-1080p.jpg" }}/>
      <Title style={{ marginBottom: 0 }}>Pizza Grande</Title>
      <RegularText>35cm, 12 fatias.</RegularText>
      <TextField
        placeholder="Alguma observação?"
        style={{ marginVertical: 20 }}
        numberOfLines={3}
        textAlignVertical="top"
      />
      <CounterBox>
        <CounterButton onPress={decrease}>
          <FontAwesome5 name="minus" color="#FFF" size={10}/>
        </CounterButton>
        <RegularText style={{ marginHorizontal: 14, fontWeight: 'bold', fontSize: 18 }}>
          {count}
        </RegularText>
        <CounterButton onPress={() => setCount(count + 1)}>
          <FontAwesome5 name="plus" color="#FFF" size={10}/>
        </CounterButton>
      </CounterBox>
      <PrimaryButton style={{ marginTop: 30 }} onPress={goBack}>
        <PrimaryButtonText>
          Pedir
        </PrimaryButtonText>
      </PrimaryButton>
    </Container>
  );
}

export default MenuItem;