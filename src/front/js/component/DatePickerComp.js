import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { Calendar } from "react-multi-date-picker";

const DatePickerComp = () => {
  const [values, setValues] = useState([
    new DateObject(),
    new DateObject().add(1, "day"),
  ]);
  return (
    <div>
      <Calendar
        value={values}
        onChange={setValues}
        multiple
        plugins={[<TimePicker />]}
      />
    </div>
  );
};
export default DatePickerComp;

// https://shahabyazdi.github.io/react-multi-date-picker/multiple/
// https://shahabyazdi.github.io/react-multi-date-picker/plugins/time-picker/
