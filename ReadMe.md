Run: ts-node index.ts

For each lecture I created a folder for code at a given time. Change the name to index.ts and execute to run


Types:
1) Primative types = number, boolean, void, undefined, string, symbol, null
2) Object types = funcitons, classes, arrays, objects 

Type annotation = code we add to tell typescript what type of value a variable will refer to

Type inference = typescript tries to figure out what type of value a variable refers to 

    Type inference only works when we have variable declaration and variable initalization on the same line for ex the following would work:
    - const color = 'red'

In general rely on type inference
Three instances where we use type annotation:
a) When a function returns that any type and we need to clarify the value (see variables.ts)
b) When we declare a variable on one line and initalize it later (see variables.ts)
c) When we want a variable to have a type that can't be inferred (see variables.ts)

AVOID TYPE ANY AT ALL COSTS = defeats purpose of ts.



Type annotations for functions = code we add to tell TS what type of arguments and functions will receive and 
What type of values it will return

Type inference for functiosn = TS tried to figure out what type of value a funciton will return only


ARRAYS in TS
Typed arrays = same as JS. In TS all items in the array must be of the same type

TS can do type inference when extracting values from arrays
Ts can prevent us from adding incompativle values to arrays
We can get help with map forEach reduce functions
Flexible  arrays can still contain multiple different types

We use typed arraays any time we need to represent a collection of records with some arbitrary sort order

INTERFACES IN TS
Reusable code in TS = Create functions that accept arguments that are types with interfaces
Reusable code in TS = Objects/classes can decide to implement a given interface to work with a function

