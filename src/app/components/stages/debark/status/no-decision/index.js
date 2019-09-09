import React from 'react'

import DebarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage'

const NoDecision = (props) => (
  <DebarkStage
    {...props} />
)

NoDecision.propTypes = {
  ...DebarkStage.propTypes
}

NoDecision.defaultProps = {
  ...DebarkStage.defaultProps
}

export default NoDecision
