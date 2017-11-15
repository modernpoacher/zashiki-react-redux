export const transform = ({
  definition: schema,
  response: formData = {},
  status
}) => ({
  definition: {
    ...(schema ? { schema, formData } : {})
  },
  status
})
