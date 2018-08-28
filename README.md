#List of UI element I can use


#Material UI
 - http://blueprintjs.com/docs/
 - React date
 - Griddle

# Always eject at the early stage

## Working with Create React App with Bootstrap 4

https://reactstrap.github.io/

`npm install --save reactstrap react react-dom`

 Working well and awesome 

## in webpack.config.dev.js
`// before
 {
   loader: require.resolve('css-loader'),
   options: {
     importLoaders: 1,
   },
 },
 // after
 {
   loader: require.resolve('css-loader'),
   options: {
     importLoaders: 1,
     modules: true,
     localIdentName: "[name]__[local]___[hash:base64:5]"  
   },
 },`

## config/webpack.config.prod.js:191
`// before
 {
   loader: require.resolve('css-loader'),
   options: {
     importLoaders: 1,
     minimize: true,
     sourceMap: true,
    },
 },
 // after
 {
   loader: require.resolve('css-loader'),
   options: {
     importLoaders: 1,
     modules: true,
     minimize: true,
     sourceMap: true,
    },
 },`

## then use it
`import React, { Component } from 'react';
 import logo from './logo.svg';
 import styles from './App.css';
 class App extends Component {
   render() {
     return (
       <div className={styles.App}>
         <div className={styles.header}>
           <img src={logo} className={styles.logo} alt="logo" />
           <h2>Welcome to React</h2>
         </div>
         <p className={styles.intro}>
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>
       </div>
     );
   }
 }
 export default App;`


#3Check this out later
https://docs.google.com/document/d/19ZutRGjnaNQRyRhmkwNnowRTKbpKjYx9h4xtGdxNVhA/edit#heading=h.wqg29sr7j5z9                    
    
#Props tyes validation
npm install --save prop-types
