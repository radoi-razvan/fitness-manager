<div id="top"></div>

# FitMan

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#main-features">Main Features</a></li>
        <li><a href="#integrated-services">Integrated Services</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#visuals">Visuals</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#development-team">Development Team</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![main_page.jpg][main-page]

A management application where owners can manage their own gyms (post gyms, add courses to gyms, add exercises and trainers to courses) and clients can apply for different types of gyms memberships. Used technologies: ASP.NET Core, C#, SQL Server, HTML, CSS, Bootstrap, JavaScript, React, Firebase.

- The user can be a gym owner or a gym member/client
- The user can register and login
- If the user is a gym owner he can add a gym and perform actions like update and delete on gyms, courses, exercises and trainers only if he owns the current gym  
- If the user is a gym member/client he can apply for different types of gyms memberships/courses or he can cancel memberships/courses
- If the user is a gym owner he can choose to display only his owned gyms
- If the user is a gym owner he can upload images of gyms, courses and trainers
- Both the owner and the client can see the total gym members and total course members

<p align="right">(<a href="#top">back to top</a>)</p>


### Main Features

- Gyms, gym courses, exercises and trainers display
- Register
- Login/Logout
- There are two types of accounts, gym owner and gym member/client
- The gym owner can perform CRUD (Create, Read, Update, Delete) operations on gyms, gym courses, exercises and trainers 
- The gym owner can perform CRUD operations only on his owned gyms, not on gyms of other owners
- The gym owner can display only his owned gyms
- The gym owner can upload images of gyms, courses and trainers
- A gym member/client can apply for gym memberships/courses
- A gym member/client can cancel gym memberships/courses
- Total gym members and total course members display

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Back End:
* [ASP .NET Core][asp-net-core]
* [C#][c#]

Front End:
* [HTML][html]
* [CSS][css]
* [JavaScript][js]
* [React.js][react]
* [Bootstrap][bootstrap]

Database Management:
* [Microsoft SQL Server][msql-server]
* [Microsoft SQL Server Management Studio][ssms]

IDE:
* [Microsoft Visual Studio][visual-studio]
* [Microsoft Visual Studio Code][visual-studio-code]

<p align="right">(<a href="#top">back to top</a>)</p>

### Integrated Services
Firebase:
* [Firebase][firebase]

<p align="right">(<a href="#top">back to top</a>)</p>

### Visuals

Swagger page:

![swagger_view.jpg][swagger-view]

Register Page:

![register.jpg][register]

Login Page:

![login.jpg][login]

Client Gyms Page:

![client_gyms_view.jpg][client-gyms-view]

Client Courses Page:

![client_courses_view.jpg][client-courses-view]

Owner Gyms Page:

![owned_gym.jpg][owned-gym]

Owner Owned Gyms:

![owned_gyms_only.jpg][owned-gyms-only]

Add Gym Form:

![add_gym_form.jpg][add-gym-form]

Edit Gym Form:

![edit_gym_form.jpg][edit-gym-form]

Owner Courses Page:

![owned_courses.jpg][owned-courses]

Add Course Form:

![add_course_form.jpg][add-course-form]

Edit Course Form:

![edit_course_form.jpg][edit-course-form]

Owner Exercises Page:

![owned_exercises.jpg][owned-exercises]

Add Exercise Form:

![add_exercise_form.jpg][add-exercise-form]

Edit Exercise Form:

![edit_exercise_form.jpg][edit-exercise-form]

Owner Trainers Page:

![owned_trainers.jpg][owned-trainers]

Add Trainer Form:

![add_trainer_form.jpg][add-trainer-form]

Edit Trainer Form:

![edit_trainer_form.jpg][edit-trainer-form]

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Installation

- Create a database.
- In Visual Studio update the database from the Package Manager Console.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

- In Visual Studio run the backend project with IIS Express.
- In Visual Studio Code type the following command in terminal: `npm install react-scripts --save` then run the frontend project by typing the following command: `npm start`.

<p align="right">(<a href="#top">back to top</a>)</p>


## Development Team

* [Radoi Razvan's GitHub][radoi-razvan]
* [Alex Moraru's GitHub][AlexMoraru97]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[asp-net-core]: https://dotnet.microsoft.com/en-us/learn/aspnet/what-is-aspnet-core
[ef-core]: https://docs.microsoft.com/en-us/ef/core/
[c#]: https://docs.microsoft.com/en-us/dotnet/csharp/
[html]: https://html.com/
[css]: https://www.w3.org/Style/CSS/Overview.en.html
[js]: https://www.javascript.com/
[react]: https://reactjs.org/
[bootstrap]: https://getbootstrap.com
[msql-server]: https://www.microsoft.com/en-us/sql-server/sql-server-2019
[ssms]: https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15
[visual-studio]: https://visualstudio.microsoft.com/
[visual-studio-code]: https://code.visualstudio.com/

[radoi-razvan]: https://github.com/radoi-razvan
[AlexMoraru97]: https://github.com/AlexMoraru97

[firebase]: https://firebase.google.com/

[swagger-view]: project_photos/swagger_view.jpg
[main-page]: project_photos/main_page.jpg
[register]: project_photos/register.jpg
[login]: project_photos/login.jpg
[client-gyms-view]: project_photos/client_gyms_view.jpg
[client-courses-view]: project_photos/client_courses_view.jpg
[owned-gym]: project_photos/owned_gym.jpg
[owned-gyms-only]: project_photos/owned_gyms_only.jpg
[add-gym-form]: project_photos/add_gym_form.jpg
[edit-gym-form]: project_photos/edit_gym_form.jpg
[owned-courses]: project_photos/owned_courses.jpg
[add-course-form]: project_photos/add_course_form.jpg
[edit-course-form]: project_photos/edit_course_form.jpg
[owned-exercises]: project_photos/owned_exercises.jpg
[add-exercise-form]: project_photos/add_exercise_form.jpg
[edit-exercise-form]: project_photos/edit_exercise_form.jpg
[owned-trainers]: project_photos/owned_trainers.jpg
[add-trainer-form]: project_photos/add_trainer_form.jpg
[edit-trainer-form]: project_photos/edit_trainer_form.jpg