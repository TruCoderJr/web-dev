use delta_app;

create table user(
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    PASSWORD VARCHAR(50) NOT NULL
);