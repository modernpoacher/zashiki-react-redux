## `@modernpoacher/zashiki-react-redux`

# Zashiki React Redux

Implements *React* + *Redux* + *React Router* + *Sagas* for *Zashiki Karakuri*.

*Zashiki Karakuri* encourages composition and inheritance.

## Installation

```bash
npm i -P @modernpoacher/zashiki-react-redux
```

## Usage

- Optionally, build the JS in `src` to `lib` (the published package is pre-built according to the configuration in `babel.config.js`)
- Import the built JS from `lib`

## Structure

The structure should be self-evident under `src/app`:

- `actions` for action creators
- `components` for components
- `reducers` for reducers
- `sagas` for sagas

Utilities are in `common` and transformers are in `transformers`.

In addition, there is `src/isomorphic` for isomorphic rendering functions and `src/api` for Ajax (implemented with Axios).
