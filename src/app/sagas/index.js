import {
  all
} from 'redux-saga/effects'

import {
  watchEmbarkFetch,
  watchEmbarkStore,
  watchEmbarkSubmit
} from './stages/embark'

import {
  watchAlphaChange,
  watchAlphaFetch,
  watchAlphaStore,
  watchAlphaQuery,
  watchAlphaSubmit
} from './stages/alpha'

import {
  watchOmegaChange,
  watchOmegaFetch,
  watchOmegaStore,
  watchOmegaQuery,
  watchOmegaSubmit
} from './stages/omega'

import {
  watchDebarkFetch,
  watchDebarkStore,
  watchDebarkSubmit
} from './stages/debark'

import {
  watchZashikiChange,
  watchZashikiFetch,
  watchZashikiStore,
  watchZashikiSubmit
} from './zashiki'

export default function * rootSaga () {
  yield all([
    watchEmbarkFetch(),
    watchEmbarkStore(),
    watchEmbarkSubmit(),

    watchAlphaChange(),
    watchAlphaFetch(),
    watchAlphaStore(),
    watchAlphaQuery(),
    watchAlphaSubmit(),

    watchOmegaChange(),
    watchOmegaFetch(),
    watchOmegaStore(),
    watchOmegaQuery(),
    watchOmegaSubmit(),

    watchDebarkFetch(),
    watchDebarkStore(),
    watchDebarkSubmit(),

    watchZashikiChange(),
    watchZashikiFetch(),
    watchZashikiStore(),
    watchZashikiSubmit()
  ])
}
