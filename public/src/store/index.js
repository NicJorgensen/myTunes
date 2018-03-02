import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'
import axios from 'axios'

var api = axios.create({
  baseURL: '//localhost:3000/mytunes/',
})

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, results) {
      state.results = results
    },
    setMyTunes(state, results) {
      state.myTunes = results
    },
    addMyTunes(state, results) {
      state.myTunes.push(results)
    },
    setNewMyTunes(state, results) {

    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {
        data = JSON.parse(data)
        commit('setResults', data.results)
      })
    },
    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      api.get("playlist")
        .then(result => {
          console.log(result)
          commit("setMyTunes", result.data)
        })
        .catch(err => { console.log(err) })
    },
    addToMyTunes({ commit, dispatch }, track) {
      //this will post to your server adding a new track to your tunes
      api.post("playlist", track)
      .then(result => {
        commit("addMyTunes", track)
      })
      .catch(err => { console.log(err) })
    },
    removeFromMyTunes({ commit, dispatch }, track) {
      //Removes track from the database with delete
      api.delete('playlist/songs/' + track._id)
      .then(result => {
        dispatch("getMyTunes")
      })
    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
