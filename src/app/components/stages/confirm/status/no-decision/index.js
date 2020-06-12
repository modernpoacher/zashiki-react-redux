import React from 'react'

import ConfirmStage from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage'

const NoDecision = (props) => (
  <ConfirmStage
    {...props} />
)

NoDecision.propTypes = {
  ...ConfirmStage.propTypes
}

NoDecision.defaultProps = {
  ...ConfirmStage.defaultProps
}

export default NoDecision
