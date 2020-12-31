<template>
    <div>
        <div class="ftco-bg-dark p-3 p-md-5">
            <div class="col-md-12 mb-4">

                <div class="card bg-dark text-white" style="width:800px">
                    <div class="card-body">
        <h1>Items</h1>

        <table class="table table-hover">
            <thead>
            <tr class="tr">
                <td >ID</td>
                <td>Item Name</td>
                <td>Item Price</td>
                <td colspan="2">Actions</td>
            </tr>
            </thead>

            <tbody class="bod">
            <tr class="success" v-for="item in items" :key="item._id">
                <td>{{ item._id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td><router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-secondary">Edit</router-link></td>
          <td><button @click="()=>{DeleteItem(item._id)}"  class="btn btn-danger">Delete</button></td>



            </tr>
            </tbody>
        </table>

                    </div></div></div></div></div>
</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                items: [],

            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {

            fetchItems()
            {
                axios
                    .get('http://localhost:3002/items')
                    .then(res => {
                        this.items = res.data;
                    })
                },
            DeleteItem(id)
            {

                let uri = 'http://localhost:3002/items/' + id;
                axios.delete(uri).then((response) => {

                    console.log(response);


                });
            }
        }

            }


</script>
<style>
    .bod,.tr{
        color:white;
    }
</style>
