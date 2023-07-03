<template>
  <div class="pagination">
    <div
      v-for="page in totalPages"
      :key="page"
      class="pagination__page"
      :class="{
        'pagination__page_current': page === currentPage
      }"
      @click="changePage(page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      totalPages: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    methods: {
      changePage(page) {
        this.$emit('change', page)
      }
    }
  }
</script>

<style scoped>
.pagination {
  display: flex;
  margin-top: 15px;
}

.pagination__page {
  border: 1px solid black;
  padding: 15px;
}

.pagination__page_current {
  border: 2px solid teal;
}
</style>