# Var Css️
Support for css var() syntax in js.

## Install
With Npm
```shell script
npm install var-css --save
``` 
Or with Yarn
```shell script
yarn add var-css
```

## Usage
It's similar to var() css function:
```javascript
import _var from 'var-css'

// Returns a string with the current value of the variable.
_var('--primary-color')

// sets a new value for the variable,
// and returns the current new value.
_var('--secondary-color', '#40eeff')
```

## Source code
If you don't want to include the library, you can copy and paste the source code:
```javascript
function getVariable(name) {
   getComputedStyle(document.documentElement).getPropertyValue(name)
}
function setVariable(name, newValue) {
   document.documentElement.style.setProperty(name, newValue)
}

export default function _var(name, newValue = '') {
   let value = getVariable(name)

   if (newValue && newValue !== value) {
      setVariable(name, newValue)
      value = newValue
   }

   return value
}
```
\* The bundled library is compressed and has support for ES5.
