import classnames from 'classnames'

import Title from '#zashiki-react-redux/app/components/stages/debark/title/stage'

export default class Rejected extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'rejected')
  }
}
