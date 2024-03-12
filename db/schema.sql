\c data_wharehouse_dev;

DROP TABLE IF EXISTS lp_users;
CREATE TABLE lp_users (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email VARCHAR(200),
  phone VARCHAR(15),
  profile_img TEXT,
  profile_img_caption VARCHAR(2),
  dob_month INT,
  dob_day INT,
  dob_year INT,
  gender varchar(1),
  street TEXT,
  city TEXT,
  state VARCHAR(40),
  zip_code VARCHAR(5),
  date_created TIMESTAMP DEFAULT now()
);

DROP TABLE IF EXISTS lp_projects;
CREATE TABLE lp_projects (
  id SERIAL PRIMARY KEY,
  proj_name TEXT,
  start_date DATE,
  proj_owner INT,
  proj_img TEXT,
  proj_description TEXT,
  date_created TIMESTAMP DEFAULT now()
);

DROP TABLE IF EXISTS lp_proj_updates;
CREATE TABLE lp_proj_updates (
  id SERIAL PRIMARY KEY,
  proj_id INT,
  description TEXT,
  status VARCHAR(11),
  updated_by INT,
  date_created TIMESTAMP DEFAULT now()
);

DROP TABLE IF EXISTS lp_auth;
CREATE TABLE lp_auth (
  id SERIAL PRIMARY KEY,
  user_id INT,
  password_hash VARCHAR(15),
  admin_role BOOLEAN,
  date_created TIMESTAMP DEFAULT now()
);

DROP TABLE IF EXISTS lp_wod;
CREATE TABLE lp_wod (
  id SERIAL PRIMARY KEY,
  word TEXT,
  cat TEXT[],
  date_created TIMESTAMP DEFAULT now()
);


-- DROP TABLE IF EXISTS lp_permission;
-- CREATE TABLE lp_permissions (
--   id SERIAL PRIMARY KEY,
--   user_id INT,
--   admin BOOLEAN
-- );




-- Project Status: In Progress, On Hold, Delayed


-- psql -U postgres -f db/schema.sql
-- connect to postgress terminal
-- as user postgres
-- f file to run
-- file name of file to run