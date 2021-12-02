<template>
    <nav>
        <span class="header-text">V-Pay</span>

        <router-link class="action" style="color: white;" to="login">Account</router-link>
        <router-link class="action" style="color: white;" to="support">Support</router-link>
        <router-link class="action" style="color: white;" to="about">About</router-link>
        <router-link class="action" style="color: white;" to="/">Home</router-link>

    </nav>
</template>

<script>
export default {
    name: 'MenuBar'
}
</script>

<style>
    nav {
        width: 100% !important;
        height: 50px !important;
        background: transparent !important;
    }

    .header-text {
        padding-left: 0.5%;
        float: left;
        font-size: 20px;
    }

    .action {
        padding-right: 20px;
        float:right;
        display: inline-flex;
        transition: 150ms ease-in-out;
    }

    .action:hover {
        color: #ED4245 !important;
    }

    a:hover {
        color: #ED4245;
    }

    a {
        
        text-decoration: none;
    }
    
</style>