export const transform = ({
  omega = [],
  resource,
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
  definitions: omega.map(({
    resource,
    definition: schema,
    response: formData = {}
  }) => ({
    resource,
    definition: {
      ...(schema ? { schema, formData } : {})
    }
  })),
  resource,
  gears,
  state,
  status
})
