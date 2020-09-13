import styled from 'styled-components'

export const Box = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const ItemImage = styled.Image`
  width: 30%;
  height: 100%;
  border-radius: 10px;
  background-color: #ddd
`