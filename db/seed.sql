USE employee_db;
INSERT INTO departments(id, title)
VALUES
(001, "Sales"),
(002, "Marketing"),
(003, "Engineering"),
(004, "Finance"),
(005, "Legal"),
(009, "Education");
INSERT INTO roles(id, title, salary, dept_id)
VALUES
(40, "Sales Management", 60000, 001),
(41, "Sales Representative", 40000, 001),
(42, "Sales Intern", 20000, 001),
(50, "Marketing Management", 60000, 002),
(51, "Marketing Concept Team", 50000, 002),
(52, "Digital Marketing Specialist", 45000, 002),
(53, "Marketing Intern", 20000, 002),
(60, "Engineering Management", 90000, 003),
(61, "Senior Engineer", 80000, 003),
(62, "Engineering Intern", 25000, 003),
(70, "Account Management", 70000, 004),
(71, "Senior Accountant", 55000, 004),
(72, "Accountant", 55000, 004),
(73, "Accountant Intern", 22000, 004),
(80, "Corporate Counsel Management", 100000, 005),
(81, "Senior Corporate Counsel", 110000, 005),
(82, "Laywer", 65000, 005),
(90, "Education Management", 55000, 009);
INSERT INTO managers(id, first_name, last_name, title, dept_id, role_id)
VALUES
(4001, "Danielle", "Moro", "Sales Staff Manager",001, 40),
(5001, "Nicholas", "Moro", "Creative Concept Director",002, 50),
(5002, "Danielle", "Grosh", "Digital Marketing Director",002, 50),
(6001, "Josephine", "Karev", "Engineering Manager",003, 60),
(7001, "Alexander", "Karev", "Accounting Manager",004, 70),
(8001, "Meredith", "Grey", "Legal Director",005, 80),
(9000, "Derek", "Shepard", "Education Director",009, 90);
INSERT INTO employees(id, first_name, last_name, dept_id, role_id, manager_id)
VALUES
(4001, "Danielle", "Moro",001, 40, NULL),
(4101, "Lynette", "Price", 001, 41, 4001),
(4201, "Hugh", "Bailey", 001, 42, 9000),
(4202, "Dolores", "Schneider", 001, 42, 9000),
(5001, "Nicholas", "Moro",002, 50, NULL),
(5002, "Danielle", "Grosh",002, 50, NULL),
(5101, "Jeanette", "Watkins", 002, 51, 5001),
(5201, "Mike", "Web", 002, 52, 5001),
(5202, "Eileen", "Jensen", 002, 52, 5001),
(5301, "Lela", "Freeman", 002, 53, 9000),
(6001, "Josephine", "Karev", 003, 60, NULL),
(6101, "Oliver", "Higgins", 003, 61, 6001),
(6201, "Casey", "Cooper", 003, 62, 9000),
(6202, "Alan", "Zimmerman", 003, 62, 9000),
(7001, "Alexander", "Karev", 004, 70, NULL),
(7101, "Kim", "McCormick", 004, 71, 7001),
(7201, "Antonio", "Page", 004, 72, 7001),
(7202, "Hannah", "Porter", 004, 72, 7001),
(7301, "Andrew", "DeLuca", 004, 73, 9000),
(8001, "Meredith", "Grey", 005, 80, NULL),
(8101, "Bradley", "McLaughlin", 005, 81, 8001),
(8201, "Nancy", "Cobb", 005, 82, 8001),
(8202, "Seth", "Long", 005, 82, 8001),
(9000, "Derek", "Shepard" ,009, 90, NULL);
