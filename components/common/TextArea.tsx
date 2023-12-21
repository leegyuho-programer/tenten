import dynamic from 'next/dynamic';
import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { FONT_16 } from '@/styles/FontStyles';
import 'react-quill/dist/quill.snow.css';
import { VIOLET } from '@/styles/ColorStyles';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function TextArea() {
  const [value, setValue] = useState('');
  const [violet, setViolet] = useState(false);

  const handleReactQuillFocus = () => {
    setViolet(!violet);
  };

  const handleReactQuillBlur = () => {
    setViolet(!violet);
  };

  return (
    <Wrapper>
      <Label>댓글</Label>
      <StyledReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        onFocus={handleReactQuillFocus}
        onBlur={handleReactQuillBlur}
        $violet={violet}
      />
      <Button
        type="secondary"
        fontSize="S"
        width="83px"
        height="32px"
        active={true}
        roundSize="S"
        position="absolute"
        right="10px"
        bottom="10px"
      >
        입력
      </Button>
    </Wrapper>
  );
}

export default TextArea;

const Wrapper = styled.div`
  width: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  ${FONT_16}
`;

const StyledReactQuill = styled(ReactQuill)<{ $violet: boolean }>`
  width: 450px;

  .ql-snow {
    ${(props) => props.$violet && `border: 1px solid ${VIOLET[1]}`};
  }

  .ql-toolbar {
    border-radius: 6px 6px 0px 0px;
  }

  .ql-container {
    border-radius: 0px 0px 6px 6px;
  }

  .ql-editor {
    min-height: 110px;
    padding-bottom: 42px;
  }
`;
