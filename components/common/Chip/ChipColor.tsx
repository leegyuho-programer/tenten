import React from 'react';
import styled from 'styled-components';
import {FONT_12, FONT_10} from '@/styles/FontStyles'
import { DEVICE_SIZE } from '@/styles/DeviceSize';

interface Props {
  backgroundColor: string;
  fontColor: string;
  text: string;
}

/**
 * @param background 배경 색상을 prop으로 받아온다
 * @param fontColor 폰트 색상을 prop으로 받아온다
 * @param text 텍스트를 prop으로 받아온다
 */

function ChipColor({ backgroundColor, fontColor, text }: Props) {

  return (
    <Container backgroundColor={backgroundColor} fontColor={fontColor}>
      {text}
    </Container>
  );
};

export default ChipColor;

const Container = styled.div`
  padding: 4px 6px;
  display: inline-block;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  border-radius: 4px;
  ${FONT_12};

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    ${FONT_10};
  }
`;
