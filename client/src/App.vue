<template>
  <div>
    <div v-if='!authenticated'>
      <nav class='nav'>
        <div class='logo'>TVShowApp</div>
        <ul class='nav-list'>
          <li class='nav-list_item'>Login</li>
          <li class='nav-list_item'>Signup</li>
        </ul>
      </nav>
      <div class='splash'>
        <div class='overlay'></div>
        <div class='splash-content'>
          <h1 class='header'>TVShowApp</h1>
          <h4 class='subheader'>Tired of forgetting which episode to watch? Keep track using TVShowApp.</h4>
          <div class='splash-content-cta'>
            <a class='button accent' href='/api/auth/facebook'>Get Started!</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      authenticated: false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
}
.nav {
  width: 100%;
  height: 60px;
  background-color: transparent;
  box-sizing: border-box;
  display: flex;
  position: absolute;
  z-index: 1;
  align-items: center;
  padding: 0 40px;
}
.nav .logo {
  color: #eee;
  font-size: 1.2em;
}
.nav-list {
  padding: 0;
  width: 100%;
  height: 60px;
  list-style-type: none;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: flex-end;
}
.nav-list_item { 
  margin-right: 20px;
  cursor: pointer;
  font-size: 1.1em;
}
.nav-list_item:hover {
  transition: all 0.3s ease;
  padding-bottom: 5px;
  border-bottom: 2px solid #e74c3c;
}
.splash {
  width: 100%;
  height: 100vh;
  background-image: url('http://st-listas.20minutos.es/images/2014-07/384630/list_640px.jpg?1405721966');
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  z-index: 0;
}
.splash-content {
  z-index: 1;
  color: #eee;
  text-align: center;
}
.splash-content .header {
  font-size: 3em;
  text-transform: uppercase;
  margin: 5px;
}
.splash-content .subheader {
  color: #e74c3c;
  margin: 10px;
  letter-spacing: 1px;
}
.splash-content-cta {
  margin-top: 2.5em;
}
.button {
  padding: 10px 15px;
  font-size: 1.1em;
  color: #333;
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
}
.button.accent {
  background-color: #e74c3c;
  color: #eee;
}
</style>
