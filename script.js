$("body").keypress(function (event) {
    $("kbd").get().forEach(elem => {
            if (elem.innerHTML === event.originalEvent.key.toUpperCase()) {
                let chemin = "sounds/" + $(elem).next().html() + ".wav";
                $(elem).addClass("playing")
                $("#sound").attr("src",chemin).get(0).play();
            }
        }
    )
})

$("body").keyup(function(){
    $("kbd").removeClass("playing")
})