export const delay = (ms: number) => new Promise<void>((resolve) => {
  if (process.env.client) {
    window.setTimeout(resolve, ms)
  } else {
    // eslint-disable-next-line no-console
    console.error('>> client:delay > You shouldn\'t use clients utilities in server environment')
    resolve()
  }
})
