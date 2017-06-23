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
    count: 0
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
    : ({ omega, definition: {}, gears, state })
)
