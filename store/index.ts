export const state = () => ({
  counter: 0
})

export type State = ReturnType<typeof state>

export const mutations = {
  increment (state: State) {
    state.counter++
  }
}
