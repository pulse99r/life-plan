\c data_wharehouse_dev;

INSERT INTO lp_users (first_name, last_name, email, phone, profile_img, dob_month, dob_day, dob_year) VALUES
( 'Jayden', 'Whitehall', 'jadens@reflections.com', '646-729-2120', 'https://madhu.seas.harvard.edu/img/mugshot-12.jpg',9,21, 1962 ),
( 'Madhu', 'Sudan', 'madhus@reflections.com', '212-212-2120', 'https://madhu.seas.harvard.edu/img/mugshot-12.jpg', 6,2, 1965 ),
( 'John', 'Goodman', 'johng@reflections.com', '212-212-2121', 'https://avatars.githubusercontent.com/u/16713737?v=4', 9,21, 1965 ),
( 'Wes', 'Reid', 'wesr@reflections.com', '212-212-2123', 'https://avatars.githubusercontent.com/u/1316902?v=4', 7,26, 1965 ),
( 'Tammy', 'Wynett', 'tammy@reflections.com', '212-212-2124', 'https://avatars.githubusercontent.com/u/1316902?v=4', 7,5, 1966 ),
( 'Abbie', 'Normal', 'abbie@reflections.com', '212-212-2125', 'https://guardian.ng/wp-content/uploads/2018/11/o-MOTHER-AND-BABY-facebook.jpg', 1,21, 1962 ),
( 'Barbie', 'Myslak', 'barbie@reflections.com', '212-212-2126', 'https://avatars.githubusercontent.com/u/1316902?v=4', 2,29, 1960 ),
( 'Rachel', 'Feldman', 'rachelf@reflections.com', '212-212-2127',  'https://www.linkedin.com/in/rachel-f-3b7ab858/overlay/photo/', 3,12, 1971 ),
( 'Anita', 'Franklyn', 'anita@reflections.com', '212-212-2127',  'https://www.linkedin.com/in/anita-f-3b7ab858/overlay/photo/', 4,21, 1988 ),
( 'Angela', 'Franklyn', 'angela@reflections.com', '212-212-2127',  'https://www.linkedin.com/in/angela-f-3b7ab858/overlay/photo/', 5,18, 1990 ),
( 'Janice', 'Walker', 'janicew@reflections.com', '212-212-2127', 'https://www.linkedin.com/in/janice-f-3b7ab858/overlay/photo/', 6,8, 1993 ),
( 'Adam', 'Selene', 'adam@reflections.com', '212-212-2127', 'https://www.linkedin.com/in/adam-f-3b7ab858/overlay/photo/', 9,13, 1996 ),
( 'Debbie', 'Warren', 'debbie@reflections.com', '212-212-2127', 'https://www.linkedin.com/in/debbie-f-3b7ab858/overlay/photo/', 10,29, 1999 ),
( 'Kaley', 'Cuoco', 'kaley@reflections.com', '212-212-2127', 'https://metro.co.uk/wp-content/uploads/2023/08/SEC_166893054-5b0c.jpg?quality=90&strip=all&zoom=1&resize=644%2C338', 7, 31, 2011 ),
( 'Annette', 'Flemming', 'annette@reflections.com', '212-212-2127', 'https://www.linkedin.com/in/annette-f-3b7ab858/overlay/photo/', 8, 18, 2001 ),
( 'Helen', 'Brown', 'helen@reflections.com', '212-212-2127', 'https://www.linkedin.com/in/Janice-f-3b7ab858/overlay/photo/', 9, 10, 2002 ),
( 'Rachel', 'Green', 'rachelG@reflections.com', '212-212-2127', 'https://www.linkedin.com/in/Janice-f-3b7ab858/overlay/photo/', 11, 21, 2005 );

INSERT INTO lp_projects (proj_name, start_date, proj_owner, proj_img, proj_description) VALUES ('Guitar Lesson', '03-01-2024', 5, 'https://avatars.githubusercontent.com/u/1316902?v=4', 'A project management system that allows minimal tracking of project activity. MVP involves users being able to register an account, login, and add project entries, as well as crud operations for projects.' 
),
('Class Notes', '03-01-2024', 5, 'https://avatars.githubusercontent.com/u/1316902?v=4', 'A system for taking notes on JS keywords and methods as they''re encountered while studying.' 
),
('Quip Revolution', '03-01-2024', 5, 'https://avatars.githubusercontent.com/u/1316902?v=4', 'An app for managing music tours. MVP involves being able CRUD for people, tour events, venues and tickets sales.' 
),
('Rooms', '2024-03-06T05:00:00.000Z', 4, 'https://avatars.githubusercontent.com/u/1316902?v=4', 'Imagine a private room, no ads, no intrusions from the outside world.  If someone wants to vis your room they can knock or ring your doorbell.  You go to the window look out to see who''s there, then have the option to close the window,(which denies entry), open the door to admit them, or message them to offer an alternate time for a meeting. Meanwhile, although the outside world can''t get in, you can open a portal to YOUR library, Your favorite deliver service, travel agent or ride-share, or chat with friends and family!  That''s Rooms!'
);

INSERT INTO lp_auth (user_id, password_hash, admin_role) VALUES
( 1, 'abc123', false ),
( 2, 'abc123', false ),
( 3, 'abc123', false ),
( 4, 'abc123', false ),
( 5, 'abc123', false ),
( 6, 'abc123', false ),
( 8, 'abc123', false ),
( 9, 'abc123', false ),
( 10, 'abc123', false ),
( 11, 'abc123', false ),
( 12, 'abc123', false );



-- psql -U postgres -f db/seed.sql