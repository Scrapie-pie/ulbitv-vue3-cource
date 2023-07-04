import {computed, ref} from "vue";

export function useSortedPosts(posts) {
  const selectedSort = ref('')

  const sortedPosts = computed(() => {
    return [...posts.value].sort((post1, post2) => {
      if (selectedSort.value === 'id') {
        return post1['id'] - post2['id'];
      } else {
        return post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])
      }

    })
  })

  return {
    selectedSort,
    sortedPosts
  }
}