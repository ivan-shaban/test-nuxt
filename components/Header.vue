<template>
  <header class="header">
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
              <NuxtLink to="$pagesPath.table.$url()">
                <a class="nav-link smooth-scroll whiteLink">Общая статистика</a>
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
                <NuxtLink to="$pagesPath.calendars.personal.add.$url()">
                  <a class="dropdown-item">Личный</a>
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
                <NuxtLink to="$pagesPath.calculators.investing.$url()">
                  <a class="dropdown-item">Инвестиционный калькулятор</a>
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
                <NuxtLink to="$pagesPath.info.wallet_replenishment.$url()">
                  <a class="dropdown-item">Пополнение кошелька FINSTORE</a>
                </NuxtLink>
                <NuxtLink to="$pagesPath.info.funds_withdrawal.$url()">
                  <a class="dropdown-item">Вывод средств из FINSTORE</a>
                </NuxtLink>
                <NuxtLink to="$pagesPath.info.telegram_kanaly.$url()">
                  <a class="dropdown-item">Telegram-каналы</a>
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>
        <button type="button" class="btn btn-outline-light d-flex" @onClick="login">
          Войти
        </button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  methods: {
    login () {
      console.log('>>  click on login button!')
    }
  }
}
</script>
<style>
.header {
  background: blueviolet;
}

.whiteLink {
  color: white !important;
}

</style>
