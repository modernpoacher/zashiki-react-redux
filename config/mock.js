const {
  mocks: {
    MockBrowser
  },
  delegates: {
    AbstractBrowser
  }
} = require('mock-browser')

module.exports = function () {
  if (!global.document || !global.window) {
    global.document = global.document || MockBrowser.createDocument()
    global.window = global.window || MockBrowser.createWindow()
  }

  if (!global.navigator) {
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
}
