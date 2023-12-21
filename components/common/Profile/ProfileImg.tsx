import { BLUE, GRAY, GREEN, ORANGE, PINK, PURPLE, WHITE } from '@/styles/ColorStyles';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { FONT_16 } from '@/styles/FontStyles';
import Image from 'next/image';
import styled from 'styled-components';

const COLORS = [BLUE, ORANGE, PURPLE, GREEN, PINK[1]];

interface Props {
  url: string;
  size: number;
  name: string;
  id: number;
}

function ProfileImg({ url, size, name, id }: Props) {
  const colorNum = id % 5;

  return (
    <Wrapper>
      {url ? (
        <Img alt="프로필 이미지" src={url} width={size} height={size} />
      ) : (
        <DefaultProfile $size={size} $color={colorNum}>
          {name.slice(0, 1)}
        </DefaultProfile>
      )}
      <NickName>{name}</NickName>
    </Wrapper>
  );
}

export default ProfileImg;

const Img = styled(Image)`
  border-radius: 100%;
  border: 2px solid ${WHITE};

  background-size: cover;
  background-position: center;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 34px;
    height: 34px;
  }
`;

const DefaultProfile = styled.div<{ $size: number; $color: number }>`
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${props.$size}px`};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${WHITE};
  ${FONT_16};

  border-radius: 100%;
  border: 2px solid ${WHITE};

  background-color: ${(props) => COLORS[`${props.$color}`]};

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 34px;
    height: 34px;
  }
`;

const NickName = styled.div`
  padding: 0 10px;

  display: none;

  position: absolute;
  top: 40px;

  opacity: 60%;
  background-color: ${GRAY[50]};

  border-radius: 30px;
  word-break: keep-all;
`;

const Wrapper = styled.div`
  position: relative;

  &:hover {
    ${NickName} {
      display: block;
    }
  }
`;
