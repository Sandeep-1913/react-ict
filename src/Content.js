import React, { useState, useEffect } from "react";

import EmployeeList from "./EmployeeList";
import classes from "./Content.module.css";
import EmployeeCard from "./EmployeeCard";

function Content() {
  const [employee, setEmployee] = useState([]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    async function getEmpData() {
      const res = await fetch("empdetails.json");
      const data = await res.json();
      setEmployee(data);
    }
    getEmpData();
  }, []);
  const [showCard, setShowCard] = useState();
  const showCardData = (emp) => {
    setShowCard(emp);
    setIsShown(true);
  };

  return (
    <div className={classes.content}>
      <div className={classes.header2}>Employee List</div>
      <div className={classes.data}>
        <div className={classes.emplist}>
          <EmployeeList employee={employee} onClick={showCardData} />
        </div>
        <div className={classes.empcard}>
          {isShown && <EmployeeCard employee={showCard} />}
        </div>
      </div>
    </div>
  );
}

export default Content;
