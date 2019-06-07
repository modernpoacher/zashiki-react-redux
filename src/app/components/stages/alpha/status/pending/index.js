import React from 'react'

import AlphaStage from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/stage'

const Pending = (props) => (
  <AlphaStage
    {...props} />
)

Pending.propTypes = {
  ...AlphaStage.propTypes
}

Pending.defaultProps = {
  ...AlphaStage.defaultProps
}

export default Pending
