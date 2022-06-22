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
  db.query(`SELECT * FROM employee`, (err, result) => {
    if (err) {
      data(null, err);
      throw err;
    } else {
      console.log("Getting All Employee List ...");
      data(null, result);
    }
  });
};

Employee.getEmployeeById = (id, data) => {
  db.query(`SELECT * FROM employee WHERE id = ?`, id, (err, result) => {
    if (err) {
      data(null, err);
      throw err;
    } else {
      console.log(`Finding Employee...`);
      data(null, result);
    }
  });
};

Employee.addEmployee = (employeeReq, data) => {
  db.query(`INSERT INTO employee SET ?`, employeeReq, (err, result) => {
    if (err) {
      data(null, err);
      throw err;
    } else {
      console.log(`Employee Added!!`);
      console.log(employeeReq);
      data(null, result);
    }
  });
};

module.exports = Employee;
