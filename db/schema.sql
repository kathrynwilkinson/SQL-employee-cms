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
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  dept_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(dept_id) REFERENCES departments(id)
);

CREATE TABLE managers (
  id INT NOT NULL AUTO_INCREMENT,
  manager_fname VARCHAR(30) DEFAULT '' NOT NULL,
  manager_lname VARCHAR(30) DEFAULT '' NOT NULL,
  manager_title VARCHAR(30) DEFAULT 'TBD' NOT NULL,
  dept_id INT NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(dept_id) REFERENCES departments(id),
  FOREIGN KEY(role_id) REFERENCES roles(id)
);

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
