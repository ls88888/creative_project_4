<template>
    <div>
        <div class="homepage-grid">
            <div class="black-and-center" v-for="item in items" :key="item._id">
                <img class="image" :src="item.path" />
                <div class="price">
                    <h2>{{item.price}}</h2>
                    <button class="auto" @click="addToCart(item._id)">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Home",
        props: {
            products: Array
        },
        data() {
            return {
                items: [],
            }
        },
        created() {
            this.getItems();
        },
        methods: {
            async getItems() {
                try {
                    let response = await axios.get("/api/items");
                    this.items = response.data;
                    return true;
                } catch (error) {
                    console.log(error);
                }
            },
            addToCart(id){
                for(let i=0; i < this.items.length ;i++){
                    console.log("Here!!");
                    console.log(this.items[i]._id);
                    if(id === this.items[i]._id){
                        for(let j=0; j < this.$root.$data.cart.length ;j++){
                            if (id === this.$root.$data.cart[j][0]) {
                                let tmp = this.$root.$data.cart[j][5];
                                this.$root.$data.cart.splice(j, 1);
                                this.$root.$data.cart.push([id, this.items[i].title, this.items[i].path, this.items[i].price, this.items[i].quantity, tmp + 1]);
                                return
                            }
                        }
                        this.$root.$data.cart.push([id, this.items[i].title, this.items[i].path, this.items[i].price, this.items[i].quantity, 1]);
                        return
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>