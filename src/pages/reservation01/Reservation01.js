import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMonth, getDate, getYear } from 'date-fns';
import Calendar from '../reservation01/components/Calendar01';
import 'react-datepicker/dist/react-datepicker.css';
import './Reservation01.scss';

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [timeSelected, setTimeSelected] = useState('');

  const dateSelected = String(
    getYear(startDate) +
      '-' +
      (getMonth(startDate) + 1) +
      '-' +
      getDate(startDate)
  );

  const timeSelect = el => {
    setTimeSelected(el);
  };

  const navigate = useNavigate();
  const register = () => {
    navigate('/register', {
      state: { selectedDay: dateSelected, selectedTime: timeSelected },
    });
  };

  useEffect(() => {
    fetch('/data/reservation.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => setData(result.data));
  }, []);

  return (
    <div className="flex items-center justify-center flex-col m-auto my-36">
      <h1 className="title mb-10">병원 예약하기</h1>
      <h3 className="sub pb-5">예약 가능한 날짜와 시간을 선택해주세요.</h3>
      <form>
        <Calendar startDate={startDate} setStartDate={setStartDate} />
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
                      <div
                        className="time"
                        key={idx}
                        onClick={() => {
                          timeSelect(el);
                        }}
                      >
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
