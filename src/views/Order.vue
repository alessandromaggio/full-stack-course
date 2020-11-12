<template>
  <div>
    <h2>Order #{{ $route.params.id }}</h2>
    <order-form/>
  </div>
</template>

<script>
import OrderForm from '../components/OrderForm.vue';

export default {
  name: 'Order',
  components: {
    OrderForm,
  },
}
</script>

<style>
</style>
