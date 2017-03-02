import React from 'react'
import { Link } from 'react-router'

export default () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Index Page</Link>
      </li>
      <li>
        <Link to='/list-stage'>List Stage</Link>
      </li>
        <li>
        <Link to='/halt-stage'>Halt Stage</Link>
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
