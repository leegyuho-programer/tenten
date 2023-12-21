import styled from 'styled-components';
import VioletChipIcon from '@/public/icon/violet_chip.svg'
import {FONT_12, FONT_10} from '@/styles/FontStyles'
import { DEVICE_SIZE } from '@/styles/DeviceSize';

interface Props {
  content: string;
}

function ColumnNameChip({content}: Props) {
  return (
    <Container>
        <VioletChipIcon />
        <Content>{content}</Content>
    </Container>
  )
}

export default ColumnNameChip;

const Container = styled.div`
  padding: 4px 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #F1EFFD;
  border-radius: 11px;
`;

const Content = styled.span`
  text-align: center;
  color: #5534DA;
  ${FONT_12};

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    ${FONT_10};
  }
`;