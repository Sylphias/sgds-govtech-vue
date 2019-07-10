<template>
  <div id="app">
    <div class="sgds-section">
      <div class="sgds-container">
        <div class="row">
          <div class="col">
            <h4>Demo</h4>
          </div>
        </div>
        <!--Accordion-->
        <div class="row">
          <div class="col">
            <h5>Accordion</h5>
            <h6 class="has-text-primary has-text-weight-semibold">
              Accordion is a graphical control element comprising a vertically stacked list of items, such as labels or
              thumbnails. Each item can be "expanded" or "stretched" to reveal the content associated with that item
            </h6>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <sgds-accordion-set>
              <sgds-accordion title="Header 1">Content 1</sgds-accordion>
              <sgds-accordion
                title="Header 2"
                :visible="true"
              >Set visible to true to show the page content</sgds-accordion>
              <sgds-accordion title="Header 3">Content 3</sgds-accordion>
            </sgds-accordion-set>
          </div>
        </div>
        <!--Dropdown-->
        <div class="row">
          <div class="col">
            <h5>Dropdown</h5>
            <h6 class="has-text-primary has-text-weight-semibold">
              Dropdown Menu is a list of items that appear whenever a button is clicked or hovered.
              This is a graphical approach presented to users from which they can choose a value from the list presented
            </h6>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <sgds-dropdown>
              <sgds-dropdown-item href="#">Item 1</sgds-dropdown-item>
              <sgds-dropdown-item href="#">Item 2</sgds-dropdown-item>
              <sgds-dropdown-item href="#">Item 3</sgds-dropdown-item>
              <sgds-dropdown-divider></sgds-dropdown-divider>
              <sgds-dropdown-item href="#">Item 4</sgds-dropdown-item>
            </sgds-dropdown>
            <sgds-dropdown text="Hover Me" hoverable>
              <sgds-dropdown-item href="#">Item 1</sgds-dropdown-item>
              <sgds-dropdown-item href="#">Item 2</sgds-dropdown-item>
              <sgds-dropdown-item href="#">Item 3</sgds-dropdown-item>
              <sgds-dropdown-divider></sgds-dropdown-divider>
              <sgds-dropdown-item href="#">Item 4</sgds-dropdown-item>
            </sgds-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Components from './components';

export default {
  name: "app",
  components: {
    ...Components
  },
  methods: {
    toggle(){
      alert("hello");
    }
  }
};
</script>

<style lang="scss">
$primary: #e88e5c;
$primary-background: #c9ebff;
$sgds-font-path: "~sgds-govtech/fonts";
</style>