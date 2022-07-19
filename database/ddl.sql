-- Create a database for our demo.
-- CREATE DATABASE webstore;

-- Setup the database schema.
CREATE TABLE admin (
    id BIGSERIAL,
    fullname TEXT,
    gender TEXT,
    phone TEXT,
    age INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE merchant (

    id BIGSERIAL,
    name TEXT,
    description TEXT,
    category TEXT,
    address TEXT,
    phone TEXT,
    email TEXT,
    logo TEXT,
    image TEXT

);

CREATE TABLE product (

    id BIGSERIAL,
    name TEXT,
    description TEXT,
    prod_group TEXT,
    price INTEGER,
    quantity TEXT,
    email TEXT,
    logo TEXT,
    image TEXT

);

CREATE TABLE catagory (

    id BIGSERIAL,
    name TEXT,
    image TEXT

);

