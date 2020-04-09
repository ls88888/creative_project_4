<template>
    <div class="admin">
        <h2>The Admin Page</h2>
        <h4> <i> Where to edit and upload artwork to LiliesDesigns</i> </h4>
        <div class="heading">
            <div class="circle">1</div>
            <h3>Add an Item</h3>
        </div>
        <div class="add">
            <div class="form">
                <input v-model="title" placeholder="Title">
                <p></p>
                <input type="file" name="photo" @change="fileChanged">
                <p></p>
                <input v-model="price" placeholder="Price">
                <p></p>
                <input v-model="quantity" placeholder="Quantity">
                <p></p>
                <button @click="upload">Upload</button>
            </div>
            <div class="upload" v-if="addItem">
                <h3>{{addItem.title}}</h3>
                <img :src="addItem.path" />
            </div>
        </div>
        <div class="heading">
            <div class="circle">2</div>
            <h3>Edit/Delete an Item</h3>
        </div>
        <div class="edit">
            <div class="form">
                <input v-model="findTitle" placeholder="Search">
                <div class="suggestions" v-if="suggestions.length > 0">
                    <div class="suggestion" v-for="s in suggestions" :key="s._id" @click="selectItem(s)">{{s.title}}
                    </div>
                </div>
            </div>
            <div class="upload" v-if="findItem">
                <input v-model="findItem.title">
                <p></p>
                <img :src="findItem.path" />
                <p></p>
                <input v-model="findItem.price">
                <p></p>
                <input v-model="findItem.quantity">
            </div>
            <div class="actions" v-if="findItem">
                <button @click="deleteItem(findItem)">Delete</button>
                <button @click="editItem(findItem)">Edit</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Admin',
        data() {
            return {
                title: "",
                file: null,
                price: null,
                quantity: null,
                addItem: null,
                items: [],
                findTitle: "",
                findItem: null,
            }
        },
        created() {
            this.getItems();
        },
        methods: {
            fileChanged(event) {
                this.file = event.target.files[0]
            },
            async upload() {
                try {
                    const formData = new FormData();
                    formData.append('photo', this.file, this.file.name);
                    let r1 = await axios.post('/api/photos', formData);
                    let r2 = await axios.post('/api/items', {
                        title: this.title,
                        path: r1.data.path,
                        price: this.price,
                        quantity: this.quantity,
                    });
                    this.addItem = r2.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async getItems() {
                try {
                    let response = await axios.get("/api/items");
                    this.items = response.data;
                    return true;
                } catch (error) {
                    console.log(error);
                }
            },
            selectItem(item) {
                this.findTitle = "";
                this.findItem = item;
            },
            async deleteItem(item) {
                try {
                    console.log(item._id);
                    await axios.delete("/api/items/" + item._id);
                    this.findItem = null;
                    this.getItems();
                    this.getItems();
                    return true;
                } catch (error) {
                    console.log(error);
                }
            },
            async editItem(item) {
                try {
                    await axios.put("/api/items/" + item._id, {
                        title: this.findItem.title,
                        price: this.findItem.price,
                        quantity: this.findItem.quantity,
                    });
                    this.findItem = null;
                    this.getItems();
                    return true;
                } catch (error) {
                    console.log(error);
                }
            },
        },
        computed: {
            suggestions() {
                let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
                return items.sort((a, b) => a.title > b.title);
            }
        },
    }
</script>

<style scoped>
    .admin{
        margin-left: 20px;
    }
    .image h3 {
        font-style: italic;
        font-size: 1em;
    }

    .heading {
        display: flex;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .heading h3 {
        margin-top: 13px;
        margin-left: 10px;
    }

    h4 {
        margin-left: 10px;
        text-align: center;
        font-size: medium;
    }

    .add,
    .edit {
        display: flex;
    }

    .circle {
        border-radius: 80%;
        width: 45px;
        height: 45px;
        padding: 12px;
        background: #00008b;
        color: #fff;
        text-align: center
    }

    /* Form */
    input,
    textarea,
    select,
    button {
        font-family: 'Montserrat', sans-serif;
        font-size: 1em;
    }

    .form {
        margin-right: 50px;
    }

    /* Uploaded images */
    .upload h2 {
        margin: 0px;
    }

    .upload img {
        max-width: 300px;
    }

    /* Suggestions */
    .suggestions {
        width: 200px;
        border: 1px solid #ccc;
    }

    .suggestion {
        min-height: 20px;
    }

    .suggestion:hover {
        background-color: #5BDEFF;
        color: #fff;
    }
</style>
