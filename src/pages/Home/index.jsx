import React from 'react';
import { ScrollView } from 'react-native'
import { Container, Title, SmallTitle, Form } from '../../styles/global';
import { Restaurant, ResturantName, ResturantAddress, RestaurantImage, ResturantStats, SearchField } from './styles'

const Home = () => {
  return (
    <Container>
      <Title>Descobrir</Title>
      <Form>
        <SearchField placeholder="Pesquisar restaurante" style={{ width: '100%' }}/>
      </Form>
      <SmallTitle style={{ marginTop: 10 }}>Mais populares</SmallTitle>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Restaurant>
          <RestaurantImage source={{ uri: "https://10619-2.s.cdn12.com/rests/small/w312/h280/403_69233392.jpg" }}/>
          <ResturantName>Gutes Essen</ResturantName>
          <ResturantAddress>
            R. Mal. Deodoro, 202{'\n'}
            Velha, Blumenau - SC
          </ResturantAddress>
          <ResturantStats open={true}>Aberto agora</ResturantStats>
        </Restaurant>

        <Restaurant>
          <RestaurantImage source={{ uri: "https://10619-2.s.cdn12.com/rests/small/w312/h280/403_69233392.jpg" }}/>
          <ResturantName>Blu Pizzas</ResturantName>
          <ResturantAddress>
            R. 7 de Setembro, 2070{'\n'}
            Centro, Blumenau - SC
          </ResturantAddress>
          <ResturantStats open={false}>Fechado</ResturantStats>
        </Restaurant>

        <Restaurant>
          <RestaurantImage source={{ uri: "https://10619-2.s.cdn12.com/rests/small/w312/h280/403_69233392.jpg" }}/>
          <ResturantName>Chef Waldemar</ResturantName>
          <ResturantAddress>
            R. Bolívia, 411{'\n'}
            Ponta Aguda, Blumenau - SC
          </ResturantAddress>
          <ResturantStats open={false}>Fechado</ResturantStats>
        </Restaurant>

        <Restaurant>
          <RestaurantImage source={{ uri: "https://10619-2.s.cdn12.com/rests/small/w312/h280/403_69233392.jpg" }}/>
          <ResturantName>Burger King</ResturantName>
          <ResturantAddress>
            R. 7 de Setembro, 1953{'\n'}
            Centro, Blumenau - SC
          </ResturantAddress>
          <ResturantStats open={true}>Aberto agora</ResturantStats>
        </Restaurant>
        
        <Restaurant>
          <RestaurantImage source={{ uri: "https://10619-2.s.cdn12.com/rests/small/w312/h280/403_69233392.jpg" }}/>
          <ResturantName>Gutes Essen</ResturantName>
          <ResturantAddress>
            R. Mal. Deodoro, 202{'\n'}
            Velha, Blumenau - SC
          </ResturantAddress>
          <ResturantStats open={true}>Aberto agora</ResturantStats>
        </Restaurant>
      </ScrollView>
    </Container>
  );
}

export default Home;