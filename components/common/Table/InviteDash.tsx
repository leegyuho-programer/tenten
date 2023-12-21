import styled from 'styled-components';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { GRAY } from '@/styles/ColorStyles';
import SearchIcon from '@/public/icon/search.svg';
import InviteList from './InviteList';
import { Invites } from '@/lib/types/type';

interface Props {
  inviteList: Invites;
}

function InviteDash({ inviteList }: Props) {
  const { cursorId, invitations } = inviteList;

  return (
    <Container>
      <InviteDashTitle>초대받은 대시보드</InviteDashTitle>
      <InviteDashInputWrap>
        <Search />
        <SearchInput />
      </InviteDashInputWrap>
      <InviteListHead>
        <Subject>이름</Subject>
        <Subject>초대자</Subject>
        <Subject>수락여부</Subject>
      </InviteListHead>
      <InviteContent>
        {invitations.map((list) => (
          <InviteList key={list.id} invite={list} />
        ))}
      </InviteContent>
    </Container>
  );
}

export default InviteDash;

const Container = styled.div`
  width: 1022px;
  height: 600px;
  padding-top: 32px;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 504px;
    height: 592px;
  }

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 260px;
    height: 836px;
    padding: 24px 16px 0;
  }
`;

const InviteDashTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0 28px;
`;

const InviteDashInputWrap = styled.div`
  border: 1px solid ${GRAY[30]};
  border-radius: 6px;
  display: flex;
  margin: 32px;
`;

const Search = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  margin: 8px;
`;

const SearchInput = styled.input`
  width: 100%;
`;

const InviteContent = styled.div`
  width: 100%;
`;

const InviteListHead = styled.div`
  display: flex;
  width: 870px;
  padding: 20px 32px;
  color: ${GRAY[40]};
  :nth-child(1) {
    flex-basis: 40%;
    flex-grow: 1;
  }
  :nth-child(2) {
    flex-basis: 30%;
    flex-grow: 1;
  }
  :nth-child(3) {
    flex-basis: 20%;
    flex-grow: 1;
  }
`;

const Subject = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
