import {
  all
} from 'redux-saga/effects'

import {
  watchAlphaRoute,
  watchAlphaChange,
  watchAlphaSubmit,
  watchAlphaFetch,
  watchAlphaStore,
  watchAlphaQuery
} from './stages/alpha'

import {
  watchOmegaRoute,
  watchOmegaChange,
  watchOmegaSubmit,
  watchOmegaFetch,
  watchOmegaStore,
  watchOmegaQuery
} from './stages/omega'

import {
  watchEmbarkRoute,
  watchEmbarkChange,
  watchEmbarkSubmit,
  watchEmbarkFetch,
  watchEmbarkStore
} from './stages/embark'

import {
  watchDebarkRoute,
  watchDebarkChange,
  watchDebarkSubmit,
  watchDebarkFetch,
  watchDebarkStore
} from './stages/debark'

import {
  watchZashikiChange,
  watchZashikiSubmit,
  watchZashikiFetch,
  watchZashikiStore,
  watchZashikiQuery
} from './zashiki'

export default function * rootSaga () {
  yield all([
    watchAlphaRoute(),
    watchAlphaChange(),
    watchAlphaSubmit(),
    watchAlphaFetch(),
    watchAlphaStore(),
    watchAlphaQuery(),

    watchOmegaRoute(),
    watchOmegaChange(),
    watchOmegaSubmit(),
    watchOmegaFetch(),
    watchOmegaStore(),
    watchOmegaQuery(),

    watchEmbarkRoute(),
    watchEmbarkChange(),
    watchEmbarkSubmit(),
    watchEmbarkFetch(),
    watchEmbarkStore(),

    watchDebarkRoute(),
    watchDebarkChange(),
    watchDebarkSubmit(),
    watchDebarkFetch(),
    watchDebarkStore(),

    watchZashikiChange(),
    watchZashikiSubmit(),
    watchZashikiFetch(),
    watchZashikiStore(),
    watchZashikiQuery()
  ])
}
