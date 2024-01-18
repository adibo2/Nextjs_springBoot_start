# spring-drools-nextjs-demo
This is a demo full-stack application using [Spring Boot 3](https://spring.io), MySQL 8, Drools 7 and Next.js 13. 

This application serves demonstration-only purposes. It shows how one can integrate a Java powered backend via the Spring REST API with a modern frontend framework like Next.js.

It uses the [Decision Engine called Drools](https://www.drools.org) to perfrom some calculations when creating new objects via the frontend.

# Tech Stack
- **Backend**: Spring Boot v3, Java v17, Drools v7, MySQL v8
- **Frontend**: React v8, Next.js v13 (using the new [App-Router](https://nextjs.org/docs/app)), Tailwind v3


# Functionalities
With this application you can:
- **Data retrieval**: see a list of Product Orders in the database
- **Data creation**:create a new Product-Order via a form in the frontend while creating a customer associated to it
- **Using Decision Engines to perform tasks**: Drools will check the orderDate of an order and automatically set the processDate to the next workingDay that was specified in the code.

# Installation

1. Clone the repository: git clone https://github.com/JuliaZamaitat/spring-drools-nextjs-demo.git

2. Install the required dependencies for the frontend and backend:

  * Frontend: `cd frontend && npm install`
  * Backend: `cd backend && mvn install`

3. Set up a MySQL database and update the database configuration in the backend application properties. I used this following public docker image:

   `docker run --name mysql -e MYSQL_ROOT_PASSWORD=pw -p 3306:3306 -d mysql:8.0.28`

4. Start the frontend and backend servers:

  *  Frontend: `cd frontend && npm run dev` 
  *  Backend: `cd backend && mvn spring-boot:run`
 
# Contact

For any inquiries or questions, please reach out to the project maintainer:

* Name: Julia Zamaitat 
* Email: j.zamaitat@gmail.com


