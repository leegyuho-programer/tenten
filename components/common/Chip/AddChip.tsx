import styled from 'styled-components';
import AddFilloIcon from '@/public/icon/add_Fillo.svg';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

function AddChip() {
  return (
    <Container>
      <StyledAddFilloIcon />
    </Container>
  )
}

export default AddChip;

const Container = styled.div`
  width: 30px;
  height: 30px;
  padding: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #F1EFFD;
  border-radius: 4px;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 22px;
    height: 22px;
  }
`;

const StyledAddFilloIcon = styled(AddFilloIcon)`
  width: 16px;
  height: 16px;
`;