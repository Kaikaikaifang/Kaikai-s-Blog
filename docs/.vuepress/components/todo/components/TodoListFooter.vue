<script>
    export default {
        name: "TodoListFooter",
        data() {
            return {
            }
        },
        props: ["checkedAll", "deleteChecked", "checkAll", "all", "dones"]
    }
</script>

<template>
    <div>
        <label>全选
            <input type="checkbox" :checked="checkedAll" @click="checkAll(checkedAll)" :disabled="all===0">
        </label>
        <button type="button" @click="()=>{
            this.deleteChecked();
            this.checked=false
        }" :disabled="dones===0">删除</button>
    </div>
</template>

<style scoped>

</style>