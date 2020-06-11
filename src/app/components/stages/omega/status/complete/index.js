import React from 'react'

import OmegaStage from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/stage'

const Complete = (props) => (
  <OmegaStage
    {...props} />
)

Complete.propTypes = {
  ...OmegaStage.propTypes
}

Complete.defaultProps = {
  ...OmegaStage.defaultProps
}

export default Complete
