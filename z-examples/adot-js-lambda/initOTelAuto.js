console.log("hello auto instrumentation!");


// const otelAuto = require("@opentelemetry/auto-instrumentations-node/register");

const adotAuto = require("@aws/aws-distro-opentelemetry-node-autoinstrumentation/register");


/*instrumentation.ts*/
const { diag, trace, DiagConsoleLogger, DiagLogLevel } = require("@opentelemetry/api");

// For troubleshooting, set the log level to DiagLogLevel.DEBUG/INFO
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

const activeSpanFoo = trace.getActiveSpan();


// const otelAuto = require("@aws/aws-distro-opentelemetry-node-autoinstrumentation/register");

const meterAuto = require("./register-meter");

const activeSpanBar = trace.getActiveSpan();

console.log("end auto instrumentation registration");