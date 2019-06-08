import React from 'react'

import DebarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage'

const Success = (props) => (
  <DebarkStage
    {...props} />
)

Success.propTypes = {
  ...DebarkStage.propTypes
}

Success.defaultProps = {
  ...DebarkStage.defaultProps
}

export default Success
