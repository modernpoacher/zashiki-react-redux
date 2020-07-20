## `@modernpoacher/zashiki-react-redux`

# Zashiki React Redux

Implements *React* + *Redux* + *React Router* + *Sagas* for *Zashiki Karakuri*.

## Installation

```bash
npm i -P @modernpoacher/zashiki-react-redux
```

## Usage

- Build from `src`
- Import (or require) built from `lib`

## Structure

The structure should be self-evident under `src/app`:

- `actions` for action creators
- `components` for components
- `reducers` for reducers
- `sagas` for sagas

Utilities are in `common` and transformers are in `transformers`.

In addition, there is `src/isomorphic` for isomorphic rendering functions and `src/api` for Ajax (implemented with Axios).
