import Image from 'next/image';
import styled from 'styled-components';
import { Card as CardType } from '@/lib/types/type';
import { WHITE, BLACK, GRAY } from '@/styles/ColorStyles';
import { FONT_12, FONT_16_B } from '@/styles/FontStyles';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import Calendar from '@/public/icon/calendar.svg';

import { TempTagChip } from './tempChip';

interface Props {
  card: CardType;
}

function Card({ card }: Props) {
  return (
    <Wrapper>
      {card.imageUrl && <Thumbnail src={card.imageUrl} width={274} height={160} alt="" />}
      <Content>
        <Title>{card.title}</Title>
        <Detail>
          <TagWrapper>
            {card.tags.map((t) => (
              <TempTagChip content={t} />
            ))}
          </TagWrapper>
          <DateWrapper>
            <Calendar />
            {card.dueDate}
          </DateWrapper>
          {card.assignee.profileImageUrl ? (
            <ProfileChip src={card.assignee.profileImageUrl} width={24} height={24} alt="프로필 이미지" />
          ) : (
            <DefaultProfileChip>{card.assignee.nickname[0]}</DefaultProfileChip>
          )}
        </Detail>
      </Content>
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 16px;
  padding: 20px;

  position: relative;

  background: ${WHITE};

  border-radius: 6px;
  border: 1px solid ${GRAY[30]};

  cursor: pointer;

  @media (max-width: ${DEVICE_SIZE.tablet}) and (min-width: ${DEVICE_SIZE.mobile}) {
    display: flex;
    flex-direction: row;
  }
`;

const Thumbnail = styled(Image)`
  width: 100%;
  margin-bottom: 12px;

  border-radius: 6px;

  @media (max-width: ${DEVICE_SIZE.tablet}) and (min-width: ${DEVICE_SIZE.mobile}) {
    width: 90px;
    height: 100%;

    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const Title = styled.div`
  margin-bottom: 10px;

  ${FONT_16_B}
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${DEVICE_SIZE.tablet}) and (min-width: ${DEVICE_SIZE.mobile}) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagWrapper = styled.div`
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 6px;

  @media (max-width: ${DEVICE_SIZE.tablet}) and (min-width: ${DEVICE_SIZE.mobile}) {
    margin-bottom: 0;
    margin-right: 16px;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;

  color: ${GRAY[50]};
`;

const ProfileChip = styled(Image)`
  position: absolute;
  right: 20px;
  bottom: 20px;

  border-radius: 50%;
`;

const DefaultProfileChip = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  right: 20px;
  bottom: 20px;

  background-color: ${GRAY[40]};

  color: ${WHITE};
  ${FONT_12}

  border-radius: 50%;
`;
