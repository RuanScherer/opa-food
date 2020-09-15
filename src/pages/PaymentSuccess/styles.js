import styled from 'styled-components/native';
import { RegularText } from '../../styles/global';

export const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #554ab2;
  padding: 20px;
`;

export const Message = styled(RegularText)`
  width: 90%;
  line-height: 20px;
`