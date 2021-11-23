<template>
  <nav class="navbar navbar-expand-lg navbar-light" data-toggle="affix">
    <div class="container-fluid">
      <button
        class="navbar-toggler navbar-toggler-right collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarResponsive" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link smooth-scroll whiteLink" :to="$pagesPath.table.$url()">
              Общая статистика
            </NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a
              id="calendarDropdownMenuLink"
              class="nav-link dropdown-toggle smooth-scroll whiteLink"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Календари
            </a>
            <ul class="dropdown-menu" aria-labelledby="calendarDropdownMenuLink">
              <NuxtLink
                class="dropdown-item"
                :class="{disabled: !isLoggedIn}"
                :to="$pagesPath.calendars.personal.add.$url()"
              >
                Личный
              </NuxtLink>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              id="calculatorsDropdownMenuLink"
              class="nav-link dropdown-toggle smooth-scroll whiteLink"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Калькуляторы
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NuxtLink class="dropdown-item" :to="$pagesPath.calculators.investing.$url()">
                Инвестиционный калькулятор
              </NuxtLink>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              id="generalInfoDropdownMenuLink"
              class="nav-link dropdown-toggle smooth-scroll whiteLink"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Полезная информация
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NuxtLink class="dropdown-item" :to="$pagesPath.info.wallet_replenishment.$url()">
                Пополнение кошелька FINSTORE
              </NuxtLink>
              <NuxtLink class="dropdown-item" :to="$pagesPath.info.funds_withdrawal.$url()">
                Вывод средств из FINSTORE
              </NuxtLink>
              <NuxtLink class="dropdown-item" :to="$pagesPath.info.telegram_kanaly.$url()">
                Telegram-каналы
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
      <slot />
    </div>
  </nav>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
  get isLoggedIn () {
    return this.$store.getters['user/isLoggedIn']
  }
}
</script>

<style scoped>
.whiteLink {
  color: white !important;
}
</style>
