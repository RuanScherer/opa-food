import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { PrimaryButton, PrimaryButtonText, RegularText, StaticContainer, Title } from '../../styles/global';

const Scan = () => {
  const { navigate } = useNavigation()

  return (
    <StaticContainer>
      <Title>Escanear QR Code</Title>
      <RegularText>
        Está em um restaurante que participa da plataforma?
      </RegularText>
      <RegularText>
        Escaneie o QR Code da mesa para visualizar o cardápio, 
        fazer pedidos e pagar sua conta diretamente do celular!
      </RegularText>
      <PrimaryButton style={{ marginTop: 30 }} onPress={() => navigate("Restaurant")}>
        <PrimaryButtonText>
          Escanear
        </PrimaryButtonText>
      </PrimaryButton>
    </StaticContainer>
  );
}

export default Scan;