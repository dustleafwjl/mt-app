<template>
    <div class="m-header">
        <el-row>
            <top-bar />
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>
<script>
import TopBar from './topBar.vue';
import SearchBar from './searchBar.vue';
export default {
    components: {
        TopBar,
        SearchBar
    }
}
</script>

<style scoped>

</style>