### Dropdown
Example
```
<sgds-dropdown>
  <sgds-dropdown-item href="#">Item 1</sgds-dropdown-item>
  <sgds-dropdown-item href="#">Item 2</sgds-dropdown-item>
  <sgds-dropdown-item href="#">Item 3</sgds-dropdown-item>
  <sgds-dropdown-divider></sgds-dropdown-divider>
  <sgds-dropdown-item href="#">Item 4</sgds-dropdown-item>
</sgds-dropdown>
```
#### <sgds-dropdown>
##### Properties
| Property  | Type | Default Value |
| ------------- | ------------- | ------------- |
|  text | String  | Select a value |
| hoverable  | Boolean  | false |
#####Events
| Event  | Arguments | Description |
| ------------- | ------------- | ------------- |
| toggle  |   | Emitted when dropdown is clicked |

#### <sgds-dropdown-item>
##### Properties
| Property  | Type | Default Value |
| ------------- | ------------- | ------------- |
|  href | String  |  |
| rel  | String  |  |
| target  | String  | _self |
| active  | Boolean  | false |
#####Events
| Event  | Arguments | Description |
| ------------- | ------------- | ------------- |
| click  |   | Emitted when item is clicked |