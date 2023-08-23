CREATE DATABASE database_01_hieu;

use database_01_hieu;

CREATE TABLE courses (
    id int NOT NULL,
    name varchar(255) NOT NULL,
    price float,
    detail text,
    teacher_id int NOT NULL,
    active int,
    created_at timestamp,
    updated_at timestamp
);

ALTER TABLE courses ADD COLUMN description text NOT NULL AFTER price;

ALTER TABLE courses CHANGE COLUMN detail content text NOT NULL;


CREATE TABLE teacher (
    id int NOT NULL,
    name varchar(255) NOT NULL,
    bio text NULL,
    created_at timestamp,
    updated_at timestamp
);

INSERT INTO teacher(id, name, bio, created_at, updated_at) VALUES 
(1, 'teacher1', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'teacher2', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'teacher3', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO courses(id, name, price, description, content, teacher_id, active, created_at, updated_at) VALUES
(1, 'course1', 100, 'desc1', 'content1', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'course2', 200, 'desc2', 'content2', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 'course3', 300, 'desc3', 'content3', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(4, 'course4', 100, 'desc4', 'content4', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(5, 'course5', 500, 'desc5', 'content5', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(6, 'course6', 1000, 'desc6', 'content6', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(7, 'course7', 300, 'desc7', 'content7', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(8, 'course8', 300, 'desc8', 'content8', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(9, 'course9', 300, 'desc9', 'content9', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

UPDATE courses SET name = "NEW COURSE 1", price = 150, updated_at = CURRENT_TIMESTAMP() WHERE id = 1;
UPDATE courses SET name = "NEW COURSE 2", price = 330, updated_at = CURRENT_TIMESTAMP() WHERE id = 2;
UPDATE courses SET name = "NEW COURSE 3", price = 499, updated_at = CURRENT_TIMESTAMP() WHERE id = 3;
UPDATE courses SET name = "NEW COURSE 4", price = 111, updated_at = CURRENT_TIMESTAMP() WHERE id = 4;
UPDATE courses SET name = "NEW COURSE 5", price = 299, updated_at = CURRENT_TIMESTAMP() WHERE id = 5;
UPDATE courses SET name = "NEW COURSE 6", price = 599, updated_at = CURRENT_TIMESTAMP() WHERE id = 6;
UPDATE courses SET name = "NEW COURSE 7", price = 500, updated_at = CURRENT_TIMESTAMP() WHERE id = 7;
UPDATE courses SET name = "NEW COURSE 8", price = 555, updated_at = CURRENT_TIMESTAMP() WHERE id = 8;
UPDATE courses SET name = "NEW COURSE 9", price = 999, updated_at = CURRENT_TIMESTAMP() WHERE id = 9;


UPDATE teacher SET bio = "NEW BIO 1", updated_at = CURRENT_TIMESTAMP() WHERE id = 1;
UPDATE teacher SET bio = "NEW BIO 2", updated_at = CURRENT_TIMESTAMP() WHERE id = 2;
UPDATE teacher SET bio = "NEW BIO 3", updated_at = CURRENT_TIMESTAMP() WHERE id = 3;

SELECT * FROM teacher;
SELECT * FROM courses;



