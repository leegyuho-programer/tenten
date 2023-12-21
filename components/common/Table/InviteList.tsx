import { Invite as InviteType } from '@/lib/types/type';
import { GRAY } from '@/styles/ColorStyles';
import { styled } from 'styled-components';
import Button from '../Button';
interface Props {
  invite: InviteType;
}

function InviteList({ invite }: Props) {
  return (
    <InviteWrap>
      <InviteItems>
        <InviteData>{invite.dashboard.title}</InviteData>
        <InviteData>{invite.invitee.nickname}</InviteData>
        <ButtonGroup>
          <Button type="primary" width="84px" height="32px" roundSize="S">
            수락
          </Button>
          <Button type="plain" width="84px" height="32px" roundSize="S">
            거절
          </Button>
        </ButtonGroup>
      </InviteItems>
    </InviteWrap>
  );
}

export default InviteList;

const InviteWrap = styled.div`
  padding: 20px 36px;
  border-bottom: 1px solid ${GRAY[30]};
`;

const InviteItems = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const InviteData = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
