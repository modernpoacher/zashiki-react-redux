export default function resource (alpha, omega) {
  return { ...(alpha ? { alpha, ...(omega ? { omega } : {}) } : {}) }
}
