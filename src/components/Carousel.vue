<template>
    <div>
        
        <div v-for="(song, index) in items" :key="song.id">
            <div v-if="index == activeIndex">
                <iframe :src="song.spotify" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <h2 style="text-align: center">{{song.artist.name}} - {{song.title}}</h2>
            </div>
        </div>

        <nav>
            <button @click="changeIndex (-1)"> Prev Song</button>
            <button @click="changeIndex (+1)"> Next Song</button>
        </nav>
        
    </div>

</template>

<script>
    export default {
        name: "Carousel",
        props: [
            "items",
            "activeIndex"
        ],
        methods: {
            changeIndex(value) {
                let index = this.activeIndex;

                // -1 of +1
                index += value;

                // check if index is the begin or the end
                if (index < 0) index = this.items.length -1
                else if (index == this.items.length) index = 0;

                //change index in gamepage
                this.$emit('change-index', index);
            }
        }
    }
</script>