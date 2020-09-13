import React from 'react';
import { ScrollView } from 'react-native'
import MenuItem from '../../components/MenuItem';
import { StaticContainer, Legend, Title } from '../../styles/global';

const Waiting = () => {
  return (
    <StaticContainer style={{ paddingBottom: 0 }}>
      <Legend>Pedidos em andamento</Legend>
      <Title>Gutes Essen</Title>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItem 
          name="Peixe Grelhado"
          description="Tilápia acomapanhada de arroz e salada."
          count={1}
          imageUrl="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/09/28/confira-como-grelhar-peixe-na-frigideira.jpg"
        />
        <MenuItem 
          name="Pizza Grande"
          description="35cm, 12 fatias."
          count={2}
          imageUrl="https://acconstorage.blob.core.windows.net/acconpictures/15909721793275905880963504793-1080p.jpg"
        />
      </ScrollView>
    </StaticContainer>
  );
}

export default Waiting;