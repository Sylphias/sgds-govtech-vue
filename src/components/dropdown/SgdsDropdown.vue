<template>
    <div
        class="sgds-dropdown"
        :class="{'is-active': active, 'is-hoverable': hoverable}"
        @keydown.esc="active = false"
    >
        <div class="sgds-dropdown-trigger">
            <button
                class="sgds-button"
                aria-haspopup="true"
                aria-controls="sgds-dropdown-menu"
                @click="toggle"
                ref="dropdownButton"
            >
                <span>{{ text }}</span>
                <span class="icon">
                    <span :class="`sgds-icon sgds-icon-chevron-${this.active ? 'up' : 'down'}`"></span>
                </span>
            </button>
        </div>
        <div class="sgds-dropdown-menu" role="menu" ref="dropdownMenu">
            <div class="sgds-dropdown-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        hoverable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            active: false
        };
    },
    methods: {
        toggle() {
            if (!this.hoverable) {
                this.active = !this.active;
            }
        }
    },
    mounted() {
        if (!this.hoverable) {
            document.addEventListener("click", event => {
                if (this.$refs.dropdownButton.contains(event.target)) {
                    return;
                }
                if (!this.$refs.dropdownMenu.contains(event.target)) {
                    this.active = false;
                }
            });
        }
    },
    created() {
        this.$on("dropdown-item-clicked", () => {
            this.active = false;
        })
    }
};
</script>
