const { execSync } = require('child_process'),
    path = require("path"),
    cli = path.normalize("\"" + __dirname + "/../index.js\"");

process.stdout.write("> node " + cli + " encode \"test text\"\n");
process.stdout.write(execSync("node " + cli + " encode \"test text\""));

process.stdout.write("> node " + cli + " decode \"dGVzdCB0ZXh0\"\n");
process.stdout.write(execSync("node " + cli + " decode \"dGVzdCB0ZXh0\""));