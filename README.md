For this assignment I choose **express** as web framework. For testing I chose **mocha** and **chai**.

I chose to implement 4 GET endpoints for this solution - add, subtract, multiply, devide. I chose GET so we won't need a third party app to test.

We can pass the array as an query parameter and they can be found under /calculation route. eg /calculation/add?arr=[1,2,3,4,5]

I created a middleware for the calculation routes which checks if parameter arr exists and if it's in the correct format, as specified above. The server will respond with a 500 status and the specific error message.

In order to test the application you must follow the next steps:

1. Run **npm install** in the root folder
2. After the dependencies are installed, run **npm start**. Server should start on port 3000
3. Open a new browser page and access:

- http://localhost:3000/calculation/add?arr=[1,2,3,4,5]
- http://localhost:3000/calculation/subtract?arr=[1,2,3,4,5]
- http://localhost:3000/calculation/multiply?arr=[1,2,3,4,5]
- http://localhost:3000/calculation/devide?arr=[1,2,3,4,5]

4. For running the test suite run **npm test**

I tried to fit in the 2 hour time constraint. It took me ~ 2.5h with writing the README.
If I had more time I would enhance the test suite by adding more tests, and also enhance the middleware to make further checks on the query.
