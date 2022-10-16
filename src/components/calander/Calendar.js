import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { getMonth, getDate, getDay } from 'date-fns';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.scss';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  //const [data, setData] = useState([]);

  let handleColor = time => {
    return time.getHours() > 12 ? 'text-success' : 'text-error';
  };

  const filterPassedTime = time => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const selectTime = props => {
    let Days = ['일', '월', '화', '수', '목', '금', '토'];
    let Month = getMonth(startDate) + 1;
    let Date = getDate(startDate);
    let Day = Days[getDay(startDate)];
    // 오브젝트는 전달 안돼서 string으로 변환
    props.setClubTime(String(Month + '.' + Date + ' (' + Day + ')'));
  };

  // useEffect(() => {
  //   fetch('/data/reservation.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => setData(result.data));
  // }, []);

  return (
    <DatePicker
      showTimeSelect
      selected={startDate}
      onChange={date => setStartDate(date)}
      timeClassName={handleColor}
      locale={ko} // 한글로 변경
      dateFormat="yyyy. MM. dd (eee) hh:mm" // 시간 포맷 변경
      showPopperArrow={false} // 화살표 변경
      minDate={new Date()} // 오늘 날짜 전은 선택 못하게
      selectTime={selectTime}
      filterTime={filterPassedTime}
      timeIntervals={60} // 인터벌 1시간을 설정
      minTime={setHours(setMinutes(new Date(), 0), 9)} // 병원 시작 시간
      maxTime={setHours(setMinutes(new Date(), 0), 18)} // 병원 마감 시간
    />
  );
};

export default Calendar;
