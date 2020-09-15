import React from 'react';
import { PrimaryButton, PrimaryButtonText, Title } from '../../styles/global';
import { CenteredContainer, Message } from './styles';
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const PaymentSuccess = () => {
  const { navigate } = useNavigation()

  return (
    <CenteredContainer>
      <FontAwesome5 name="check-circle" size={100} color="#f87652"/>
      <Title color="#f87652" style={{ marginBottom: 6 }}>Sucesso!</Title>
      <Message color="#F5F5F5" style={{ textAlign: 'center' }}>
        Seu pagamento foi realizado e você já está pronto para sair do estabelecimento.
      </Message>
      <PrimaryButton style={{ marginTop: 40 }} onPress={() => navigate("Home")}>
        <PrimaryButtonText>
          Voltar para o início
        </PrimaryButtonText>
      </PrimaryButton>
    </CenteredContainer>
  );
}

export default PaymentSuccess;