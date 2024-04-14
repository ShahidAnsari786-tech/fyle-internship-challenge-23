# Fyle Frontend Challenge < AngularJs >

# Website Description:
This website appears to be an Angular application that allows users to browse GitHub repositories and view user profiles. It provides a visually appealing interface with loading skeletons for smooth loading transitions and pagination with error handling for easier navigation through repository lists.

[Go Live](https://shahidgithubsearch.netlify.app/)

# Features:

#  User Profile Viewing:
Enter the Users name in search input and can view GitHub user profiles, including profile picture, name, username, bio, location, Twitter link, and GitHub link.

# See Below
![Screenshot](https://github.com/ShahidAnsari786-tech/fyle-internship-challenge-23/blob/master/src/assets/Screenshot%202024-03-21%20031900.png?raw=true)

# GitHub Repository Browsing:
Users can browse GitHub repositories, viewing details such as repository name, description, language, and whether it's public or private.By default users can see
only 10 repositories and can select using below to list out more repositories.

# See Below
![Screenshot](https://github.com/ShahidAnsari786-tech/fyle-internship-challenge-23/blob/master/src/assets/Screenshot%202024-03-21%20032014.png?raw=true)

# Users can also choose number of repositories shown per page as seen Below 
* `by Default it shows only 10 respositories per page`
![Screenshot](https://github.com/ShahidAnsari786-tech/fyle-internship-challenge-23/blob/master/src/assets/Screenshot%202024-04-14%20163137.png?raw=true)  

# Loading Skeletons:
Loading skeletons are used to provide visual feedback during data fetching, ensuring users are aware of ongoing loading processes.

# See Below
![Screenshot](https://github.com/ShahidAnsari786-tech/fyle-internship-challenge-23/blob/master/src/assets/Screenshot%202024-03-21%20032308.png?raw=true)

# User not found:
If there is no user with the searched username in Github then it will show a message handled by error handling.

# See Below
![Screenshot](https://github.com/ShahidAnsari786-tech/fyle-internship-challenge-23/blob/master/src/assets/Screenshot%202024-03-21%20032209.png?raw=true)

# Pagination:
Pagination controls are available to allow users to navigate through long lists of repositories conveniently.

# Responsive Design:
The website appears to be designed with responsiveness in mind, ensuring compatibility across various devices and screen sizes.

# Styling:
The website features visually appealing styling with consistent color schemes and layout design with tailwind CSS and dynamic styling.

# Dynamic Data Binding:
Data from GitHub API responses is dynamically bound to the UI, providing real-time updates without the need for page reloads.

# Error Handling:
Error handling is implemented to manage scenarios like API rate limits and user not found, providing appropriate feedback to users.

# See Below
![Screenshot](https://github.com/ShahidAnsari786-tech/fyle-internship-challenge-23/blob/master/src/assets/Screenshot%202024-03-22%20011254.png?raw=true)

### Install requirements
* Install angular cli [Ref](https://angular.io/cli)
* `npm install` in this repository 

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

# Testing using Jasmine: < 1- Component Unit testing completed, 1 - Service Testing Completed >

# Steps to perform Test :

First install jasmine using terminal with * `npm install --save-dev jasmine` command.

Then Initialize Jasmine in your project with * `npx jasmine init` command.

Now, create a test file for any component or service with `spec.ts` as extension.

Then finally run `npm test` command in the terminal to see the execution.

# See Below

# Execution in terminal:
![Screenshot](https://github.com/ShahidAnsari786-tech/fyle-internship-challenge-23/blob/master/src/assets/Screenshot%202024-03-21%20175310.png?raw=true)

# Execution in Browser:
![Screenshot](https://github.com/ShahidAnsari786-tech/fyle-internship-challenge-23/blob/master/src/assets/Screenshot%202024-03-21%20175213.png?raw=true)

