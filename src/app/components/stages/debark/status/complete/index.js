import React from 'react'

import DebarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage'

const Complete = (props) => (
  <DebarkStage
    {...props} />
)

Complete.propTypes = {
  ...DebarkStage.propTypes
}

Complete.defaultProps = {
  ...DebarkStage.defaultProps
}

export default Complete
