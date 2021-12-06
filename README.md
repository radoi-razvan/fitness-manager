# El Proyecte Grande - Sprint 4

## Story

As your Codecool Journey comes closer to its conclusion, the time has come for a final Teamwork Project that will put to test all of the programming skills you've obtained so far (and some new ones you will learn on the way)!

You have the freedom of choosing your teammates (assemble a team of 3-4 students) and the project's topic this time. Think of an app that you would find useful in your daily activities, a tool that an employee of a certain industry might crave, a fun game or something completely out of the box.

This project is meant for 4 sprints at least, but it may keep you company until the end of the course, or even much longer. Who knows? Although we will not give you any direct tasks to fulfill, there will be some technical requirements for each sprint. You are expected to make incremental changes in a Scrum way, developing the project further and further, adding new features, technologies, etc.

***¡Comience El Proyecte Grande!***

## What are you going to learn?

- Work in a Scrum team on a real project.
- Grow your project iteratively.
- Deliver increments each sprint.

## Tasks

1. Create a Product backlog (on Github) with user stories that cover at least the feature set you aim to complete next. Break down the user stories into smaller tasks, prioritize them, estimate them, and taking your capacities into account, determine how far you'll be able to get during this sprint.
    - There is a Product backlog for the project.
    - The backlog items are broken down into smaller tasks or subtasks.
    - The backlog items are in priority order in the backlog.
    - Each backlog item (at least those that are relevant for the actual sprint) has an estimation value.
    - The top priority part of the backlog is marked as the Sprint backlog, in accordance with the estimation values and the foreseeable team resources.
    - The backlog and the project plan has been checked and accepted by a mentor on the first day of the sprint (before any implementation).
    - By the end of the sprint, there is less than 30% deviation from the plan (70% - 130% is completed according to the original plan)

2. You need to use technologies that help achieve agile workflow, defined below.
    - Every item in the backlog should appear as an `Issue` on GitHub.
    - The repository has a `Project` defined on GitHub for every sprint. The `project board` shall contain every issue related to the sprint.
    - With every feature branch, a `Pull request` shall be opened and maintained. The `Pull request` shall contain the `Issue` linked with it. The `Pull request` shall contain the assignee, who is responsible for the given `Issue`. The `Pull request` shall contain at least one `Reviewer`, who is responsible for checking on their peers' work.

3. You need to fulfill a couple of technical requirements defined below.
    - A user can register into the application by setting at least their username, e-mail address, and password.
    - A user can log in to the application.
    - The user can log out from the application.
    - There are at least two different roles defined in the application.
    - There are at least 3 endpoints, that are only available for authenticated users.
    - There are at least 5 endpoints, that are only available for authenticated users.
    - There is an admin page, which lists all users of the application, available only with the `admin` role.

4. [OPTIONAL] After a successful registration (username not taken, etc.) send a welcome e-mail to your new users!
    - After successful registration, the user receives an email welcoming them to the page.

5. [OPTIONAL] Create a `Forgot your password` button on the login page, that can help restore the password by email.
    - There is a `Forgot your password` button on the login page.
    - After clicking on the `Forgot your password` button the user can give their email.
    - After the email given for recovering the password, the email is validated. If no such email can be found in the database, an error is shown.
    - After choosing `Forgot your password` with a registered account, an email is received.
    - The `Forgot your password` email contains a link, that redirects to a page, where the user can set a new password. The password belonging to the email address is overwritten to the new one given.

6. [OPTIONAL] Add a possibility to log in with `Google Id` using guide provided in resources
    - New project in Google's credential page is added. It has an `OAuth 2.0 Client IDs` record.
    - User secrets are used to store Google's `ClientSecret`. Ensure this data is not saved in the repo!
    - Google authentication is enabled. Users can successfully authenticate via `GoogleId`.

7. You need to fulfill a couple of technical requirements defined below.
    - There is a registration page, where a user can register by setting at least their username, e-mail address, and password.
    - There is a login page, where a user can log in to the application, by giving their username and password.
    - The username of the logged-in user is shown on the page's header.
    - There is a logout button on the page. After hitting the logout button, the user is redirected to the login page.

8. Implement the features and tasks from the sprint backlog.
    - By the end of the sprint, at least 50% of the sprint plan is completed (measured in estimation points)
    - By the end of the sprint, at least 60% of the sprint plan is completed (measured in estimation points)
    - By the end of the sprint, at least 70% of the sprint plan is completed (measured in estimation points)
    - By the end of the sprint, at least 80% of the sprint plan is completed (measured in estimation points)
    - By the end of the sprint, at least 90% of the sprint plan is completed (measured in estimation points)
    - By the end of the sprint, 100% of the sprint plan is completed

9. Use Scrum with your team throughout your project
    - A Daily Scrum was organized by the Scrum Master (no longer than 15 minutes).
    - Any necessary corrections in the sprint plan have been introduced to the backlog and validated by a mentor.
    - After the demo, the Scrum Master organized a Sprint Review meeting, during which the team investigates how much of the planned Sprint Backlog was fulfilled - and whether it was well thought out and balanced for the team to handle.
    - Each Sprint Review produces an Increment Document - a changelog of sorts, listing out all the changes to the product that are the result of this sprint.
    - After the Sprint Review, the Scrum Master organizes a Sprint Retrospective meeting, during which the team recalls on how the work went during this sprint, which practices were good, which should be improved, and which should be stopped (and also what to introduce).

## General requirements

None

## Hints



## Background materials

- <i class="far fa-exclamation"></i> [Definition of Done](project/curriculum/materials/pages/methodology/definition-of-done.md)
- <i class="far fa-exclamation"></i> [Agile Project Management](project/curriculum/materials/pages/methodology/agile-project-management.md)
- [Quickstart on GitHub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/quickstart)
- [Creating a pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
