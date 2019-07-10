import Vue from 'vue';

export default Vue.extend({
    name: "SgdsDropdownDivider",
    render: function(createElement) {
        return createElement(
            'hr', {
                class: "sgds-dropdown-divider"
            })
    },
});

// <hr class="sgds-dropdown-divider">