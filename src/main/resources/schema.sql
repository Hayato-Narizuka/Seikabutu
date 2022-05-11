CREATE TABLE IF NOT EXISTS user (
  userId INTEGER(3) IDENTITY(1,1) PRIMARY KEY,
  userName VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  role INTEGER(1) NOT NULL,
  userStatus INTEGER(1) NOT NULL,
  requestedAt VARCHAR(19) NOT NULL
);

CREATE TABLE IF NOT EXISTS reissuePassword (

);

CREATE TABLE IF NOT EXISTS contract (
  contractId INTEGER(3) IDENTITY(1,1) PRIMARY KEY,
  userId INTEGER(3) NOT NULL,
  contractTime INTEGER(3) NOT NULL,
  startTime TIME(8) NOT NULL,
  breakTime TIME(8) NOT NULL,
  endTime TIME(8) NOT NULL,
  startDate DATE(10) NOT NULL,
  officeName VARCHAR(100) NOT NULL,
  endDate DATE(10)
);

CREATE TABLE IF NOT EXISTS month (
  monthId INTEGER(3) IDENTITY(1,1) PRIMARY KEY,
  contractId INTEGER(3) NOT NULL,
  year INTEGER(4) NOT NULL,
  month INTEGER(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS workTime (
  workTimeId INTEGER(3) IDENTITY(1,1) PRIMARY KEY,
  monthId INTEGER(3) NOT NULL,
  workDay DATE(10) NOT NULL,
  startTime DATETIME(8) NOT NULL,
  breakTime TIME(8) NOT NULL,
  endTime DATETIME(8) NOT NULL,
  workTimeMinute INTEGER(5) NOT NULL
);