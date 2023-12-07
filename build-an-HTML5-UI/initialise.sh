#!/bin/bash

echo "Installing Apache HTTPD"

apt --yes install npm \
	&& npm install -g n \
	&& n latest \
	&& cd assets/cats-4-life \
	&& npm i \
	&& npm start \
  	&& echo "Welcome to the tutorial, all the dependencies are installed, and you should be good to go!"
