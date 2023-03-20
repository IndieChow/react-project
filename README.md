Project Title: Pokemon Deck Builder in React

Project Guide: 
    (1) Type 'npm start' on terminal to boot react application
    (2) Type the Desired Pokemon Name onto Search Bar (Correct Spelling or the pokemon won't be added)
    (3) Click the Add Pokemon button
    (4) Repeat with any pokemon of your choosing (Max: 6 Cards on your deck)
    (5) To start over, click the reset button (New Deck Created)

Project Description: 
The Pokemon Deck builder website allows users to add their favorite pokemon to their deck which can hold a maximum of 6 cards.
When the user types the pokemon name and hits the add pokemon button, an API fetch call is made to PokeApi to retreive the relevant data.
Incorrect user input is accounted to catch failed fetch calls. Specific pieces of the data is displayed on a Pokemon card which is then further stylized through CSS.

Topics Utilized:
    (1) Promises and Callbacks to fetch Data from API
    (2) UseState hook to update pokemon object
    (3) Props to store specific pokemon information
    (4) User Interactive Button
    (5) Arrow functions
    (6) CSS Component to Stylize Website

