#!/bin/bash

run(){
  npx tsc
  node dist/$1.js
}

run $1
