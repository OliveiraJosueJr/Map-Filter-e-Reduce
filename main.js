// Exercício MAP utilizando 'this'.

const maca = {
  value: 2
}
const laranja = {
  value: 3
}

function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value
  }, thisArg)
}

const nums = [1, 2]

console.log('this -> maçã', mapComThis(nums, maca))
console.log('this -> laranja', mapComThis(nums, laranja))

// Exercício MAP sem 'this'.

function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2
  })
}

const nums2 = [2, 4, 6, 8, 10]

console.log('Sem this ->', mapSemThis(nums2))

// Exercício Filter.

function filtraPares(arr) {
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 === 0
}

const nums3 = [1, 23, 15, 16, 40, 54, 82]

console.log(filtraPares(nums3))

// Exercício Reduce sem valor inicial setado.

function somaNumeros(arr) {
  return arr.reduce(function (previousValue, currentValue) {
    console.log({ previousValue })
    console.log({ currentValue })
    return previousValue + currentValue
  })
}

const nums4 = [1, 2, 3]

console.log(somaNumeros(nums4))

// Exercício Reduce com valor inicial setado.

const lista = [
  {
    name: 'Sabão em Pó',
    preco: 30
  },
  {
    name: 'Cereal ',
    preco: 12
  },
  {
    name: 'Toalha',
    preco: 30
  }
]

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, current, index) {
    console.log('Rodada', index + 1)
    console.log({ prev })
    console.log({ current })
    return prev - current.preco
  }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))
