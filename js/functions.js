window.onload = function(){
    // alert("Hello World!");

//  variavel nome-variavel
    var map;
//  funcao nome-funcao(){
    function initialize(){
//      Estamos criando uma váriavel 
//      variavel nome-variavel = {
        var mapProp = {
//          centro: novo objeto chamar funcao chamar latitude e longitude( valor latitude, valor longitude), pra ir pra proxima propriedade
            center: new google.maps.LatLng(-29.9339729,-51.0759209),
//          botao de rolagem: falso (não deslizar pelo mapa através do botao de rolagem), pra ir pra proxima propriedade            
            scrollWheel:false,
//          zoom do mapa: 12, pra ir pra proxima propriedade            
            zoom:16,
            mapTypeId: 'satellite'  
        }
//      nome-variavel = novo nome-obejeto chamar funcao chamar obejeto(documento chamar elemento pelo ID "id colocado no codigo html", propriedades da variavel )
        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,content){
        var latLng = {'lat':lat,'long':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon,
        });

        var infoWindow = new google.maps.InfoWindow ({
            // Dentro de objeto utilizamos o (,) para sinalizar o fim da linha de código
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20),
        });

        google.maps.event.addListener(marker,'click',function(){
            // nome-objeto.nome-funcao
            infoWindow.open(map.marker)
        })


        
    }

    var conteudo = '<p style=""color:Black;font-size: 13px;padding: 10px 0;">Studio ALmir</p>';

    initialize();
    addMarker(-29.9339729,-51.0759209,'','Studio Almir');
    
//  nome-função = setTimeout → Executa o comando que está dentro da função no tempo determinado
    setTimeout(function(){
//  nome-variavel.objeto({'nome 1º parametro':valor 1º parametro,'nome 2º parametro':valor 2º parametro})
        map.panTo({'lat':-29.9339729,'lng':-51.0759209});   
        map.setZoom(18);
// },tempo-execução);
    });
    


}