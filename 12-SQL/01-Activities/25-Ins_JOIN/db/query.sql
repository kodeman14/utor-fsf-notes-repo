-- SELECT *
-- FROM course_names;

-- SELECT *
-- FROM department;

SELECT course_names.id AS course_id, course_names.name AS course_name, department.id AS dept_id, department.name AS dept_name
FROM course_names
JOIN department ON course_names.department_id = department.id;
