<template>
    <div>
      {{dataset}}
    </div>
</template>

<script>
export default {
    name: "Users",
  data: function() {
      return {
        dataset: []
      }
  },
  mounted() {
      let curUsers = this.dataset;
      this.databaseQuery('users').then(response => {
        response.forEach(res => {
          curUsers.push(res)
        })
      })
  }
}
</script>
