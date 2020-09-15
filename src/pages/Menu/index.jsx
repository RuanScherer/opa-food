import React from 'react';
import MenuItem from '../../components/MenuItem';
import { Container, Legend, Title } from '../../styles/global';

const Menu = () => {
  return (
    <Container style={{ paddingBottom: 0 }}>
      <Legend>GUTES ESSEN</Legend>
      <Title>Promoções</Title>
      <MenuItem 
        name="Chopp em dobro"
        description="Compre um chopp e ganhe outro do mesmo tamanho."
        imageUrl="https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />

      <Title style={{ marginTop: 10 }}>Cardápio</Title>
      <MenuItem 
        name="Peixe Grelhado"
        description="Tilápia acomapanhada de arroz e salada."
        price={29.90}
        imageUrl="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/09/28/confira-como-grelhar-peixe-na-frigideira.jpg"
      />
      <MenuItem 
        name="Pizza Grande"
        description="35cm, 12 fatias."
        price={45.00}
        imageUrl="https://acconstorage.blob.core.windows.net/acconpictures/15909721793275905880963504793-1080p.jpg"
      />
      <MenuItem 
        name="Pizza Média"
        description="28cm, 10 fatias."
        price={35.00}
        imageUrl="https://acconstorage.blob.core.windows.net/acconpictures/15909721315366299442734462326-1080p.jpg"
      />
      <MenuItem 
        name="Pizza Pequena"
        description="20cm, 8 fatias."
        price={25.00}
        imageUrl="https://acconstorage.blob.core.windows.net/acconpictures/1590971960117027429079850798566-1080p.jpg"
      />
    </Container>
  );
}

export default Menu;