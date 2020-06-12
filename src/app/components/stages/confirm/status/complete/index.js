import React from 'react'

import ConfirmStage from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage'

const Complete = (props) => (
  <ConfirmStage
    {...props} />
)

Complete.propTypes = {
  ...ConfirmStage.propTypes
}

Complete.defaultProps = {
  ...ConfirmStage.defaultProps
}

export default Complete
