import React from 'react'

import EmbarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/stage'

const Success = (props) => (
  <EmbarkStage
    {...props} />
)

Success.propTypes = {
  ...EmbarkStage.propTypes
}

Success.defaultProps = {
  ...EmbarkStage.defaultProps
}

export default Success
