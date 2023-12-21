import styled from 'styled-components';
import { FONT_14, FONT_16 } from '@/styles/FontStyles';
import { Z_INDEX } from '@/styles/ZIndexStyles';
import { PINK, WHITE } from '@/styles/ColorStyles';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { useMediaQuery } from 'react-responsive';
import ProfileImg from './ProfileImg';

interface Props {
  memberCount: number;
  data: any[];
}

/**
 * @param memberCount member 목록의 totalCount
 * @param data members 배열
 */
function ProfileImgList({ memberCount, data }: Props) {
  const isTablet = useMediaQuery({ query: `(max-width: ${DEVICE_SIZE.tablet})` });
  let rest = memberCount - 4;

  if (isTablet) rest += 2;

  return (
    <Container>
      {data[0] && (
        <ProfileWrapper $order={Z_INDEX.profileImgList_Img[0]}>
          <ProfileImg url={data[0].profileImageUrl} size={38} name={data[0].nickname} id={data[0].userId} />
        </ProfileWrapper>
      )}
      {data[1] && (
        <ProfileWrapper $order={Z_INDEX.profileImgList_Img[1]}>
          <ProfileImg url={data[1].profileImageUrl} size={38} name={data[1].nickname} id={data[1].userId} />
        </ProfileWrapper>
      )}
      <Wrapper>
        {data[2] && (
          <ProfileWrapper $order={Z_INDEX.profileImgList_Img[2]}>
            <ProfileImg url={data[2].profileImageUrl} size={38} name={data[2].nickname} id={data[2].userId} />
          </ProfileWrapper>
        )}
        {data[3] && (
          <ProfileWrapper $order={Z_INDEX.profileImgList_Img[3]}>
            <ProfileImg url={data[3].profileImageUrl} size={38} name={data[3].nickname} id={data[3].userId} />
          </ProfileWrapper>
        )}
      </Wrapper>
      {rest > 0 && <Rest $order={isTablet ? 3 : 5}>+{rest <= 999 ? rest : '999'}</Rest>}
    </Container>
  );
}

export default ProfileImgList;

const Container = styled.div`
  min-width: 156px;

  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    min-width: 100px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    min-width: 95px;
  }
`;

const ProfileWrapper = styled.div<{ $order: number }>`
  position: absolute;
  left: ${({ $order }) => `${29 * $order - 29}px`};

  z-index: ${({ $order }) => $order};

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    left: ${({ $order }) => `${25 * $order - 25}px`};
  }
`;

const Rest = styled.div<{ $order: number }>`
  min-width: 38px;
  height: 38px;
  padding: 0.6rem 0.5rem;

  position: absolute;
  left: ${({ $order }) => `${29 * $order - 29}px`};

  z-index: ${Z_INDEX.profileImgList_Rest};

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid ${WHITE};
  border-radius: 40px;

  background-color: ${PINK[2]};

  ${FONT_16}
  color: ${PINK[3]};

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    min-width: 34px;
    min-height: 34px;

    left: ${({ $order }) => `${25 * $order - 25}px`};

    ${FONT_14};
  }
`;

const Wrapper = styled(Container)`
  @media (max-width: ${DEVICE_SIZE.tablet}) {
    display: none;
  }
`;
