//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyD7L-c5uZhSbtKaHZKieTgZ_EWXLuhA_DA",
    authDomain: "kwitter-project-class.firebaseapp.com",
    databaseURL: "https://kwitter-project-class-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-class",
    storageBucket: "kwitter-project-class.appspot.com",
    messagingSenderId: "205964313747",
    appId: "1:205964313747:web:cd06443289df4f670db966"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="welcome " +user_name;

   function addroom()
   {
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update(
               {
                  purpose:"adding room name"   
               }
         );
         localStorage.setItem("room_name", room_name);
         window.location="kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code

     console.log("room name-"+Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML +=row;

     //End code
     });});}
getData();

function redirectToRoomName(name)
{
     console.log(name); 
     localStorage.setItem("room_name",name);
     window.location="kwitter_page.html";
}
