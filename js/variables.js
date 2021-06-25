

var mensaje ="Usted se esta contactando con CREDIVI, Marqueting Digital";

//redes
var facebook = "https://www.facebook.com/credivi/"
var instagram = "https://www.instagram.com/credivi/"
var youtube = "https://www.instagram.com/credivi/"
var whatsapp = "https://api.whatsapp.com/send?phone=5491123273372&text=";
var mailto = "mailto:credivi.marketing@gmail.com"


//Fomulario
var action = "https://docs.google.com/forms/d/e/1FAIpQLSesR4Hshf_ZVGerE1tbbI5tZomHX79IvsJ8B1tfwTjIsXjqeg/formResponse";
var name = "entry.1094151350";
var emailAddress = "emailAddress";
var message = "entry.46917182";



/***********  PLANES  **************/
//plan 1
let titulop1 ="INICIAL";
let preciop1 ="$2.000";
let diasp1 ="SEMANAL";
let item1p1 ="Idea Creativa";
let item2p1 ="Administración de Perfiles de 2 cuentas";
let item3p1 ="2 posts por cuenta";
let item4p1 ="Historias diseñadas";
let item5p1 ="Campaña Email Marketing";
let btn_p1 = whatsapp+"Ud se está contactando con Credivi para solicitar el Plan de Marketing INICIAL";

//plan 2
let titulop2 ="STANDAR";
let preciop2 ="$5.000";
let diasp2 ="MENSUAL";
let item1p2 ="Agenda y estrategia mensual";
let item2p2 ="Administración de Perfiles de 3 cuentas";
let item3p2 ="8 posts mensuales por cuenta";
let item4p2 ="8 Historias diseñadas";
let item5p2 ="Campaña Email Marketing";
let btn_p2 = whatsapp+"Ud se está contactando con Credivi para solicitar el Plan de Marketing STANDAR";

//plan 3
let titulop3 ="FULL";
let preciop3 ="$10.000";
let diasp3 ="MENSUAL";
let item1p3 ="Agenda y estrategia mensual";
let item2p3 ="Administración de Perfiles de 4 cuentas";
let item3p3 ="12 posts mensuales por cuenta";
let item4p3 ="12 Historias diseñadas";
let item5p3 ="Creación de 2 campaña Facebook Ads (*) El monto a invertir no esta expresado en la tarifa";
let btn_p3 = whatsapp+"Ud se está contactando con Credivi para solicitar el Plan de Marketing FULL";


/***********  SERVICIOS  **************/
//SERVICIO 1
let titulos1 ="";
let par_s1 = "";


/******************************************/
/***********  IMPLEMNTACION  **************/
/******************************************/

//redes
$(document).ready(function() {
  $("#titulo_s").text(titulo_s);
   $(".facebook").attr("href", facebook);
   $(".instagram").attr("href", instagram);
   $(".youtube").attr("href", youtube);
   $(".whatsapp").attr("href", whatsapp+mensaje);
   $(".mailto").attr("href", mailto)
});

//Fomulario
$(document).ready(function() {
   $("#form").attr("action",action);
   $("#name").attr("name",name);
   $("#emailAddress").attr("name",emailAddress);
   $("#message").attr("name",message);
});


/***********  PLANES  **************/
//plan 1
$(document).ready(function() {
   $("#titulop1").text(titulop1);
   $("#preciop1").text(preciop1);
   $("#diasp1").text(diasp1);
   $("#item1p1").text(item1p1);
   $("#item2p1").text(item2p1);
   $("#item3p1").text(item3p1);
   $("#item4p1").text(item4p1);
   $("#item5p1").text(item5p1);
   $("#btn_p1").attr('href', btn_p1);
});

//plan 2
$(document).ready(function() {
   $("#titulop2").text(titulop2);
   $("#preciop2").text(preciop2);
   $("#diasp2").text(diasp2);
   $("#item1p2").text(item1p2);
   $("#item2p2").text(item2p2);
   $("#item3p2").text(item3p2);
   $("#item4p2").text(item4p2);
   $("#item5p2").text(item5p2);
   $("#btn_p2").attr('href', btn_p2);
});

//plan 3
$(document).ready(function() {
   $("#titulop3").text(titulop3);
   $("#preciop3").text(preciop3);
   $("#diasp3").text(diasp3);
   $("#item1p3").text(item1p3);
   $("#item2p3").text(item2p3);
   $("#item3p3").text(item3p3);
   $("#item4p3").text(item4p3);
   $("#item5p3").text(item5p3);
   $("#btn_p3").attr('href', btn_p3);
});


/***********  PLANES  **************/

//servicio 1
$(document).ready(function() {
   $("#titulos1").text(titulos1);
   $("#par_s1").text(par_s1);
   
});
