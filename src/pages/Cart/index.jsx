import React from 'react';
import { ScrollView } from 'react-native'
import MenuItem from '../../components/MenuItem';
import { StaticContainer, Legend, Title, BigNumber, PrimaryButton, PrimaryButtonText } from '../../styles/global';
import { CartTotal } from './styles'

const Cart = () => {
  return (
    <StaticContainer style={{ paddingBottom: 0 }}>
      <Legend>SUA CONTA</Legend>
      <Title>Gutes Essen</Title>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItem 
          name="Peixe Grelhado"
          description="Tilápia acomapanhada de arroz e salada."
          price={29.90}
          imageUrl="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/09/28/confira-como-grelhar-peixe-na-frigideira.jpg"
        />
        <MenuItem 
          name="Pizza Grande"
          description="35cm, 12 fatias."
          price={45.00}
          count={2}
          imageUrl="https://acconstorage.blob.core.windows.net/acconpictures/15909721793275905880963504793-1080p.jpg"
        />
        <MenuItem 
          name="Pizza Pequena"
          description="20cm, 8 fatias."
          price={25.00}
          imageUrl="https://acconstorage.blob.core.windows.net/acconpictures/1590971960117027429079850798566-1080p.jpg"
        />
        <Legend style={{ marginBottom: 4}}>TOTAL</Legend>
        <CartTotal>
          <BigNumber>R$ 144.90</BigNumber>
        </CartTotal>
        <PrimaryButton style={{ marginVertical: 20 }}>
          <PrimaryButtonText>Pagar a conta</PrimaryButtonText>
        </PrimaryButton>
      </ScrollView>
    </StaticContainer>
  );
}

export default Cart;