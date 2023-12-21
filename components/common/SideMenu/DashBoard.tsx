import styled from "styled-components";
import Crown from "@/public/icon/crown.svg";
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import {FONT_18, FONT_16} from '@/styles/FontStyles';
import { GRAY } from '@/styles/ColorStyles';

interface DashBoardProps {
  color: string;
  title: string;
  createdByMe?: boolean;
  key: number;
}

function DashBoard({ color, title, createdByMe }: DashBoardProps) {
  return (
    <Container>
      <Color color={color} />
      <DashBoardTitle>{title}</DashBoardTitle>
      {createdByMe && <StyledCrown />}
    </Container>
  );
}

export default DashBoard;

const Container = styled.div`
  width: 276px;
  height: 45px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;
  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 134px;
    height: 43px;
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 40px;
    height: 40px;
    justify-content: center;
  }
`;

const Color = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  margin-right: 16px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
`;

const DashBoardTitle = styled.div`
  margin-right: 6px;
  color: ${GRAY[50]};
  ${FONT_18};
  @media (max-width: ${DEVICE_SIZE.tablet}) {
    margin-right: 4px;
    ${FONT_16};
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;

const StyledCrown = styled(Crown)`
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;