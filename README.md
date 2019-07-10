# sgds-govtech-vue
Vue components powered by sgds. Inspired by bootstrap-vue

## Installation
```
npm install sgds-govtech-vue sgds-govtech --save
```
## Usage
```
//In your main.js file

import 'sgds-govtech/sass/sgds.scss' //styling
import 'sgds-govtech-vue';

```
## Components 
Coming soon: Nav, Tabs, Dropdown, Language Selector
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

