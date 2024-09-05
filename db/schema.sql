DROP DATABASE IF EXISTS employed_db;
CREATE DATABASE employed_db;

\c employed_db;

CREATE TABLE department (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(30) UNIQUE NOT NULL
);


CREATE TABLE roles (
    roles_id SERIAL PRIMARY KEY,
    roles_title VARCHAR(30) UNIQUE NOT NULL,
    roles_salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(department_id)
);


CREATE TABLE employee (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) UNIQUE NOT NULL,
    last_name VARCHAR(30) UNIQUE NOT NULL,
    manager_id INTEGER,
    roles_id INTEGER NOT NULL,
    FOREIGN KEY (roles_id) REFERENCES roles(roles_id)
    
);