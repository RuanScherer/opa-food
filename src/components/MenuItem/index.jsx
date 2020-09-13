import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native'
import { RegularNumber, RegularText, Subtitle } from '../../styles/global'
import { Box, ItemImage } from './styles'

const MenuItem = ({ name, description, price, count, imageUrl }) => {
  const { navigate } = useNavigation()
  
  return (
    <Box onPress={() => navigate("MenuItem")}>
      <ItemImage source={{ uri: imageUrl }}/>
      <View style={{ width: '70%', padding: 10 }}>
        <Subtitle>{name}</Subtitle>
        <RegularText>{description}</RegularText>
        { price && <RegularNumber>R$ {price.toFixed(2)}</RegularNumber> }
        { count && <RegularNumber>{count}x</RegularNumber> }
      </View>
    </Box>
  );
}

export default MenuItem;