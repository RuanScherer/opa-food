import React from 'react';
import { ScrollView } from 'react-native'
import ReservationItem from '../../components/ReservationItem';
import { StaticContainer, Title } from '../../styles/global';

const Reserves = () => {
  return (
    <StaticContainer style={{ paddingBottom: 0 }}>
      <Title>Minhas reservas</Title>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReservationItem name="Gutes Essen" people={4} date="27/08/2020" time="19:00" />
        <ReservationItem name="Blu Pizzas" people={2} date="13/08/2020" time="21:10" />
        <ReservationItem name="Chef Waldemar" people={2} date="02/08/2020" time="18:45" />
        <ReservationItem name="Blu Pizzas" people={4} date="25/07/2020" time="20:35" />
        <ReservationItem name="Chef Waldemar" people={2} date="18/07/2020" time="19:20" />
      </ScrollView>
    </StaticContainer>
  );
}

export default Reserves;