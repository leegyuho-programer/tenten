import styled from "styled-components";
import AddBoxIcon from "@/public/icon/add_box.svg";
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import {FONT_12B} from '@/styles/FontStyles';
import { GRAY } from '@/styles/ColorStyles';

function AddDashBoard() {
  return (
    <Container>
      <Words>Dash Boards</Words>
      <AddBoxIcon />
    </Container>
  );
}

export default AddDashBoard;

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Words = styled.span`
  color: ${GRAY[50]};
  ${FONT_12B};

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;