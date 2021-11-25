<template>
  <table class="table table-hover table-sm" :class="{'table-striped': showOnlyYearReports}">
    <thead>
      <tr>
        <th>мес, №</th>
        <th>Своих средств добавлено</th>
        <th>Доход за месяц</th>
        <th>По процентам начислено всего</th>
        <th>Общая сумма на конец месяца</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="payment in payments"
        :key="payment.id"
        :class="{'yearly': !showOnlyYearReports && payment.id % 12 === 0}"
      >
        <td>{{ payment.id }}</td>
        <td>{{ payment.ownMoney }}</td>
        <td>+{{ payment.paymentByMonth }}</td>
        <td>{{ payment.totalPercents }}</td>
        <td>{{ payment.totalResult }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import moment from 'moment'
import Vue from 'vue'
import { mapState } from 'vuex'
import { formatNumber } from '~/lib/format/currency'

export type Payment = Readonly<{
  id: number
  ownMoney: string
  paymentByMonth: string
  totalPercents: string
  totalResult: string
}>

export default Vue.extend({
  name: 'Table',
  computed: {
    ...mapState('investing', [
      'showOnlyYearReports'
    ]),
    payments () {
      const result: Array<Payment> = []
      let totalResult = this.$store.state.investing.deposit
      let totalPercents = 0
      let totalOwnMoney = this.$store.state.investing.deposit
      let freezedDividends = 0

      const duration = this.$store.state.investing.duration
      const percents = this.$store.state.investing.percents
      const reinvestingPeriod = this.$store.state.investing.reinvestDividendsPeriod
      const replenishmentPeriod = this.$store.state.investing.replenishmentPeriod
      const replenishmentValue = this.$store.state.investing.replenishmentValue

      for (let i = 0; i < duration; i++) {
        const date = moment()
          .add(i, 'months')
        const daysInYear = date.isLeapYear() ? 366 : 365
        const paymentByDay = totalResult * percents / 100 / daysInYear
        const paymentByMonth = i
          ? paymentByDay * date.daysInMonth()
          : paymentByDay * (moment().daysInMonth() - moment().date())

        freezedDividends += paymentByMonth
        if (reinvestingPeriod && !((i + 1) % reinvestingPeriod)) {
          totalResult += freezedDividends
          freezedDividends = 0
        }
        if (!this.showOnlyYearReports || (i + 1) % 12 === 0) {
          result.push({
            id: i + 1,
            ownMoney: formatNumber(totalOwnMoney),
            paymentByMonth: formatNumber(paymentByMonth),
            totalPercents: formatNumber(totalPercents),
            totalResult: formatNumber(totalResult)
          })
        }
        totalPercents += paymentByMonth
        if (replenishmentPeriod && !((i + 1) % replenishmentPeriod)) {
          totalResult += replenishmentValue
          totalOwnMoney += replenishmentValue
        }
      }
      return result
    }
  }
})
</script>

<style scoped>
.yearly {
  background: #fd7e1487;
}

.yearly > td {
  color: white;
}
</style>
