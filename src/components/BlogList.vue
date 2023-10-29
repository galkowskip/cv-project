<template>
  <div class="blog-list">
    <BlogBox />
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from "../types";

const blogItems: BlogPost[] = [
  {
    id: "1",
    slug: "my-first-blog-post",
    title: "My First Blog Post",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu bibendum bibendum, elit sapien bibendum sapien, euismod bibendum sapien elit eget sapien.",
    date: "2022-01-01",
    author: "John Doe",
    coverImage: "https://via.placeholder.com/150",
    tags: ["tag1", "tag2"],
  },
  {
    id: "2",
    slug: "my-second-blog-post",
    title: "My Second Blog Post",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu bibendum bibendum, elit sapien bibendum sapien, euismod bibendum sapien elit eget sapien.",
    date: "2022-01-02",
    author: "Jane Doe",
    coverImage: "https://via.placeholder.com/150",
    tags: ["tag2", "tag3"],
  },
];
</script>

<style scoped lang="scss"></style>
