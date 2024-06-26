jQuery(document).ready(function(){
    
    //Slider
    if(window.location.href.indexOf('index') > -1){
        jQuery('.bxslider').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1000,
            pager: false
        });
        
        //Post
        var posts =[
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date()  + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, odio nec vehicula bibendum, libero libero scelerisque libero, non fermentum libero libero ac libero'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date()  + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, odio nec vehicula bibendum, libero libero scelerisque libero, non fermentum libero libero ac libero'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date()  + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, odio nec vehicula bibendum, libero libero scelerisque libero, non fermentum libero libero ac libero'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date()  + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, odio nec vehicula bibendum, libero libero scelerisque libero, non fermentum libero libero ac libero'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date()  + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, odio nec vehicula bibendum, libero libero scelerisque libero, non fermentum libero libero ac libero'
            },
            {
                title: 'Prueba de titulo 6',
                date: 'Publicado el dia ' + moment().date()  + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, odio nec vehicula bibendum, libero libero scelerisque libero, non fermentum libero libero ac libero'
            },
            
        ];


        posts.forEach((item,index)=>{
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer mas</a>
            </article>
            `;

            $("#posts").append(post);

        });
    }
    //Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    //scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 10
        },1000);
        return false;
    });
    ///Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name",form_name);
    });

    var form_name = localStorage.getItem("form_name");
    
    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'><br>Cerrar sesion</a>");
        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    if(window.location.href.indexOf('about') > -1){
        //Acordeon
        $("#acordeon").accordion();
    }
    if(window.location.href.indexOf('reloj') > -1){
        //Reloj
        setInterval(function(){
            var reloj = moment().format('h:mm:ss');
            $("#reloj").html(reloj);
        },1000);
    
    }

    //Validacion
    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',

        });
    }


});