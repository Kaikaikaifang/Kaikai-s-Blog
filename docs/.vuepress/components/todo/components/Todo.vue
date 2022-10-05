<script>
    export default {
        name: "Todo",
        data() {
            return {

            }
        },
        methods: {

        },
        props: ["Todo", "deleteTodo"]   
    }
</script>

<template>
    <div>
        <label>{{ Todo.title }}
            <input type="checkbox" v-model="Todo.done">
        </label>
        <button @click="deleteTodo(Todo)">删除</button>
    </div>
</template>

<style scoped>

</style>