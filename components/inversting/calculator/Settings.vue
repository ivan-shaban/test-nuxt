<template>
  <div>
    <p>
      * данный сервис стоит использовать исключительно как справочный, для проверки своих идей и мотивации,
      т.к. реальные выплаты эмитентов могут значительно отличаться от формул используемых ниже, так же никак
      не учитываются налоговые режимы
    </p>
    <hr>
    <!-- mobile layout -->
    <div class="base d-md-none">
      <div class="row">
        <label htmlFor="depositInputMobile" class="col-form-label">стартовый взнос:</label>
        <div class="position-relative">
          <input
            id="depositInputMobile"
            :value="deposit"
            type="number"
            class="form-control form-control-sm"
            :step="100"
            @change="updateDepositByUI"
            @input="updateDepositByUI"
          >
          <span class="position-absolute top-0 badge rounded-pill bg-success translate-middle-y depositBadge">
            1 - {{ maxDepositeValue }}<span class="visually-hidden">valid range</span>
          </span>
        </div>
      </div>
      <div class="row">
        <label htmlFor="durationInputMobile" class="col-form-label">срок (мес):</label>
        <div class="position-relative">
          <input
            :value="duration"
            type="number"
            name="durationInputMobile"
            class="form-control form-control-sm"
            @change="updateDurationByUI"
            @input="updateDurationByUI"
          >
          <span class="position-absolute top-0 badge rounded-pill bg-success translate-middle-y durationBadge">
            1 - {{ maxDurationValue }}<span class="visually-hidden">valid range</span>
          </span>
        </div>
      </div>
      <div class="row">
        <label htmlFor="percentsInputMobile" class="col-form-label">ставка (%):</label>
        <div class="position-relative">
          <input
            :value="percents"
            type="number"
            name="percentsInputMobile"
            class="form-control form-control-sm"
            :step="0.5"
            @change="updatePercentsByUI"
            @input="updatePercentsByUI"
          >
          <span class="position-absolute top-0 badge rounded-pill bg-success translate-middle-y percentsBadge">
            1 - {{ maxPercentsValue }}<span class="visually-hidden">valid range</span>
          </span>
        </div>
      </div>
      <div class="row">
        <label htmlFor="replenishmentInputMobile" class="col-form-label">пополнение в мес:</label>
        <div class="position-relative">
          <input
            :value="replenishmentValue"
            type="number"
            name="replenishmentInputMobile"
            class="form-control form-control-sm"
            :step="100"
            @change="updateReplenishmentValueByUI"
            @input="updateReplenishmentValueByUI"
          >
          <span class="position-absolute top-0 badge rounded-pill bg-success translate-middle-y replenishmentBadge">
            1 - {{ maxReplenishmentValue }}}<span class="visually-hidden">valid range</span>
          </span>
        </div>
      </div>
      <div class="row">
        <label htmlFor="dropdownReplenishmentPeriod" class="col-form-label">период пополнения:</label>
        <select
          id="dropdownReplenishmentPeriod"
          :value="replenishmentPeriod"
          class="mobileSelect form-select form-select-sm"
          @change="updateReplenishmentPeriodByUI"
          @input="updateReplenishmentPeriodByUI"
        >
          <option value="0">
            нет
          </option>
          <option value="1">
            ежемесячно
          </option>
          <option value="3">
            ежеквартально
          </option>
          <option value="6">
            раз в полгода
          </option>
          <option value="12">
            раз в год
          </option>
        </select>
      </div>
      <div class="row">
        <label htmlFor="dropdownReinvestingPeriod" class="col-form-label">период реинвестирования:</label>
        <select
          id="dropdownReinvestingPeriod"
          :value="reinvestDividendsPeriod"
          class="mobileSelect form-select form-select-sm"
          @change="updateReinvestingPeriodByUI"
          @input="updateReinvestingPeriodByUI"
        >
          <option value="0">
            нет
          </option>
          <option value="1">
            ежемесячно
          </option>
          <option value="3">
            ежеквартально
          </option>
          <option value="6">
            раз в полгода
          </option>
          <option value="12">
            раз в год
          </option>
        </select>
      </div>
      <div class="row">
        <div class="form-check checkbox">
          <input
            id="onlyYearReportsCheckboxMobile"
            :value="showOnlyYearReports"
            class="form-check-input"
            type="checkbox"
            @change="toggleOnlyYearReportsByUI"
          >
          <label
            class="form-check-label"
            htmlFor="onlyYearReportsCheckboxMobile"
          >
            только годовые отчеты
          </label>
        </div>
      </div>
    </div>
    <!-- desktop layout -->
    <div class="base d-none d-md-block">
      <div class="row g-3 align-items-center">
        <div class="col-3">
          <label htmlFor="depositInput" class="col-form-label">стартовый взнос</label>
        </div>
        <div class="col-2 position-relative">
          <input
            id="depositInput"
            :value="deposit"
            type="number"
            class="form-control form-control-sm"
            :step="100"
            :min="1"
            :max="10000"
            @change="updateDepositByUI"
            @input="updateDepositByUI"
          >
          <span class="position-absolute top-0 badge rounded-pill bg-success depositBadge">
            1 - {{ maxDepositeValue }}<span class="visually-hidden">valid range</span>
          </span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-3">
          <label htmlFor="durationInput" class="col-form-label">срок</label>
        </div>
        <div class="col-2 position-relative">
          <input
            :value="duration"
            type="number"
            name="durationInput"
            class="form-control form-control-sm"
            @change="updateDurationByUI"
            @input="updateDurationByUI"
          >
          <span class="position-absolute top-0 badge rounded-pill bg-success durationBadge">
            1 - {{ maxDurationValue }}<span class="visually-hidden">valid range</span>
          </span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-3">
          <label htmlFor="percentsInput" class="col-form-label">ставка</label>
        </div>
        <div class="col-2 position-relative">
          <input
            :value="percents"
            type="number"
            name="percentsInput"
            class="form-control form-control-sm"
            :step="0.5"
            @change="updatePercentsByUI"
            @input="updatePercentsByUI"
          >
          <span class="position-absolute top-0 badge rounded-pill bg-success percentsBadge">
            1 - {{ maxPercentsValue }}<span class="visually-hidden">valid range</span>
          </span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-3">
          <label htmlFor="replenishmentInput" class="col-form-label">сумма пополнения в период</label>
        </div>
        <div class="col-2 position-relative">
          <input
            :value="replenishmentValue"
            type="number"
            name="replenishmentInput"
            class="form-control form-control-sm"
            :step="100"
            @change="updateReplenishmentValueByUI"
            @input="updateReplenishmentValueByUI"
          >
          <span class="position-absolute top-0 badge rounded-pill bg-success replenishmentBadge">
            1 - {{ maxReplenishmentValue }}<span class="visually-hidden">valid range</span>
          </span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-3">
          <label htmlFor="dropdownReplenishmentPeriod" class="col-form-label">период пополнения</label>
        </div>
        <div class="col-2">
          <select
            id="dropdownReplenishmentPeriod"
            :value="replenishmentPeriod"
            class="form-select form-select-sm"
            @change="updateReplenishmentPeriodByUI"
            @input="updateReplenishmentPeriodByUI"
          >
            <option value="0">
              нет
            </option>
            <option value="1">
              ежемесячно
            </option>
            <option value="3">
              ежеквартально
            </option>
            <option value="6">
              раз в полгода
            </option>
            <option value="12">
              раз в год
            </option>
          </select>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-3">
          <label htmlFor="dropdownReinvestingPeriod" class="col-form-label">период
            реинвестирования</label>
        </div>
        <div class="col-2">
          <select
            id="dropdownReinvestingPeriod"
            :value="reinvestDividendsPeriod"
            class="form-select form-select-sm"
            @change="updateReinvestingPeriodByUI"
            @input="updateReinvestingPeriodByUI"
          >
            <option value="0">
              нет
            </option>
            <option value="1">
              ежемесячно
            </option>
            <option value="3">
              ежеквартально
            </option>
            <option value="6">
              раз в полгода
            </option>
            <option value="12">
              раз в год
            </option>
          </select>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="form-check reinvestmentCheckbox">
          <input
            id="onlyYearReportsCheckbox"
            :value="showOnlyYearReports"
            class="form-check-input"
            type="checkbox"
            @change="toggleOnlyYearReportsByUI"
          >
          <label
            class="form-check-label"
            htmlFor="onlyYearReportsCheckbox"
          >
            только годовые отчеты
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  mapGetters,
  mapState,
} from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'Settings',
  computed: {
    ...mapState('investing', [
      'duration',
      'deposit',
      'percents',
      'replenishmentValue',
      'replenishmentPeriod',
      'reinvestDividendsPeriod',
      'showOnlyYearReports'
    ]),
    ...mapGetters('investing', [
      'maxDepositeValue',
      'maxReplenishmentValue',
      'maxDurationValue',
      'maxPercentsValue'
    ])
  },
  methods: {
    updateDepositByUI (event: Event) {
      this.$store.dispatch('investing/updateDepositByUI', event)
    },
    updateDurationByUI (event: Event) {
      this.$store.dispatch('investing/updateDurationByUI', event)
    },
    updatePercentsByUI (event: Event) {
      this.$store.dispatch('investing/updatePercentsByUI', event)
    },
    updateReplenishmentValueByUI (event: Event) {
      this.$store.dispatch('investing/updateReplenishmentValueByUI', event)
    },
    updateReplenishmentPeriodByUI (event: Event) {
      this.$store.dispatch('investing/updateReplenishmentPeriodByUI', event)
    },
    updateReinvestingPeriodByUI (event: Event) {
      this.$store.dispatch('investing/updateReinvestingPeriodByUI', event)
    },
    toggleOnlyYearReportsByUI (event: Event) {
      // @ts-ignore
      this.$store.commit('investing/setShowOnlyYearReports', event.currentTarget.checked)
    }
  }
})
</script>

<style scoped>
.base {
  margin: 10px;
}

.checkbox {
  padding-top: 0.5em;
  padding-left: 2em;
  user-select: none;
}

.mobileSelect {
  margin: 0 calc(var(--bs-gutter-x) * 0.5);
  width: calc(100% - var(--bs-gutter-x));
}

.depositBadge {
  right: 0;
  transform: translate(77%, -50%);
}

.durationBadge {
  right: 0;
  transform: translate(70%, -50%);
}

.percentsBadge {
  right: 0;
  transform: translate(65%, -50%);
}

.replenishmentBadge {
  right: 0;
  transform: translate(77%, -50%);
}
</style>
