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
  },
  status
}) => ({
  omega,
  definition: {
    ...(schema ? { schema, ...(formData ? { formData } : {}) } : {})
  },
  gears,
  state,
  status
})
