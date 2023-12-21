import Link from 'next/link';
import styled from 'styled-components';
import Logo from '@/public/images/dark/logo_small.svg';
import Taskify from '@/public/images/dark/Taskify_small.svg';
import { FONT_16 } from '@/styles/FontStyles';
import { WHITE, BLACK } from '@/styles/ColorStyles';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

function Header() {
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

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px 80px 20px 26px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.6rem;

  background-color: ${BLACK[1]};
`;

const Left = styled(Link)`
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 36px;
`;

const StyledLink = styled(Link)`
  color: ${WHITE};
  ${FONT_16}

  text-decoration: none;
  cursor: pointer;
`;

const StyledTaskify = styled(Taskify)`
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    height: 60px;
    display: none;
  }
`;
