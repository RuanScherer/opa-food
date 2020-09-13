import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Title, SmallTitle, Form } from '../../styles/global';
import { Container, ResturantName, ResturantAddress, RestaurantImage } from './styles'

const Details = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Title>Detalhes</Title>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <ResturantName>Gutes Essen</ResturantName>
        <RestaurantImage source={{ uri: "https://10619-2.s.cdn12.com/rests/small/w312/h280/403_69233392.jpg" }} />
        <ResturantAddress>
          R. Mal. Deodoro, 202, Velha, Blumenau - SC
        </ResturantAddress>


      </ScrollView>
    </Container>
  );
}

export default Details;