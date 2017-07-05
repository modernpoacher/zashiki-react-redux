const {
  mocks: {
    MockBrowser
  },
  delegates: {
    AbstractBrowser
  }
} = require('mock-browser')

module.exports = () => {
  global.window = ('window' in global) ? window : MockBrowser.createWindow()
  global.document = ('document' in global) ? document : MockBrowser.createDocument()

  const {
    navigator
  } = window

  if (navigator) {
    global.navigator = navigator
  } else {
    const browser = new AbstractBrowser(global)

    global.navigator = browser.getNavigator()
  }
}
