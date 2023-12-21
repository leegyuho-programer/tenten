import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { FONT_16 } from '@/styles/FontStyles';

interface CheckboxProps {
  label: string;
}

function Checkbox({ label }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" checked={checked} onChange={handleCheckboxChange} />
      <label>{label}</label>
    </CheckboxContainer>
  );
}

export default Checkbox;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  ${FONT_16};
  margin: 24px 0 21px 0;
`;

const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
