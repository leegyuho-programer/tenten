import { ReactNode } from 'react';
import styled from 'styled-components';
import { Z_INDEX } from '@/styles/ZIndexStyles';
import useNotScroll from '@/hooks/useNotScroll';
import useModal from '@/hooks/useModal';
import ModalPortal from './ModalPortal';
import CloseIcon from "@/public/icon/crown.svg"

const { modalFrame_Mask, modalFrame_Body } = Z_INDEX;

interface Props {
  children: ReactNode;
  onClickClose: () => void;
}

function ModalFrame({ children, onClickClose }: Props) {
  const { isOpen } = useModal();

  useNotScroll();

  if(!isOpen) {
    return null;
  }

  return (
    <>
      <ModalPortal>
        <Mask onClick={onClickClose} />
        <Body>
          <CloseBtn alt="모달 닫기 버튼" onClick={onClickClose} />
          <Container>{children}</Container>
        </Body>
      </ModalPortal>
    </>
  );
}

export default ModalFrame;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${modalFrame_Mask};

  background-color: black;
  opacity: 0.4;
`;

const Body = styled.div`
  width: 360px;
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${modalFrame_Body};

  border-radius: 8px;
  background: white;
`;

const CloseBtn = styled(CloseIcon)`
  position: absolute;
  top: 16px;
  right: 16px;
  &:hover {
    cursor: pointer;
  }
`

const Container = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`