import React from 'react'

import AlphaStage from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/stage'

const Complete = (props) => (
  <AlphaStage
    {...props} />
)

Complete.propTypes = {
  ...AlphaStage.propTypes
}

Complete.defaultProps = {
  ...AlphaStage.defaultProps
}

export default Complete
