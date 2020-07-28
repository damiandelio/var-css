# Var Css️
With Npm
```shell script
npm install var-css --save
``` 
Or with Yarn
```shell script
yarn add var-css
```

## Usage
```javascript
import varCss from 'var-css'

// Get a string with the current value
varCss.get('--primary-color')

// Set a new value
varCss.set('--secondary-color', '#40eeff')
```

## Source code
If you don't want to include the library, you can copy and paste the source code:
```javascript
const varCss = {
   get: function(name) {
      return getComputedStyle(document.documentElement).getPropertyValue(name)
   },
   set: function(name, newValue) {
      document.documentElement.style.setProperty(name, newValue)
   }
}
```
\* The bundled library has support for ES5.
