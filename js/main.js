$(document).ready(function(){

    $('img').click(function(){
    $.get("https://www.anapioficeandfire.com/api/houses/"+this.id+"", function(res){
            console.log(res);
            console.log(res.titles);
            console.log(res.name);
            console.log(res.words);

            $('#name').text("Name: "+res.name);
            $('#words').text("Words: "+res.words);
            $('#titles').text("Titles: "+res.titles);
    }, "json");

})
})
