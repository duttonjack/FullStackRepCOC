DROP TABLE IF EXISTS business;
DROP TABLE IF EXISTS owner;

CREATE TABLE owner (
    id serial PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
);

CREATE TABLE business (
    id serial PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    num_employees INTEGER NOT NULL,
    owner_id INTEGER REFERENCES owner(id) ON DELETE CASCADE
);


INSERT INTO owner (name, age) VALUES
  ('Alice', 30),
  ('Bob', 28),
  ('Charlie', 35),
  ('Diana', 42),
  ('Eva', 27);

  INSERT INTO business (name, num_employees, owner_id) VALUES
  ('ABC Company', 50, 4),
  ('XYZ Inc.', 120, 3),
  ('123 Services', 30, 5),
  ('Best Widgets Co.', 80, 4),
  ('Tech Innovators', 150, 2),
  ('Green Solutions', 45, 5),
  ('Global Ventures', 200, 3),
  ('Sunrise Industries', 75, 4),
  ('City Logistics', 90, 2),
  ('Ocean Enterprises', 110, 5);