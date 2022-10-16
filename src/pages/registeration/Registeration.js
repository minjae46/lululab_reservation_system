import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Registeration.scss';

const Reservation = () => {
  const navigate = useNavigate();
  const confirmReservation = () => {
    alert('예약 완료되었습니다. \n 예약번호 : 123456151');
    navigate('/list');
  };

  const location = useLocation();
  const selectedDay = location.state.selectedDay;
  const selectedTime = location.state.selectedTime;

  console.log('선택날짜', selectedDay);
  console.log('선택시간', selectedTime);

  return (
    <div className="flex items-center justify-center flex-col m-auto my-20">
      <h1 className="title mb-10">진료 예약하기</h1>
      <h3 className="sub pb-5">개인정보를 입력해주세요.</h3>
      <span>예약 날짜 : {selectedDay}</span>
      <span>예약 시간 : {selectedTime}</span>
      <form className="w-96">
        <div className="my-12">
          <div className="py-5">
            <p className="pb-3">이름</p>
            <input />
          </div>
          <div className="py-5">
            <p className="pb-3">생년월일</p>
            {/* 숫자 map 돌릴 예정 */}
            <div className="flex justify-between">
              <div>
                <select name="year">
                  <option value="">1990년</option>
                </select>
              </div>
              <div>
                <select name="month">
                  <option value="">1월</option>
                </select>
              </div>
              <div>
                <select name="day">
                  <option value="">1일</option>
                </select>
              </div>
            </div>
          </div>
          <div className="py-5">
            <p className="pb-3">전화번호</p>
            <div className="flex justify-between">
              <input />
            </div>
          </div>
          <button className="commonBtn w-full" onClick={confirmReservation}>
            예약하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
