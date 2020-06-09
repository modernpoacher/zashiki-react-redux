import {
  toZashiki,
  fromDocumentToHash,
  fromHashToDocument
} from 'shinkansen-engine/lib/transformers/transmission'

import {
  fromDocumentToZashiki,
  fromZashikiToDocument
} from '@modernpoacher/zashiki-react-redux/app/transformers/stages/embark'

import { transformFailure } from '@modernpoacher/zashiki-react-redux/app/transformers'

jest.mock('shinkansen-engine/lib/components/signals', () => ({
  FAILURE: 'MOCK FAILURE'
}))

jest.mock('shinkansen-engine/lib/transformers/transmission', () => ({
  toZashiki: jest.fn().mockImplementation(() => 'MOCK ZASHIKI'),
  fromDocumentToHash: jest.fn().mockImplementation(() => 'MOCK FROM DOCUMENT TO HASH'),
  fromHashToDocument: jest.fn().mockImplementation(() => 'MOCK FROM HASH TO DOCUMENT')
}))

jest.mock('@modernpoacher/zashiki-react-redux/app/transformers', () => ({ transformFailure: jest.fn() }))

const DEFAULT = {
  status: 'MOCK STATUS',
  definition: 'MOCK ZASHIKI'
}

describe('@modernpoacher/zashiki-react-redux/app/transformers/stages/embark', () => {
  describe('`fromDocumentToZashiki`', () => {
    it('is defined', () => {
      expect(fromDocumentToZashiki).toBeDefined()
    })
  })

  describe('`fromDocumentToZashiki()`', () => {
    describe('With parameters', () => {
      afterEach(() => {
        jest.clearAllMocks()
      })

      describe('`status` is `Signals.FAILURE`', () => {
        it('invokes `transformFailure`', () => {
          fromDocumentToZashiki({ status: 'MOCK FAILURE' })

          expect(transformFailure)
            .toBeCalledWith('MOCK FAILURE', {})
        })
      })

      describe('`status` is not `Signals.FAILURE`', () => {
        it('does not invoke `transformFailure`', () => {
          fromDocumentToZashiki({ status: 'MOCK STATUS' })

          expect(transformFailure)
            .not.toBeCalled()
        })

        it('returns an object with default values', () => {
          expect(fromDocumentToZashiki({ status: 'MOCK STATUS' }))
            .toEqual(DEFAULT)
        })
      })

      describe('`definition` is an object', () => {
        let returnValue

        beforeEach(() => {
          jest.clearAllMocks()

          returnValue = fromDocumentToZashiki({
            status: 'MOCK STATUS',
            definition: 'MOCK DEFINITION',
            response: 'MOCK RESPONSE'
          })
        })

        describe('`response` is an object', () => {
          it('invokes `fromDocumentToHash`', () => {
            expect(fromDocumentToHash)
              .toBeCalledWith('MOCK RESPONSE', 'MOCK DEFINITION')
          })

          it('invokes `toZashiki`', () => {
            expect(toZashiki)
              .toBeCalledWith('MOCK DEFINITION', 'MOCK FROM DOCUMENT TO HASH')
          })

          it('returns an object with `definition` and default values', () => {
            expect(returnValue)
              .toEqual({
                ...DEFAULT,
                definition: 'MOCK ZASHIKI'
              })
          })
        })

        describe('`response` is not an object', () => {
          let returnValue

          beforeEach(() => {
            jest.clearAllMocks()

            returnValue = fromDocumentToZashiki({
              status: 'MOCK STATUS',
              definition: 'MOCK DEFINITION'
            })
          })

          it('does not invoke `fromDocumentToHash`', () => {
            expect(fromDocumentToHash)
              .not.toBeCalled()
          })

          it('invokes `toZashiki`', () => {
            expect(toZashiki)
              .toBeCalledWith('MOCK DEFINITION', undefined)
          })

          it('returns an object with `definition` and default values', () => {
            expect(returnValue)
              .toEqual({
                ...DEFAULT,
                definition: 'MOCK ZASHIKI'
              })
          })
        })
      })
    })

    describe('Without parameters', () => {
      it('invokes `transformFailure`', () => {
        fromDocumentToZashiki({ status: 'MOCK FAILURE' })

        expect(transformFailure)
          .toBeCalledWith('MOCK FAILURE', {})
      })
    })
  })

  describe('`fromZashikiToDocument()`', () => {
    describe('With parameters', () => {
      afterEach(() => {
        jest.clearAllMocks()
      })

      describe('`definition` is an object', () => {
        describe('`response` is an object', () => {
          let returnValue

          beforeEach(() => {
            returnValue = fromZashikiToDocument({
              definition: 'MOCK DEFINITION',
              response: 'MOCK RESPONSE'
            })
          })

          it('invokes `fromHashToDocument`', () => {
            expect(fromHashToDocument)
              .toBeCalledWith('MOCK DEFINITION', 'MOCK RESPONSE')
          })

          it('returns an object with `definition` and default values', () => {
            expect(returnValue)
              .toEqual('MOCK FROM HASH TO DOCUMENT')
          })
        })

        describe('`response` is not an object', () => {
          let returnValue

          beforeEach(() => {
            returnValue = fromZashikiToDocument({
              definition: 'MOCK DEFINITION'
            })
          })

          it('invokes `fromHashToDocument`', () => {
            expect(fromHashToDocument)
              .toBeCalledWith('MOCK DEFINITION', undefined)
          })

          it('returns an object with `definition` and default values', () => {
            expect(returnValue)
              .toEqual('MOCK FROM HASH TO DOCUMENT')
          })
        })
      })
    })

    describe.only('Without parameters', () => {
      it('invokes `transformFailure`', () => {
        fromZashikiToDocument()

        expect(fromHashToDocument)
          .toBeCalledWith({}, undefined)
      })
    })
  })
})
