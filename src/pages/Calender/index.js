import React,{ useEffect, useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import clsx from 'clsx';
import { chageDay } from '../../config/redux/actions';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { makeStyles } from '@material-ui/core';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const useStyles = makeStyles(theme => ({
    eventColor: {
      backgroundColor: theme.palette.secondary.main,
      color: "black"
    }
  }));
  


function CalenderPage() {
    const {agenda} = useSelector(state =>state.todoReducer)
    const dispatch = useDispatch()
    const [events, setevents] = useState(agenda)
    const classes = useStyles();
    const newColor = classes.eventColor;
  const onEventResize = (data) => {
    console.log(data)
  };

  const onEventDrop = (data) => {
    dispatch(chageDay(data))
  };

  const onSelectEvent = (data) => {
    console.log(data);
  };
  console.log(newColor);
  return (
    <div style={{ display: "flex", height: "100%", padding:"20px"}}>
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={agenda}
          localizer={localizer}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          onSelectEvent={onSelectEvent}
          resizable
          eventPropGetter={
            (event, start, end, isSelected) => {
              return {
                className: newColor,
              };
            }
          }
          style={{ height: "100vh", width: "100%" }}
        />
    
    </div>
  );
}

export default CalenderPage
