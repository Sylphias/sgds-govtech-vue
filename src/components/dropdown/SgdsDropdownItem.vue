<template>
    <a class="sgds-dropdown-item" @click="handleClick"><slot></slot></a>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$emit("click");
            this.$parent.$emit("dropdown-item-clicked"); // Close the dropdown
        }
    }
}
</script>
