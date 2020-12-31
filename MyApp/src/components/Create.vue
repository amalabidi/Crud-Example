<template>
    <div class="container">
        <section class="ftco-section contact-section">

                            <div class="ftco-bg-dark p-3 p-md-5">
                                <div class="col-md-12 mb-4">

                                       <div class="card bg-dark text-white" style="width:800px">
                                            <div class="card-body">

                                    <div class="container">
                                        <h2 style="text-align: center">Create a new item:</h2>
                                    <form>

                                    <div class="form-group">
                                        <label>Item Name:</label>
                                        <input type="text" class="form-control" v-model="item.name" style="width:500px"/>
                                    </div>
                                    <div class="form-group">
                                        <label>Item price:</label>
                                        <input type="text" class="form-control" v-model="item.price" style="width:500px"/>
                                    </div>
                                        <div class="form-group">
                                            <input type="submit" class="btn btn-secondary" @click="addItem" value="create"/>
                                        </div>

                                    </form></div></div></div>
        </div>
                            </div></section></div>

</template>
<script>
import axios from 'axios'
    export default {
        components: {

    },
        data() {
            return {
                item: {name: '', price: ''}
            }
        },
        methods: {
            addItem() {
                let newItem={name: this.item.name,price: this.item.price};
                console.log(newItem);

                axios.post('http://localhost:3002/items', newItem).then((response) => {
                    console.log(response.data);
                    this.$router.push({name: 'Index'});
                }).catch((error) => {
                    console.log(error);
                });
            }

        }
    }
</script>

