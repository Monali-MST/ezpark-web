import { useContext, useEffect, useState } from "react";
import Countdown from "react-countdown";
import moment from "moment-timezone";

const Counter = (props) => {
  const [timing, setTiming] = useState(Date.now());
  const [isCompleted, setIsCompleted] = useState("");

  useEffect(() => {
    console.log(props.item);
    const [hours, minutes, seconds] = props.item.StartTime.split(":");
    const [ehours, eminutes, eseconds] = props.item.EndTime.split(":");

    var tempDate = props.item.BookedDate;
    console.log("tempdateee", props.item.BookedDate);
    const momentObj = moment(props.item.BookedDate).utcOffset("+05:30");

    console.log("moment", momentObj);

    const tempYear = momentObj.year();
    const tempMonth = momentObj.month() + 1; // Add 1 since getMonth() returns a zero-based index
    const tempDay = momentObj.date();

    var year = tempYear.toString();
    var month = tempMonth.toString();
    var day = tempDay.toString();

    console.log("Year:", year);
    console.log("Month:", month);
    console.log("Day:", day);

    const stimestamp = new Date(
      year,
      month - 1,
      day,
      hours,
      minutes,
      seconds
    ).getTime();
    const etimestamp = new Date(
      year,
      month - 1,
      day,
      ehours,
      eminutes,
      eseconds
    ).getTime();
    const freezTime = etimestamp + 900000;

    console.log("stimestamp", stimestamp);
    console.log("now", Date.now());
    console.log("etimestamp", etimestamp);
    console.log("frees", freezTime);
    console.log("iscompleted", isCompleted);

    if (Date.now() >= stimestamp && Date.now() < etimestamp) {
      var tempTimpStamp = etimestamp - Date.now();
      setTiming(tempTimpStamp);
      setIsCompleted("onGoing");
      console.log(setIsCompleted);
    } else {
      setTiming(0);

      if (Date.now() < stimestamp) {
        //console.log(Date.now(),stimestamp,etimestamp);
        setIsCompleted("pending");
      }

      if (Date.now() < freezTime && Date.now() > etimestamp) {
        setIsCompleted("Freeze");
      }

      if (Date.now() > etimestamp && Date.now() > freezTime) {
        setIsCompleted("finished");
      }
    }
  }, []);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      if (isCompleted === "Freeze") {
        return (
          <span>
            {hours}:{minutes}:{seconds}
          </span>
        );
      } else {
        return <Completionist />;
      }
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  const Completionist = () => {
    if (isCompleted === "finished") {
      return <span>Booking Over!</span>;
    } else if (isCompleted === "pending") {
      return <span>Start soon!</span>;
    } else {
      return <span>Waiting for confirmation!</span>;
    }
  };

  return (
    <div>
      <Countdown
        date={Date.now() + timing}
        daysInHours={true}
        renderer={renderer}
      />
    </div>
  );
};

export default Counter;
