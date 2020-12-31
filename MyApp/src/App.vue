<template>

    <div id="app" >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">

            <div class="navbar-brand">Rihana Store</div>
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'Create' }" class="nav-link">Add Item</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'Index' }" class="nav-link">All Items</router-link>
                </li>
            </ul>
        </nav>
        <transition name="fade">
            <div class="gap">
                <router-view></router-view>
            </div>
        </transition>
    </div>
</template>

<script>

  export default {
    components : {

    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .navbar-brand,.navbar-nav{
      margin-left: 20px;
  }
  .gap {
    margin-top: 50px;
      margin-left: 50px;
  }
    .navbar-expand-lg{
        width: 2000px;
    }
</style>
