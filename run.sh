#!bin/bash

# go to backend directory
cd backend

# install backend dependencies
npm install

# start the server and run it in the background
npm start &

# go to frontend directory
cd ..
cd frontend

# install frontend dependencies
npm install

# start the frontend
npm start

