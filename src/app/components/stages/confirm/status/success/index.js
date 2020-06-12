import React from 'react'

import ConfirmStage from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage'

const Success = (props) => (
  <ConfirmStage
    {...props} />
)

Success.propTypes = {
  ...ConfirmStage.propTypes
}

Success.defaultProps = {
  ...ConfirmStage.defaultProps
}

export default Success
