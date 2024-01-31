API Documentation - https://documenter.getpostman.com/view/27140962/2s9YytgLLr
<br>
Video Demo - [DEMO](https://mmmutgkp-my.sharepoint.com/:f:/g/personal/2022021245_mmmut_ac_in/Etot_SWYYyZFmQdPeFutaJYBOyCSQg_zk0lVpL7ETWFgDA?e=lROuXQ)

### Starting the Server
To start the backend server, follow these steps:

**Step 1: Install Dependencies**
- Run `npm install` to install the required dependencies for the backend.

**Step 2: Start the Server**
- Run `npm start` to launch the server using Nodemon, which automatically restarts the server when changes are made. If you don't have Nodemon installed, you can do so globally by running `npm i -g nodemon`

**Step 3: Setup Dependency **
- Replace the crediatals with your creaditals in config.env file (for reference i added my own creditals)
  
```
DATABASE = mongodb+srv://YOUR_USERNAME:<PASSWORD>@cluster0.bsvhsqp.mongodb.net/?retryWrites=true&w=majority
PASSWORD = YOUR_PASSWORD
PORT = 3003
```

# Create a Task
- **Endpoint:** `http://localhost:3003/api/v1/create-task`
- **Description:** Create your task with title and description
- **Body:**
  
```
{
    "title":"Nodejs",
    "description":"itegrate mongosb indexes and geosptail feature with Nodejs api"
    
}
```
https://github.com/manzil-infinity180/Assignment-TodoList/assets/119070053/92bbffd3-face-4839-b610-8531d1b35042

# Update a Task 
- **Endpoint:** `http://localhost:3003/api/v1/update-task/:id`
- **Description:** Update a task such as title , description and done(status of task) , if task is true then you can not do again as true but you can change it to false
  and doint `true` of done(status) `automatically`, categories as `completed`
- **Body:**

```
{
    
     "done":true
    
}
```


- when done(status) is true
  
https://github.com/manzil-infinity180/Assignment-TodoList/assets/119070053/7b99f5c8-4b57-4fef-aa18-f322c946703c


https://github.com/manzil-infinity180/Assignment-TodoList/assets/119070053/c5f2cc01-0ed5-4e87-9b57-51113a13e77f






# Get all Task 
- **Endpoint:** `http://localhost:3003/api/v1/all-task` or `http://localhost:3003/api/v1/all-task?categories=not-completed`
- **Description:**  Get your all task and also you can query using categories as completed or not-completed
  

https://github.com/manzil-infinity180/Assignment-TodoList/assets/119070053/962f8b7f-d1da-4d55-9cde-62d426fa63e6



# Delete a Task 
- **Endpoint:** `http://localhost:3003/api/v1/delete-task/:id`
- **Description:**  Delete your task



https://github.com/manzil-infinity180/Assignment-TodoList/assets/119070053/13b62e74-3bd8-42d2-952b-5c98423e8a57


# Unit Testing 
- Run the test - `npm run test`
<img width="1680" alt="Screenshot 2024-01-31 at 11 39 05 PM" src="https://github.com/manzil-infinity180/Assignment-TodoList/assets/119070053/504e57a5-c1cc-439e-96b0-a7a2407d499c">

  
  






