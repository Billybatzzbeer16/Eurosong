<template>
    <div class="ranking">
        <div v-for="(s, index) in items" :key="index">
            <div>


                <ol style="list-style-type: none">
                    <li class="rotate">
                        <h2> {{index + 1}}) {{s.title}} - {{s.points}} points</h2>
                        <iframe  class="" :src="s.spotify" width="300" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </li>
                </ol>
                
            </div>
        </div>
        
    </div>

</template>

<script>
    export default {
        name: "Ranking",
        props: [
            "items",
            "votes"
        ],
        
    }
</script>