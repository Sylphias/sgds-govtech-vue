# sgds-govtech-vue

## Installation
```
npm install sgds-govtech-vue --save
```
## Usage
```
//In your main.js file

import 'sgds-govtech/sass/sgds.scss' //styling
import Components from 'sgds-govtech-vue';

Object.entried(Components).forEach((name, component) => {
    Vue.component(name, component);
});
```
## Components 
### Accordion
Example
```
<sgds-accordion>
  <sgds-accordion-set title="Header 1">
    Content 1
  </sgds-accordion-set>
  <sgds-accordion-set title="Header 2" :visible="true">
    Set visible to true to show the page content
  </sgds-accordion-set>
  <sgds-accordion-set title="Header 3">
    Content 3
  </sgds-accordion-set>
</sgds-accordion>
```
