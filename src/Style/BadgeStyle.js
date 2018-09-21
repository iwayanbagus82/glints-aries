import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const Container = styled.div`
  display: inline-flex;
  background: ${PrimaryColor.glintsred};
  color: ${SecondaryColor.white};
  padding: .1em .5em;
  border-radius: 20px;
  font-size: 1em;
  font-weight: 600;
`;
