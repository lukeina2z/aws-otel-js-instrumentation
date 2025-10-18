#!/bin/bash

rm -rf ./node_modules
rm -fr ./aws-distro-opentelemetry-node-autoinstrumentation/build
rm -fr ./aws-distro-opentelemetry-node-autoinstrumentation/node_modules

npm ci
npm run lint

npm run compile