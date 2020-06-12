import React from 'react'

import ConfirmStage from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage'

const InProgress = (props) => (
  <ConfirmStage
    {...props} />
)

InProgress.propTypes = {
  ...ConfirmStage.propTypes
}

InProgress.defaultProps = {
  ...ConfirmStage.defaultProps
}

export default InProgress
