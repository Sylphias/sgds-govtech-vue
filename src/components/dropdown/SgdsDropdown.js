import Vue from 'vue'
import KeyCodes from '../../utils/key-codes'

const props = {
    text: {
        // This really should be toggleLabel
        type: String,
        default: 'Select a value...'
    },
    hoverable: {
        type: Boolean,
        default: false
    }
};

export default Vue.extend({
    name: "SgdsDropdown",
    props: props,
    data(){
        return {
            active: false
        }
    },
    computed: {
        dropdownClasses() {
            return {
                'is-hoverable': this.hoverable,
                'is-active': this.active
            };
        },
    },
    methods: {
        toggleMenu(evt){
            evt = evt || {};
            const type = evt.type;
            const key = evt.keyCode;
            if (type !== 'click' && !(type === 'keydown' && (key === KeyCodes.ENTER || key === KeyCodes.SPACE || key === KeyCodes.DOWN))
            ) {
                // We only toggle on Click, Enter, Space, and Arrow Down
                /* istanbul ignore next */
                return
            }
            this.$emit('toggle', evt);
            if (evt.defaultPrevented) {
                return;
            }
            evt.preventDefault();
            evt.stopPropagation();

            if(!this.hoverable){
                this.active = !this.active;
            }
        }
    },
    render: function(createElement) {
        return createElement(
            'div', {
                staticClass: "sgds-dropdown",
                class: this.dropdownClasses,
                on: {
                    click: this.toggleMenu,
                    keydown: this.toggleMenu
                }
            }, [
                createElement('div', {
                    class: "sgds-dropdown-trigger",
                },[
                    createElement('button', {
                        class: "sgds-button",
                        attrs: {
                            "aria-haspopup": true,
                            "aria-controls": "sgds-dropdown-menu",
                        }
                    }, [
                        createElement('span', this.text),
                        createElement('span',{
                            class: "icon"
                        }, [
                            createElement('span', {
                                class: "sgds-icon sgds-icon-chevron-down"
                            })
                        ])
                    ])
                ]),
                createElement('div', {
                    class: "sgds-dropdown-menu",
                    attrs: {
                        role: 'menu'
                    },
                }, [
                    createElement('div', {
                        ref: 'menu',
                        class: "sgds-dropdown-content"
                    }, this.$slots.default)
                ])
            ]
        )
    },
});