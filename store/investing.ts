import { delay } from '~/lib/client/time'
import { formatNumber } from '~/lib/format/currency'

export const MAX_DEPOSIT_VALUE = 10000
export const MAX_DURATION_VALUE = 1200
export const MAX_PERCENTS_VALUE = 500
export const MAX_REPLENISHMENT_VALUE = 1000000

export const state = () => ({
  duration: 1,
  deposit: 0,
  percents: 0,
  replenishmentValue: 0,
  replenishmentPeriod: 0,
  reinvestDividendsPeriod: 1,
  showOnlyYearReports: false
})

export type State = ReturnType<typeof state>

export const actions = {
  async loadData ({ commit }: any) {
    await delay(1000)

    commit('setDuration', 60)
    commit('setDepositValue', 10000)
    commit('setPercentsValue', 10)
    commit('setReplenishmentValue', 1000)
    commit('setReplenishmentPeriod', 1)
  },
  updateDepositByUI ({ commit }: any, event: Event) {
    // @ts-ignore
    let value = parseFloat(event.currentTarget!.value)
    if (isNaN(value) || value < 1) {
      event.preventDefault()
      value = 1
    } else if (value > MAX_DEPOSIT_VALUE) {
      event.preventDefault()
      value = MAX_DEPOSIT_VALUE
    }
    commit('setDepositValue', value)
  },
  updateDurationByUI ({ commit }: any, event: Event) {
    // @ts-ignore
    let value = parseFloat(event.currentTarget!.value)
    if (isNaN(value) || value < 1) {
      event.preventDefault()
      value = 1
    } else if (value > MAX_DURATION_VALUE) {
      event.preventDefault()
      value = MAX_DURATION_VALUE
    }
    commit('setDuration', value)
  },
  updatePercentsByUI ({ commit }: any, event: Event) {
    // @ts-ignore
    let value = parseFloat(event.currentTarget!.value)
    if (isNaN(value) || value < 1) {
      event.preventDefault()
      value = 1
    } else if (value > MAX_PERCENTS_VALUE) {
      event.preventDefault()
      value = MAX_PERCENTS_VALUE
    }
    commit('setPercentsValue', value)
  },
  updateReplenishmentValueByUI ({ commit }: any, event: Event) {
    // @ts-ignore
    let value = parseFloat(event.currentTarget!.value)
    if (isNaN(value) || value < 1) {
      event.preventDefault()
      value = 1
    } else if (value > MAX_REPLENISHMENT_VALUE) {
      event.preventDefault()
      value = MAX_REPLENISHMENT_VALUE
    }
    commit('setReplenishmentPeriod', value)
  },
  updateReplenishmentPeriodByUI ({ commit }: any, event: Event) {
    // @ts-ignore
    const value = parseFloat(event.currentTarget!.value)
    commit('setReplenishmentPeriod', value)
  },
  updateReinvestingPeriodByUI ({ commit }: any, event: Event) {
    // @ts-ignore
    const value = parseFloat(event.currentTarget!.value)
    commit('setReinvestDividendsPeriod', value)
  }
}

export const getters = {
  maxDepositeValue () {
    return formatNumber(MAX_DEPOSIT_VALUE)
  },
  maxDurationValue () {
    return formatNumber(MAX_DURATION_VALUE)
  },
  maxPercentsValue () {
    return formatNumber(MAX_PERCENTS_VALUE)
  },
  maxReplenishmentValue () {
    return formatNumber(MAX_REPLENISHMENT_VALUE)
  }
}

export const mutations = {
  setDuration (state: State, duration: number) {
    state.duration = duration
  },
  setDepositValue (state: State, value: number) {
    state.deposit = value
  },
  setPercentsValue (state: State, value: number) {
    state.percents = value
  },
  setReplenishmentValue (state: State, value: number) {
    state.replenishmentValue = value
  },
  setReplenishmentPeriod (state: State, period: number) {
    state.replenishmentPeriod = period
  },
  setReinvestDividendsPeriod (state: State, period: number) {
    state.reinvestDividendsPeriod = period
  },
  setShowOnlyYearReports (state: State, value: boolean) {
    state.showOnlyYearReports = value
  }
}
