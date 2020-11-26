<script>
export default {
  name: 'AppHeader',
};

</script>

<template>
  <header class="b-header">
    <div class="container">
      <div class="b-header__logo-box">
        <span class="b-header__logo">THE<b>BAKERY</b></span>
      </div>
    </div>
  </header>
</template>

<style lang="sass">
.b-header
  height: 50px
  background-color: #F2E7C7

.b-header__logo-box
  height: 50px
  display: flex
  flex-direction: column
  justify-content: center

.b-header__logo
  font-size: 1.3em
</style>
