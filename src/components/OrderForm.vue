<script>
import OrderFormItem from './OderFormItem';

export default {
  name: 'OrderForm',
  components: {
    OrderFormItem,
  },
  data () {
    return {
      items: [],
    };
  },
  methods: {
    addProduct(name) {
      this.items.push({
        name,
        qty: 1,
      });
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};

</script>

<template>
  <div class="b-order-form">
    <h1>Your order...</h1>
    <div v-show="items.length === 0">
      Your order is empty, please add something with the buttons below.
    </div>
    <div class="b-order-form__items" v-show="items.length > 0">
      <order-form-item
        v-for="(item, index) in items" :key="index + JSON.stringify(item)"
        v-model="items[index]"
        @delete="removeItem(index)"
      >
      </order-form-item>
    </div>
    <button class="b-order-form__button" @click="addProduct('Baguette')">+ Baguette</button>
    <button class="b-order-form__button" @click="addProduct('Croissant')">+ Croissant</button>
    <button class="b-order-form__button" @click="addProduct('Pain au Chocolat')">+ Pain au Chocolat</button>
  </div>
</template>

<style lang="sass">
.b-order-form
  margin: 20px 0
  margin-bottom: 50px

.b-order-form__items
  max-width: 600px
  border: 1px solid #2c3e50
  border-radius: 4px
  margin-bottom: 10px
</style>
