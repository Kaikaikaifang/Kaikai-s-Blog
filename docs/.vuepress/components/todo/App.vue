<script>
  import TodoInput from './components/TodoInput.vue';
  import TodoList from './components/TodoList.vue';
  import TodoListFooter from './components/TodoListFooter.vue';
  export default {
      name: 'App',
      data() {
          return {
            Todos: JSON.parse(window.localStorage.getItem("todos")) || []
          }
      },
      methods: {
        addTodo(todoTitle){
          this.Todos.unshift({
            id: Math.random(),
            title: todoTitle,
            done: false
          })
        },
        deleteTodo(Todo) {
          this.Todos = this.Todos.filter(todo => todo != Todo)
        },
        checkAll(checked){
          this.Todos.forEach(todo=>{
            todo.done = !checked;
          })
        },
        deleteChecked(){
          this.Todos = this.Todos.filter(todo=>!todo.done)
        }
      },
      components: {
        TodoInput,
        TodoList,
        TodoListFooter
      },
      computed:{
        dones(){
          return this.Todos.reduce((pre, todo) => pre += (todo.done? 1 : 0), 0)
        },
        all(){
          return this.Todos.length
        },
        checkedAll(){
          return this.dones === this.all && this.all !== 0
        },
      },
      watch: {
        Todos:{
          deep: true,
          handler(newValue){
            localStorage.setItem("todos", JSON.stringify(newValue))
          }
        },
      }
  }
</script>

<template>
    <div>
      <TodoInput :addTodo="this.addTodo" :dones="dones" :all="all"/>
      <TodoList :Todos="this.Todos" :deleteTodo="this.deleteTodo"/>
      <TodoListFooter :checkedAll="checkedAll" :deleteChecked="deleteChecked" :checkAll="checkAll" :all="all" :dones="dones"/>
    </div>
</template>

<style scoped>

</style>