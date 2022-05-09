
import Card from "./Card.js";
import classes from "./EmployeeCard.module.css";

function EmployeeCard(props) {
  const employeeCard = { ...props.employee };
  return (
    <Card key={employeeCard.EmpID} >
      <div className={classes.top}>
        <img src={`${employeeCard.image}`} alt="Employee Profile pic" />
        <div>
          <h2>{employeeCard.name}</h2>
          <p>{employeeCard.Role}</p>
        </div>
      </div>
      <div className={classes.bottom}>
        <p>EmpID: {employeeCard.EmpID}</p>
        <p>DOJ: {employeeCard.DOJ}</p>
        <p>Total Exp: {employeeCard.TotalExp}</p>
        <p>Work Location: {employeeCard.Location}</p>
        <p>Technologies: {employeeCard.Technologies}</p>
      </div>
    </Card>
  );

}

export default EmployeeCard;
