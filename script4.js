$(document).ready(function() {
    // Fade-in effect for images
    $('.gallery img').fadeIn(1000);

    // mengklik gambar untuk menampilkan modal
    $('.gallery img').on('click', function() {
        $('#modalImage').attr('src', $(this).attr('src'));
        $('#myModal').fadeIn(300);
    });

    // menutup modal ketika mengklik di tombol tutup atau diluar gambar
    $('.close').on('click', function() {
        $('#myModal').fadeOut(300);
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#myModal')) {
            $('#myModal').fadeOut(300);
        }
    });
});