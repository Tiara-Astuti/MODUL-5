$(document).ready(function(){
    //1. dasar selektor
    $('#header').css('text-align','center');//mengubah align text pada header
    $('li').css('margin','5px');//memberi margin pada semua <li>
    
    //2. Selektor atribut
    $('img[alt="Alumni Photo 1"]').css('border', '2px solid red');//mengubah border pada gambar dengan alt="Alumni Photo 1"

    //3. Selektor hirarki
    $('li:even').css('font-size','18px');//mengubah font-size pada semua <li> di dalam #alumniList

    //4. Selektor Filter
    $('li:even').css('color','blue');//mengubah warna teks pada elemen <li> genap
    $('.featured').addClass('highlight');//Menambahkan class highlight pada elemen dengan class featured

    //Event Handing untuk Galeri Foto
    $('.gallery img').on('click', function(){
        var src = $(this).attr('src');
        $('#modalImage').attr('src', src);
        $('#myModal').fadeIn();
    });

    $('.modal-close').on('click', function (){
      $('#myModal').fadeOut();
    });

    $(window).on('click', function (event){
      if($(event.target).is('#myModal')){
        $('#myModal').fadeOut();
      }  
    });
});