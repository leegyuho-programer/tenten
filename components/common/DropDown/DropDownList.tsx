import { RefObject, SetStateAction } from 'react';
import styled from 'styled-components';
import { GRAY, VIOLET } from '@/styles/ColorStyles';
import CheckIcon from '@/public/icon/dropdown_check.svg';
import ModalPortal from '../Modal/ModalPortal';
import { statusCollection, userCollection } from '@/lib/constants/statusCollection';
import ToDoLargeIcon from '@/public/icon/todo_large.svg';
import OnProgressLargeIcon from '@/public/icon/onProgress_large.svg';
import DoneLargeIcon from '@/public/icon/done_large.svg';

interface Value {
  status: string;
  person: string;
}

interface Props {
  anchorRef: RefObject<HTMLElement>;
  setValue: (value: SetStateAction<Value>) => void;
  value: Value;
  type: 'status' | 'person' | 'kebab';
  handleDropDownClose: () => void;
}

function DropDownList({ anchorRef, setValue, value, type, handleDropDownClose }: Props) {
  const filteredUser = userCollection.filter((item) => item.name.includes(value.person));

  const handleClickOption = (value: string) => {
    if (type === 'status') {
      setValue((prev) => ({
        ...prev,
        status: value,
      }));
    }
    if (type === 'person') {
      setValue((prev) => ({
        ...prev,
        person: value,
      }));
    }
    handleDropDownClose();
  };

  return (
    <ModalPortal container={anchorRef.current}>
      <WrapperUl $isUser={filteredUser.length} $type={type}>
        {type === 'status' &&
          statusCollection.map((item) => {
            return (
              <WrapperLi key={item.id} onClick={() => handleClickOption(item.type)}>
                {value.status === item.type ? <CheckIcon /> : <TransparentBox />}
                {item.type === 'ToDo' && <ToDoLargeIcon />}
                {item.type === 'OnProgress' && <OnProgressLargeIcon />}
                {item.type === 'Done' && <DoneLargeIcon />}
              </WrapperLi>
            );
          })}
        {type === 'person' &&
          value.person &&
          filteredUser.map((item) => {
            return (
              <WrapperLi key={item.id} onClick={() => handleClickOption(item.name)}>
                {value.person === item.name ? <CheckIcon /> : <TransparentBox />}
                {item.name}
              </WrapperLi>
            );
          })}
        {type === 'kebab' && (
          <>
            <ModalPopLi>수정하기</ModalPopLi>
            <ModalPopLi>삭제하기</ModalPopLi>
          </>
        )}
      </WrapperUl>
    </ModalPortal>
  );
}

export default DropDownList;

const WrapperUl = styled.ul<{ $isUser: number; $type: string }>`
  width: ${({ $type }) => ($type === 'kebab' ? '93px' : '217px')};
  padding: ${({ $type }) => ($type === 'kebab' ? '6px' : null)};
  position: absolute;
  top: ${({ $type }) => ($type === 'kebab' ? '30px' : '55px')};
  right: ${({ $type }) => ($type === 'kebab' ? '10px' : null)};
  background-color: white;
  border: 1px solid ${GRAY[30]};
  border-radius: 6px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  ${({ $isUser }) => $isUser || `display: none`};
`;

const WrapperLi = styled.li`
  width: 100%;
  height: 45px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  background-color: white;
  border-radius: 6px;

  &:hover {
    background-color: ${GRAY[15]};
  }
`;

const TransparentBox = styled.div`
  width: 22px;
  height: 22px;
`;

const ModalPopLi = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: ${VIOLET[1]};
    background-color: ${VIOLET[8]};
  }
`;
