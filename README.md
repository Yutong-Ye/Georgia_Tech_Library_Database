# 📚 Georgia Tech Library System

A full-stack library management application built with:

- 🔧 **Backend**: Node.js + Express + MariaDB
- 🌐 **Frontend**: React.js

## 🚀 Features

- Add, edit, delete, and list books
- Connects to MariaDB database
- RESTful API with full CRUD support
- Clean and responsive React frontend

## 🛠️ Getting Started

### 1. Backend Setup

```bash
cd backend
npm install
node index.js

sudo mariadb -u root < backend/init.sql

## 📊 Entity Relationship Diagram (ERD)

<img src="https://www.mermaidchart.com/raw/9114e912-3e48-4a70-925b-b43555ae5fc9?theme=light&version=v0.1&format=svg" alt="Library ERD" width="800">


**Sample JSON Body:**
```json
{
  "isbn": "1234567890128",
  "title": "Sample Book 2",
  "author": "John Doe",
  "subject_area": "Computer Science",
  "description": "A test book for API.",
  "publish_date": "2025-01-01",
  "publisher": "OpenAI Press",
  "language": "English",
  "binding_type": "Hardcover",
  "edition": "1st",
  "is_lendable": true,
  "acquisition_status": "Available"
}
