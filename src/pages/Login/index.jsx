import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PrimaryButton, PrimaryButtonText, StaticContainer, Title, TextField, Form } from '../../styles/global';
import { Link } from './styles'

const Login = () => {
  const { navigate } = useNavigation()

  return (
    <StaticContainer style={{ justifyContent: 'flex-end' }}>
      <Title style={{ marginBottom: 30 }}>Iniciar sessão</Title>
      <Form> 
        <TextField  placeholder="E-mail"/>
        <TextField placeholder="Senha"/>
        <TouchableOpacity 
          style={{ marginBottom: 25, marginTop: 5 }}
          activeOpacity={.6}
          onPress={() => navigate("Register")}>
          <Link>Não tem uma conta? Cadastre-se</Link>
        </TouchableOpacity>
        <PrimaryButton onPress={() => navigate("Home")}>
          <PrimaryButtonText>
            Entrar
          </PrimaryButtonText>
        </PrimaryButton>
      </Form>
    </StaticContainer>
  );
}

export default Login;