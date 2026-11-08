<h1 align="center">React API ✇</h1>
<h2 align="center">
  Next.js API utility library
</h2>
<p align="center">
  <a href="https://npmjs.org/package/@alessiofrittoli/react-api">
    <img src="https://img.shields.io/npm/v/@alessiofrittoli/react-api" alt="Latest version"/>
  </a>
  <a href="https://coveralls.io/github/alessiofrittoli/react-api">
    <img src="https://coveralls.io/repos/github/alessiofrittoli/react-api/badge.svg" alt="Test coverage"/>
  </a>
  <a href="https://socket.dev/npm/package/@alessiofrittoli/react-api/overview">
    <img src="https://socket.dev/api/badge/npm/package/@alessiofrittoli/react-api" alt="Socket Security score"/>
  </a>
  <a href="https://npmjs.org/package/@alessiofrittoli/react-api">
    <img src="https://img.shields.io/npm/dm/@alessiofrittoli/react-api.svg" alt="npm downloads"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/react-api">
    <img src="https://badgen.net/bundlephobia/dependency-count/@alessiofrittoli/react-api" alt="Dependencies"/>
  </a>
  <a href="https://libraries.io/npm/%40alessiofrittoli%2Freact-api">
    <img src="https://img.shields.io/librariesio/release/npm/@alessiofrittoli/react-api" alt="Dependencies status"/>
  </a>
</p>
<p align="center">
  <a href="https://bundlephobia.com/package/@alessiofrittoli/react-api">
    <img src="https://badgen.net/bundlephobia/min/@alessiofrittoli/react-api" alt="minified"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/react-api">
    <img src="https://badgen.net/bundlephobia/minzip/@alessiofrittoli/react-api" alt="minizipped"/>
  </a>
  <a href="https://bundlephobia.com/package/@alessiofrittoli/react-api">
    <img src="https://badgen.net/bundlephobia/tree-shaking/@alessiofrittoli/react-api" alt="Tree shakable"/>
  </a>
</p>
<p align="center">
  <a href="https://github.com/sponsors/alessiofrittoli">
    <img src="https://img.shields.io/static/v1?label=Fund%20this%20package&message=%E2%9D%A4&logo=GitHub&color=%23DB61A2" alt="Fund this package"/>
  </a>
</p>

[sponsor-badge]: https://img.shields.io/static/v1?label=Fund%20this%20package&message=%E2%9D%A4&logo=GitHub&color=%23DB61A2
[sponsor-url]: https://github.com/sponsors/alessiofrittoli

### Table of Content

- [Development](#development)
  - [Local development](#local-development)
  - [Production build](#production-build)
  - [Unit tests](#unit-tests)
    - [Run tests with coverage](#run-tests-with-coverage)
  - [Contributing](#contributing)
  - [Security](#security)
- [API Reference](#api-reference)
  - [Utilities](#utilities)
- [Credits](#made-with-)

---

### Getting started

Run the following command to start using `react-api` in your projects:

```bash
npm i @alessiofrittoli/react-api
```

or using `pnpm`

```bash
pnpm i @alessiofrittoli/react-api
```

---

### Development

Run the following to start development

```shell
nvm use

pnpm i
```

#### Local development

Run the following

```shell
pnpm dev
```

This will generate unminified output code, sourcemaps and will enable source file watcher.

---

#### Production build

Run the following to create a local production build

```shell
pnpm build
```

This will generate minified output code without sourcemaps.

---

#### Unit tests

Run all the defined test suites by running the following:

```shell
# Run tests and watch file changes.
pnpm test:watch

# Run tests in a CI environment.
pnpm test:ci
```

---

##### Run tests with coverage

An HTTP server is then started to serve coverage files from `./coverage` folder.

⚠️ You may see a blank page the first time you run this command. Simply refresh the browser to see the updates.

```shell
pnpm test:coverage:serve
```

---

#### Contributing

Contributions are truly welcome!

Please refer to the [Contributing Doc](./CONTRIBUTING.md) for more information on how to start contributing to this project.

Help keep this project up to date with [GitHub Sponsor][sponsor-url].

[![GitHub Sponsor][sponsor-badge]][sponsor-url]

---

#### Security

If you believe you have found a security vulnerability, we encourage you to **_responsibly disclose this and NOT open a public issue_**. We will investigate all legitimate reports. Email `security@alessiofrittoli.it` to disclose any security vulnerabilities.

---

### API Reference

#### Utilities

##### `isComponentType`

Check if the given `input` is a React ComponentType.

<details>

<summary style="cursor:pointer">Type Parameters</summary>

| Parameter | Default   | Description                      |
| --------- | --------- | -------------------------------- |
| `P`       | `unknown` | The props the component accepts. |

</details>

---

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `input`   | `unknown` | The input to check. |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `input is React.ComponentType<P>`

- `true` if the given `input` is a React ComponentType.
- `false` otherwise.

</details>

---

<details>

<summary style="cursor:pointer">Usage</summary>

```tsx
// or
import { isComponentType } from '@alessiofrittoli/react-api/utils'
import { isComponentType } from '@alessiofrittoli/react-api'

const somefunction = (Component: React.ComponentType | React.ReactNode) => {
  if (isComponentType(Component)) {
    return <Component />
  }

  return <>{Component}</>
}
```

</details>

---

##### `isReactNode`

Check if the given `input` is a React Node.

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `input`   | `unknown` | The input to check. |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `input is React.ReactNode`

- `true` if the given `input` is a React Node.
- `false` otherwise.

</details>

---

<details>

<summary style="cursor:pointer">Usage</summary>

```tsx
// or
import { isReactNode } from '@alessiofrittoli/react-api/utils'
import { isReactNode } from '@alessiofrittoli/react-api'

const somefunction = (Component: React.ComponentType | React.ReactNode) => {
  if (isReactNode(Component)) {
    return <>{Component}</>
  }

  return <Component />
}
```

</details>

---

##### `childrenFn`

Render `children` which could be possible a callable function.

<details>

<summary style="cursor:pointer">Type Parameters</summary>

| Parameter | Default               | Description                                                             |
| --------- | --------------------- | ----------------------------------------------------------------------- |
| `T`       | `FunctionChildren<U>` | The `children` type which extends the `FunctionChildren<U>` interface.  |
| `U`       | `unknown[]`           | An Array defining optional arguments passed to the `children` function. |

</details>

---

<details>

<summary style="cursor:pointer">Parameters</summary>

| Parameter  | Type | Description                                                 |
| ---------- | ---- | ----------------------------------------------------------- |
| `children` | `T`  | The `children` to render.                                   |
| `args`     | `U`  | (Optional) Arguments passed to `children` if is a function. |

</details>

---

<details>

<summary style="cursor:pointer">Returns</summary>

Type: `React.ReactNode`

The rendered `children`. If `children` is a function, the result of that function is returned.

</details>

---

<details>

<summary style="cursor:pointer">Usage</summary>

##### Define a Component that render a `FunctionChildren`

```tsx
'use client'

import { useState } from 'react'
import { childrenFn, type FunctionChildren } from '@alessiofrittoli/react-api'
// or
import { childrenFn, type FunctionChildren } from '@alessiofrittoli/react-api/utils'

interface ComponentProps
{
  children?: FunctionChildren<[ state: boolean ]>
}

const Component: React.FC<ComponentProps> = ( { children } ) => {

  const [ state, setState ] = useState( false )

  return (
    <div>
      { childrenFn( children, state ) }
    </dib>
  )
}
```

---

##### Use a Component that accepts a `FunctionChildren`

```tsx
'use client'

const Component2: React.FC<ComponentProps> = () => {
  return (
    <div>
      <Component>
        {state => {
          return <div>children has access to `state` - {state}</div>
        }}
      </Component>
      {/* multiple children accepted too */}
      <Component>
        {state => {
          return <div>children has access to `state` - {state}</div>
        }}
        {state => {
          return <div>multiple children are accepted too</div>
        }}
        <div>Another React.JSX.Element</div>
      </Component>
    </div>
  )
}
```

</details>

---

### Made with ☕

<table style='display:flex;gap:20px;'>
  <tbody>
    <tr>
      <td>
        <img alt="avatar" src='https://avatars.githubusercontent.com/u/35973186' style='width:60px;border-radius:50%;object-fit:contain;'>
      </td>
      <td>
        <table style='display:flex;gap:2px;flex-direction:column;'>
          <tbody>
              <tr>
                <td>
                  <a href='https://github.com/alessiofrittoli' target='_blank' rel='noopener'>Alessio Frittoli</a>
                </td>
              </tr>
              <tr>
                <td>
                  <small>
                    <a href='https://alessiofrittoli.it' target='_blank' rel='noopener'>https://alessiofrittoli.it</a> |
                    <a href='mailto:info@alessiofrittoli.it' target='_blank' rel='noopener'>info@alessiofrittoli.it</a>
                  </small>
                </td>
              </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
