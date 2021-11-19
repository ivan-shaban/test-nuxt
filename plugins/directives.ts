import Vue from 'vue'

Vue.directive('click-outside', {
  bind (el, binding, vnode) {
    // @ts-ignore
    el.clickOutsideEvent = function (event: MouseEvent) {
      // here I check that click was outside the el and his children
      // @ts-ignore
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        // @ts-ignore
        vnode.context[binding.expression](event)
      }
    }
    // @ts-ignore
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind (el) {
    // @ts-ignore
    if (el.clickOutsideEvent) {
      // @ts-ignore
      document.body.removeEventListener('click', el.clickOutsideEvent)
    }
  }
})

Vue.directive('global-esc', {
  bind (el, binding, vnode) {
    // @ts-ignore
    el.globalESCHandler = function (event) {
      if (event.code === 'Escape') {
        // @ts-ignore
        vnode.context[binding.expression](event)
      }
    }
    // @ts-ignore
    document.body.addEventListener('keydown', el.globalESCHandler)
  },
  unbind (el) {
    // @ts-ignore
    if (el.clickOutsideEvent) {
      // @ts-ignore
      document.body.removeEventListener('keydown', el.globalESCHandler)
    }
  }
})
