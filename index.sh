#!/bin/bash

PASS="\x1B[0;32m\x20\x20✔\x1B[0m" # GREEN
FAIL="\x1B[0;31m\x20\x20✕\x1B[0m" # RED
MODULE="\x1B[0;90m(zashiki-react-redux)\x1B[0m" # GREY

if [[ $? -eq 0 ]]; then

  cd ../zashiki-react-redux
  rm -rf lib
  npm link &> /dev/null
  npm link shinkansen-gears shinkansen-motor shinkansen-pantograph shinkansen-rails shinkansen-signals &> /dev/null
  npm link zashiki-promise-middleware &> /dev/null
  npm link zashiki-routing-middleware &> /dev/null
  npm install

  echo -e "\x15" # CR
  echo -e $PASS $MODULE

  cd ../shinkansen-gears
  npm run build

  echo -e "\x15" # CR
  echo -e $PASS $MODULE

  cd ../shinkansen-motor
  npm run build

  echo -e "\x15" # CR
  echo -e $PASS $MODULE

  cd ../shinkansen-pantograph
  npm run build

  echo -e "\x15" # CR
  echo -e $PASS $MODULE

  cd ../shinkansen-rails
  npm run build

  echo -e "\x15" # CR
  echo -e $PASS $MODULE

  cd ../shinkansen-signals
  npm run build

  echo -e "\x15" # CR
  echo -e $PASS $MODULE

  cd ../zashiki-promise-middleware
  npm run build

  echo -e "\x15" # CR
  echo -e $PASS $MODULE

  cd ../zashiki-routing-middleware
  npm run build

  echo -e "\x15" # CR
  echo -e $PASS $MODULE

  cd ../../Modern\ Poacher/zashiki-react-redux

  echo -e "\x15" # CR

  npm link
  npm link shinkansen-gears shinkansen-motor shinkansen-pantograph shinkansen-rails shinkansen-signals
  npm link zashiki-promise-middleware
  npm link zashiki-routing-middleware
  npm link redux-storage-middleware
  npm run lint:fix

  # NO CR
  echo -e $PASS $MODULE
  echo -e "\x15" #EXIT CR

fi

exit $?
