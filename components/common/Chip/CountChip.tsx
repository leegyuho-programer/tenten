import styled from "styled-components";

interface Props {
  number: string;
}

function CountChip({number}: Props) {
  return (
    <Container>
      <Content>{number}</Content>
    </Container>
  )
}

export default CountChip;

const Container = styled.div`
  padding: 3px 6px;
  display: inline-flex;
  align-items: center;
  background: #EEE;
  border-radius: 4px;
`;

const Content = styled.span`
  color: #787486;
`;