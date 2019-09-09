import React from 'react'

import EmbarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/stage'

const Pending = (props) => (
  <EmbarkStage
    {...props} />
)

Pending.propTypes = {
  ...EmbarkStage.propTypes
}

Pending.defaultProps = {
  ...EmbarkStage.defaultProps
}

export default Pending
