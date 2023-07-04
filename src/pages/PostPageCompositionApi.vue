<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput v-model="searchQuery" placeholder="Поиск..." v-focus />
    <div class="app__btns">
<!--      <MyButton @click="showDialog" >Создать пост</MyButton>-->
      <MySelect
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <MyDialog v-model:show="dialogVisible">
<!--      <PostForm @create="createPost" />-->
    </MyDialog>
<!--    <PostList-->
<!--      :posts="sortedAndSearchedPosts"-->
<!--      @remove="removePost"-->
<!--      v-if="!isPostsLoading"-->
<!--    />-->

    <PostList
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
    />

    <div v-else>Идёт загрузка</div>
<!--    <div v-intersection="loadMorePosts" class="observer"></div>-->
<!--        <PagePagination :totalPages="totalPages" :currentPage="page" @change="setCurrentPage" />-->
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import axios from 'axios';
import MyInput from "@/components/UI/MyInput";
import PagePagination from "@/components/PagePagination";

import {ref} from "vue";
import {usePosts} from "@/hooks/usePosts";
import {useSortedPosts} from "@/hooks/useSortedPosts";
import {useSortedAndSearchedPosts} from "@/hooks/useSortedAndSearchedPosts";


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
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
        { value: 'id', name: 'По id' },
      ],

    }
  },

  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10)
    const {selectedSort, sortedPosts} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
}
</script>

<style>
.observer {
  height: 30px;
  background: green;
}
</style>