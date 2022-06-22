const Employee = require("../models/models");

exports.getAll = (req, res) => {
  Employee.getAllEmployees((err, result) => {
    if (err) {
      res.send(err).status(404);
    } else {
      res.json(result);
    }
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  Employee.getEmployeeById(id, (err, result) => {
    if (err || !result.length) {
      res.status(400).json({ message: "Cannot Find Employee" });
    } else {
      res.json({ message: "Employee Found!!", data: result });
      console.log(result);
    }
  });
};

exports.create = (req, res) => {
  // picture, full_name, gender, position, date_of_birth, email, phone_number, address
  const id = Math.floor(Math.random() * 10000000000);
  const hired_on = new Date().toISOString().split("T")[0];
  const {
    picture,
    full_name,
    gender,
    position,
    date_of_birth,
    email,
    phone_number,
    address,
  } = req.body;
  if (
    req.body.picture === "" ||
    req.body.full_name === "" ||
    req.body.position === "" ||
    req.body.date_of_birth === "" ||
    req.body.email === "" ||
    req.body.phone_number === "" ||
    req.body.address === ""
  ) {
    res.status(400).json({ message: "Please fill all fields!!" });
  } else if (req.body.gender !== "Male" && req.body.gender !== "female") {
    res.status(400).json({ message: "Gender must be either male or female!!" });
  } else {
    const employeeReq = {
      id,
      picture,
      full_name,
      gender,
      position,
      date_of_birth,
      email,
      phone_number,
      address,
      hired_on,
    };
    Employee.addEmployee(employeeReq, (err, result) => {
      if (err) {
        return res.json(400, {
          error: 1,
          msg: "Cannot add employee",
        });
      } else {
        res.json({ message: "Employee Successfully Added!!", data: result });
        console.log(result);
      }
    });
  }
};
