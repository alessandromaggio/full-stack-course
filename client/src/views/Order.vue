<template>
  <div>
    <h2>Order #{{ $route.params.id }}</h2>
    <order-form/>
    <button @click="dialog = true">Order</button>
    <app-dialog v-model="dialog">
      <h3>Confirm?</h3>
      <p>Do you really want to confirm your order</p>
      <button @click="dialog = false">Cancel</button>
      <button @click="dialog = false">Confirm</button>
    </app-dialog>
  </div>
</template>

<script>
import OrderForm from '../components/OrderForm.vue';
import AppDialog from '../components/AppDialog.vue';

export default {
  name: 'Order',
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    OrderForm,
    AppDialog,
  },
}
</script>

<style>
</style>
