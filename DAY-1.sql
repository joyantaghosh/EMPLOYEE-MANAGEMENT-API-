DROP DATABASE test;

--- basic table commands

CREATE TABLE school(
id int,
fname varchar(50),
lname varchar(50),
email varchar(100),
class_name varchar(50),
marks int
);

--- insert 
INSERT INTO school
values 
	(1,'shreya','ghosh','shreyaghosh@email.com','MCA-1',95),
	(2,'joyanta','ghosh','joyanta@email.com','BCA-2',94),
	(3,'suman','roy','suman@royemail.com','MCA-2',80),
	(4,'abhi','pal','abhipal@email.com','BCA-3',65);
INSERT INTO school
VALUES
  (5, 'Riya',  'Sharma',  '[email protected]',  'BCA-1', 88),
  (6, 'Aman',  'Verma',   '[email protected]',  'BCA-2', 76),
  (7, 'Neha',  'Singh',   '[email protected]', 'BCA-2', 82);

--select
SELECT * FROM school;

SELECT fname, lname, class_name FROM school;

SELECT * FROM school WHERE class_name='BCA-1';

--- update

UPDATE school
SET marks=31
WHERE id=3;

UPDATE school SET marks=marks+5 WHERE class_name='BCA-2';

--delete

DELETE FROM school WHERE id=3;

DELETE FROM school WHERE class_name='BCA-2';