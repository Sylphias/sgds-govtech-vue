import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import commonjs from 'rollup-plugin-commonjs';
export default {
    input: 'src/libraryExport.js', // Path relative to package.json
    output: {
        name: 'SgdsGovtechVue',
        exports: 'named',
    },
    plugins: [
        commonjs(),
        vue({
            css: true,
            compileTemplate: true
        }),
        buble(), // Transpile to ES5
    ],
};