export const transform = ({
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
      definition: {
        schema,
        formData
      },
      gears,
      state
    })
    : ({ gears, state })
)
