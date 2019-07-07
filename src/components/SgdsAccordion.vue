<template>
  <div class="sgds-accordion-set">
    <a class="sgds-accordion-header" v-on:click="open = !open" v-bind:class="{ 'active': open }">
      <h5>{{ title }}</h5>
      <i
        class="sgds-icon"
        v-bind:class="{ 'sgds-icon-chevron-down': !open, 'sgds-icon-chevron-up': open }"
      ></i>
    </a>
    <transition v-on:enter="enter" v-on:leave="leave">
      <div class="sgds-accordion-body is-open" v-if="open">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Velocity from "velocity-animate";
export default {
  name: "SgdsAccordionSet",
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false
    };
  },
  created() {
    this.open = this.visible;
  },
  methods: {
    enter(el, done) {
      Velocity(el, "slideDown", { duration: "fast", complete: done });
    },
    leave(el, done) {
      Velocity(el, "slideUp", { duration: "fast", complete: done });
    }
  }
};
</script>

<style scoped>
.sgds-accordion-header {
  position: relative;
  z-index: 1;
}
</style>
