-- Drop the database if it already exists
DROP DATABASE IF EXISTS build_Link;

-- Create a new database named build_Link
CREATE DATABASE build_Link;

-- Use the newly created database
USE build_Link;

-- Users Table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    contact_info TEXT,
    password VARCHAR(255) NOT NULL
);

-- Contractors Table
CREATE TABLE Contractors (
    contractor_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    company_name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Subcontractors Table
CREATE TABLE Subcontractors (
    subcontractor_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    skills TEXT NOT NULL,
    certifications TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Job_Listings Table
CREATE TABLE Job_Listings (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    contractor_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    skills_required TEXT,
    budget DECIMAL(10,2),
    post_date DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    start_date DATE,
    deadline DATE,
    FOREIGN KEY (contractor_id) REFERENCES Contractors(contractor_id)
);

-- Applications Table
CREATE TABLE Applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT,
    subcontractor_id INT,
    application_date DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    FOREIGN KEY (job_id) REFERENCES Job_Listings(job_id),
    FOREIGN KEY (subcontractor_id) REFERENCES Subcontractors(subcontractor_id)
);

-- Messages Table
CREATE TABLE Messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    message_content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES Users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES Users(user_id)
);
