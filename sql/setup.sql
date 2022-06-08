-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists cats;

CREATE table cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    year INT NOT NULL, 
    lives INT NOT NULL,
    isSidekick BOOLEAN NOT NULL
);

INSERT INTO cats (name, type, url, year, lives, isSidekick) VALUES
('Felix', 'Tuxedo', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png', 1982, 3, FALSE),
('Felix', 'Tuxedo', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png', 1982, 3, FALSE);