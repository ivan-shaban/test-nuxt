export const state = () => ({
  isLoggedIn: true
})

export type State = ReturnType<typeof state>
export const getters = {
  isLoggedIn: (state: State) => state.isLoggedIn
}
