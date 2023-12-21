import { useState } from 'react';
import styled from 'styled-components';
import ReactDatePicker, { registerLocale } from 'react-datepicker'; // ReactDatePicker 컴포넌트 가져오기
import 'react-datepicker/dist/react-datepicker.css';
// 출처: https://reactdatepicker.com/#example-filter-dates
// 출처: https://date-fns.org/
import { GRAY } from '@/styles/ColorStyles';
import CalendarIcon from '@/public/icon/calendar.svg';
import ko from 'date-fns/locale/ko'; // 한국어로
registerLocale('ko', ko); // 한국어로
const _ = require('lodash'); // _.range를 표현하기 위하여 사용
//  출처: https://blog.naver.com/PostList.naver?blogId=marsdo

interface Props {
  placeholder: string;
}

function Calendar({ placeholder }: Props) {
  const [selectDate, setSelectDate] = useState<Date | null>(null);
  console.log(selectDate);

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <CalendarBox>
      <CalendarIcon />
      <StyledDatePicker
        selected={selectDate}
        onChange={(date: Date) => setSelectDate(date)}
        dateFormat={'yyyy.MM.dd aa h:mm'}
        locale={'ko'}
        minDate={new Date()}
        filterTime={filterPassedTime}
        closeOnScroll
        showTimeSelect
        placeholderText={placeholder}
      />
    </CalendarBox>
  );
}

export default Calendar;

const CalendarBox = styled.div`
  width: 450px;
  height: 50px;
  padding: 15px 16px;
  border: 1px solid ${GRAY[30]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledDatePicker = styled(ReactDatePicker)`
  border: none;
  font-weight: 400;
  font-size: 1.6rem;
  background-color: transparent;
  color: #707070;
`;
