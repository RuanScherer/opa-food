import React from 'react';
import { ScrollView } from 'react-native'
import ReserveItem from '../../components/ReserveItem';
import { StaticContainer, Title } from '../../styles/global';

const Reserves = () => {
  return (
    <StaticContainer style={{ paddingBottom: 0 }}>
      <Title>Minhas reservas</Title>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReserveItem name="Gutes Essen" people={4} date="27/08/2020" />
        <ReserveItem name="Blu Pizzas" people={2} date="13/08/2020" />
        <ReserveItem name="Chef Waldemar" people={2} date="02/08/2020" />
        <ReserveItem name="Blu Pizzas" people={4} date="25/07/2020" />
        <ReserveItem name="Chef Waldemar" people={2} date="18/07/2020" />
      </ScrollView>
    </StaticContainer>
  );
}

export default Reserves;