import React from 'react'

import DebarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/debark/stage'

const Pending = () => (
  <div className='debark pending' />
)

Pending.propTypes = {
  ...DebarkStage.propTypes
}

Pending.defaultProps = {
  ...DebarkStage.defaultProps
}

export default Pending
