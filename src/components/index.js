import Vue from "vue";
import SgdsAccordion from "./accordion/SgdsAccordion";
import SgdsAccordionSet from "./accordion/SgdsAccordionSet";
import SgdsDropdown from "./dropdown/SgdsDropdown";
import SgdsDropdownItem from "./dropdown/SgdsDropdownItem";
import SgdsDropdownDivider from "./dropdown/SgdsDropdownDivider";

const Components = {
    SgdsAccordion,
    SgdsAccordionSet,
    SgdsDropdown,
    SgdsDropdownItem,
    SgdsDropdownDivider
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;

