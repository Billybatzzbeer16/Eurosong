<template>
    <div> 
        <h1 style="text-align:center">
            Eurosong Voting app
        </h1>

        <nav>
            <ul class="nav-bar">
                <a @click="GoToPage('home')">Home</a>
                <a @click="GoToPage('game')">Game</a>
                <a @click="GoToPage('ranking')">Ranking</a>
            </ul>
        </nav>

        <img class="white" src="../images/eurovision-logo.png">
        

    </div>
</template>

<script>
    export default {
        name: "Homepage",
        methods: {
            GoToPage(page) {
                this.$emit("change-page", page);
            }
        }
    }
</script>