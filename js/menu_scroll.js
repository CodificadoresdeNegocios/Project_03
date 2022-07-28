$(function(){
    // alert("loaded");
    // declaring the link variable | declarando a variavel link
    var link = $('nav > ul > li > a'); // link has its value defined as tag a | link tem seu valor definido como tag a
    
    // declaring the click link function | declarando a função clicar no link
    link.click(function(){
        // declaring the href variable | declarando a variavel href
        var href = $(this).attr('href'); // href has its value set to this href attribute | href tem seu valor definido como este atributo href
        // declaring the offSetTop variable | declarando a variavel desativada
        var offSetTop = $(href).offSet().top; // offSetTop has its value set to this href attribute | href tem seu valor definido como topo desativado da variavel href
        // declaring the body variable | declarando a variavel corpo
        var body = $('html,body'); // body has its value defined as tags html and body | body tem seu valor definido como tags html e body
        // animating the body variable | // animar a variável do corpo
        body.animate({'scrollTop':offSetTop}) // scroll top : offSetTop | Rolar para cima : topo negativo

        return false;

    });

});