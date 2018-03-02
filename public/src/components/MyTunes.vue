<template>
    <div class="mytunes row">
        <div class="col-sm-12">
            <h1>myTunes</h1>
        </div>
        <div v-for="myTune in myTunes" class="col-xs-6 col-sm-4 flexy">
            <div class="flex2">
                    <div>
                        <img :src="myTune.artworkUrl100" class="album">
                    </div>
                    <div class="song">
                        <h5>{{myTune.trackName}}</h5>
                        <h6>{{myTune.artistName}}</h6>
                        <p>{{myTune.collectionName}}</p>
                        <div class="flex2">
                            <i class="fas fa-headphones btn-primary btn" @click="myTune._id = true"></i>
                            <div v-if="myTune._id == true" class="preview d-flex align-items-start">
                                <audio controls>
                                    <source :src="myTune.previewUrl" type="audio/mpeg">
                                </audio>
                                <i class="fas fa-times-circle x" @click="myTune._id = false"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="addSong">
                    <i class="fas fa-minus-circle" @click="removeFromMyTunes(myTune)"></i>
                </div>
        </div>
        <div class="col-sm-12 footer"></div>
    </div>
</template>

<script>
    export default {
        name: 'My-Tunes',
        data() {
            return {

            }
        },
        methods: {
            removeFromMyTunes(track) {
                this.$store.dispatch('removeFromMyTunes', track)
            }
        },
        computed: {
            myTunes() {
                return this.$store.state.myTunes
            }
        }
    }

</script>

<style scoped>
   h1 {
        text-shadow: 3px 2px 1px rgba(150, 150, 150, 1);
        font-weight: 700
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
        flex-direction: row
    }

    .x {
        margin-left: 2px;
        cursor: pointer;
        opacity: .7;
        transition: all .2s linear
    }

    .x:hover {
        opacity: 1;
        transition: all .3s linear
    }

    .song {
        display: flex;
        flex-direction: column;
        text-shadow: 3px 2px 5px rgba(150, 150, 150, .7);
    }

    .album {
        box-shadow: 3px 2px 5px rgba(150, 150, 150, .7);
        margin: 5px;
    }

    audio {
        width: 200px;
        -webkit-text-fill-color: rgb(183, 199, 224)
    }

    .btn-primary {
        height: 32px
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