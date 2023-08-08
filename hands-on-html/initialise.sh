#!/bin/bash

echo "Installing Apache HTTPD"
apt --yes install apache2 && rm -rf /var/www/html/ && ln -s /root/assets/html /var/www/html && clear && echo "Welcome to the tutorial, all the dependencies are installed, and you should be good to go!"

