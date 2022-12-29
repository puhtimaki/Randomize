'use strict'

// funktiot: symboli, numero, lowercase, uppercase,--------------
// funktio: copy password
// checkbox chekki - > alerttia jos ei mitään valittu ------
// passwordin luonti  - > on click submit buttoniin

//email sending function for username

const keys = {
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  number: '0123456789',
  symbol: '!@#$%^&*()_+~\\`|}{[]:;?><,./-=',
}
const GetKey = [
  function symbol() {
    const symbol = keys.symbol[Math.floor(Math.random() * keys.symbol.length)]
    return symbol
  },

  function upperCase() {
    const upperCase =
      keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)]
    return upperCase
  },

  function lowerCase() {
    const lowerCase =
      keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)]
    return lowerCase
  },

  function number() {
    const number = keys.number[Math.floor(Math.random() * keys.number.length)]
    return number
  },
]

function createPassword() {
  const numberchk = document.getElementById('number').checked
  const upperCasechk = document.getElementById('upperCase').checked
  const lowerCasechk = document.getElementById('lowerCase').checked
  const symbolchk = document.getElementById('symbol').checked

  if (symbolchk + upperCasechk + lowerCasechk + numberchk === 0) {
    alert('Choose at least one checkbox to generate a password!')
    return
  }

  const passwordBox = document.getElementById('passwordBox')
  const length = document.getElementById('length')
  let password = ''
  while (length.value > password.length) {
    let keyToAdd = GetKey[Math.floor(Math.random() * GetKey.length)]
    let isChecked = document.getElementById(keyToAdd.name).checked

    if (isChecked) {
      password += keyToAdd()
    }
  }

  passwordBox.innerHTML = password
}

function copyPassword() {
  const textarea = document.createElement('textarea')
  const password = document.getElementById('passwordBox').innerText

  if (!password) {
    return
  }
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password copied to clipboard')
}
