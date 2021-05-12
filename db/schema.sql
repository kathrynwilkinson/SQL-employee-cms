DROP DATABASE IF EXISTS employee_db;

-- Creates the DB database --
CREATE DATABASE employee_db;
USE employee_db;

DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2),
  dept_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(dept_id) REFERENCES departments(id)
);

DROP TABLE IF EXISTS managers;
CREATE TABLE managers (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL,
  dept_id INT NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(dept_id) REFERENCES departments(id),
  FOREIGN KEY(role_id) REFERENCES roles(id)
);

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  dept_id INT NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(dept_id) REFERENCES departments(id),
  FOREIGN KEY(role_id) REFERENCES roles(id),
  FOREIGN KEY(manager_id) REFERENCES managers(id)
);
