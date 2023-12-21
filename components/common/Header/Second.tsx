import styled from 'styled-components';
import { ReactNode } from 'react';
import { BLACK, GRAY } from '@/styles/ColorStyles';
import { FONT_14, FONT_16, FONT_20_B } from '@/styles/FontStyles';
import Button from '@/components/common/Button';
import Profile from '@/components/common/Profile/Profile';
import ProfileImgList from '@/components/common/Profile/ProfileImgList';
import { USER1 } from '@/lib/constants/mockup';
import { MEMBERS1 } from '@/lib/constants/mockup';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import Setting from '@/public/icon/settings.svg';
import Invite from '@/public/icon/add_box.svg';
import Crown from '@/public/icon/crown.svg';

interface Props {
  page: 'myboard' | 'others';
  children: ReactNode;
  crown?: boolean;
}

function Header({ page, children, crown }: Props) {
  return (
    <Body>
      <Container $page={page}>
        <TitleSection $page={page}>
          <Title>{children}</Title>
          {crown && <CrownIcon />}
        </TitleSection>
        <Right>
          {page !== 'myboard' && (
            <>
              <HeaderButtons />
              <ProfileImgList memberCount={MEMBERS1.totalCount} data={MEMBERS1.members} />
              <DividingLine />
            </>
          )}
          <Profile type="header" name={USER1.nickname} profileImg={USER1.profileImageUrl} id={USER1.id} />
        </Right>
      </Container>
    </Body>
  );
}

export default Header;

function HeaderButtons() {
  return (
    <ButtonSection>
      <SettingWrapper>
        <Button type="plain" width="100%" height="100%">
          <Wrapper>
            <SettingIcon />
            <Text>관리</Text>
          </Wrapper>
        </Button>
      </SettingWrapper>
      <InviteWrapper>
        <Button type="plain" width="100%" height="100%">
          <Wrapper>
            <InviteIcon />
            <Text>초대하기</Text>
          </Wrapper>
        </Button>
      </InviteWrapper>
    </ButtonSection>
  );
}

const Body = styled.div`
  width: 100%;
  height: 70px;
  padding-left: 300px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${GRAY[30]};

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding-left: 160px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    padding-left: 67px;
  }
`;

const Container = styled.div<{ $page: string }>`
  width: 100%;
  padding-left: 40px;
  padding-right: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding-left: 12px;
    padding-right: 40px;

    justify-content: ${(props) => (props.$page === 'myboard' ? null : 'flex-end')};
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    padding-right: 12px;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    gap: 24px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    gap: 12px;
  }
`;

const TitleSection = styled.div<{ $page: string }>`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    display: ${(props) => (props.$page === 'others' ? `none` : null)};
  }
`;

const CrownIcon = styled(Crown)`
  width: 20px;
  height: 16px;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    gap: 12px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    gap: 6px;
  }
`;

const SettingWrapper = styled.div`
  width: 88px;
  height: 40px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 85px;
    height: 36px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 49px;
    height: 30px;
  }
`;

const InviteWrapper = styled.div`
  width: 116px;
  height: 40px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 109px;
    height: 36px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 73px;
    height: 30px;
  }
`;

const Title = styled.div`
  color: ${BLACK[2]};
  ${FONT_20_B};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Text = styled.div`
  ${FONT_16};
  color: ${GRAY[50]};

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    ${FONT_14};
  }
`;

const DividingLine = styled.div`
  height: 38px;

  border-right: 1px solid ${GRAY[30]};

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    height: 34px;
  }
`;

const SettingIcon = styled(Setting)`
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;

const InviteIcon = styled(Invite)`
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;
