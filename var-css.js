const varCss = {
   get: function(name) {
      return getComputedStyle(document.documentElement).getPropertyValue(name)
   },
   set: function(name, newValue) {
      document.documentElement.style.setProperty(name, newValue)
   }
}

export default varCss
