import React from 'react'

import EmbarkStage from '@modernpoacher/zashiki-react-redux/app/components/stages/embark/stage'

const Pending = () => (
  <div className='embark pending' />
)

Pending.propTypes = {
  ...EmbarkStage.propTypes
}

Pending.defaultProps = {
  ...EmbarkStage.defaultProps
}

export default Pending
