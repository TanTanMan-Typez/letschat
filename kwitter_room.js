const firebaseConfig = {
  apiKey: "AIzaSyAPicELs4YjKfyUZyYkE4kkfaGItahv394",
  authDomain: "practice-5c5ce.firebaseapp.com",
  projectId: "practice-5c5ce",
  storageBucket: "practice-5c5ce.appspot.com",
  messagingSenderId: "1007820820797",
  appId: "1:1007820820797:web:24539e83be05b406b5b554"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem(username);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database.ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_room.html";
}

function redirectToRoomName(name){
  localStorage.setItem('room_name', name);
  
  window.location = "kwitter_room.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  
  window.location = "kitter.html";
}