import React from 'react'

import OmegaStage from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/stage'

const Pending = (props) => (
  <OmegaStage
    {...props} />
)

Pending.propTypes = {
  ...OmegaStage.propTypes
}

Pending.defaultProps = {
  ...OmegaStage.defaultProps
}

export default Pending
