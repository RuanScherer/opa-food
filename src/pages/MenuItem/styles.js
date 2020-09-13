import styled from 'styled-components'
import { PrimaryButton } from '../../styles/global'

export const ItemImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: #ddd;
  margin-bottom: 20px;
`

export const CounterBox = styled.View`
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

export const CounterButton = styled(PrimaryButton)`
  width: auto;
  padding: 12px;
`