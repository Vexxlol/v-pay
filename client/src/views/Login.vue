<template>
    <div>
        <nav>
            <span class="header-text" style="color: #5865F2;">V-Pay</span>
            <router-link class="action" to="login">Account</router-link>
            <router-link class="action" to="suppport">Support</router-link>
            <router-link class="action" to="about">About</router-link>
            <router-link class="action" to="/">Home</router-link>
        </nav>
        <br>
        <br>
        <br>
        <center>
            <span style="font-size: 25px; margin-bottom: 15px;">Select a sign-in option</span><br><br>
             <button class="google social">
                <font-awesome-icon class="icon" :icon="['fab', 'google']" /> Google
            </button>
            <button class="discord social">
                <font-awesome-icon class="icon" :icon="['fab', 'discord']" /> Discord
            </button>
            
        </center>
    </div>
</template>

<script>
export default {
    name: 'Login', 
}
</script>

<style>

    .social {
        color: white;
        display: block;
        width: 300px;
        height: 50px;
        margin-bottom: 15px;
        border: none;
        border-radius: 5px;
        font-size: 30px;
        transition: 150ms ease-in-out;
    }

    .social:hover {
        opacity: 0.9;
    }

    .discord {
        background: #5865F2;
    }

    .google {
        background: #4285F4;
    }

    .facebook {
        background: #4267B2;
    }

    nav {
        width: 100%;
        height: 50px;
        padding-top: 1.25%;
        background: #FFFFFF;
    }

    .header-text {
        padding-left: 0.5%;
        float: left;
        font-size: 20px;
    }

    .action {
        padding-right: 15px;
        float:right;
        color: #5865F2;
    }

    a:hover {
        color: #ED4245;
    }

    a {
        transition: 150ms ease-in-out;
        text-decoration: none;
    }
</style>