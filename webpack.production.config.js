var webpack = require('webpack')
var path = require('path')
var loaders = require('./webpack.loaders')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var fs = require('fs')
var buildPath = './build/'
var folder_exists = fs.existsSync(buildPath)
if (folder_exists == true) {
    var dirList = fs.readdirSync(buildPath)
    dirList.forEach(function(fileName) {
        fs.unlinkSync(buildPath + fileName); 
    })
    console.log("clearing " + buildPath);
}


module.exports = {
	entry: [
		'./index.jsx' 
    ],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
    },    
	resolve: {
		extensions: ['*', '.js', '.jsx']
    },
    //文件的加载配置
    module: {
		rules: loaders
  },   
	plugins: [		
		new webpack.DefinePlugin({
	      'process.env':{
	        'NODE_ENV': JSON.stringify('production')
	      }
	    }),	   
	    new CopyWebpackPlugin([
			{from: './index.html'}
		])
	]
}