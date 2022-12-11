'use strict'

// funktiot: symboli, numero, lowercase, uppercase,--------------
// funktio: copy password
// checkbox chekki - > alerttia jos ei mitään valittu
// passwordin luonti  - > on click submit buttoniin

const keys = {
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  number: '0123456789',
  symbol: '!@#$%^&*()_+~\\`|}{[]:;?><,./-=',
}

function symbol() {
  const symbol = keys.symbol[Math.floor(Math.random() * keys.symbol.length)]
  return symbol
}

function upperCase() {
  const upperCase =
    keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)]
  return upperCase
}

function lowerCase() {
  const lowerCase =
    keys.upperCase[Math.floor(Math.random() * keys.lowerCase.length)]
  return lowerCase
}

function number() {
  const number = keys.upperCase[Math.floor(Math.random() * keys.number.length)]
  return number
}

function createPassword() {
  const numberchk = document.getElementById('number').checked
  const upperCasechk = document.getElementById('upperCase').checked
  const lowerCasechk = document.getElementById('lowerCase').checked
  const symbolchk = document.getElementById('symbol').checked

  if (symbolchk + upperCasechk + lowerCasechk + numberchk === 0) {
    alert('Choose at least one checkbox to generate a password!')
    return
  }

  // PW logiikka
}
