import classnames from 'classnames'

import Title from '@modernpoacher/zashiki-react-redux/app/components/stages/omega/title/stage'

export default class Resolved extends Title {
  getClassName () {
    return classnames(super.getClassName(), 'resolved')
  }
}
