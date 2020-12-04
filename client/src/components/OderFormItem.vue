<script>
export default {
  name: 'OrderFormItem',
  props: {
    value: {
      type: Object,
      default () {
        return {
          name: '',
          qty: 1,
        }
      }
    }
  }
};
</script>

<template>
  <div class="b-order-form-item">
    <div class="b-order-form-item__field b-order-form-item__field--name">{{ value.name }}</div>
    <div class="b-order-form-item__field b-order-form-item__field--qty">
      <input
        class="b-order-form-item__qty-input"
        v-model="value.qty" @input="$emit('input', value)"
      />
    </div>
    <div class="b-order-form-item__field b-order-form-item__field--actions">
      <button @click="$emit('delete')">X</button>
    </div>
  </div>
</template>

<style lang="sass">
.b-order-form-item
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between

.b-order-form-item__field
  padding: 8px 4px

.b-order-form-item__field--name
  width: 70%

.b-order-form-item__field--qty
  width: 20%

.b-order-form-item__field--actions
  width: 10%

.b-order-form-item__qty-input
  max-width: 60px
  border: 0
  border-bottom: 1px solid #2c3e50
</style>
