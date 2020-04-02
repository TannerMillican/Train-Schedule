$(document).ready(function () {

    var firebaseConfig = {
        apiKey: "AIzaSyDt3erpzjSmNWZWUiDGpELnepVafyI4dNE",
        authDomain: "week-7-homework-29b2b.firebaseapp.com",
        databaseURL: "https://week-7-homework-29b2b.firebaseio.com",
        projectId: "week-7-homework-29b2b",
        storageBucket: "week-7-homework-29b2b.appspot.com",
        messagingSenderId: "676317783343",
        appId: "1:676317783343:web:5fdfd085e2580cb36dadda"
    };

    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    var trainInfoRef = database.ref('posts/' + postId + '/starCount');
    trainInfoRef.on('value', function (snapshot) {
        // updateStarCount(postElement, snapshot.val());
    });

    var names = {
        london: "London Express",
        tokyo: "Tokyo Drift",
        newYork: "NYC Rail",
        boston: "Boston Bruiser",
        philly: "Philly Railway",
        paris: "Paris International Railway"
    };

    var destinations = {
        london: "London",
        tokyo: "Tokyo",
        newYork: "New York City",
        boston: "Boston",
        philly: "Philadelphia",
        paris: "Paris"
    };

    var frequencies = {
        london: "30",
        tokyo: "45",
        newYork: "10",
        boston: "15",
        philly: "15",
        paris: "20"
    };

    $(".load-btn").on("click", function () {

        database.ref().set({
            trainOne: {
                name: names.london,
                destination: destinations.london,
                frequency: frequencies.london,
            },
            trainTwo: {
                name: names.tokyo,
                destination: destinations.tokyo,
                frequency: frequencies.tokyo,
            },
            trainThree: {
                name: names.newYork,
                destination: destinations.newYork,
                frequency: frequencies.newYork,
            },
            trainFour: {
                name: names.boston,
                destination: destinations.boston,
                frequency: frequencies.boston,
            },
            trainFive: {
                name: names.philly,
                destination: names.philly,
                frequency: frequencies.philly,
            },
            trainSix: {
                name: names.paris,
                destination: destinations.paris,
                frequency: frequencies.paris,
            }
        })

        console.log(database)
    })

})

//Psuedo-code explaining what remains to be done
/* 1). After writing to the database, the app needs to read the data stored in firebase and dynamically create
    a table holding the data from firebase.

    2). The table also needs a data for how often the train comes, as well as how long it is until the next train arives.

    3). Then, there needs to be a form that the user can fill out to add a train of their own that when submitted,
    writes to the database as well as displays the info into the table holding the other trains' data
*/