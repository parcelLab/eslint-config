# eslint-config-parcellab
This package provides parcelLab's .eslintrc as an extensible shared config.

## Install
```
$ npm i -D eslint-config-parcellab
```

## Usage
Create an `.eslintrc.json` file in your project. Then add:  

```javascript

{
  "extends": "parcellab"
}

```

## Rules
This config exteds the eslint:recommended and adds these rules:
- Ecmaversion 2018, source type: module
- No semi!
- No var!
- No undef!
- No unused vars!
- No multi assign!
- No errors for not using arrow callbacks - it's up to you which to use...
- Multiline comma dangle!
- Spacing: 2 spaces!
- Quotes: single, allow template literal
- and some more useful rules & restricted syntax errors

