# Swagger-to-Typescript
(Work in progress)

#### What?
This is a tool to transform definitions from a [Swagger](https://github.com/swagger-api/swagger-spec) 2.0 schema into [TypeScript](http://www.typescriptlang.org/) (1.4+) interfaces.

#### Why?
This tool can be used to develop against a swagger schema using TypeScript.

#### How?
- Install node and npm
- Install global dependencies
        > npm install -g gulp-cli tsd
- Install the typescript definitions
        > tsd update
- Install dependencies
        > npm install gulp gulp-typescript --save
- Compile the typescript files
        > gulp
- Run the tool against sample swagger schema in the "temp" folder
        > node index.js
- Check the interface files generated in the "temp" folder
