var firebaseConfig = {
      apiKey: "AIzaSyB8Hj7skLZ9mXRNcOo334kgQKxLeqWG7N4",
      authDomain: "project44-b35ab.firebaseapp.com",
      databaseURL: "https://project44-b35ab-default-rtdb.firebaseio.com",
      projectId: "project44-b35ab",
      storageBucket: "project44-b35ab.appspot.com",
      messagingSenderId: "547532058807",
      appId: "1:547532058807:web:24553be25d9caf4e6fdd32"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "!";
   
    function addroom() {
      room_name = document.getElementById("room_name").value;

     localStorage.setItem("Roomname",room_name);
 
     window.location = "kwitter_room.html";

     firebase.database().ref("/").child(room_name).update({
           purpose: "Adding Room Name"
     });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
