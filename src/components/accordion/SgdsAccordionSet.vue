<template>
    <div class="sgds-accordion-set">
        <a class="sgds-accordion-header"
           v-on:click="visible = !visible"
           v-bind:class="{ 'active': visible }">
            <h5>{{ title }}</h5>
            <i class="sgds-icon" v-bind:class="{ 'sgds-icon-chevron-down': !visible, 'sgds-icon-chevron-up': visible }"></i>
        </a>
        <div class="sgds-accordion-body" v-bind:class="{ 'is-open': visible }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SgdsAccordionSet',
        props: {
            title: {
                type: String,
                default: null
            },
            visible: {
                type: Boolean,
                default: false,
            }

        }
    }
</script>

