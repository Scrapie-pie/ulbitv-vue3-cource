<template>

  <div>
    <h1>Страница с постами</h1>
    <MyInput :modelValue="searchQuery" @update:modelValue="setSearchQuery" placeholder="Поиск..." v-focus />
    <div class="app__btns">
      <MyButton @click="showDialog" >Создать пост</MyButton>
      <MySelect
        :modelValue="selectedSort"
        @update:modelValue="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идёт загрузка</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--    <PagePagination :totalPages="totalPages" :currentPage="page" @change="setCurrentPage" />-->
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import PagePagination from "@/components/PagePagination";
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  components: {
    PagePagination,
    MyInput,
    MyButton,
    MyDialog,
    PostForm,
    PostList,
    MySelect
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort"
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      loadMorePosts: "post/loadMorePosts",
    }),
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    //this.fetchPosts();
    //this.loadMorePosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
      searchQuery: state => state.post.searchQuery,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts"
    }),
  },
}
</script>

<style>
.observer {
  height: 30px;
  background: green;
}
</style>