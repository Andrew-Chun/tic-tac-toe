[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-Tac-Toe Game

## Technologies Used
- HTML/CSS
- JavaScript
- jQuery
- Bootstrap/Sass

## Planning and Development Process
- Day 1: Authentication - Sign Up, Sign In, Change Password, Sign Out
- Day 2: API Rd 1 (CREATE) - New Game, Track board in JS
- Day 2: Game UI Rd 1 - Design a simple game board, add click handler for when a space on game board is clicked
- Day 3: API Rd 2 (UPDATE) - Invalid moves, update game if valid move, update game engine and board
- Day 3: Game Engine - Keep track of current player, check board for winner
- Day 4: Game UI Rd 2 - Add messaging (who's turn, invalid move, game over w/ results)
- Day 4: API Round 3 (INDEX) - Get games (player stats, allow )
- Day 5: Final touches - README, troubleshoot/debug, style

Before communicating with the API, I tested curl-scripts to ensure that GET/POST/PATCH/DELETE requests are valid.
I chose to split up the project into two separate folders/sections handling user authentication and game actions.

  - **app.js** - initially loads all the jQuery event listeners ('click', 'submit') and hide()
  - **store.js** - temporarily stores user/game data along with a preset currentPlayer string and trackBoard array

  - **/auth/api.js** - sends AJAX requests to GA's backend API (POST, PATCH, DELETE)
  - **/auth/events.js** - callback functions to handle user sign-up/sign-in/change-password/sign-out
  - **/auth/ui.js** - handles AJAX reponses and DOM manipulation

  - **/games/api.js** - sends AJAX requests to GA's backend API (GET, POST, PATCH)
  - **/games/events.js** - callback functions handle game actions (create new game, onValidMove, gameStats, getIncomplateGames)
  - **/games/ui.js** - handles AJAX reponses and DOM manipulation (shows incompleteGames)
  - **/games/isWinner.js** - determines if there is a winner

  - **index.html** - contains initial board, forms, buttons, lists, etc.
  - **index.scss** - contains CSS/Bootstrap/Sass for styling

### User stories

1) As a user, I can sign up for an account to access the features game
2) As a user, I can sign in, change my password, or sign out of my account
3) As a user, I can play multiple games to satisfy my gameplay desire
4) As a user, I can view the stats to display outcomes of previous games
5) As a user, I can view and select incomplete games to finish later

### Tic Tac Toe Wireframe
![Imgur](https://i.imgur.com/dejXrYX.jpg "TicTacToe Wireframe")
