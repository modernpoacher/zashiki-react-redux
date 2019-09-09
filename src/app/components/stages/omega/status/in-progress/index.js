import React from 'react'

import OmegaStage from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/stage'

const InProgress = (props) => (
  <OmegaStage
    {...props} />
)

InProgress.propTypes = {
  ...OmegaStage.propTypes
}

InProgress.defaultProps = {
  ...OmegaStage.defaultProps
}

export default InProgress
