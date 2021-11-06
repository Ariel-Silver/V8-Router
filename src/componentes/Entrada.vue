<template>
  <div id="Entrada">
    <router-link   :to="{ name: 'Articulo' }"></router-link>
    <div>
     <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Entrada',
 
}
</script>

<style></style>
