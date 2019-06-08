import React from 'react'

import EmbarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/stage'

const InProgress = (props) => (
  <EmbarkStage
    {...props} />
)

InProgress.propTypes = {
  ...EmbarkStage.propTypes
}

InProgress.defaultProps = {
  ...EmbarkStage.defaultProps
}

export default InProgress
