<template>

    <div class="content">
        <div class="header">
            <MenuBar />
            <div id="home" class="main">
                <center>
                    <h1 style="font-size: 40px">
                        Online payments...
                    </h1>
                </center>
                <br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem consectetur, aliquam quidem 
                    illo modi quaerat a consequatur labore dolore sunt voluptatem natus neque pariatur voluptas laudantium rerum, quisquam voluptate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem consectetur, aliquam quidem 
                    illo modi quaerat a consequatur labore dolore sunt voluptatem natus neque pariatur voluptas laudantium rerum, quisquam voluptate. </p>
            </div>
        </div>
        <div class="content-about">
            <p>This</p>
        </div>
    </div>
</template>

<script>
import MenuBar from './MenuBar.vue'

export default {
    name: 'Home',
    components: {
        MenuBar
    }
}
</script>

<style scoped>
    .header {
        background: #5865F2;
        width: 100%;
        height: 750px;
    }

    .content-about {
        width: 100%;
        height: 500px;
        background: #23272A;
    }

    .main {
        margin-right: 25%;
        margin-left: 25%;
        text-align: justify;
        margin-top: 5%;
    }
</style>