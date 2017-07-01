var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    depts: []
};

var nextHobbyId = 1;
var adddept = 1;

var mapReducer = (state = { isFetching: false, url: undefined }, action)=>{
    debugger;
 switch(action.type){
     
        case 'START_LOCATION_FETCH':
          return {
                 isFetching: true,
                 url: undefined
            }
        case 'COMPLETE_LOCATION_FETCH':
            return{            
                   isFetching: false,
                   url: action.url
              }
        default:
          return state;
    }
};

var nameReducer = (state = {name: 'Ananymous'}, action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
          return{
              ...state,
              name: action.name
          };
          default:
            return state;
        }
};

var changeName = (name) =>{
return{
type: 'CHANGE_NAME', name }
};

var addHobby = (hobby) =>{
return{
type: 'ADD_HOBBY', hobby }
};

var removeHobby = (id) =>{
return{
type: 'REMOVE_HOBBY', id }
};

var startLocationFetch = () =>{
    return {
    type: 'START_LOCATION_FETCH'
    };
};

var completeLocationFetch = (url) =>{
    return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
    };
};

var hobbiesReducer = (state = {hobbies: []}, action)=>{
    switch(action.type){
        case 'ADD_HOBBY':
          return[
              ...state,
              {
                   id: nextHobbyId++,
                   hobby: action.hobby
              }
             ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id);
          default:
            return state;
    }
}

var deptsReducer = (state = {depts: []}, action)=>{
    switch(action.type){
       case 'ADD_DEPT':
          return{
              ...state,
              depts:[
                  ...state.depts,
                  {
                   id: adddept++,
                   dept: action.dept
                  }
              ]
          };
          default:
            return state;
    }
}

var fetchLocation = ()=>{
 store.dispatch(startLocationFetch());

 axios.get('http://ipinfo.io').then(function(res){
     var loc = res.data.loc;
     var baseUrl = 'https://maps.google.co.in?q='
     console.log(res);
     store.dispatch(completeLocationFetch(baseUrl + loc));
 });
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    depts: deptsReducer,
    map: mapReducer
});

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f=> f
));

var us = store.subscribe(()=>{
    var state = store.getState();
    //console.log('States', state);
    //console.log('Hobby is ', state.hobbies);
    //console.log('Dept is ', state.depts);

    if(state.map.isFetching)
     {
         document.getElementById('app').innerHTML = 'Loading...';
     }
     else if(state.map.url)
     {
         document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your Location</a>';
     }
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type:'CHANGE_NAME',
    name: 'Suryateja' 
});
store.dispatch(changeName('Gopal'));
//us();
console.log('state changed to', store.getState());

store.dispatch({
    type:'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch(addHobby('Reading'));
store.dispatch(addHobby('Playing'));

//console.log('state changed to', store.getState());

// store.dispatch({
//     type:'ADD_HOBBY',
//     hobby: 'Watching'
// });
//console.log('state changed to', store.getState());

store.dispatch({
    type:'ADD_DEPT',
    dept: 'developement'
});
//console.log('state changed to', store.getState());

store.dispatch({
    type:'ADD_DEPT',
    dept: 'testing'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 1
});

store.dispatch(removeHobby(2));
//console.log('state changed to', store.getState());

fetchLocation();