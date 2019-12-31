<template>
  <div class="todo">
    <ToDo/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDo from '@/components/ToDo.vue'

export default {
  name: 'todo',
  components: {
    ToDo
  }
}
</script>
