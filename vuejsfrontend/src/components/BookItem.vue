<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img :src="book.img_url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{book.title}}</h5>
                <h6 class="card-title">{{book.author}}</h6>
                <p class="card-text">{{ book.description }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["book"])
</script>