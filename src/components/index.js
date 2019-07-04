import Vue from "vue";
import SgdsAccordion from "./SgdsAccordion";
import SgdsAccordionSet from "./SgdsAccordionSet";

const Components = {
    SgdsAccordion,
    SgdsAccordionSet
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;

