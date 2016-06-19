import {join} from 'path'

const include = join(__dirname, 'src')

export default{
    entry: './src/clc',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'clc-js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', include}
        ]
    }
}