//Tạo đối tượng service tương tác backend
var svService = new SinhVienService();

var renderSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();

  promise
    .then(function (res) {
      console.log(res.data);
      //Tạo <tr> table ...
      //Tạo nội dung các thẻ tr
      var contentTable = "";
      for (var index = 0; index < res.data.length; index++) {
        //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên
        var sinhVien = res.data[index];
        //Từ đối tượng sinh viên tạo ra thẻ tr
        contentTable += `
                <tr>
                    <td>${sinhVien.MaSV}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            `;
      }
      //In ra giao diện
      document.getElementById("tblSinhVien").innerHTML = contentTable;
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
};

renderSinhVien();

renderSinhVien();


var themSinhVien = function () {
    console.log('Thêm sinh viên!');
}

//user B
var xoaSinhVien = function (idSinhVien) {
    console.log('Xóa sinh viên '+ idSinhVien);
}

//user A
var capNhatSinhVien = function (id,sinhVienUpdate){
    console.log('Cập nhật sinh viên '+ id);

}
var xoaSinhVien = function (id) {
  console.log("xoa SV" + id);
};
