<template>
    <div>
        <div class="row">
            <div class="col">
                <h2>Accordion</h2>
                <p>
                    Accordion is a graphical control element comprising a vertically stacked list of items, such as labels or
                    thumbnails. Each item can be "expanded" or "stretched" to reveal the content associated with that item
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <sgds-accordion-set>
                    <sgds-accordion title="Header 1">Content 1</sgds-accordion>
                    <sgds-accordion
                        title="Header 2"
                        :visible="true"
                    >Set visible to true to show the page content</sgds-accordion>
                    <sgds-accordion title="Header 3">Content 3</sgds-accordion>
                </sgds-accordion-set>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <sgds-accordion title="Show code">
                    <pre v-highlightjs="codeSample" class="code-highlight"><code class="html"></code></pre>
                </sgds-accordion>
            </div>
        </div>
    </div>
</template>

<script>
import Components from "../rollupExport";
export default {
    components: {
        SgdsAccordionSet: Components.SgdsAccordionSet,
        SgdsAccordion: Components.SgdsAccordion
    },
    data() {
        return {
            codeSample: `<sgds-accordion-set>
    <sgds-accordion title="Header 1">Content 1</sgds-accordion>
    <sgds-accordion
        title="Header 2"
        :visible="true"
    >Set visible to true to show the page content</sgds-accordion>
    <sgds-accordion title="Header 3">Content 3</sgds-accordion>
</sgds-accordion-set>`
        };
    }
};
</script>
