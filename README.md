# nextpersist

`nextpersist` is a lightweight utility for managing local storage in React and Next.js applications. It provides an easy-to-use API for setting, getting, and deleting items in local storage with support for a parent key to namespace the stored data.

## Benefits

- **Namespace Support**: Organize your local storage data under a parent key to avoid key collisions.
- **Ease of Use**: Simple API for common local storage operations.
- **JSON Handling**: Automatically handles JSON stringification and parsing.
- **Custom Parent Key**: Flexibility to use a custom parent key if needed.

## Installation

You can install `nextpersist` via npm:

```sh
npm install nextpersist

Usage
Importing the Package
First, import the package in your Next.js component or utility file:
```

```js
import { ls } from "nextpersist";
```

## Setting a Value

To set a value in local storage:

```js
ls.set("key", "value");
```

## Getting a Value

To get a value from local storage:

```js
const value = ls.get("key");
console.log(value); // Output: 'value'
```

## Getting All Values

To get all values from local storage:

```js
const allData = ls.getAll();
console.log(allData);
```

## Deleting a Value

To delete a value from local storage:

```js
ls.delete("key");
```

## Deleting All Values

To delete all values under the parent key:

```js
ls.deleteAll();
```

## Clearing All Local Storage

To clear all local storage:

```js
ls.clear();
```

## Using a Custom Parent Key

You can create an instance with a custom parent key:

```js
const ls = persistance("customKey");
ls.set("key", "value");
const value = ls.get("key");
console.log(value); // Output: 'value'
```

## Example Code

Here's an example of how you can use nextpersist in a Next.js component to display local storage data:

```js
import { useEffect, useState } from "react";
import { ls } from "nextpersist";

export default function LocalStorageComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = ls.getAll();
    setData(storedData);
  }, []);

  return (
    <div>
      <h1>Local Storage Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
