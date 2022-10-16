import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { getMonth, getDate, getYear } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './ReservationMy.scss';

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([]);

  console.log('데이타', data);

  const dateSelected = String(
    getYear(startDate) +
      '-' +
      (getMonth(startDate) + 1) +
      '-' +
      getDate(startDate)
  );

  const navigate = useNavigate();
  const register = () => navigate('/register');

  useEffect(() => {
    fetch('/data/reservation.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => setData(result.data));
  }, []);

  return (
    <div className="flex items-center justify-center flex-col m-auto my-36">
      <h1 className="title mb-10">병원 예약하기</h1>
      <h3 className="sub pb-5">예약 가능한 날짜와 시간을 선택해주세요.</h3>
      <form>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          locale={ko} // 한글로 변경
          dateFormat="yyyy. MM. dd" // 시간 포맷 변경
          showPopperArrow={false} // 화살표 변경
          minDate={new Date()} // 오늘 날짜 전은 선택 못하게
        />
        <div className="infoBox">
          <span>달력에서 날짜를 선택해 주세요.</span>
        </div>
        <div className="timeContainer">
          {data.map((el, idx) => {
            return (
              el.date === dateSelected && (
                <div className="box" key={idx}>
                  {el.time.map((el, idx) => {
                    return (
                      <div className="time" key={idx}>
                        {el}
                      </div>
                    );
                  })}
                </div>
              )
            );
          })}
        </div>

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
