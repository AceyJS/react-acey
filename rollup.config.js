import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import url from '@rollup/plugin-url'
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json'

const config = {
    input: './index.ts',
    external: [ 'acey', 'react' ],
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: 'react-acey'
        },
    ],
    plugins: [
        external(),
        url(),
        typescript({
            tsconfig: 'tsconfig.json',
            clean: true
        }),
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(uglify());
}

export default config