import styled from 'styled-components'
import { Subtitle, TextField, RegularText } from '../../styles/global'

export const Container = styled.ScrollView.attrs({
  
})`
  flex: 1;
  background-color: #F3F3F3;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const SearchField = styled(TextField)`
  border-radius: 10px;
`

export const Restaurant = styled.View`
  width: 240px;
  margin-right: 20px;
`

export const ResturantName = styled(Subtitle)`
  font-size: 24px;
`

export const ResturantAddress = styled(RegularText)`
  font-size: 12px
`

export const RestaurantImage = styled.Image`
  width: 100%;
  height: 240px;
  border-radius: 10px;
  margin-bottom: 10px;
`
