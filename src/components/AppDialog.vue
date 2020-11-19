<script>
export default {
  name: 'AppDialog',
  props: {
    value: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    onClick(event) {
      if (event.target.className === 'app-dialog__overlay') {
        this.$emit('input', false);
      }
    }
  }
}
</script>

<template>
  <div class="app-dialog" v-show="value">
    <div class="app-dialog__underlay"/>
    <div class="app-dialog__overlay" @click="onClick">
      <div class="app-dialog__vcenter">
        <div class="app-dialog__dialog">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.app-dialog__overlay,
.app-dialog__underlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}

.app-dialog__overlay {
  z-index: 101;
}

.app-dialog__underlay {
  background-color: #000;
  opacity: 0.75;
  z-index: 100;
}

.app-dialog__vcenter {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.app-dialog__dialog {
  padding: 1rem;
  border-radius: 4px;
  background-color: white;
  display: inline-block;
}
</style>
