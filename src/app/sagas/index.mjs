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
} from './stages/alpha/index.mjs'

import {
  watchOmegaRoute,
  watchOmegaMount,
  watchOmegaFetch,
  watchOmegaStore,
  watchOmegaQuery,
  watchOmegaSubmit
} from './stages/omega/index.mjs'

import {
  watchEmbarkRoute,
  watchEmbarkFetch,
  watchEmbarkStore,
  watchEmbarkSubmit
} from './stages/embark/index.mjs'

import {
  watchDebarkRoute,
  watchDebarkFetch,
  watchDebarkStore,
  watchDebarkSubmit
} from './stages/debark/index.mjs'

import {
  watchConfirmRoute,
  watchConfirmFetch,
  watchConfirmStore,
  watchConfirmSubmit
} from './stages/confirm/index.mjs'

import {
  watchZashikiMount,
  watchZashikiFetch,
  watchZashikiStore,
  watchZashikiQuery,
  watchZashikiSubmit
} from './zashiki/index.mjs'

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

    watchConfirmRoute(),
    watchConfirmFetch(),
    watchConfirmStore(),
    watchConfirmSubmit(),

    watchZashikiMount(),
    watchZashikiFetch(),
    watchZashikiStore(),
    watchZashikiQuery(),
    watchZashikiSubmit()
  ])
}
