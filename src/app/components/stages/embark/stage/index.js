import React from 'react'
import PropTypes from 'prop-types'

import Pinion from 'shinkansen-engine/lib/components/pinion'

import getEmbarkRoute from '@modernpoacher/zashiki-react-redux/app/common/get-embark-route'

const EmbarkStage = ({ onChange, onSubmit, definition }) => (
  <div className='embark'>
    <form method='POST' action={getEmbarkRoute()} onSubmit={(event) => {
      event.preventDefault()

      onSubmit()
    }}>
      <Pinion
        onChange={onChange}
        pinion={definition}
      />
      <button type='submit'>
        Continue
      </button>
    </form>
  </div>
)

EmbarkStage.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  definition: PropTypes.object.isRequired
}

export default EmbarkStage
