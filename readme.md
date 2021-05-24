# nodejs-base64-cli

> A simply cli for encode and decode base64

Install this globally and you'll have access to the `base64` command anywhere on your system.

```shell
npm install -g nodejs-base64-cli
```

## Shell

### utf-8 to base64

```shell
base64 encode [string]
```

Example:

```shell
base64 encode "https://www.npmjs.com/package/nodejs-base64-cli"
```

will return
```
aHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvbm9kZWpzLWJhc2U2NC1jbGk=
```

### base64 to utf-8

```shell
base64 decode [string]
```

Example:

```shell
base64 encode "aHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvbm9kZWpzLWJhc2U2NC1jbGk="
```

will return
```
https://www.npmjs.com/package/nodejs-base64-cli
```