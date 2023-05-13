import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'

import Stage from '#app/components/stages/debark/stage'

const MOCK_STRING_DEFINITION = {
  type: 'STRING',
  params: {
    answer: {
      title: 'String',
      value: 'string'
    },
    changeAnswer: {
      href: '/alpha/omega',
      text: 'Change',
      visuallyHiddenText: 'string'
    }
  }
}

const MOCK_NUMBER_DEFINITION = {
  type: 'NUMBER',
  params: {
    answer: {
      title: 'Number',
      value: '3'
    },
    changeAnswer: {
      href: '/alpha/omega',
      text: 'Change',
      visuallyHiddenText: 'number'
    }
  }
}

const MOCK_BOOLEAN_DEFINITION = {
  type: 'BOOLEAN',
  params: {
    answer: {
      title: 'Boolean',
      value: 'false'
    },
    changeAnswer: {
      href: '/alpha/omega',
      text: 'Change',
      visuallyHiddenText: 'boolean'
    }
  }
}

const MOCK_NULL_DEFINITION = {
  type: 'NULL',
  params: {
    answer: {
      title: 'Null',
      value: 'null'
    },
    changeAnswer: {
      href: '/alpha/omega',
      text: 'Change',
      visuallyHiddenText: 'null'
    }
  }
}

const MOCK_RESOURCE = {
  alpha: 'MOCK ALPHA',
  omega: 'MOCK OMEGA'
}

const MOCK_RESPONSE = {
  '#/': 'MOCK VALUE'
}

const MOCK_ERRORS = []

const MOCK_DEFINITIONS = [
  {
    definition: [
      MOCK_STRING_DEFINITION,
      MOCK_NUMBER_DEFINITION,
      MOCK_BOOLEAN_DEFINITION,
      MOCK_NULL_DEFINITION
    ],
    resource: MOCK_RESOURCE,
    response: MOCK_RESPONSE,
    errors: MOCK_ERRORS
  }
]

function MockLink ({ to, children }) {
  return (
    <a href={to} className='mock-link'>
      {children}
    </a>
  )
}

MockLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape()
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ])
}

jest.mock('react-router-dom', () => {
  return {
    __esModule: true,
    Link: MockLink
  }
})

describe('#app/components/stages/debark/stage', () => {
  describe('Always', () => {
    it('renders', () => {
      const component = (
        <Stage
          definitions={MOCK_DEFINITIONS}
          token={{}}
          onSubmit={jest.fn()}
        />
      )

      expect(renderer.create(component).toJSON())
        .toMatchSnapshot()
    })
  })
})
