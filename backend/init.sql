-- Initialize database
DROP DATABASE IF EXISTS `library`;
CREATE DATABASE `library`;
USE `library`;

-- Books table
CREATE TABLE `books` (
  `isbn` VARCHAR(13) PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `author` VARCHAR(255) NOT NULL,
  `subject_area` VARCHAR(255),
  `description` TEXT,
  `publish_date` DATE,
  `publisher` VARCHAR(255),
  `language` VARCHAR(100),
  `binding_type` VARCHAR(100),
  `edition` VARCHAR(50),
  `is_lendable` BOOLEAN DEFAULT TRUE,
  `acquisition_status` VARCHAR(100) DEFAULT 'Available'
);

-- Sample data
INSERT INTO `books` VALUES
('1234567890123', 'Sample Book', 'John Doe', 'Computer Science', 'A test book', '2023-01-01', 'Tech Press', 'English', 'Hardcover', '1st', 1, 'Available');
