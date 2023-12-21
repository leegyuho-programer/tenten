import styled from 'styled-components';

interface tempProps1 {
  content: string;
}

export function TempTagChip({ content }: tempProps1) {
  return <Div>{content}</Div>;
}

const Div = styled.div`
  padding: 4px 6px;
  border-radius: 4px;
  background: #f9eee3;
`;
