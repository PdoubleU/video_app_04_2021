This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Video app / React

![GitHub Logo](/images/app_demo.bmp)


[Lets go to live preview](https://pdoubleu.github.io/video_app_04_2021/)


The Video App is an application designed in React. Its main feature is to store a list of movies collected via API, and these can be played in a modal window. For now, the application is storing data from Vimeo or Youtube, but all components and features were designed to change it in the future at will.

## Features

### Keep in a local storage
> All movies added by a user are stored in the local storage, so the user can be sure that a list will be permanently available unless the browser is reinstalled or local storage is emptied. That allows to add and remove movies at will.

### Watch instantly
> The app allows to watch the chosen movie in the application - the user is not redirected to the source website. Just press the play button or the thumbnail and the modal window with a player will open.

### Display tiles or list
> The application allows a user to switch between list and tiles view, each one with pagination.

### Sort items
> The movies are displayed with the date of download and can be sorted in descending or ascending order according to these values.

### The best movies are remembered
> The user is allowed to like or dislike particular movies, so he can easily peek at the favorite movies anytime he wants.

### Remove movie or empty all
> This feature allows removing movies from the list. If the list is old-fashioned (e.g. the songs added to the list were popular last summer, and the user is not fond of these anymore), it can be easily emptied by pressing one button.

## Used technologies and approaches

> During developing I was sticking to below requirements and good practices:
> - use react hooks
> - custom hooks
> - use functional components, unless class components fits better
> - avoid prop drilling (use react context)
> - checking prop types
> - list items rendered with unique keys
> - guard-pattern
> - desing code to be easily scalable in the future

I have used the following technologies:

    1. React
    2. JavaScript ES6
    3. HTML 5
    4. CSS
    5. REST API


## Used tools:

The followed tools were used to finalize the project:

    1. Visual Studio Code
    2. GIT - as a control version system
    3. React Create App - for instant project development without struggling with setting up the developer environment
    4. Youtube and Vimeo API's
## Interesting facts about the project:

> This project was a pain in the neck at some point when I realized that Vimeo and Youtube provide different data, and since I didn't use GraphQL I was forced to figure out something in JavaScript. That was a good lesson for me, and I am going to get accustomed to GraphQL.

