export const transform = ({
  omega = [],
  definition: schema,
  response: formData = {},
  gears = {
    reverse: {},
    forward: {}
  },
  state = {
    index: 0,
    count: 1
  }
}) => (
  (schema)
    ? ({
      omega,
      definition: {
        schema,
        formData
      },
      gears,
      state
    })
    : ({ omega, gears, state })
)
