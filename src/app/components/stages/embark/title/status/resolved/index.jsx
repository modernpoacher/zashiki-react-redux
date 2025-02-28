import classnames from 'classnames'

import Title from '#zashiki-react-redux/app/components/stages/embark/title/stage'

export default class Resolved extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'resolved')
  }
}
