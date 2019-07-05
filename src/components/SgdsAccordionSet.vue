<template>
  <div class="sgds-accordion-set">
    <a
      class="sgds-accordion-header"
      v-on:click="open = !open"
      v-bind:class="{ 'active': open }"
    >
      <h5>{{ title }}</h5>
      <i
        class="sgds-icon"
        v-bind:class="{ 'sgds-icon-chevron-down': !open, 'sgds-icon-chevron-up': open }"
      ></i>
    </a>
    <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
      <div class="sgds-accordion-body is-open" v-if="open">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
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
    }
  },
  created() {
    this.open = this.visible;
  }
};
</script>
