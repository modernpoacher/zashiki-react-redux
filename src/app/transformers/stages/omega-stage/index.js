export const transform = ({
  alpha = {},
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
      alpha,
      definition: {
        schema,
        formData
      },
      gears,
      state
    })
    : ({
      alpha,
      definition: {},
      gears,
      state
    })
)
