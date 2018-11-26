# ECE AST Class code

[![Build Status](https://travis-ci.org/cberez/ece-ast-2018.svg?branch=master)](https://travis-ci.org/cberez/ece-ast-2018)

This is the demonstrated-in-class code for the Asynchronous Server Technology class of 2018

## Setup 

```
npm install 
```

If you wan to populate the database with dummy data you can use the `bin/populate` script or run `npm run populate` (server has to be down).

## Run

```
npm start
```

## Dev

Development is done with [TypeScript](https://www.typescriptlang.org/), sources in `src`.

```
npm run dev
```

## Test

Unit testing uses [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).

Test files end with `.test.ts` extension.

```
npm test
```

## License 

[Apache2](https://www.apache.org/licenses/LICENSE-2.0)

## Contributors

* [César Berezowski](http://github.com/cberez)