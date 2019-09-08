import {
  all
} from 'redux-saga/effects'

import {
  watchEmbarkFetch,
  watchEmbarkStore,
  watchEmbarkSubmit,
  watchEmbarkRoute
} from './stages/embark'

import {
  watchAlphaChange,
  watchAlphaFetch,
  watchAlphaStore,
  watchAlphaQuery,
  watchAlphaSubmit,
  watchAlphaRoute
} from './stages/alpha'

import {
  watchOmegaChange,
  watchOmegaFetch,
  watchOmegaStore,
  watchOmegaQuery,
  watchOmegaSubmit,
  watchOmegaRoute
} from './stages/omega'

import {
  watchDebarkFetch,
  watchDebarkStore,
  watchDebarkSubmit,
  watchDebarkRoute
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
    watchEmbarkRoute(),

    watchAlphaChange(),
    watchAlphaFetch(),
    watchAlphaStore(),
    watchAlphaQuery(),
    watchAlphaSubmit(),
    watchAlphaRoute(),

    watchOmegaChange(),
    watchOmegaFetch(),
    watchOmegaStore(),
    watchOmegaQuery(),
    watchOmegaSubmit(),
    watchOmegaRoute(),

    watchDebarkFetch(),
    watchDebarkStore(),
    watchDebarkSubmit(),
    watchDebarkRoute(),

    watchZashikiChange(),
    watchZashikiFetch(),
    watchZashikiStore(),
    watchZashikiSubmit()
  ])
}
