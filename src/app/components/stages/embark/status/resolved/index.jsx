import classnames from 'classnames'

import Stage from '#zashiki-react-redux/app/components/stages/embark/stage'

export default class Resolved extends Stage {
  getClassName () {
    return classnames(super.getClassName(), 'resolved')
  }
}
