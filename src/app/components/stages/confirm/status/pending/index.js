import React from 'react'

import ConfirmStage from '@modernpoacher/zashiki-react-redux/app/components/stages/confirm/stage'

const Pending = () => (
  <div className='confirm pending' />
)

Pending.propTypes = {
  ...ConfirmStage.propTypes
}

Pending.defaultProps = {
  ...ConfirmStage.defaultProps
}

export default Pending
