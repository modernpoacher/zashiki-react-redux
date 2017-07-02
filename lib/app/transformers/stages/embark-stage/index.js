export const transform = ({
  definition: schema,
  response: formData
}) => (
  (schema)
    ? ({
      definition: {
        schema,
        formData
      }
    })
    : ({ definition: {} })
)
