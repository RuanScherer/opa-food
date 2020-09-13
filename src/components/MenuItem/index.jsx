import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native'
import { RegularNumber, RegularText, Subtitle } from '../../styles/global'
import { Box, ItemImage } from './styles'

const MenuItem = ({ name, description, price, imageUrl }) => {
  const { navigate } = useNavigation()
  
  return (
    <Box onPress={() => navigate("MenuItem")}>
      <ItemImage source={{ uri: imageUrl }}/>
      <View style={{ width: '70%', padding: 10 }}>
        <Subtitle>{name}</Subtitle>
        <RegularText>{description}</RegularText>
        <RegularNumber>R$ {price.toFixed(2)}</RegularNumber>
      </View>
    </Box>
  );
}

export default MenuItem;