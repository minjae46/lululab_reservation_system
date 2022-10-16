import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getYear, getMonth, getDate, getHours, getMinutes } from 'date-fns';
import Calendar from '../../components/calander/Calendar';
import './Reservation.scss';

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());

  const selectedDay = String(
    getYear(startDate) +
      '-' +
      (getMonth(startDate) + 1) +
      '-' +
      getDate(startDate)
  );
  const selectedTime = String(
    ('0' + getHours(startDate)).slice(-2) +
      ':' +
      ('0' + getMinutes(startDate)).slice(-2)
  );

  const navigate = useNavigate();
  const register = () =>
    navigate('/register', {
      state: { selectedDay: selectedDay, selectedTime: selectedTime },
    });

  return (
    <div className="flex items-center justify-center flex-col m-auto my-36">
      <h1 className="title mb-10">병원 예약하기</h1>
      <h3 className="sub pb-5">예약 가능한 날짜와 시간을 선택해주세요.</h3>
      <form>
        <Calendar startDate={startDate} setStartDate={setStartDate} />
        <div className="w-56 flex justify-between my-12">
          <button className="commonBtn" onClick={register}>
            진료 예약
          </button>
          <button className="commonBtn" onClick={register}>
            검진 예약
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
