<template>
  <header class="base">
    <NavBar>
      <button type="button" class="btn btn-outline-light d-flex" @click="login">
        Войти
      </button>
    </NavBar>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { pagesPath } from '~/plugins/$path'
import NavBar from '~/components/NavBar.vue'

export default Vue.extend({
  name: 'InvestingCalculatorPage',
  components: {
    NavBar
  },
  data () {
    return {
      calendars: [{
        link: pagesPath.calendars.personal.add.$url(),
        title: 'Личный'
      }],

      calculators: [{
        link: pagesPath.calculators.investing.$url(),
        title: 'Инвестиционный калькулятор'
      }],
      usefulInfo: [{
        link: pagesPath.info.wallet_replenishment.$url(),
        title: 'Пополнение кошелька FINSTORE'
      }, {
        link: pagesPath.info.funds_withdrawal.$url(),
        title: 'Вывод средств из FINSTORE'
      }, {
        link: pagesPath.info.telegram_kanaly.$url(),
        title: 'Telegram-каналы'
      }]
    }
  },
  mounted () {
    // this.$auth.logout()
  },
  methods: {
    login () {
      // this.$auth.loginWith('google')
      // eslint-disable-next-line no-console
      console.log('>>  click on login button!')
    }
  }
})
</script>

<style scoped>
.base {
  background: blueviolet;
}
</style>
