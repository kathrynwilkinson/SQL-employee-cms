DROP DATABASE IF EXISTS employee_db;

-- Creates the DB database --
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department_table (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role_table (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY(department_id) REFERENCES department_table(id)
);

CREATE TABLE employee_table (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY(role_id) REFERENCES role_table(id)
  -- possibly add manager id foreign key reference
);
