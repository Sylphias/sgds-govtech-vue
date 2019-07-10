import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve'; // Bundle dependencies
export default {
    input: 'src/rollupExport.js', // Path relative to package.json
    output: {
        name: 'SgdsGovtechVue',
        exports: 'named',
    },
    plugins: [
        resolve(),
        commonjs(),
        vue({
            css: true,
            template: {
                compilerOptions: {
                    whitespace: "condense"
                }
            }
        }),
        buble(), // Transpile to ES5
    ],
};