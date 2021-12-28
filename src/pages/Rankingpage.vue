<template>
    <div> 
        <h1 style="text-align:center">
            Ranking
        </h1>

        <nav>
            <ul class="nav-bar">
                <a @click="GoToPage('home')">Home</a>
                <a @click="GoToPage('game')">Game</a>
                <a @click="GoToPage('ranking')">Ranking</a>
            </ul>
        </nav>
        <Ranking
        :items="songs"
        :votes="amount_of_votes"
        
        />

    </div>
</template>

<script>
    // import components
    import Ranking from "../components/Ranking.vue"

    // Export
    export default {
        name: "Rankingpage",
        components: {
            Ranking
        },
        data() {
            return{
                songs: [],
                amount_of_votes: []
            }
        },
        mounted() {
            console.log("MOUNTED");
            this.fetchsongs();
        },
        methods: {
            GoToPage(page) {
                this.$emit("change-page", page);
            },
            getpoints() {
                this.$emit("countpoints")
            },

            // Data methods
            // get all songs
            fetchsongs() {
                const url = "http://webservies.be/eurosong/Songs";

                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((songs) => {
                        this.fetchartists(songs);
                    })

                    .then((songs) => {
                        this.fetchvotes(songs);
                    })
            },

            fetchartists(songs) {
                const url = "http://webservies.be/eurosong/Artists";

                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((artists) => {
                        // loop over songs
                        songs.map((song) => {
                            // find artist in array
                            const artist = artists.find((artist) => artist.id == song.artist);
                            // raplace the id with the artist name
                            song.artist = artist;

                            return song;
                        });
                        this.songs = songs;
                    });
            },
            
            fetchvotes(songs) {
                const url = "http://webservies.be/eurosong/Votes";
                let sorted_songs;

                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((votes) => {
                        // loop over songs
                        this.songs.map((song) => {
                            
                            // const vote = votes.find((vote) => vote.songID == song.id);
                            // this.amount_of_votes = vote;

                                const vote = votes.find((vote) => vote.songID == song.id);

                                song.points = 0;
                                votes.forEach(v => {
                                if (v.songID == song.id) song.points += v.points
                            });

                            
                            return this.songs.sort((a,b) => b.points - a.points);
                        });
                        this.amount_of_votes = votes;
                    });
            }
            
        }
    }
</script>