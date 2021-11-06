<template>
  <div id="Navbar">
      <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand">V8</a
        ><button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <!-- MENU DE NAVEGACION -->
          <ul class="nav navbar-nav ml-auto" id="menu-v8">
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
              <router-link :to="{name: 'Inicio'}">portada</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
              <router-link :to="{name: 'SobreMi'}">Sobre Mí</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
              <router-link :to="{name: 'Contacto'}">Contacto</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
              <router-link to="/Entrada/1">último Post</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
      name: "Navbar",
}
</script>

<style>
#menu-v8 router-link {
  text-shadow: 1px 1px #000;
}
</style>