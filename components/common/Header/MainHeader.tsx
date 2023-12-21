import Link from 'next/link';
import styled from 'styled-components';
import Logo from '@/public/images/logo_small.svg';
import Taskify from '@/public/images/Taskify_small.svg';
import { FONT_14, FONT_16 } from '@/styles/FontStyles';
import { WHITE, BLACK } from '@/styles/ColorStyles';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

function MainHeader() {
  return (
    <Wrapper>
      <Left href="/">
        <Logo />
        <StyledTaskify />
      </Left>
      <Right>
        <StyledLink href="/signin">로그인</StyledLink>
        <StyledLink href="/signup">회원가입</StyledLink>
      </Right>
    </Wrapper>
  );
}

export default MainHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px 80px 20px 26px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.6rem;

  background-color: ${WHITE};

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 20px 24px;
  }
`;

const Left = styled(Link)`
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 36px;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    column-gap: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: ${BLACK[2]};
  ${FONT_16};

  text-decoration: none;
  cursor: pointer;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    ${FONT_14};
  }
`;

const StyledTaskify = styled(Taskify)`
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    height: 60px;
    display: none;
  }
`;
