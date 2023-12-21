import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import { FONT_16, FONT_20 } from '@/styles/FontStyles';
import { BLACK } from '@/styles/ColorStyles';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

function UserForm({ type }) {
  const [password, setPassword] = useState('');
  
  const isSignup = type === 'signup';
  
  return (
    <Root>
      <Container>
        <Logo src="/images/logo_main.svg" alt="Main logo" />
        <Word>{isSignup ? '첫 방문을 환영합니다!' : '오늘도 만나서 반가워요!'}</Word>
        <Form>
          <Input type="email" />
          {isSignup && <Input type="nickname" />}
          <Input type="password" isPassword/>
          {isSignup && <Input type="passwordConfirm" isPassword passwordCheck={password}/>}
          {isSignup && <Checkbox label="이용약관에 동의합니다." />}
          <Button type="primary" fontSize="XL" roundSize="L" active={false}>{isSignup ? '가입하기' : '로그인'}</Button>
          <Wrapper>
            {isSignup ? '이미 가입하셨나요?' : '회원이 아니신가요?'}{" "}
            <Link href={isSignup ? "/login" : "/signup"}>
              {isSignup ? '로그인하기' : '회원가입하기'}
            </Link>
          </Wrapper>
        </Form>
      </Container>
    </Root>
  );
}

export default UserForm;

const Root = styled.div`
    height: 100vh;
`;

const Container = styled.div`
    width: 100%;
    max-width: 520px;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Logo = styled.img`
  width: 200px;
  height: 279px;
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 120px;
    height: 167px;
  }
`;

const Word = styled.span`
    width: 189px;
    height: 24px;
    margin: 10px auto 38px;
    text-align: center;
    ${FONT_20};
`;

const Form = styled.form`
    width: 100%;
`;

const Wrapper = styled.div`
    margin-top: 24px;
    text-align: center;
    ${FONT_16};
    color: ${BLACK[2]};
`;
