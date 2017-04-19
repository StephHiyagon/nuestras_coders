window.addEventListener('load',function(){
  var body=document.getElementsByTagName('body')[0];
  var section1=document.createElement('section');
  section1.setAttribute('id','principal');
  var title=document.createElement("h3");
  var text=document.createTextNode("Nuestras coders");
  var divNegro=document.createElement("div");
  divNegro.setAttribute('id','negro');
  var textNegro=document.createTextNode("-");
  var coders=[
    {nombre: "Fiorella Quispe"},
    {nombre:"Lourdes Vilchez"},
    {nombre:"Rossmery Maldonado"},
    {nombre:"Yessenia Huaman"},
    {nombre:"Miriam Mendoza"},
    {nombre:"Elizabeth Condori"},
  ];
  var tamano=coders.length;
  console.log(tamano);
  var section2=document.createElement('section');
  section2.setAttribute('class','fotos');
  var fragment=document.createDocumentFragment();
  for(var i=0; i< tamano;i++){
    var divFoto=document.createElement('div');
    divFoto.setAttribute('class','coder');
    var img=document.createElement('img');
    img.src="images/" + coders[i].nombre + ".png";
    console.log(img.src);
    img.alt= coders[i].nombre;
    var span=document.createElement('span');
    span.innerHTML=coders[i].nombre;

    divFoto.appendChild(img);
    divFoto.appendChild(span);
    fragment.appendChild(divFoto);
    section2.appendChild(fragment);
  }

  divNegro.appendChild(textNegro);
  title.appendChild(text);
  section1.appendChild(title);
  section1.appendChild(divNegro);
  section1.appendChild(section2);
  body.appendChild(section1);
})

// function grid(){
//   var coders=[
//     {nombre: "Fiorella Quispe"},
//     {nombre:"Lourdes Vilchez"},
//     {nombre:"Rossmery Maldonado"},
//     {nombre:"Yessenia Huaman"},
//     {nombre:"Miriam Mendoza"},
//     {nombre:"Elizabeth Condori"},
//   ];
//   var tamano=coders.length;
//   console.log(tamano);
//   var section2=document.createElement('section');
//   section2.setAttribute('class','fotos');
//   for(var i=0; i< tamano;i++){
//     var divFoto=document.createElement('div');
//     divFoto.setAttribute('class','coder');
//     var img=document.createElement('img');
//     img.src="images/" + coders[i].nombre + ".png";
//     console.log(img.src);
//     img.alt= coders[i].nombre;
//     var span=document.createElement('span');
//     span.innerHTML=coders[i].nombre;
//
//     divFoto.appendChild(img);
//     divFoto.appendChild(span);
//     section2.appendChild(divFoto);
//   }
//     section1.appendChild(section2);
// }
