#!/bin/bash

docker run -p 0.0.0.0:4201:27017 --name randt-mongo -d mongo:4.2.1
yarn serve
yarn cron