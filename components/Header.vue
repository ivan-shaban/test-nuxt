<template>
  <header class="base">
    <NavBar>
      <button type="button" class="btn btn-outline-light d-flex" @click="login">
        Войти
      </button>
    </NavBar>
  </header>
</template>

<style scoped>
.base {
  background: blueviolet;
}
</style>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator'
import { pagesPath } from '~/plugins/$path'
import NavBar from '~/components/NavBar.vue'

@Component({
  components: { NavBar }
})
export default class Header extends Vue {
  calendars = [{
    link: pagesPath.calendars.personal.add.$url(),
    title: 'Личный'
  }]

  calculators = [{
    link: pagesPath.calculators.investing.$url(),
    title: 'Инвестиционный калькулятор'
  }]

  usefulInfo = [{
    link: pagesPath.info.wallet_replenishment.$url(),
    title: 'Пополнение кошелька FINSTORE'
  }, {
    link: pagesPath.info.funds_withdrawal.$url(),
    title: 'Вывод средств из FINSTORE'
  }, {
    link: pagesPath.info.telegram_kanaly.$url(),
    title: 'Telegram-каналы'
  }]

  mounted () {
    // this.$auth.logout()
  }

  login () {
    // this.$auth.loginWith('google')
    // eslint-disable-next-line no-console
    console.log('>>  click on login button!')
  }
}
</script>
