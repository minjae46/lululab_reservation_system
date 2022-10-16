import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar01.scss';

const Calendar = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      locale={ko}
      dateFormat="yyyy. MM. dd"
      showPopperArrow={false}
      minDate={new Date()}
      inline
    />
  );
};

export default Calendar;
