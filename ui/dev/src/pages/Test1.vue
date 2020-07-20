<template>
  <q-page padding>
    <q-btn label="Not Yours"></q-btn>
    <MyQuasarButton label="Test" />
  </q-page>
</template>
<script>
import { MyQuasarButton } from "quasar-ui-component-library";

export default {
  components: {
    MyQuasarButton
  }
}

</script>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
