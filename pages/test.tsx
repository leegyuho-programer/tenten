import styled from 'styled-components';
import TextArea from '@/components/common/TextArea';

/**
 * 컴포넌트 실험용 페이지입니다. (컴포넌트 구현 완료 후 삭제 예정)
 */

export default function Test() {
  return (
    <Div>
      <TextArea />
    </Div>
  );
}

const Div = styled.div`
  margin-bottom: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
