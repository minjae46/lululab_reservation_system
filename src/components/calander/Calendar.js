import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  let handleColor = time => {
    return time.getHours() > 12 ? 'text-success' : 'text-error';
  };

  return (
    <DatePicker
      showTimeSelect
      selected={startDate}
      onChange={date => setStartDate(date)}
      timeClassName={handleColor}
      locale={ko} // 한글로 변경
      dateFormat="yyyy.MM.dd (eee) hh:mm" // 시간 포맷 변경
      showPopperArrow={false} // 화살표 변경
      minDate={new Date()} // 오늘 날짜 전은 선택 못하게
    />
  );
};

export default Calendar;
