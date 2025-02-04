# About Medienkompass

This project was developed in the course "Wissenschaftskommunikation im MINT-Bereich" at the TU Berlin. It is a web application designed to help users to present their content in a more interesting way by filling in a questionnaire that shows possible media for communication as a result. The user can then read through additional tips and information on each medium and receives a leaflet with basic tips for good science communication.

# Technical Details

This section explains technical details, that are relevant to run, repoduce, or modify this application.

## Development environment

This project runs on Node v11.0.0. 
VS Code was used as IDE.

The main dependencies used in this project are ``ChakraUI`` for UI components and ``react-step-wizard`` to implement the questionaire.

## How to use this repository

First, you need to clone this repository on your local machine.

### Development:

Run locally with: `npm start`

### Deploy new version to GitHub Pages

1. Commit and push changes to GitHub repository in *main* branch
2. Deploy to GitHub Pages using: `npm run deploy`
3. After a successfull deployment you may need to wait a few minutes in order to see the changes.
4. Check https://svfs-tuberlin.github.io/Wissenschaftskommunikation-im-MINT-Bereich/ if the changes were deployed and the application is still running correctly.