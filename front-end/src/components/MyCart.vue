<template>
    <div>
        <h2> My Shopping Cart</h2>
        <div class="wrapper">
            <div class="products">
                <div class="product" v-for="item in $root.$data.cart" :key="item[0]">
<!--                    <div class="image">-->
<!--                        <img :src="require('../img/' + item[1].image)">-->
<!--                    </div>-->
                    <img class="image" :src="item[2]" />
                    <div class="price">
                        <h2>{{item[3].price}} x {{item[5]}}</h2>
                        <button class="auto" @click="removeItem(item[1].id)">Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cart',
        props: {
            cart: Array
        },
        methods: {
            removeItem(id){
                for (let i = 0; i < this.$root.$data.cart.length; i++){
                    if(this.$root.$data.cart[i][0] === id){
                        if(this.$root.$data.cart[i][2] > 1){
                            let tmp = this.$root.$data.cart[i][2];
                            this.$root.$data.cart.splice(i, 1);
                            this.$root.$data.cart.push([id, this.$root.$data.products[id - 1], tmp - 1]);
                            return
                        }
                        this.$root.$data.cart.splice(i, 1);
                        return
                    }
                }
            }
        }
    }

</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .products {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .product {
        margin: 10px;
        margin-top: 50px;
        width: 200px;
    }

    .product img {
        border: 2px solid #333;
        height: 250px;
        width: 200px;
        object-fit: cover;
    }

    .product .image {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    .info {
        background: #8FBC8F;
        color: #000;
        padding: 10px 30px;
        height: 80px;
    }

    h1{
        text-align: center;
    }

    .info h1 {
        font-size: 16px;
    }

    .info h2 {
        font-size: 14px;
    }

    .info p {
        margin: 0px;
        font-size: 10px;
    }


    .price {
        display: flex;
        background: black;
    }

    button {
        height: 50px;
        text-align: center;
        margin:auto;
        border: none;
    }

    .auto {
        margin-left: auto;
    }
</style>