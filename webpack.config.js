module.exports = {
entry: './public/App/app.jsx',
output: {
path: __dirname,
filename: './public/bundle.js'
},
resolve:{
    root: __dirname,
    alias:{
      Greeter: 'public/App/Component/Greeter.jsx',
      GreeterMessage: 'public/App/Component/GreeterMessage.jsx',
      GreeterForm: 'public/App/Component/GreeterForm.jsx',
      Weather: 'public/App/WeatherComponent/Weather.jsx',
      WeatherData: 'public/App/WeatherComponent/WeatherData.jsx',
      WeatherForm: 'public/App/WeatherComponent/WeatherForm.jsx',
      OpenWeatherMap: 'public/App/ApiCall/OpenWeatherMap.jsx',
      Locators: 'public/App/WeatherComponent/Locators.jsx',
      About: 'public/App/WeatherComponent/About.jsx',
      Services: 'public/App/WeatherComponent/Services.jsx',
      Main: 'public/App/WeatherComponent/Main.jsx',
      NavBar: 'public/App/WeatherComponent/NavBar.jsx'
    },
    extensions: ['', '.js', '.jsx']
},
module: {
loaders:[
    {
        loader: 'babel-loader',
        query:{
            presets:['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
    }
]
}
};
