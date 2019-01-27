if (document.getElementById("index")){
    /* */
}




// table for images and description taken from https://repl.it/@htovey/createElementTable, modified deatils and addapted for project goal.

    var images = ["img/mavecure.jpg", "img/providenceair.jpg", "img/mongoliahawk.jpg", "img/botswana-family-holiday.jpg"];
    var descriptions = ['Three hours from Puerto Inírida on the border with Venezuela and Brazil. Three huge rocks 250 meters high called Mavecure, Mono and Pajarito serve as an impressive viewpoint to the jungles of Guainía. From these rocks you can see vast tracts of jungle inhabited by indigenous peoples.',
    'If you are searching for an amazing Scuba Diving experience, then Providencia Island is perfect for you. You will enjoy 3 days to immerse in this subaquatic world and gain experience in the sport',
    ' A trip to Mongolia represents the ultimate adventure and a chance to experience true wilderness. ',
    'Botswana celebrates 50 years of independence in 2016 and there’s a lot for it to shout about, not least the way it has balanced economic growth with protecting its natural riches. Prepare for a severe case of slack-jawed-with-awe syndrome when you visit.'
    ];
    var websites = ["http://jaguarunditravel.com/tours/mavecure-hills/",
    "https://awake.travel/en/providencia-island/experiences/2028-advanced-scuba-diving-course",
    "https://www.responsibletravel.com/holidays/mongolia/travel-guide",
    "https://www.youtube.com/watch?v=HGG-eRgEB_0"]


    var table = document.createElement('table');
    var tr = document.createElement('tr');

    var th1 = document.createElement('th');
    var imageHeader = document.createTextNode('Some experiences with us.');
    th1.appendChild(imageHeader);
    tr.appendChild(th1);

    var th2 = document.createElement('th');
    var descriptionHeader = document.createTextNode('Descriptions');
    th2.appendChild(descriptionHeader);
    tr.appendChild(th2);


    table.appendChild(tr);



    for (let i = 0; i < images.length; i++) {
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var image = document.createElement('img');
        image.src = images[i];
        image.className = "img"

        td1.appendChild(image);
        td1.addEventListener("click", function(event) {
            var win = window.open(websites[i]); //open window when click on image, is attached to corresponding link in the array created.
            setTimeout(function () { win.close();}, 2000); //timer for closing window.
        });
        tr.appendChild(td1);
        
        var td2 = document.createElement('td');
        var paragraph = document.createElement('p');
        var paragraphText = document.createTextNode(descriptions[i]);
        paragraph.appendChild(paragraphText);
        td2.appendChild(paragraph);
        tr.appendChild(td2);

        
        table.appendChild(tr);
    }
document.body.appendChild(table);



//error messages variables for register.html table
var submitButton = document.getElementsByClassName('submitBtn')[0];
var errorName = document.getElementsByClassName('errorName')[0];
var errorEmail = document.getElementsByClassName('errorEmail')[0];
var errorAddress = document.getElementsByClassName('errorAddress')[0];
var errorCity = document.getElementsByClassName('errorCity')[0];
var errorPostcode = document.getElementsByClassName('errorPostcode')[0];

//validation in register.html form page
submitButton.addEventListener("click",function(event){
    errorName.style.display = "none";
    errorEmail.style.display = "none";
    errorAddress.style.display = "none";
    errorCity.style.display = "none";
    errorPostcode.style.display = "none";

        var name = document.myForm.customername.value;
        if (!name) {
            event.preventDefault();
            errorName.style.display = "block";
        }

        var custmail = document.myForm.customermail.value;
        if (!custmail) {
            event.preventDefault();
            errorEmail.style.display = "block";
        } 
    
        var custaddress = document.myForm.customeraddress.value;
        if (!custaddress) {
            event.preventDefault();
            errorAddress.style.display = "block";
        } 
    
        var custcity = document.myForm.customercity.value;
        if (!custcity) {
            event.preventDefault();
            errorCity.style.display = "block";
        }
        //regular expression for Canadian postal code.
        var custpost = document.myForm.customerpostcode.value;
        var regex = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;
        if (!regex) {
            event.preventDefault();
            errorPostcode.style.display = "block";
        }  
    
})

//input onfocus color
function inputOnfocus(x){
    x.style.background = "#ccffcc";
}

