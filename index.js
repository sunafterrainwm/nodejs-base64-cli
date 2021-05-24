#!/usr/bin/env node

const base64 = require("nodejs-base64-converter"),
    program = new(require("commander").Command)("base64")
    .version("1.0.0")
    .usage("[command|options]")
    .description("encode and decode base64");

program
    .command("encode [string]", {
        "isDefault": true
    })
    .description("encode base64")
    .action(function(unencoded) {
        console.log(base64.encode(unencoded));
    });

program
    .command("decode [string]", {
        "isDefault": true
    })
    .description("decode base64")
    .action(function(encoded) {
        console.log(base64.decode(encoded));
    });

program.parse(process.argv);

if (program.args.length < 1) {
    program.outputHelp();
}