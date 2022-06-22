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
  this.address = employee.address;
};

Employee.getAllEmployees = (data) => {
  db.query(`SELECT * FROM employee`, (err, result) => {
    if (err) {
      data(null, err);
      throw err;
    } else {
      console.log("Getting All Employee...");
      data(null, result);
    }
  });
};

Employee.getEmployeeById = (id, data) => {
  db.query(`SELECT * FROM employee WHERE id=?`, id, (err, result) => {
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
      console.log(`Adding Employee...`);
      console.log(employeeReq);
      data(null, result);
    }
  });
};

Employee.updateEmployee = (id, employeeReq, data) => {
  db.query(
    `UPDATE employee SET picture=?, position=?, email=?, phone_number=?, address=? WHERE id=?`,
    [
      employeeReq.picture,
      employeeReq.position,
      employeeReq.email,
      employeeReq.phone_number,
      employeeReq.address,
      id,
    ],
    (err, result) => {
      if (err) {
        data(null, err);
        throw err;
      } else {
        console.log(`Updating Employee...`);
        console.log(employeeReq);
        data(null, result);
      }
    }
  );
};

module.exports = Employee;
