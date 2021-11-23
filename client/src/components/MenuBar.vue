<template>
    <nav>
        <span class="header">V-Pay</span>

        <span class="action"><a href="#account">Account</a></span>
        <span class="action"><a href="mailto:support@vpay.com">Support</a></span>
        <span class="action"><a href="#about">About</a></span>
        <span class="action"><a href="#home">Home</a></span>

    </nav>
</template>

<script>
export default {
    name: 'MenuBar'
}
</script>

<style scoped>
    nav {
        width: 100%;
        height: 50px;
        padding-top: 1.25%;
    }

    .header {
        padding-left: 0.5%;
        float: left;
        font-size: 20px;
    }

    .action {
        padding-right: 15px;
        float:right;
    }

    a:hover {
        color: #ED4245;
    }

    a {
        transition: 150ms ease-in-out;
        text-decoration: none;
    }
    
</style>