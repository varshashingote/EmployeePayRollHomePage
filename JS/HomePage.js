/* UC5- Display Employee Details from JSON Object */
/*window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
 });
 const createInnerHtml=() => {
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for( const empPayrollData of empPayrollList){
     innerHtml =`${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${empPayrollData._profilePic}">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img name="${empPayrollData._id}" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
 }
 const createEmployeePayrollJSON =() => {
    let empPayrollListLocal = [
        {
            _name: 'Narayan  Mahadevan',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assert/profile/Ellipse-1.png'
        },
        {
            _name: 'Varsha Gunja;',
            _gender: 'female',
            _department: [
                'Enginerring'
            ],
            _salary: '700000',
            _startDate: '21 Jan 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assert/profile/Ellipse-2.png'
        },
        {
            _name: 'Suraj Shingote',
            _gender: 'male',
            _department: [
                'developer'
            ],
            _salary: '600000',
            _startDate: '21 Feb 2022',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assert/profile/Ellipse-3.png'
        }
    ];
    return empPayrollListLocal;
 }
 const getDeptHtml=(deptList)=>
   {
     let deptHtml='';
     for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
     }
     return deptHtml;
   }-->

   /* UC6- Display Employee Details from Local Storage*/

let empPayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList = getEmployeePayrollDataStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
 });
 const getEmployeePayrollDataStorage =() => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
 }

 const createInnerHtml=() => {
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th>";
   if(empPayrollList.length == 0) return;
    let innerHtml=`${headerHtml}`;
    for( const empPayrollData of empPayrollList){
     innerHtml =`${innerHtml}
     <tr>
     <td><img class="profile" alt="" src="${empPayrollData._profilePic}">
     </td>
     <td>${empPayrollData._name}</td>
     <td>${empPayrollData._gender}</td>
     <td>${getDeptHtml(empPayrollData._department)}</td>
     <td>${empPayrollData._salary}</td>
     <td>${empPayrollData._startDate}</td>
     <td>
         <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assert/icon/delete-black-18dp.svg">
         <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="../assert/icons/create-black-18dp.svg">
     </td>
 </tr>
`;
}
document.querySelector('#table-display').innerHTML=innerHtml;
}
const getDeptHtml=(deptList)=>
{
  let deptHtml='';
  for(const dept of deptList){
     deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
  }
  return deptHtml;
}
