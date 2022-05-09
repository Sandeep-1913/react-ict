import classes from "./EmployeeList.module.css";
import React from "react";

function EmployeeList(props) {
  const employeeList = props.employee.map((item) => {
    return (
      <div
        key={item.EmpID}
        onClick={() => props.onClick(item)}
        className={classes.list}
      >
        Name: {item.name}({item.EmpID})
      </div>
    );
  });
  return <React.Fragment>{employeeList}</React.Fragment>;
}

export default EmployeeList;
