export const transform = ({
  alpha = {},
  resource,
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
  resource,
  definition: {
    ...(schema ? { schema, formData } : {})
  },
  gears,
  state,
  status
})
