#!/bin/bash

echo "Setting up..."


curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
	&& export NVM_DIR="$HOME/.nvm" \
	&& [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm \
	&& [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion \
	&& nvm install v20 \
	&& cd assets/cats-4-life \
	&& npm i \
  	&& echo "Welcome to the tutorial, all the dependencies are installed, and you should be good to go!"
