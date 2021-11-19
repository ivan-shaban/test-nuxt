<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap bg-purple-900 p-2">
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-blue-100 border-teal-400 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div
          class="relative block px-4 py-2 text-white rounded-lg cursor-pointer hover:bg-indigo-500"
        >
          <NuxtLink :to="$pagesPath.$url()" class="text-sm">Общая статистика</NuxtLink>
        </div>
        <Dropdown title="Календари" :content="calendars" />
        <Dropdown title="Калькуляторы" :content="calculators" />
        <Dropdown title="Полезная информация" :content="usefulInfo" />
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-900 hover:bg-white mt-4 lg:mt-0"
          >Download</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Dropdown from '~/components/Dropdown.vue'
import { pagesPath } from '~/plugins/$path'

export default {
  components: { Dropdown },
  data () {
    return {
      generalStat: [],
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
  methods: {
    login () {
      console.log('>>  click on login button!')
    }
  }
}
</script>
