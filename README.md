# lightweight-localstorage

`lightweight-localstorage` is a lightweight utility for managing local storage in React and Next.js applications. It provides an easy-to-use API for setting, getting, and deleting items in local storage with support for a parent key to namespace the stored data.

## Benefits

- **Namespace Support**: Organize your local storage data under a parent key to avoid key collisions.
- **Ease of Use**: Simple API for common local storage operations.
- **JSON Handling**: Automatically handles JSON stringification and parsing.
- **Custom Parent Key**: Flexibility to use a custom parent key if needed.

## Installation

You can install `lightweight-localstorage` via npm:

```sh
npm i lightweight-localstorage

Usage
Importing the Package
First, import the package in your Next.js component or utility file:
```

```js
import { ls } from "lightweight-localstorage";
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

Here's an example of how you can use lightweight-localstorage in a Next.js component to display local storage data:

```js
import { useEffect, useState } from "react";
import { ls } from "lightweight-localstorage";

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

## Manual Implementation

If you prefer not to install the package, you can manually add the following code to your project:
Visit if you like Subscribe
[a link](https://www.youtube.com/@nextmastery)

```js
export const persistance = (parentKey = "nextpersist") => {
  const ls = {
    set: function (key, value, pkey = parentKey) {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem(pkey);
        let data = storedData ? JSON.parse(storedData) : {};
        data[key] = JSON.stringify(value);
        localStorage.setItem(pkey, JSON.stringify(data));
      }
    },
    get: function (key, pkey = parentKey) {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem(pkey);
        if (!storedData) return null;
        const data = JSON.parse(storedData);
        return data[key] ? JSON.parse(data[key]) : null;
      }
      return null;
    },
    getAll: function (pkey = parentKey) {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem(pkey);
        if (!storedData) return null;
        const data = JSON.parse(storedData);
        Object.keys(data).forEach((key) => {
          data[key] = JSON.parse(data[key]);
        });
        ls.data = data;
        return data;
      }
      return null;
    },
    delete: function (key, pkey = parentKey) {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem(pkey);
        if (!storedData) return;
        const data = JSON.parse(storedData);
        delete data[key];
        localStorage.setItem(pkey, JSON.stringify(data));
      }
    },
    deleteAll: function (pkey = parentKey) {
      if (typeof window !== "undefined") {
        return localStorage.removeItem(pkey);
      }
    },
    clear: function () {
      if (typeof window !== "undefined") {
        return localStorage.clear();
      }
    },
  };
  return ls;
};

export const ls = persistance("nextpersist");
```
