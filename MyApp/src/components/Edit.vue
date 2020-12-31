<template>
   <div class="container">
      <div class="ftco-bg-dark p-3 p-md-5">
         <div class="col-md-12 mb-4">

            <div class="card bg-dark text-white" style="width:800px">
               <div class="card-body">
            <h3 style="text-align:center">Edit Item</h3>
         </div>
         <div class="card-body">
            <form v-on:submit.prevent="updateItem">
               <div class="form-group">
                  <label>Item Name:</label>
                  <input type="text" class="form-control" v-model="item.name"/>
               </div>
               <div class="form-group">
                  <label>Item Price:</label>
                  <input type="text" class="form-control" v-model="item.price" />
               </div>
               <div class="form-group">
                  <input type="submit" class="btn btn-secondary" value="Update Item"/>
               </div>
            </form>
         </div></div></div>
      </div>
   </div>
</template>
<script>
   import axios from 'axios';
   export default{
      data(){
         return{
            item:{name:'',price:''}
         }
      },

      created: function(){
         this.getItem();
      },

      methods: {
         getItem()
         {
            let uri = 'http://localhost:3002/items/ById/' + this.$route.params.id;
           axios.get(uri).then((response) => {
               this.item = response.data;
            });
         },

         updateItem()
         {
            let newItem={name:this.item.name,price:this.item.price}
            let uri = 'http://localhost:3002/items/' + this.$route.params.id;
            axios.put(uri, {
               name: newItem.name , price: newItem.price
            }).then((response) => {

               console.log(response);
               this.$router.push({name: 'Index'});
            });
         }
      }
   }
</script>
