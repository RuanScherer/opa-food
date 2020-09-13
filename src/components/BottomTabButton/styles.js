import styled from 'styled-components'
import { RectButton } from 'react-native-gesture-handler'

export const ButtonBox = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background-color: #554ab2;
`

export const ButtonLabel = styled.Text`
  font-size: 14px;
  color: #FFF;
  font-family: Arvo_700Bold
`