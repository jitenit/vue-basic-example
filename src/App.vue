<!--<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
       <router-link to="/service">Service</router-link>  |
       <p>Header Area by J </p>
    </div>
    <router-view />
  </div>
</template>!-->

<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://profiles.wordpress.org/jitenit/" target="_blank">
           JP Vue JS
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/about">About Us</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link pr-3" to="/service">Our Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/hello-world">Hello World</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>