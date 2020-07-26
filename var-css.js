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
