<template>
    <div class="itunes row">
        <div class="col-sm-12 flex2">
            <h1 class="flex2">iTunes Search&nbsp;&nbsp;</h1>
            <form class="flex2" @submit.prevent="getMusicByArtist">
                <input type="text" name="artist" v-model="artist" class="form-control" placeholder="Artist">
                <button type="submit" class="btn btn-dark">Search</button>
            </form>
        </div>
        <div v-for="Itune in Itunes" class="col-xs-6 col-sm-4 flexy">
            <div class="flex2">
                <div>
                    <img :src="Itune.artworkUrl100" class="album">
                </div>
                <div class="song">
                    <h5 class="shadow">{{Itune.trackName}}</h5>
                    <h6 class="shadow">{{Itune.artistName}}</h6>
                    <p class="shadow">{{Itune.collectionName}}</p>
                    <div class="flex2">
                        <i class="fas fa-headphones btn-primary btn" @click="Itune.trackId = true"></i>
                        <div v-if="Itune.trackId == true" class="preview d-flex align-items-start">
                            <audio controls>
                                <source :src="Itune.previewUrl" type="audio/mpeg">
                            </audio>
                            <i class="fas fa-times btn btn-dark x" @click="Itune.trackId = false"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="addSong">
                <i class="fas fa-plus-circle" @click="addToMyTunes(Itune), opacity = 0"></i>
            </div>
        </div>
        <div class="col-sm-12 footer"></div>
    </div>
</template>

<script>
    export default {
        name: 'iTunes',
        data() {
            return {
                artist: '',
                trackId: false,
            }
        },
        methods: {
            getMusicByArtist() {
                this.$store.dispatch('getMusicByArtist', this.artist)
            },
            addToMyTunes(Itune) {
                this.$store.dispatch('addToMyTunes', Itune)
            }
        },
        computed: {
            Itunes() {
                return this.$store.state.results
            }
        },
    }

</script>

<style scoped>
    h1 {
        text-shadow: 3px 2px 3px rgba(150, 150, 150, 1);
        font-weight: 700;
        font-family: Work Sans;
        margin-top: 20px 
    }

    .preview {
        transition: all .3s linear
    }

    .flexy {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .flex2 {
        display: flex;
        flex-direction: row;
        align-items: center
    }

    .x {
        margin-left: 2px;
        cursor: pointer;
        opacity: .7;
        transition: all .2s linear;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px
    }

    .x:hover {
        opacity: 1;
        transition: all .3s linear;
        background-color: rgb(221, 46, 46)
    }

    .shadow {
        text-shadow: 3px 2px 5px rgba(150, 150, 150, .7);
    }

    .song {
        display: flex;
        flex-direction: column;
    }

    .album {
        box-shadow: 3px 2px 5px rgba(150, 150, 150, .7);
        margin: 5px;
    }

    audio {
        width: 100px;
        -webkit-text-fill-color: rgb(183, 199, 224)
    }

    .btn-primary {
        height: 32px;
        margin-bottom: 10px
    }

    .fa-times {
        height: 32px;
        margin-left: 0;
        margin-bottom: 15px;
    }

    .addSong {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-end;
        cursor: pointer;
        opacity: .7;
        transition: all .2s linear
    }

    .addSong:hover {
        opacity: 1;
        transition: all .3s linear
    }

    .footer {
        background-color: rgb(183, 199, 224);
        min-height: 80vh
    }
</style>