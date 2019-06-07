import React from 'react'

import AlphaStage from '@modernpoacher/zashiki-react-redux/app/components/stages/alpha/stage'

const InProgress = (props) => (
  <AlphaStage
    {...props} />
)

InProgress.propTypes = {
  ...AlphaStage.propTypes
}

InProgress.defaultProps = {
  ...AlphaStage.defaultProps
}

export default InProgress
