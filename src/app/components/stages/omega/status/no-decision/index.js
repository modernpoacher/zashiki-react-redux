import React from 'react'

import OmegaStage from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/stage'

const NoDecision = (props) => (
  <OmegaStage
    {...props} />
)

NoDecision.propTypes = {
  ...OmegaStage.propTypes
}

NoDecision.defaultProps = {
  ...OmegaStage.defaultProps
}

export default NoDecision
