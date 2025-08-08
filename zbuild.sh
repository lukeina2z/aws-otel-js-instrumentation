#!/bin/sh

set -e
set -x


rm -fr ./node_modules
rm -fr ./aws-otel-js-instrumentation/aws-distro-opentelemetry-node-autoinstrumentation/node_modules
rm -fr ./aws-otel-js-instrumentation/z-examples/adot-js-lambda/node_modules

npm install

npm run compile

