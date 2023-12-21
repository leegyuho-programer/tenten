import styled from 'styled-components';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { GRAY, VIOLET } from '@/styles/ColorStyles';
import { FONT_12, FONT_16 } from '@/styles/FontStyles';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import Link from 'next/link';

const SNS_LIST = [
  { src: '/icon/envelope_email_icon.svg', alt: '개발팀에게 메일 보내기', url: '/' },
  {
    src: '/icon/social media_facebook_icon.svg',
    alt: '페이스북 페이지 바로가기',
    url: '/',
  },
  { src: '/icon/instagram_logo_media_social_icon.svg', alt: '인스타그램 페이지 바로가기', url: '/' },
];

function Footer() {
  const isMobile = useMediaQuery({ query: `(max-width: ${DEVICE_SIZE.mobile})` });

  return (
    <Body>
      <Container>
        <Text>©codeit - 2023</Text>
        <Center>
          <Text>Privacy Policy</Text>
          <Text>FAQ</Text>
        </Center>
        <IconBox>
          {SNS_LIST.map(({ alt, src, url }) => (
            <Link key={alt} href={url} target="_blank">
              <Wrapper>
                <Image src={src} alt={alt} fill />
              </Wrapper>
            </Link>
          ))}
        </IconBox>
      </Container>
    </Body>
  );
}

export default Footer;

const Body = styled.footer`
  width: 100%;
  height: 100px;
  padding: 0 40px;

  position: relative;

  background-color: ${VIOLET[1]};

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    height: 250px;
    padding-bottom: 90px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 150px;

    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
`;

const Text = styled.div`
  color: ${GRAY[40]};
  ${FONT_16};
  font-weight: 400;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    ${FONT_12}
  }
`;

const Wrapper = styled.div`
  width: 22px;
  height: 22px;

  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 18px;
    height: 18px;
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    gap: 20px;

    position: absolute;
    bottom: 90px;
  }
`;

const Center = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    gap: 20px;
  }
`;
