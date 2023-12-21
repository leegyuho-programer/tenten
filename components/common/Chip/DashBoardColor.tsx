import styled from "styled-components";
import DoneIcon from "@/public/icon/done_Fillo.svg"
import { GREEN, PURPLE, ORANGE, BLUE, PINK } from '@/styles/ColorStyles';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

interface Props {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

/**
 * @param selectedColor 현재 선택된 색상.
 * @param setSelectedColor 색상을 선택할 때 호출되는 함수. 선택된 색상을 인수로 받습니다.
 */

function DashBoardColor({ selectedColor, setSelectedColor }: Props) {
  const colors = [GREEN, PURPLE, ORANGE, BLUE, PINK];

  return (
    <Container>
      {colors.map((color) => (
        <ColorBox key={color} onClick={() => setSelectedColor(color)} color={color} isSelected={selectedColor === color}>
          {selectedColor === color && <DoneIcon />}
        </ColorBox>
      ))}
    </Container>
  );
}

export default DashBoardColor;

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ColorBox = styled.div<{ isSelected: boolean, color: string }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border-radius: 50%;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 28px;
    height: 28px;
  }
`;
