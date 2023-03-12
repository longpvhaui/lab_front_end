// const branchList = document.getElementById('branch-list');

// // Danh sách các chi nhánh
const branches = [
  {
    name: 'Chi nhánh A',
    address: '123 ABC, Quận XYZ, TP. HCM',
  },
  {
    name: 'Chi nhánh B',
    address: '456 DEF, Quận GHI, TP. Hà Nội',
  },
  {
    name: 'Chi nhánh C',
    address: '123 ABC, Quận XYZ, TP. HCM',
  },
  {
    name: 'Chi nhánh D',
    address: '456 DEF, Quận GHI, TP. Hà Nội',
  },
  {
    name: 'Chi nhánh E',
    address: '123 ABC, Quận XYZ, TP. HCM',
  },
  {
    name: 'Chi nhánh F',
    address: '456 DEF, Quận GHI, TP. Hà Nội',
  },
  // Danh sách các chi nhánh khác...
];

// // Hàm tạo phần tử danh sách chi nhánh
function createBranchElement(branch) {
  const li = document.createElement('li');

  const h3 = document.createElement('h3');
  h3.textContent = branch.name;
  li.appendChild(h3);

  const address = document.createElement('p');
  address.textContent = `Địa chỉ: ${branch.address}`;
  li.appendChild(address);



  return li;
}

const branchList = document.getElementById('branch-list');

// Tạo một mảng chứa số lượng chi nhánh cho từng kích thước màn hình
const numBranches = [1, 2, 4, 5];
// Hàm xử lý để hiển thị số lượng chi nhánh phù hợp với kích thước màn hình
function displayBranches() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1200) {
    // Hiển thị 5 chi nhánh với màn hình lớn hơn hoặc bằng 1200px
    removeExtraBranches(5);
  } else if (screenWidth >= 992 && screenWidth <= 1199) {
    // Hiển thị 4 chi nhánh với màn hình từ 992px đến 1199px
    removeExtraBranches(4);
  } else if (screenWidth >= 768 && screenWidth <= 991) {
    // Hiển thị 2 chi nhánh với màn hình từ 768px đến 991px
    removeExtraBranches(2);
  } else {
    // Hiển thị 1 chi nhánh với màn hình nhỏ hơn 768px
    removeExtraBranches(1);
  }
}

// Hàm xử lý để xóa các chi nhánh thừa dựa trên số lượng chi nhánh cho mỗi kích thước màn hình
function removeExtraBranches(numToShow) {
  // Lấy số lượng chi nhánh hiện tại trong danh sách
  let numBranchesShown = branchList.children.length;

  // Xóa các chi nhánh thừa nếu số lượng chi nhánh hiện tại lớn hơn số lượng chi nhánh cần hiển thị
  while (numBranchesShown > numToShow) {
    branchList.lastElementChild.remove();
    numBranchesShown--;
  }

  // Thêm các chi nhánh mới nếu số lượng chi nhánh hiện tại nhỏ hơn số lượng chi nhánh cần hiển thị
  while (numBranchesShown < numToShow) {
    const branch = document.createElement('li');
    branch.innerHTML = `
      <h3>Chi nhánh mới</h3>
      <p>Địa chỉ: Địa chỉ chi nhánh mới</p>
      <p>Số điện thoại: Số điện thoại chi nhánh mới</p>
    `;
    branchList.appendChild(branch);
    numBranchesShown++;

  }}


// Hiển thị số lượng chi nhánh phù hợp khi trang web được tải
displayBranches();

// Cập nhật lại số lượng chi nhánh khi kích thước màn hình thay đổi
window.addEventListener('resize', displayBranches);
