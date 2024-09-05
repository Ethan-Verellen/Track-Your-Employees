const inquirer = require('inquirer');
const { Pool } = require('pg');

const pool = new Pool (
    {
        user: 'postgres',
        password: 'Lavender2002',
        host: 'localhost',
        database: 'employed_db'
    },
    console.log('test')
)

inquirer.prompt([ 
    {
    type: 'list',
    message: ('What step do you wish to explore'),
    name: 'tye',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit'],
  },
]).then(( {tye} ) => {
    console.log(tye)
    if (tye == 'view all departments') {
        console.log('1')
        const view = "SELECT * FROM department";
        pool.query(view).then(( { rows }) => {
            console.table(rows);
            pool.end();
        })
    } else if (tye == 'view all roles') {
        console.log('2')
        const view = "SELECT * FROM roles";
        pool.query(view).then(( { rows }) => {
            console.table(rows);
            pool.end();
        })
    } else if (tye == 'view all employees') {
        console.log('3')
        const view = "SELECT * FROM employee";
        pool.query(view).then(( { rows }) => {
            console.table(rows);
            pool.end();
        })
    } else if (tye == 'add a department') {
        console.log('4')
        inquirer.prompt([ 
            {
            type: 'input',
            message: ('What do you wish to name the new department'),
            name: 'depname',
          },
        ]).then((data) => {
        const insert = `INSERT INTO department (department_name) VALUES ('${data.depname}');`;
        pool.query(insert);
        pool.end();
        })
    } else if (tye == 'add a role') {
        console.log('5')
        inquirer.prompt([ 
            {
            type: 'input',
            message: ('What do you wish to name the new Role?'),
            name: 'roletitle',
           },
           {
           type: 'input',
           message: ('What do you wish to pay the new Role?'),
           name: 'rolepay',
           },
           {
           type: 'input',
           message: ('What department do you want to put it in?'),
           name: 'roledep',
           },
        ]).then((data) => {
        const insert = `INSERT INTO roles (roles_title, roles_salary, department_id)
VALUES ('${data.roletitle}', '${data.rolepay}', '${data.roledep}');`;
        pool.query(insert);
        pool.end();
        })
    } else if (tye == 'add an employee') {
        console.log('6')
        inquirer.prompt([ 
            {
            type: 'input',
            message: ('What is the new employees first name?'),
            name: 'fname',
           },
           {
           type: 'input',
           message: ('What is the new employees first name?'),
           name: 'lname',
           },
           {
           type: 'input',
           message: ('What is the id for the manager?(can be null)'),
           name: 'mid',
           },
           {
           type: 'input',
           message: ('What is the role id?'),
           name: 'rid',
           },
        ]).then((data) => {
        const insert = `INSERT INTO employee (first_name, last_name, manager_id, roles_id)
VALUES ('${data.fname}', '${data.lname}', ${data.mid}, '${data.rid}');`;
        pool.query(insert);
        pool.end();
        })
    } else if (tye == 'update an employee role') {
        console.log('this does not work, sorry')
        inquirer.prompt([ 
            {
            type: 'input',
            message: ('What is the employee id'),
            name: 'eid',
            },
            {
            type: 'input',
            message: ('What is the new role id'),
            name: 'rid',
            },
        ]).then((data) => {
        const insert = `INSERT INTO department (department_name) VALUES ('${data.depname}')`;
        pool.query(insert);
        pool.end();
        })
    } else if (tye == 'exit') {
        console.log('8')
    }
})

