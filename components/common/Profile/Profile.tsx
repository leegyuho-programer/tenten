import { FONT_16 } from '@/styles/FontStyles';
import styled, { css } from 'styled-components';
import ProfileImg from './ProfileImg';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

interface Props {
  type: 'header';
  id: number;
  name: string;
  profileImg: string;
}

function Profile({ type, id, name, profileImg }: Props) {
  return (
    <Container>
      <ProfileImg url={profileImg} size={38} name={name} id={id} />
      <Name $type={type}>{name}</Name>
    </Container>
  );
}

export default Profile;

const invisibleMobile = css`
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Name = styled.div<{ $type: string }>`
  ${FONT_16};

  ${(props) => (props.$type === 'header' ? invisibleMobile : null)};
`;
