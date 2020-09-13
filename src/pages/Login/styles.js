import styled from 'styled-components'

export const Link = styled.Text`
  align-self: flex-end;
  font-family: Arvo_400Regular;
  font-size: 12px;
  text-align: right;
  margin-right: 4px;
  color: ${props => props.color || '#333'}
`