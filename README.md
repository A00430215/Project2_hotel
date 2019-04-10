# Project2_hotel

1. Kshitij Prashar (A00)
2. Goutham Bho
3. Sravani Madala
4. Sidharth Bhalla
5. Chaitanya Varma ()
6. Nishant Malhotra(A00430215)

Description:
This project has 2 sub projects which interacts with each other via REST web services. First one is frontend application, which is written in Angular and Bootstrap.
Second one is backend project which exposes REST APIIs for angular application to consume. The backend is written in C#/.NET. The database used is SQL Server.

Running the application:

1. frontend - 
  npm install(first time user)
  ng serve --open 
  
2. backend -
    For backend we used code first approch, where the tables are auto generated based on the models used.
    So in your SSMS create a schema with : Create Database Hotel Application
    Then inside package console of Visual Studio:
    Write following commands:
    (i). Add-Migration DotNetProjectBackend.Model.ApplicationContext
    (ii). update-database
    

