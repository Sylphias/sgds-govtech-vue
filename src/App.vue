<template>
    <div id="app">
        <section class="sgds-hero has-background-primary">
            <div class="sgds-hero-body sgds-container is-fluid">
                <div class="row is-vcentered">
                    <div class="col is-8 is-offset-2 has-text-white">
                        <h1 class="display">
                            <b>sgds-vue</b>
                        </h1>
                        <h5>
                            Singapore Government Design System
                            <span
                                class="sgds-icon sgds-icon-star-alt"
                            ></span> Vue.js
                        </h5>
                    </div>
                </div>
            </div>
        </section>
        <section class="sgds-section">
            <div class="sgds-container">
                <accordion-docs />
                <dropdown-docs />
            </div>
        </section>
        <footer class="sgds-footer top-section">
            <div class="sgds-container is-fluid">
                <div class="row">
                    <div class="col">
                        <h5 class="has-text-white">
                            <b>sgds-govtech-vue</b>
                        </h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col is-right-desktop-only">
                        <ul>
                            <li class="is-inline-block-desktop-only">
                                <p>
                                    <a
                                        href="https://github.com/govtechsg/sgds-govtech-vue"
                                        target="_blank"
                                    >GitHub</a>
                                </p>
                            </li>
                            <li class="is-inline-block-desktop-only">
                                <p>
                                    <a href target="_blank">Contact</a>
                                </p>
                            </li>
                            <li class="is-inline-block-desktop-only">
                                <p>
                                    <a href target="_blank">Feedback</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import AccordionDocs from "./docs/Accordion.vue";
import DropdownDocs from "./docs/Dropdown.vue";

export default {
    name: "app",
    components: {
        AccordionDocs,
        DropdownDocs
    },
    methods: {
        toggle() {
            alert("hello");
        }
    }
};
</script>
