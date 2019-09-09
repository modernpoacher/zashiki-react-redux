import React from 'react'

import EmbarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/stage'

const Complete = (props) => (
  <EmbarkStage
    {...props} />
)

Complete.propTypes = {
  ...EmbarkStage.propTypes
}

Complete.defaultProps = {
  ...EmbarkStage.defaultProps
}

export default Complete
