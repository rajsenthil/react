import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {title: 'Aagaya Gangai', duration: '4:05'},
        {title: 'En Kanmani', duration: '5:05'},
        {title: 'Chinna chinna', duration: '4:35'},
        {title: 'Aayiram malargale', duration: '3:05'},
        {title: 'Ithu oru pon malai', duration: '5:24'},
        {title: 'Senthazhampoovil', duration: '4:46'},
        {title: 'Meenkodi theril', duration: '3:45'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
