TypeScript is a superset of JavaScript.
During the build process, TypeScript code is transpiled into plain JavaScript. The final build contains only JavaScript, as all TypeScript-specific syntax and type annotations are removed.

## TypeScript: `any` vs `unknown` vs `undefined` vs `void` vs `null` vs `never`

| Type       | Meaning                                 | Allows Any Value? | Common Use Case                              | Example |
|------------|------------------------------------------|--------------------|-----------------------------------------------|---------|
| `any`      | Disables all type checking               | ✅ Yes              | Migrating from JS or quick prototyping         | ```ts \n let value: any = "hello";\nvalue = 123;\nvalue.toUpperCase(); // No error\n``` |
| `unknown`  | Any value, but requires type checking    | ✅ Yes              | Handling user input or external data safely    | ```ts\nlet value: unknown = 123;\nif (typeof value === "number") {\n  console.log(value + 1);\n}\n``` |
| `undefined`| Represents an uninitialized or missing value | ❌ No           | Optional parameters, default return values     | ```ts\nfunction greet(name?: string) {\n  console.log(name);\n}\n``` |
| `void`     | Function returns no value                | ❌ No               | Functions that perform side effects            | ```ts\nfunction log(msg: string): void {\n  console.log(msg);\n}\n``` |
| `null`     | Represents an intentional absence of value | ❌ No           | Manually clearing or resetting a value         | ```ts\nlet name: string | null = null;\nname = "Alice";\n``` |
| `never`    | Represents a value that never occurs     | ❌ No               | Functions that throw errors or never return    | ```ts\nfunction fail(msg: string): never {\n  throw new Error(msg);\n}\n``` |

## ------ `enum` vs `union` vs `tuple` ---------

| Feature            | `enum`                                  | `tuple`                                        | `union`                                            |
|--------------------|-----------------------------------------|------------------------------------------------|----------------------------------------------------|
| **Purpose**        | Defines a set of named constants         | Represents fixed-length arrays with fixed types | Represents a variable that can be one of multiple types |
| **Data Structure** | Object with named numeric or string values | Array with fixed length and fixed types per position | Single value that can be any one of several specified types |
| **Runtime**        | Exists as an object at runtime           | Is a regular array at runtime                   | No runtime representation; only type-checking     |
| **Length**         | N/A (each enum member is a single value) | Fixed length                                    | N/A (single value of one of the union types)       |
| **Example Use**    | Days of week, status codes                | Coordinates `[number, number]`, RGB colors      | Variable that can be `string` or `number`           |
| **Example Syntax** | `enum Color { Red, Green, Blue }`        | `let point: [number, number] = [10, 20]`        | `let id: string | number`                            |

####Enum
```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0 (numeric enums default to 0-based indexing) 
```

#### tuple
```ts
// Fixed length array with specified types at each index
let rgbColor: [number, number, number] = [255, 0, 0]; // Red color

// Accessing elements
let red = rgbColor[0]; // 255
```
#### union
```ts 
// Variable can be either string or number
let id: string | number;

id = 123;     // ✅ valid
id = "abc";   // ✅ valid
id = true;    // ❌ Error
```


## --------Generic function -------

```ts
function identity<T>(value: T): T {
  return value;
}

// Usage
identity<string>("Hello"); // returns "Hello"
identity<number>(123);     // returns 123
```

## ----------- as const -------------- 
const colors = ["red", "green", "blue"] as const;

// Now TypeScript treats 'colors' as a readonly tuple:
// readonly ["red", "green", "blue"]

// Each element is treated as a literal type,
// not just a general string.

type Color = typeof colors[number];
// Color is now "red" | "green" | "blue"

## ---------- tuples ---------- 
// A tuple with a string and a number
let user: [string, number] = ["Alice", 25];

// Correct usage
user[0]; // "Alice" (string)
user[1]; // 25 (number)

// Wrong usage (Type Error)
// user = [25, "Alice"]; ❌ order matters in tuples


## --------- class vs interface --------
Use interface when you only want to define the shape of data or a contract.
Use class when you need to define behavior (methods with logic), support object instantiation, and use OOP principles like inheritance.
```ts
// Interface example
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// Class implementing interface
class Student implements Person {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const s = new Student("John", 24);
s.greet(); // Hello, I'm John
```