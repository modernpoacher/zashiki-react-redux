import {
  all
} from 'redux-saga/effects'

import {
  watchAlphaRoute,
  watchAlphaMount,
  watchAlphaFetch,
  watchAlphaStore,
  watchAlphaQuery,
  watchAlphaSubmit
} from './stages/alpha'

import {
  watchOmegaRoute,
  watchOmegaMount,
  watchOmegaFetch,
  watchOmegaStore,
  watchOmegaQuery,
  watchOmegaSubmit
} from './stages/omega'

import {
  watchEmbarkRoute,
  watchEmbarkFetch,
  watchEmbarkStore,
  watchEmbarkSubmit
} from './stages/embark'

import {
  watchDebarkRoute,
  watchDebarkFetch,
  watchDebarkStore,
  watchDebarkSubmit
} from './stages/debark'

import {
  watchZashikiMount,
  watchZashikiFetch,
  watchZashikiStore,
  watchZashikiQuery,
  watchZashikiSubmit
} from './zashiki'

export default function * rootSaga () {
  yield all([
    watchAlphaRoute(),
    watchAlphaMount(),
    watchAlphaFetch(),
    watchAlphaStore(),
    watchAlphaQuery(),
    watchAlphaSubmit(),

    watchOmegaRoute(),
    watchOmegaMount(),
    watchOmegaFetch(),
    watchOmegaStore(),
    watchOmegaQuery(),
    watchOmegaSubmit(),

    watchEmbarkRoute(),
    watchEmbarkFetch(),
    watchEmbarkStore(),
    watchEmbarkSubmit(),

    watchDebarkRoute(),
    watchDebarkFetch(),
    watchDebarkStore(),
    watchDebarkSubmit(),

    watchZashikiMount(),
    watchZashikiFetch(),
    watchZashikiStore(),
    watchZashikiQuery(),
    watchZashikiSubmit()
  ])
}
