import React from 'react'

import AlphaStage from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/stage'

const Success = (props) => (
  <AlphaStage
    {...props} />
)

Success.propTypes = {
  ...AlphaStage.propTypes
}

Success.defaultProps = {
  ...AlphaStage.defaultProps
}

export default Success
