import React from 'react'

import EmbarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/stage'

const NoDecision = (props) => (
  <EmbarkStage
    {...props} />
)

NoDecision.propTypes = {
  ...EmbarkStage.propTypes
}

NoDecision.defaultProps = {
  ...EmbarkStage.defaultProps
}

export default NoDecision
