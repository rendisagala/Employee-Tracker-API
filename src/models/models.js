const db = require("../../config/employee");

const Employee = (employee) => {
  this.id = employee.id;
  this.picture = employee.picture;
  this.full_name = employee.full_name;
  this.gender = employee.gender;
  this.position = employee.position;
  this.date_of_birth = employee.date_of_birth;
  this.email = employee.email;
  this.phone_number = employee.phone_number;
};

Employee.getAllEmployees = (data) => {
  db.query(`SELECT * FROM employee`, (err, res) => {
    if (err) {
      console.log("Cannot get all employees data");
      data(null, err);
    } else {
      console.log("Getting All Employee List ...");
      data(null, res);
    }
  });
};

Employee.addEmployee = (employeeReq, data) => {
  db.query(`INSERT INTO employee SET ?`, employeeReq, (err, res) => {
    if (err) {
      console.log(`Cannot add employee`);
      console.log(employeeReq);
      data(null, err);
    } else {
      console.log(`Employee Added!!`);
      data(null, res);
    }
  });
};

module.exports = Employee;
