import styled from 'styled-components/native';

export const StaticContainer = styled.View`
  flex: 1;
  background-color: #f0eded;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 40,
  },
})`
  flex: 1;
  background-color: #F3F3F3;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: Arvo_700Bold;
  font-size: 34px;
  margin-bottom: 22px;
  color: #1e1849;
`;

export const SmallTitle = styled.Text`
  font-family: Arvo_700Bold;
  font-size: 26px;
  margin-bottom: 18px;
  color: ${props => props.color || '#1e1849'};
`;

export const Subtitle = styled.Text`
  font-family: Arvo_700Bold;
  font-size: 18px;
  color: #1e1849;
`;

export const RegularText = styled.Text`
  font-family: Arvo_400Regular;
  font-size: 16px;
  margin-top: 6px;
  color: #3f3b66;
`;

export const Legend = styled.Text`
  font-family: Arvo_700Bold;
  font-size: 14px;
  text-transform: uppercase;
  color: ${(props) => props.color || '#554ab2'};
`;

export const BigNumber = styled.Text`
  font-family: Arvo_700Bold;
  font-size: 24px;
  color: #1e1849;
  margin-top: 8px;
`;

export const RegularNumber = styled.Text`
  font-family: Arvo_700Bold;
  font-size: 20px;
  color: #1e1849;
  margin-top: 8px;
`;

export const TextField = styled.TextInput.attrs({
  placeholderTextColor: '#afafaf',
})`
  background-color: #e7e6ed;
  padding: 14px;
  border-radius: 4px;
  font-size: 16px;
  color: #1e1849;
  margin-bottom: 16px;
  border: ${(props) => (props.error ? '2px solid #ad0a0a' : 'none')};
`;

export const PrimaryButton = styled.TouchableOpacity.attrs({
  activeOpacity: .85,
})`
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: #f87652;
`;

export const PrimaryButtonText = styled.Text`
  color: #fff;
  font-family: Arvo_700Bold;
  font-size: 18px;
`;

export const Form = styled.KeyboardAvoidingView`
  width: 100%
`;