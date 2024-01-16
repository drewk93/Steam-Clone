DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS reviews;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_hash VARCHAR NOT NULL,
    previous_password_hash JSON
);

CREATE TABLE games (
    game_id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR NOT NULL, // 
    developer VARCHAR NOT NULL,
    publisher VARCHAR NOT NULL,
    release_date DATE
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY NOT NULL, 
    recommended BOOLEAN NOT NULL, 
    review_date DATE NOT NULL, 
    content TEXT,
    game_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (game_id) REFERENCES games (game_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    CONSTRAINT unique_review UNIQUE (game_id, user_id)
);

-- Steam also has a review_helpful column, along with a review_funny column.
-- I will not implement review_helpful or review_funny into this schema because it's ...
-- ... not relevant to the component I'll be constructing.
-- Date standard notation is YYYY/MM/DD format, needs conversion to MM/DD/YYYY format.