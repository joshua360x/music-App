import Playlist from './playlist.js'

const PlayInfo = (_ => {

const state = {
  songLength: 0,
  isPlaying: false
}

// cache the DOM
const playerCountEl = document.querySelector(".player__count")
const playerTriggerEl = document.querySelector(".player__trigger")

const init = _ => {
  render();
  listeners();
}

const listeners = _ => {
  playerTriggerEl.addEventListener("click", _ => {
    //1. chnage our own state
    state.isPlaying = state.isPlaying ? false : true;
    //2. add render function because state has changed
    render()
    //3. toggle the play pause song functionality 
    Playlist.flip()
  })
}

const setState = obj => {
  state.songLength = obj.songLength;
  state.isPlaying = obj.isPlaying;
  render();
}

const render = _ => {
  playerCountEl.innerHTML = state.songLength;
  playerTriggerEl.innerHTML = state.isPlaying ? 'Pause' : 'Play';
}

return {
  init,
  setState 
}

})();

export default PlayInfo