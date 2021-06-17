DROP DATABASE IF EXISTS employee_db;

-- Creates the DB database --
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  dept VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(40) NOT NULL,
  salary DECIMAL,
  dept_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(dept_id) REFERENCES departments(id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  dept_id INT,
  role_id INT NOT NULL,
  mangr_id INT,
  is_mangr BOOLEAN,
  PRIMARY KEY(id),
  FOREIGN KEY(dept_id) REFERENCES departments(id),
  FOREIGN KEY(role_id) REFERENCES roles(id),
  FOREIGN KEY(mangr_id) REFERENCES employees(id)
);
