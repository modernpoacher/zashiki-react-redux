import React from 'react'

import OmegaStage from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/stage'

const Success = (props) => (
  <OmegaStage
    {...props} />
)

Success.propTypes = {
  ...OmegaStage.propTypes
}

Success.defaultProps = {
  ...OmegaStage.defaultProps
}

export default Success
