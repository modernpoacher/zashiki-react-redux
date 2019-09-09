import React from 'react'

import AlphaStage from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/stage'

const NoDecision = (props) => (
  <AlphaStage
    {...props} />
)

NoDecision.propTypes = {
  ...AlphaStage.propTypes
}

NoDecision.defaultProps = {
  ...AlphaStage.defaultProps
}

export default NoDecision
