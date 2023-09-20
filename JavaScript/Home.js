




// // These variables are used to keep track of the number of rows to
// //  display per page (rowsPerPage), the current page number (currentPage),
// //   and the total number of rows added (rowCounter
// var rowsPerPage = 5;
// var currentPage = 1;
// var rowCounter = 1;
// //
// function AddNewRow() {
//     if (rowCounter > currentPage * rowsPerPage ) {
//         currentPage++;
//         UpdateTableDisplay();
//     }

//     if (rowCounter <= currentPage * rowsPerPage) {
//         var table = document.getElementById("dynamicTable");

//         var newRow = table.insertRow();
//         newRow.id = "row" + rowCounter;

//         var idCell = newRow.insertCell(0);
//         idCell.innerHTML = rowCounter;

//         var nameCell = newRow.insertCell(1);
//         var nameInput = document.createElement("input");
//         nameInput.type = "text";
//         nameInput.value = "Name" + rowCounter;
//         nameInput.className = "editableName";
//         nameCell.appendChild(nameInput);

//         var editCell = newRow.insertCell(2);
//         var editButton = document.createElement("button");
//         editButton.innerHTML = "Edit";
//         editButton.addEventListener("click", function () {
//             EditRow(rowCounter);
//         });
//         editCell.appendChild(editButton);

//         var deleteCell = newRow.insertCell(3);
//         var deleteButton = document.createElement("button");
//         deleteButton.innerHTML = "Delete";
//         deleteButton.addEventListener("click", function () {
//             DeleteRow(rowCounter);
//         });
//         deleteCell.appendChild(deleteButton);

//         rowCounter++;
//         UpdatePaginationButtons();
//     }
// }

// function EditRow(rowNumber) {
//     // ... (previous EditRow code)

//     UpdatePaginationButtons();
// }

// function DeleteRow(rowNumber) {
//         if (rowCounter > 0) {
//             rowCounter--;
//             var lastRow = document.getElementById("row" + rowCounter);
//             lastRow.remove();
//         }
    
//     UpdatePaginationButtons();
// }

// function ChangePage(pageChange) {
//     currentPage += pageChange;
//     UpdateTableDisplay();
//     UpdatePaginationButtons();
// }

// function UpdateTableDisplay() {
//     var table = document.getElementById("dynamicTable");
//     var rows = table.rows;
//     for (var i = 1; i < rows.length; i++) {
//         rows[i].style.display = "none";
//     }
//     var startIndex = (currentPage - 1) * rowsPerPage + 1;
//     var endIndex = Math.min(startIndex + rowsPerPage - 1, rowCounter);
//     for (var i = startIndex; i <= endIndex; i++) {
//         document.getElementById("row" + i).style.display = "";
//     }
// }

// function UpdatePaginationButtons() {
//     var prevButton = document.getElementById("prevPage");
//     var nextButton = document.getElementById("nextPage");
//     var pageNumbers = document.getElementById("pageNumbers");
    
//     prevButton.disabled = (currentPage === 1);
//     nextButton.disabled = (currentPage * rowsPerPage >= rowCounter);

//     pageNumbers.innerHTML = "";
//     var totalPages = Math.ceil(rowCounter / rowsPerPage);
//     for (var i = 1; i <= totalPages; i++) {
//         var pageNumberButton = document.createElement("button");
//         pageNumberButton.innerHTML = i;
//         pageNumberButton.addEventListener("click", function () {
//             GoToPage(parseInt(this.innerHTML));
//         });
//         pageNumbers.appendChild(pageNumberButton);
//     }
// }

// function GoToPage(pageNumber) {
//     currentPage = pageNumber;
//     UpdateTableDisplay();
//     UpdatePaginationButtons();
// }

// // Initial display update
// UpdateTableDisplay();
// UpdatePaginationButtons();