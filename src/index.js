import './assets/css/index.css'
import '@/assets/css/app.less'
//react
// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.js'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//vue
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: (h) => h(App)
}).$mount('#app')