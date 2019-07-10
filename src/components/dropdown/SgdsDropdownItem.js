import Vue from 'vue';

const props = {
    href: {
        type: String,
        default: null
    },
    rel: {
        type: String,
        default: null
    },
    target: {
        type: String,
        default: '_self'
    },
    active: {
        type: Boolean,
        default: false
    }
};

export default Vue.extend({
    name: "SgdsDropdownItem",
    props: props,
    computed: {
        itemClasses() {
            return {
                'is-active': this.active
            };
        },
    },
    methods: {
        click(evt){
            this.$emit('click', evt);
        }
    },
    render: function(createElement) {
        return createElement(
            'a', {
                attrs: {
                    href: this.href,
                    rel: this.rel,
                    target: this.target
                },
                class: this.itemClasses,
                staticClass: "sgds-dropdown-item",
                on: {
                    click: this.click
                }
            }, this.$slots.default
        )
    },
});
