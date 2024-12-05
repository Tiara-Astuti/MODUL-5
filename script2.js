$(document).ready(function(){
    //menambahkan baris baru ke tabel
    $('#addRow').click(function(){
        const newRow = <tr>
        <td>No</td>
        <td>Nama</td>
        <td>email@baru.com</td>
        <td><button class="edit">Edit</button> <button class="delete">Hapus</button></td>
        </tr>
    $('#alumniTable tbody').append(newROW);
    });

    //mengedit baris yang ada
    $('alumniTable').on('click','.edit',function (){
        const row = $(this).closest('tr');
        const no = row.find('td').eq(0).text();
        const name = row.find('td').eq(1).text();
        const email = row.find('td').eq(2).text();

    //tampilkan prompt untuk mengedit
    const newNomor = Prompt('Edit Nomor :', no);
    const newName = Prompt('Edit Name :', name);
    const newEmail = Prompt('Edit Email :', Email);

    if(newNomor !== null && newName !== null&& newEmail !== null){
        row.find('td').eq(0).text(newNomor);
        row.find('td').eq(1).text(newNama);
        row.find('td').eq(2).text(newEmail);
    }
    });

    //menghapus baris dari tabel
    $('#alumniTable').on('click', '.delete', function(){
        if(confirmn('Apakah Anda Yakin Ingin menghapus baris ini?')){
            $(this).closest('tr').remove();
        }
    });
});