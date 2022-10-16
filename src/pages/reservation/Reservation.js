import { useNavigate } from 'react-router-dom';
import Calendar from '../../components/calander/Calendar';
import './Reservation.scss';

const Reservation = () => {
  const navigate = useNavigate();
  const register = () => navigate('/register');

  return (
    <div className="flex items-center justify-center flex-col m-auto my-36">
      <h1 className="title mb-10">병원 예약하기</h1>
      <h3 className="sub pb-5">예약 가능한 날짜와 시간을 선택해주세요.</h3>
      <form>
        <Calendar />
        <div class="w-56 flex justify-between my-12">
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
