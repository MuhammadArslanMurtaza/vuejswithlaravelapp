# VuejswithLaravel
Vuejs using with inside the Laravel Application processs

## Vuejs setup inside Laravel 9 Application process


Install laravel 9 App

---> laravel new laravel9-react-vite

Install NPM Dependencies

---> npm install


Install Vue 3

---> npm install vue@next vue-loader@next

Install vitejs/plugin-vue plugin


--> npm i @vitejs/plugin-vue


Update vite.config.js

import { defineConfig } from 'vite';


import laravel from 'laravel-vite-plugin';


import vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
});


Compile the assets


--> npm run dev


Create Vue 3 App

// app.js


require('./bootstrap');


import {createApp} from 'vue'


import App from './App.vue'


createApp(App).mount("#app")


Create Vue 3 Component


Connect Vue 3 Component with Laravel blade file and use vite directive to add assets.

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>How To Install Vue 3 in Laravel 9 with Vite</title>

	@vite('resources/css/app.css')
</head>
<body>
	<div id="app"></div>

	@vite('resources/js/app.js')
</body>
</html>


Update Laravel Routes


Start The Local Server
