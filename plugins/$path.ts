/* eslint-disable */
// prettier-ignore
import { Plugin } from '@nuxt/types'

// prettier-ignore
export const pagesPath = {
  calculators: {
    investing: {
      $url: (url?: { hash?: string }) => ({ path: '/calculators/investing', hash: url?.hash })
    }
  },
  calendars: {
    personal: {
      add: {
        $url: (url?: { hash?: string }) => ({ path: '/calendars/personal/add', hash: url?.hash })
      }
    }
  },
  emitents: {
    _code: (code?: string | number) => ({
      $url: (url?: { hash?: string }) => ({ path: `/emitents${code !== undefined ? `/${code}` : ''}`, hash: url?.hash })
    })
  },
  info: {
    funds_withdrawal: {
      $url: (url?: { hash?: string }) => ({ path: '/info/funds_withdrawal', hash: url?.hash })
    },
    telegram_kanaly: {
      $url: (url?: { hash?: string }) => ({ path: '/info/telegram_kanaly', hash: url?.hash })
    },
    wallet_replenishment: {
      $url: (url?: { hash?: string }) => ({ path: '/info/wallet_replenishment', hash: url?.hash })
    }
  },
  login: {
    $url: (url?: { hash?: string }) => ({ path: '/login', hash: url?.hash })
  },
  table: {
    $url: (url?: { hash?: string }) => ({ path: '/table', hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ path: '/', hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
declare module 'vue/types/vue' {
  interface Vue {
    $pagesPath: PagesPath
  }
}

// prettier-ignore
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $pagesPath: PagesPath
  }

  interface Context {
    $pagesPath: PagesPath
  }
}

// prettier-ignore
declare module 'vuex/types/index' {
  interface Store<S> {
    $pagesPath: PagesPath
  }
}

// prettier-ignore
const pathPlugin: Plugin = (_, inject) => {
  inject('pagesPath', pagesPath)
}

// prettier-ignore
export default pathPlugin
