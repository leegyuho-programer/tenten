import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import { BLACK, GRAY, VIOLET, WHITE } from '@/styles/ColorStyles';
import { FONT_12, FONT_14, FONT_16, FONT_18 } from '@/styles/FontStyles';
import PlusChip from '@/public/images/chip_add.svg';
import ForwordIcon from '@/public/icon/arrow_forward.svg';
import BackwordIcon from '@/public/icon/arrow_backward.svg';
import GreenChip from '@/public/images/chip_green.svg';
import Crown from '@/public/icon/crown.svg';

const FONT_SIZE = {
  XL: FONT_18,
  L: FONT_16,
  M: FONT_14,
  S: FONT_12,
};

const ROUND_SIZE = {
  L: '8px',
  M: '6px',
  S: '4px',
};

interface Props {
  type: 'primary' | 'secondary' | 'plain' | 'arrow-b' | 'arrow-f' | 'dashboard';
  width?: string;
  height?: string;
  fontSize?: 'XL' | 'L' | 'M' | 'S';
  fontBold?: boolean;
  roundSize?: 'L' | 'M' | 'S';
  active?: boolean;
  chip?: boolean;
  chipColor?: 'green' | 'purple' | 'orange' | 'blue' | 'pink';
  crown?: boolean;
  position?: string;
  right?: string;
  bottom?: string;
  children?: ReactNode;
}

/**
 * @param type primary: 보라배경 | secondary: 흰배경 & 보라글씨 | plain: 흰배경 & 검정글씨
 * @param width default: 100%
 * @param height default: 50px
 * @param fontSize XL: 18px | L: 16px | M: 14px | S: 12px
 * @param roundSize L: 8px | M: 6px | S: 4px
 * @param active 버튼 활성화 유무
 * @param chip '+' chip 유무
 * @param chipColor dashboard 타입 버튼에서 chip color
 * @param crown dashboard 타입 버튼에서 왕관 아이콘 유무
 * @param children 버튼에 들어갈 문구
 */
function Button({
  type,
  width = '100%',
  height = '50px',
  fontSize = 'XL',
  fontBold = false,
  roundSize = 'L',
  active = true,
  chip = false,
  position,
  right,
  bottom,
  chipColor = 'green',
  crown,
  children,
}: Props) {
  if (type === 'arrow-b' || type === 'arrow-f')
    return (
      <Arrow $type={type} $active={active}>
        {type === 'arrow-b' ? <BackwordIcon /> : <ForwordIcon />}
      </Arrow>
    );
  return (
    <Default
      $type={type}
      $width={width}
      $height={height}
      $active={active}
      $fontSize={fontSize}
      $fontBold={fontBold}
      $roundSize={roundSize}
      $position={position}
      $right={right}
      $bottom={bottom}
    >
      {type === 'dashboard' && <GreenChip />}
      {children}
      {crown && <Crown />}
      {type === 'dashboard' && <LinkIcon />}
      {chip && <PlusChip />}
    </Default>
  );
}

export default Button;

const inactive = css`
  background-color: ${GRAY[40]};

  &:hover {
    background-color: ${GRAY[40]};
    cursor: not-allowed;
  }
`;

const arrowInactive = css`
  opacity: 55%;

  &:hover {
    background-color: ${WHITE};
    cursor: not-allowed;
  }
`;

const primary = css`
  background-color: ${VIOLET[1]};

  color: ${WHITE};

  &:hover {
    background-color: ${VIOLET[2]};
  }
`;

const secondary = css`
  background-color: ${WHITE};
  border: 1px solid ${GRAY[30]};

  color: ${VIOLET[1]};

  &:hover {
    background-color: ${VIOLET[8]};
  }
`;

const plain = css`
  ${secondary};

  color: ${BLACK[2]};

  &:hover {
    background-color: ${GRAY[15]};
  }
`;

const Default = styled.button<{
  $type: string;
  $width: string;
  $height: string;
  $fontSize: 'XL' | 'L' | 'M' | 'S';
  $fontBold: boolean;
  $active: boolean;
  $roundSize: 'L' | 'M' | 'S';
  $position: string | undefined;
  $right: string | undefined;
  $bottom: string | undefined;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  /* padding: 0 20px 0; */

  display: flex;
  justify-content: ${({ $type }) => ($type === 'dashboard' ? 'flex-start' : 'center')};
  align-items: center;
  gap: 12px;

  position: ${(props) => (props.$position ? props.$position : 'relative')};
  ${(props) => props.$right && `right: ${props.$right}`};
  ${(props) => props.$bottom && `bottom: ${props.$bottom}`};

  border-radius: ${(props) => ROUND_SIZE[`${props.$roundSize}`]};

  ${(props) => FONT_SIZE[`${props.$fontSize}`]};
  font-weight: ${({ $fontBold }) => ($fontBold ? '700' : null)};

  ${({ $type }) => {
    if ($type === 'primary') return primary;
    if ($type === 'secondary') return secondary;
    if ($type === 'plain' || 'dashboard') return plain;
  }};
  ${({ $active }) => ($active ? null : inactive)}
`;

const Arrow = styled.button<{ $type: string; $active: boolean }>`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${plain};
  border-radius: ${(props) => (props.$type === 'arrow-f' ? ' 0 4px 4px 0' : '4px 0 0 4px')};
  ${(props) => (props.$active ? null : arrowInactive)};

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 36px;
    height: 36px;
  }
`;

const LinkIcon = styled(ForwordIcon)`
  position: absolute;
  right: 20px;
`;
