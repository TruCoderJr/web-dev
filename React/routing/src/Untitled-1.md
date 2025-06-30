**Comprehensive Self-Study Guide for Python Programming**  
*Structured for progressive learning with hands-on practice and real-world applications.*

---

### **1. Introduction to Python Programming**  
**Topics Covered**:  
- **Python Overview**: History, simplicity, and applications (web dev, data science, automation).  
- **Installation**:  
  - Windows/macOS/Linux: Download from [python.org](https://www.python.org/).  
  - Verify installation with `python --version` in the terminal.  
- **Interpreters/IDEs**:  
  - IDLE (default), Jupyter (data exploration), VS Code (lightweight), PyCharm (advanced features).  

**Core Concepts**:  
- **Variables & Data Types**:  
  ```python
  age = 25            # int  
  price = 19.99       # float  
  name = "Alice"      # string  
  is_student = True   # boolean  
  ```  
- **Control Flow**:  
  - **If-Else**:  
    ```python  
    if temperature > 30:  
        print("Hot day!")  
    elif temperature > 20:  
        print("Pleasant day.")  
    else:  
        print("Cold day.")  
    ```  
  - **Loops**:  
    ```python  
    for i in range(5):          # Output: 0 1 2 3 4  
        print(i)  
    ```  

**Data Structures**:  
- **List**: `fruits = ["apple", "banana"]` (mutable).  
- **Tuple**: `coordinates = (3, 5)` (immutable).  
- **Dictionary**: `student = {"name": "Alice", "age": 25}` (key-value pairs).  

**Exercises**:  
1. Calculate the sum of even numbers from 1 to 100.  
2. Reverse a string without using built-in functions.  

**Mini-Project**: Build a **calculator** that takes user input for two numbers and performs arithmetic operations.

---

### **2. Functions and Object-Oriented Programming (OOP)**  
**Functions**:  
- **Definition**:  
  ```python  
  def greet(name):  
      return f"Hello, {name}!"  
  ```  
- **Lambda**: `square = lambda x: x * x`.  

**OOP Concepts**:  
- **Class & Object**:  
  ```python  
  class Dog:  
      def __init__(self, name):  
          self.name = name  
      def bark(self):  
          print("Woof!")  
  my_dog = Dog("Buddy")  
  my_dog.bark()  
  ```  
- **Inheritance**:  
  ```python  
  class Poodle(Dog):  
      def show_trick(self):  
          print(f"{self.name} does a backflip!")  
  ```  

**Error Handling**:  
```python  
try:  
    result = 10 / 0  
except ZeroDivisionError:  
    print("Cannot divide by zero!")  
```  

**File Handling**:  
```python  
with open("data.txt", "r") as file:  
    content = file.read()  
```  

**Exercises**:  
1. Write a function to check if a number is prime.  
2. Create a `BankAccount` class with deposit/withdraw methods.  

**Mini-Project**: Build a **library management system** to add/remove books using OOP.

---

### **3. Modules, Packages, and Database Connectivity**  
**Modules**:  
- **Import**: `import math` → `math.sqrt(16)`.  
- **Create a Module**: Save functions in `utils.py` and import with `import utils`.  

**Libraries**:  
- **Pandas**:  
  ```python  
  import pandas as pd  
  data = pd.read_csv("data.csv")  
  ```  

**Database Connectivity**:  
- **SQLite**:  
  ```python  
  import sqlite3  
  conn = sqlite3.connect("mydb.db")  
  cursor = conn.cursor()  
  cursor.execute("CREATE TABLE users (id INTEGER, name TEXT)")  
  ```  

**Exercises**:  
1. Use NumPy to compute the mean of a 2D array.  
2. Write a script to insert data into a MySQL table.  

**Mini-Project**: Analyze a **sales dataset** with Pandas to find top-selling products.

---

### **4. Flask Web Framework**  
**Setup**:  
```python  
from flask import Flask  
app = Flask(__name__)  

@app.route("/")  
def home():  
    return "Hello, Flask!"  
```  

**Jinja2 Templates**:  
```html  
<!-- templates/home.html -->  
<h1>Welcome, {{ username }}!</h1>  
```  

**Database Integration**:  
```python  
from flask_sqlalchemy import SQLAlchemy  
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydb.db"  
db = SQLAlchemy(app)  
```  

**Exercises**:  
1. Create a route that returns JSON data.  
2. Add user registration/login forms.  

**Mini-Project**: Build a **blog** with user authentication and CRUD operations.

---

### **5. Django Framework**  
**Project Setup**:  
```bash  
django-admin startproject mysite  
python manage.py startapp blog  
```  

**Django ORM**:  
```python  
class Post(models.Model):  
    title = models.CharField(max_length=100)  
    content = models.TextField()  
```  

**Admin Interface**:  
```python  
admin.site.register(Post)  
```  

**Exercises**:  
1. Create a view to display all blog posts.  
2. Add a comment system using ForeignKey.  

**Mini-Project**: Develop an **e-commerce site** with product listings and a cart.

---

### **6. RESTful API Development**  
**FastAPI Example**:  
```python  
from fastapi import FastAPI  
app = FastAPI()  

@app.get("/items/{item_id}")  
def read_item(item_id: int):  
    return {"item_id": item_id}  
```  

**Authentication (JWT)**:  
```python  
from fastapi.security import OAuth2PasswordBearer  
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")  
```  

**Exercises**:  
1. Create an API endpoint to update user profiles.  
2. Secure an endpoint with JWT.  

**Mini-Project**: Design a **weather API** that fetches data from an external service.

---

### **7. Version Control and Development Tools**  
**Git Basics**:  
```bash  
git init  
git add .  
git commit -m "Initial commit"  
git push origin main  
```  

**PyTest**:  
```python  
def test_add():  
    assert add(2, 3) == 5  
```  

**Exercises**:  
1. Create a GitHub repository for your Django project.  
2. Write a test for a Flask route.  

**Mini-Project**: Collaborate on a **team project** using GitHub and implement CI/CD.

---

**Additional Resources**:  
- **Books**: *Automate the Boring Stuff with Python* (beginner), *Fluent Python* (advanced).  
- **Communities**: Stack Overflow, Reddit’s r/learnpython.  
- **Cheat Sheets**: Python syntax, Pandas methods, Flask/Django routes.  

**Final Project**: Combine all skills to build a **portfolio website** with a blog, API integration, and database.  

--- 

This guide balances theory and practice, ensuring you build confidence through incremental challenges. Happy coding! 🐍