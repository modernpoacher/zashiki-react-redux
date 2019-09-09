import React from 'react'

import DebarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage'

const Pending = (props) => (
  <DebarkStage
    {...props} />
)

Pending.propTypes = {
  ...DebarkStage.propTypes
}

Pending.defaultProps = {
  ...DebarkStage.defaultProps
}

export default Pending
