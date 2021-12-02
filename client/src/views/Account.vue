<template>
    <div>
         <nav>
            <span class="header-text" style="color: #5865F2;">V-Pay</span>
            <router-link class="action" to="login">Account</router-link>
            <router-link class="action" to="suppport">Support</router-link>
            <router-link class="action" to="about">About</router-link>
            <router-link class="action" to="/">Home</router-link>
        </nav>

        <div class="content">
            <h3 id="name">
                Good evening, {{ user.username }}
            </h3>
            <p>Your current balance is, <span style="color: #57F287;">${{ user.balance }} </span></p>
        </div>
    </div>
</template>

<script>
import AccountService from "../AccountService"

export default {
    name: 'Account',
    data() {
        return { user: { } }
    },
    async created() {
        // console.log(AccountService.getMe)
        try {
            this.user = await AccountService.getMe();
        } catch (err) {
            this.error = err;
        }
    }
}  
</script>

<style scoped>
    * {
        color: black;
    }

    .content {
        margin-left: 20%;
        margin-right: 20%;
    }

    nav {
            width: 100%;
            height: 50px;
            padding-top: 1.25%;
            background: #5865F2;
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