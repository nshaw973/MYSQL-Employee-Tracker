//All the queries needed for each function//

//These 3 are for displaying the full tables
const viewAllEmployees = `SELECT  
employee.id,
employee.first_name,
employee.last_name,
role.title,
department.name AS department,
role.salary,
employee.manager_id AS manager
FROM department
JOIN role ON department.id = role.department_id
JOIN employee ON role.department_id = role_id
ORDER BY employee.id;`

const viewDepartments = `SELECT
department.name AS department_name,
department.id AS department_id
FROM department
ORDER BY department.id;`

const viewAllRoles = `SELECT
role.id AS role_id,
role.title AS role_title,
department.name AS department,
role.salary as salary
FROM role
JOIN department ON department.id = role.department_id
ORDER BY role_id;`

//These are for adding



module.exports = {
    viewAllEmployees,
    viewDepartments,
    viewAllRoles
}