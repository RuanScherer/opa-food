import React from 'react';
import { RegularText, SmallTitle } from '../../styles/global';
import { Box } from './styles'

const ReservationItem = ({ name, people, date, time }) => {
  return (
    <Box style={{ borderStyle: 'dashed' }}>
      <SmallTitle style={{ marginBottom: 0 }}>{name}</SmallTitle>
      <RegularText style={{ fontWeight: 'bold', marginTop: 0 }}>
        Mesa para {people} pessoas
      </RegularText>
      <RegularText style={{ fontWeight: 'bold', color: '#554ab2', marginTop: 0 }}>
        Para {date} às {time}
      </RegularText>
    </Box>
  );
}

export default ReservationItem;