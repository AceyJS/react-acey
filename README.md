# React Acey

React Acey is the official React binding for [Acey](https://github.com/aceyjs/acey). 

It lets your React components read data from your **Models and Collections**

<br />

## Installation

```sh
yarn add react-acey
```

<br />

## Quick start

### Function Component

```js
import React from 'react'
import { useAcey } from 'react-acey'
import Counter from './counter-model'

const CounterApp = () => {
  
  useAcey([ Counter ])

  return (
    <>
      <button onClick={Counter.decrement}>decrement</button>
        <span>{Counter.get()}</span>
      <button onClick={Counter.increment}>increment</button>
    </>
  )
}

export default CounterApp
```

<br />

### Class Component

```js
import React from 'react'
import { connect } from 'react-acey'
import Counter from './counter-model'

class CounterApp extends React.Component {
  
  render = () => {
    return (
      <>
        <button onClick={Counter.decrement}>decrement</button>
          <span>{Counter.get()}</span>
        <button onClick={Counter.increment}>increment</button>
      </>
    )
  }
}

export default connect([ Counter ])(CounterApp)
```

<br />

<br />

## API

### `connect()` 

#### Overview

The `connect()` function connects a **React class component** to a list of `Model, Collection or Model/Collection's methods`.

It provides its connected component with the list of `Model, Collection or Model/Collection's methods` it needs.

It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.

#### Parameters

`connect()` accepts one parameter: a list of that can contain either : `Models`, `Collections` or `Model/Collection's methods`
 
`connect( (Function | Model | Collection)[] )`

#### Returns

The return of `connect()` is a wrapper function that takes your component and returns a wrapper component.

<br />

### `useAcey()` 

Same than `connect()`, but for **Functional Components** 
