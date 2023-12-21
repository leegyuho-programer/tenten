import { useState } from 'react';
import styled, { css } from 'styled-components';
import { GRAY, VIOLET, RED, BLACK } from '@/styles/ColorStyles';
import { FONT_16, FONT_14 } from '@/styles/FontStyles';
import Calendar from './Calendar';
import { validateSignInput } from '@/lib/utils/checkSign';
import { getPlaceholder } from '@/lib/utils/getPlaceholder';
import { getInputLabel } from '@/lib/utils/getInputLabel';
import EyeOff from '@/public/icon/visibility_off.svg';
import EyeOn from '@/public/icon/visibility.svg';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

interface InputProps {
  type: 'email' | 'password' | 'passwordConfirm' | 'title' | 'dueDate' | 'tag' | 'nickname';
  isPassword?: boolean;
  passwordCheck?: string;
  setPassword?: (value: string) => void;
}

function Input({
  type, // email, password, passwordConfirm 중 어떤 타입인지
  isPassword, // isPassword가 true라면 눈모양 아이콘이 보이도록
  passwordCheck, // passwordConfirm으로 쓰일 경우, password와 passwordConfirm이 같은지 확인하는 것 (password 값)
  setPassword, // 비밀번호가 setter 프로퍼티
}: InputProps) {
  const [passwordInvisible, setPasswordInvisible] = useState(true);
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const placeholder = getPlaceholder(type);
  const label = getInputLabel(type);

  const togglePasswordIcon = () => {
    setPasswordInvisible((prev) => !prev);
  };

  const handleInputFocusOut = () => {
    if (passwordCheck) {
      validateSignInput(type, value, setErrorMessage, passwordCheck);
    } else {
      validateSignInput(type, value, setErrorMessage);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setErrorMessage('');
    if (setPassword && type === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <>
      <Container $type={type === 'title' || type === 'tag' ? true : false}>
        <Label $bold={type === 'dueDate' || type === 'title' || type === 'tag' || type === 'nickname' ? true : false} htmlFor={type}>
          {label} {type === 'title' && <Span> *</Span>}
        </Label>
        {type === 'dueDate' ? (
          <Calendar placeholder={placeholder} />
        ) : (
          <InputBox
            id={type}
            placeholder={placeholder}
            type={
              type === 'email' || type === 'title' || type === 'tag' ? 'text' : passwordInvisible ? 'password' : 'text'
            }
            value={value}
            onChange={handleInputChange}
            onBlur={handleInputFocusOut}
            $error={errorMessage}
          />
        )}
        {isPassword &&
          (passwordInvisible ? (
            <EyeOffIcon alt="비밀번호 가리기 아이콘" onClick={togglePasswordIcon} />
          ) : (
            <EyeOnIcon alt="비밀번호 보이기 아이콘" onClick={togglePasswordIcon} />
          ))}
        {errorMessage && <ErrorMessage className="errorMessage">{errorMessage}</ErrorMessage>}
      </Container>
    </>
  );
}

export default Input;

const Icon = css`
  position: absolute;
  top: 42px;
  right: 13px;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div<{ $type: boolean }>`
  width: ${({ $type }) => ($type ? '450px' : '520px')};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 100%;
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;

const Label = styled.label<{ $bold: boolean }>`
  color: ${BLACK[2]};
  font-size: ${({ $bold }) => ($bold ? '1.8rem' : '1.6rem')};
  font-weight: ${({ $bold }) => ($bold ? '500' : '400')};
`;

const Span = styled.span`
  color: ${VIOLET[1]};
  font-size: 1.8rem;
  font-weight: 500;
`;

const InputBox = styled.input<{ $error: string }>`
  box-sizing: border-box;
  width: 100%;
  padding: 15px 16px;
  border: 1px solid ${(props) => (props.$error ? `${RED}` : `${GRAY[30]}`)};
  outline: none;
  border-radius: 8px;
  ${FONT_16};

  &:focus {
    border: 1px solid ${VIOLET[1]};
  }
`;

const EyeOffIcon = styled(EyeOff)`
  ${Icon}
`;

const EyeOnIcon = styled(EyeOn)`
  ${Icon}
`;

const ErrorMessage = styled.p`
  ${FONT_14};
  color: ${RED};
`;
