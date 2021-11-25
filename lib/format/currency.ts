const numberFormat = new Intl.NumberFormat('ru-RU')
const dollarsFormat = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'USD' })

export function formatDollars (number: number) {
  return dollarsFormat.format((number * 100 >> 0) / 100)
}

export function formatNumber (number: number) {
  return numberFormat.format((number * 100 >> 0) / 100)
}
