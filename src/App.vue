<template>
  <div id="app">
    <div class="sgds-section">
      <div class="sgds-container">
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
            <sgds-accordion>
              <sgds-accordion-set title="Header 1">Content 1</sgds-accordion-set>
              <sgds-accordion-set
                title="Header 2"
                :visible="true"
              >Set visible to true to show the page content</sgds-accordion-set>
              <sgds-accordion-set title="Header 3">Content 3</sgds-accordion-set>
            </sgds-accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SgdsAccordion, SgdsAccordionSet } from "./libraryExport";

export default {
  name: "app",
  components: {
    SgdsAccordion,
    SgdsAccordionSet
  }
};
</script>

<style lang="scss">
$primary: #e88e5c;
$primary-background: #c9ebff;
$sgds-font-path: "~sgds-govtech/fonts";
</style>