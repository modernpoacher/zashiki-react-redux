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
  },
  status
}) => ({
  alpha,
  definition: {
    ...(schema ? { schema, formData } : {})
  },
  gears,
  state,
  status
})
