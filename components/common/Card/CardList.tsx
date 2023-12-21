import styled from 'styled-components';
import Card from './Card';
import { Cards } from '@/lib/types/type';
import { BLACK, VIOLET, GRAY, WHITE } from '@/styles/ColorStyles';
import { FONT_18_B } from '@/styles/FontStyles';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import SettingIcon from '@/public/icon/settings.svg';
import ChipAdd from '@/public/images/chip_add.svg';

interface Props {
  label: String;
  cardList: Cards;
}

/**
 * @param label 컬럼 제목
 * @param cards 카드 리스트
 */
function CardList({ label, cardList }: Props) {
  const { totalCount, cards } = cardList;

  return (
    <Wrapper>
      <TopWrapper>
        <LabelWrapper>
          <Ellipse />
          <Label>{label}</Label>
          {/* <Chip content={cards.totalCount}/> */}
        </LabelWrapper>
        <SettingButton>
          <SettingIcon />
        </SettingButton>
      </TopWrapper>
      <AdderCard>
        <ChipAdd />
      </AdderCard>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </Wrapper>
  );
}

export default CardList;

const Wrapper = styled.div`
  width: 354px;
  padding: 22px 20px;

  background-color: ${GRAY[10]};

  border-right: 1px solid ${GRAY[20]};

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 584px;
    border-right: none;
    border-bottom: 1px solid ${GRAY[20]};
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 308px;
    padding: 17px 12px;
  }
`;

const TopWrapper = styled.div`
  margin-bottom: 25px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Ellipse = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 8px;

  background-color: ${VIOLET[1]};

  border-radius: 50%;
`;

const Label = styled.div`
  margin-right: 12px;

  color: ${BLACK[2]};
  ${FONT_18_B};
`;

const SettingButton = styled.button`
  width: 24px;
  height: 24px;

  background: none;

  cursor: pointer;
`;

const AdderCard = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${WHITE};

  border-radius: 6px;
  border: 1px solid ${GRAY[30]};

  cursor: pointer;
`;
