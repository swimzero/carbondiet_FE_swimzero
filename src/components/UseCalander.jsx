import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import moment from "moment";

const StyledCalendar = styled(Calendar)`
  max-width: 350px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid var(--festie-gray-400, #c8c8c8);

  .react-calendar__navigation__label > span {
    // 달력 상단 년/월 글씨 커스텀
    color: var(--festie-gray-800, #3a3a3a);
    font-family: SUIT Variable;
    font-size: 13px;
    font-weight: 500;
    line-height: 140%;
  }

  .react-calendar__month-view__days__day--weekend {
    color: var(--festie-gray-800, #3a3a3a);
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #58fa58;
    border-radius: 10px;
  }

  .react-calendar__tile--now {
    background: white;
    border: 1px solid var(--festie-gray-400, #c8c8c8);
    border-radius: 10px;
    color: var(--festie-gray-800, #3a3a3a);
  }

  .react-calendar__tile--active {
    background: #58fa58;
    color: white;
    border-radius: 10px;
  }
`;

const ModalDiv = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 350px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 50px auto;
  border-radius: 10px;
  background-color: #f0f0f0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export default function UseCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalState, setModalState] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setModalState(true);
    console.log(selectedDate);
  };

  return (
    <div>
      <StyledCalendar
        onChange={handleDateChange}
        value={selectedDate}
        formatDay={(locale, date) => moment(date).format("DD")}
      />
      {modalState && (
        <Modal
          modalState={modalState}
          setModalState={setModalState}
          selectedDate={selectedDate}
        />
      )}
    </div>
  );
}

const Modal = (props) => {
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };
  return (
    <ModalDiv>
      <CloseButton onClick={() => props.setModalState(false)}>X</CloseButton>
      <div>{formatDate(props.selectedDate)}</div>
      <div>아침</div>
      <div>점심</div>
      <div>저녁</div>
      <div>이날 쓴 탄소량</div>
      <div>이날 평균에 비해 아낀 탄소량</div>
    </ModalDiv>
  );
};
