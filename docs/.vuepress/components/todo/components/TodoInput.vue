<script>
    export default {
        name: "TodoInput",
        data() {
            return {
                todoTitle: ""
            }
        },
        methods: {

        },
        props: ["addTodo", "dones", "all"]   
    }
</script>

<template>
    <div>
        <div>已完成{{dones}}/{{all}}</div>
        <label>Add todo:
            <input type="text" @keydown.enter="()=>{
                this.todoTitle = this.todoTitle.trim();
                if(this.todoTitle !== ''){
                    addTodo(this.todoTitle);
                    this.todoTitle = ''
                }
            }" v-model="todoTitle">
        </label>
    </div>
</template>

<style scoped>

</style>