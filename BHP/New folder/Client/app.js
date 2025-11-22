function getBathValue(){
    var uiBathrooms = document.getElementsByClassName("uiBathrooms");
    for(var i in uiBathrooms){
        if(uiBathrooms[i].checked){
            return parseInt(i)+1;
        }
    }
    return -1;
}

function getBHKVlaue(){
    var uiBHK = document.getElementsByClassName("uiBHK");
    for(var i in uiBHK){
        if(uiBHK[i].checked){
            return parseInt(i)+1;
        }
    }
    return -1;
}

function onClickedEstimatePrice(){
    console.log("Estimate price button Clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKVlaue();
    var bath = getBathValue();
    var location = document.getElementById("uiLocation");
    var estPrice = document.getElementById("uiEstimatedPrice");

    var url = "http://127.0.0.1:5000/predict_home_price";

    $.post(url,{
        total_sqft : parseFloat(sqft.value),
        bhk: bhk,
        bath: bath,
        location: location.value
    }, function(data, status){
        console.log(data.estimate_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString()+" Lakh</h2>";
        console.log(status)
    })
}


function onPageLoad(){

    console.log("document loaded");
    var url = "http://127.0.0.1:5000/get_location_names";
    $.get(url,function(data, status){
        console.log("got response for get_location_names request",data);
        if(data) {
            var locations = data.location;
            //var uiLocation = document.getElementById("uiLocation");
            $('#uiLocation').empty();
            var defaultOption = new Option("Chose a Location","");
            $("#uiLocation").append(defaultOption);

            for(var i=0; i<locations.length; i++){

                var opt = new Option(locations[i]);
                $('#uiLocation').append(opt);
            }
        }
    })

}

window.onload = onPageLoad;


