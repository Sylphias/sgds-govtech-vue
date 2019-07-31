<template>
    <div>
        <!--Dropdown-->
        <div class="row">
            <div class="col" v-pre>
                <h2>Dropdown</h2>

                <p>
                    Please note that
                    <code>&lt;sgds-dropdown-item&gt;</code> components must have
                    <code>&lt;sgds-dropdown&gt;</code> components as their
                    <strong>direct parent</strong>.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <sgds-dropdown text="Click me">
                    <sgds-dropdown-item>Item 1</sgds-dropdown-item>
                    <sgds-dropdown-item>Item 2</sgds-dropdown-item>
                    <sgds-dropdown-item>Item 3</sgds-dropdown-item>
                    <sgds-dropdown-divider></sgds-dropdown-divider>
                    <sgds-dropdown-item>Item 4</sgds-dropdown-item>
                </sgds-dropdown>
                <sgds-dropdown text="Hover Me" hoverable>
                    <sgds-dropdown-item>Item 1</sgds-dropdown-item>
                    <sgds-dropdown-item>Item 2</sgds-dropdown-item>
                    <sgds-dropdown-item>Item 3</sgds-dropdown-item>
                    <sgds-dropdown-divider></sgds-dropdown-divider>
                    <sgds-dropdown-item>Item 4</sgds-dropdown-item>
                </sgds-dropdown>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <sgds-accordion title="Show code"><pre v-highlightjs="codeSample" class="code-highlight"><code class="html"></code></pre></sgds-accordion>                
            </div>
        </div>
    </div>
</template>

<script>
import {
    SgdsDropdown,
    SgdsDropdownItem,
    SgdsDropdownDivider,
    SgdsAccordion
} from "../rollupExport";

export default {
    components: {
        SgdsDropdown,
        SgdsDropdownItem,
        SgdsDropdownDivider,
        SgdsAccordion
    },
    data() {
        return {
            codeSample: `<sgds-dropdown text="Click me">
    <sgds-dropdown-item>Item 1</sgds-dropdown-item>
    <sgds-dropdown-item>Item 2</sgds-dropdown-item>
    <sgds-dropdown-item>Item 3</sgds-dropdown-item>
    <sgds-dropdown-divider></sgds-dropdown-divider>
    <sgds-dropdown-item>Item 4</sgds-dropdown-item>
</sgds-dropdown>
<sgds-dropdown text="Hover Me" hoverable>
    <sgds-dropdown-item>Item 1</sgds-dropdown-item>
    <sgds-dropdown-item>Item 2</sgds-dropdown-item>
    <sgds-dropdown-item>Item 3</sgds-dropdown-item>
    <sgds-dropdown-divider></sgds-dropdown-divider>
    <sgds-dropdown-item>Item 4</sgds-dropdown-item>
</sgds-dropdown>        
`
        };
    }
};
</script>
