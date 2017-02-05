#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
FILE="$DIR/docker-compose.yml"

if [ $# -eq 1 ]; then
  FILE="$DIR/docker-compose.$1.yml"
fi

docker-compose -f $FILE rm -fv && docker-compose --project-name aksels_pw -f $FILE up --force-recreate -t 3
