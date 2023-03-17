
## Angular

### Component
- @Component Decerator
   HTML
   TypeScript
   CSS

- A component is a building block of an app
 - components are reusable ex. button component, post component etc...

### Services
- we can refer to them as a data layer?
  - data can come from anywhere ex:
    - my database
    - someone's else database
    - a file
    - APIs
    - etc..

- A service on Angular is for manging data
- @Injectable decorator
- We can use services to connect to our backend, database and use HTTP methods without the need of using Postman

### Dependancy injection
- dependancy injection is usually written as an argument inside the constructor of a component

### Data Binding
- Data flow between your component typescript and HTML
 
#### One-way binding: data is following in only one direction
  - Interpolation -> data flows from Typescript to HTML
  - Property binding -> data flows from Typescript to HTML
  - Event binding -> data flows from HTML to Typescript!!
  - Attribute binding -> data flows from Typescript to HTML
  - Class binding -> data flows from Typescript to HTML
  - Style binding -> data flows from Typescript to HTML

#### Two-way binding: bidirectional data flow

### Directives
- a directive is used to extend HTML -> makes HTML Dynamic?
  - ngClass Directive
  - ngStyle Directive
  - ngIf Directive
 #### Notes
 - Hot reload: auto-update of the browser