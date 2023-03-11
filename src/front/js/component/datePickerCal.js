import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { Calendar } from "react-multi-date-picker";
import "../../styles/custom.css";

const DatePickerCal = () => {
  const [values, setValues] = useState(
    [1, 2, 3].map((number) =>
      new DateObject().set({
        day: number,
        hour: number,
        minute: number,
        // second: number,
      })
    )
  );
  // const CustomDateInput = ({ value, onClick, onChange }) => {
  //   <div className="input-group mb-3">
  //     <input
  //       className="form-control"
  //       name="schedule"
  //       type="text"
  //       value={value}
  //       onChange={onChange}
  //       onClick={onClick}
  //     ></input>
  //     <div className="input-group-append">
  //       <span className="input-group-text h-100" id="basic-addon2">
  //         <i className="fa-solid fa-calendar-days text-secondary"> </i>
  //       </span>
  //     </div>
  //   </div>
  // };
  const CustomInput = ({ value, onClick, onChange }) => (
    <input
      className="form-control h-100"
      name="schedule"
      type="text"
      value={value}
      onChange={onChange}
      onClick={onClick}
    ></input>
  );

  return (
    <div>
      <DatePicker
        value={values}
        customInput={<CustomInput />}
        onChange={setValues}
        format="MM/DD/YYYY HH:mm:ss"
        multiple
        plugins={[<TimePicker position="bottom" />, <DatePanel markFocused />]}
      />
    </div>
  );
};
export default DatePickerCal;
