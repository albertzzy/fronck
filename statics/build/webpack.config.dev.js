const path = require('path');

const config = {
    entry:{
        index:'./index.js'
    },
    output:{
        path:path.resolve(__dirname,'dev/js/'),
        filename:'[name].js' 
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader'
            }

        ]
    },
    resolve:{
        extensions:['js']
    }
}

module.exports = config;