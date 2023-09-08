<template>
    <div class="avatar">
        <img src="../assets/images/user-icon.svg" alt="author's image">
    </div>
</template>


<script setup lang="ts"></script>

<style lang="scss" scoped>
    .avatar {
        width: 220px;
        height: 220px;
        box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        background-color: white;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>