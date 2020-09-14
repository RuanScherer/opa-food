import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PrimaryButton, PrimaryButtonText, StaticContainer, Title, Subtitle, TextField, Form } from '../../styles/global';
import { Link } from './styles'

const Login = () => {
  const { navigate } = useNavigation()

  return (
    <StaticContainer style={{ justifyContent: 'flex-end' }}>
      <Title style={{ marginBottom: 0 }}>Cadastre-se</Title>
      <Subtitle style={{ marginBottom: 30 }}>Preencha alguns dados para realizar seu cadastro.</Subtitle>
      <Form> 
        <TextField  placeholder="Nome completo"/>
        <TextField  placeholder="E-mail"/>
        <TextField  placeholder="Celular"/>
        <TextField placeholder="Senha"/>
        <TouchableOpacity 
          style={{ marginBottom: 25, marginTop: 5 }}
          activeOpacity={.6}
          onPress={() => navigate("Login")}>
          <Link>Já tem uma conta? Logar-se</Link>
        </TouchableOpacity>
        <PrimaryButton onPress={() => navigate("Home")}>
          <PrimaryButtonText>
            Cadastrar-se
          </PrimaryButtonText>
        </PrimaryButton>
      </Form>
    </StaticContainer>
  );
}

export default Login;