<template>
    <div> 
        <h1 style="text-align:center">
            Game
        </h1>
        <nav>
            <ul class="nav-bar">
                <a @click="GoToPage('home')">Home</a>
                <a @click="GoToPage('game')">Game</a>
                <a @click="GoToPage('ranking')">Ranking</a>
            </ul>
        </nav>
        
        <Carousel 
            :items="songs"
            :activeIndex ="activeSongIndex"

            @change-index="changeActiveSongIndex"
        />
        <nav>
            <div class="nav-bar" v-for="(vote, index) in votes" :key="index">
                <button  @click="addVote(vote.points)" v-if="!vote.isVoted">
                    Add {{vote.points}} points
                </button>
            </div>
        </nav>
        
    </div>

</template>

<script>
    // Components
    import Carousel from "../components/Carousel.vue"
    // Export
    export default {
        name: "Gamepage",
        components: {
            Carousel
        },
        data() {
            return{
                songs: [],
                activeSongIndex: 0,
                votes: [
                    {
                    points: 1,
                    isVoted: false
                    },
                    {
                    points: 2,
                    isVoted: false
                    },
                    {
                    points: 4,
                    isVoted: false
                    },
                    {
                    points: 8,
                    isVoted: false
                    }
                ]
            }
        },
        mounted() {
            console.log("MOUNTED");
            this.fetchsongs();
        },
        methods: {
            // Navigtion Method
            GoToPage(page) {
                this.$emit("change-page", page);
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

            postVote() {
                const songId = this.songs[this.activeSongIndex].id;
                const url = "http://webservies.be/eurosong/Votes";

                fetch(url, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json, text/plain',
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                    body: JSON.stringify({
                        songID: songId,
                        points: points
                    })
                })
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    console.log(result);
                })
            },
            // logic methods
            changeActiveSongIndex(index) {
                this.activeSongIndex = index;
            },
            addVote(points) {
                let votes = this.votes;

                votes.map((vote) => {

                    if(vote.points == points) vote.isVoted = true
                    return vote;
                });
                // post to API
                this.postVote(points);

                // CHeck if voted
                let activeVotes = votes.filter((vote) => vote.isVoted == true);
                if (activeVotes == activeVotes.length) this.GoToPage("ranking");
            }

        }
    }
</script>