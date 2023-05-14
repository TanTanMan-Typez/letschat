//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAPicELs4YjKfyUZyYkE4kkfaGItahv394",
      authDomain: "practice-5c5ce.firebaseapp.com",
      projectId: "practice-5c5ce",
      storageBucket: "practice-5c5ce.appspot.com",
      messagingSenderId: "1007820820797",
      appId: "1:1007820820797:web:24539e83be05b406b5b554"
    };
    
firebase.initializeApp(firebaseConfig);



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      name = message.data('name');
      message = message_data('message');
      like = message_data('like');
      name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>"
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
      } });  }); }

getData();

function send()
{
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}

function updateLike(message_id)
{
      button_id = message_id;
      likes + document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update
      ({
            like : updated_likes
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}