import React from 'react'

import DebarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage'

const InProgress = (props) => (
  <DebarkStage
    {...props} />
)

InProgress.propTypes = {
  ...DebarkStage.propTypes
}

InProgress.defaultProps = {
  ...DebarkStage.defaultProps
}

export default InProgress
