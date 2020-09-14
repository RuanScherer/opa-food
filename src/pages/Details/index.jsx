import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native'
import { PrimaryButton, PrimaryButtonText, Title } from '../../styles/global';

import { Container, ResturantStats, ResturantAddress, RestaurantImage, ResturantHourOpened } from './styles'

const Details = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <RestaurantImage source={{ uri: "https://10619-2.s.cdn12.com/rests/small/w312/h280/403_69233392.jpg" }} />
        <Title style={{marginBottom: 0}}>Gutes Essen</Title>
          <ResturantAddress >
            R. Mal. Deodoro, 202, Velha, Blumenau - SC
          </ResturantAddress>
        <ResturantHourOpened>08:00AM - 12:00PM</ResturantHourOpened> 
        <ResturantStats open={true}>Aberto agora</ResturantStats>

      </ScrollView>
      <PrimaryButton onPress={() => navigate("Reserve")}>
        <PrimaryButtonText>
          Reservar
          </PrimaryButtonText>
      </PrimaryButton>
    </Container>
  );
}

export default Details;