import Link from "next/link";
import styled from "styled-components";
import LargeLogo from '@/public/images/logo_large.svg';
import SmallLogo from '@/public/images/logo_small.svg';
import { DEVICE_SIZE } from '@/styles/DeviceSize';


function LogoLink() {
  return (
    <Link href="/">
      <LogoWrapper>
        <LargeLogoImg />
        <SmallLogoImg />
      </LogoWrapper>
    </Link>
  );
}

export default LogoLink;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LargeLogoImg = styled(LargeLogo)`
  display: block;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;

const SmallLogoImg = styled(SmallLogo)`
  display: none;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: block;
  }
`;