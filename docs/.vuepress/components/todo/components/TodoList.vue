<script>
    import Todo from './Todo.vue';
    export default {
        name: "TodoList",
        data() {
            return {

            }
        },
        methods: {

        },
        components: {
            Todo
        },
        props: ["Todos", "deleteTodo"]   
    }
</script>

<template>
    <div>
        <ul>
            <li v-for="(Todo) in Todos" :key="Todo.id">
                <Todo :Todo="Todo" :deleteTodo="this.deleteTodo"/>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>