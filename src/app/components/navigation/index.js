import React from 'react'
import {
  Link
} from 'react-router'

import {
  Rails
} from 'shinkansen-rails'

import {
  Signals
} from 'shinkansen-signals'

const {
  EMBARK,
  DEBARK,
  EMBARK_STAGE,
  DEBARK_STAGE,
  EMBARK_PATTERN,
  DEBARK_PATTERN
} = Signals

const EMBARK_ROUTE = Rails.to({ [EMBARK]: EMBARK_STAGE }, EMBARK_PATTERN)
const DEBARK_ROUTE = Rails.to({ [DEBARK]: DEBARK_STAGE }, DEBARK_PATTERN)

export default () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Index Page</Link>
      </li>
      <li>
        <Link to={EMBARK_ROUTE}>
          Embark Route
        </Link>
      </li>
      <li>
        <Link to={DEBARK_ROUTE}>
          Debark Route
        </Link>
      </li>
      <li>
        <ul>
          <li>
            <Link to='/greenwich'>
              <h4>Greenwich</h4>
            </Link>
            <ul>
              <li>
                <Link to='/greenwich/question-1'>Greenwich - Question (1)</Link>
              </li>
              <li>
                <Link to='/greenwich/question-2'>Greenwich - Question (2)</Link>
              </li>
              <li>
                <Link to='/greenwich/question-3'>Greenwich - Question (3)</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/hounslow'>
              <h4>Hounslow</h4>
            </Link>
            <ul>
              <li>
                <Link to='/hounslow/question-1'>Hounslow - Question (1)</Link>
              </li>
              <li>
                <Link to='/hounslow/question-2'>Hounslow - Question (2)</Link>
              </li>
              <li>
                <Link to='/hounslow/question-3'>Hounslow - Question (3)</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/camden'>
              <h4>Camden</h4>
            </Link>
            <ul>
              <li>
                <Link to='/camden/question-1'>Camden - B (1)</Link>
              </li>
              <li>
                <Link to='/camden/question-2'>Camden - B (2)</Link>
              </li>
              <li>
                <Link to='/camden/question-3'>Camden - B (3)</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
)
