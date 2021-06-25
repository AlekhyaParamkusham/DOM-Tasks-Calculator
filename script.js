// OuterDiv
const outerDiv = document.createElement('div');
outerDiv.className = "outerDiv";
document.body.appendChild(outerDiv);

// OuterDiv row
const outerDiv_row = document.createElement('div');
outerDiv_row.classNameName = "outerRow";
outerDiv.appendChild(outerDiv_row);

// resultDiv and keysDiv
const resultDiv = document.createElement('div');
resultDiv.className = "resultDiv";
const keysDiv = document.createElement('div');
keysDiv.className = "keysDiv";
outerDiv_row.append(resultDiv, keysDiv);

// resultVal inpt of resultDiv
const resInpt = document.createElement('input');
resInpt.className = "resultVal";
resInpt.type = "text";
resInpt.setAttribute("readOnly", "");
resultDiv.appendChild(resInpt);

// keysDiv row
const keysDiv_row = document.createElement('div');
keysDiv_row.className = "row";
keysDiv.appendChild(keysDiv_row);

// 4 rows inside row of keysDiv
const rows1 = document.createElement('div');
rows1.className = "rows";
const rows2 = document.createElement('div');
rows2.className = "rows";
const rows3 = document.createElement('div');
rows3.className = "rows";
const rows4 = document.createElement('div');
rows4.className = "rows";
const rows5 = document.createElement('div');
rows5.className = "rowsEq";
keysDiv_row.append(rows1, rows2, rows3, rows4, rows5);

// container-fluid of rows1
const container1 = document.createElement('div');
container1.className = "container-fluid";
rows1.appendChild(container1);

//4 columns inside the container
const col11 = document.createElement('div');
col11.className = "col-lg-3";
const val1 = document.createElement('input');
val1.type = "button";
val1.value = "1";
val1.setAttribute("onclick", "resInpt.value += '1'")
col11.appendChild(val1);

const col12 = document.createElement('div');
col12.className = "col-lg-3";
const val2 = document.createElement('input');
val2.type = "button";
val2.value = "2";
val2.setAttribute("onclick", "resInpt.value += '2'")
col12.appendChild(val2);

const col13 = document.createElement('div');
col13.className = "col-lg-3";
const val3 = document.createElement('input');
val3.type = "button";
val3.value = "3";
val3.setAttribute("onclick", "resInpt.value += '3'")
col13.appendChild(val3);

const col14 = document.createElement('div');
col14.className = "col-lg-3";
const valPlus = document.createElement('input');
valPlus.type = "button";
valPlus.value = "+";
valPlus.setAttribute("onclick", "resInpt.value += '+'")
col14.appendChild(valPlus);

container1.append(col11, col12, col13, col14); //appending 4 columns to rows1


// container-fluid of rows2
const container2 = document.createElement('div');
container2.className = "container-fluid";
rows2.appendChild(container2);

//4 columns inside the container
const col21 = document.createElement('div');
col21.className = "col-lg-3";
const val4 = document.createElement('input');
val4.type = "button";
val4.value = "4";
val4.setAttribute("onclick", "resInpt.value += '4'")
col21.appendChild(val4);

const col22 = document.createElement('div');
col22.className = "col-lg-3";
const val5 = document.createElement('input');
val5.type = "button";
val5.value = "5";
val5.setAttribute("onclick", "resInpt.value += '5'")
col22.appendChild(val5);

const col23 = document.createElement('div');
col23.className = "col-lg-3";
const val6 = document.createElement('input');
val6.type = "button";
val6.value = "6";
val6.setAttribute("onclick", "resInpt.value += '6'")
col23.appendChild(val6);

const col24 = document.createElement('div');
col24.className = "col-lg-3";
const valMinus = document.createElement('input');
valMinus.type = "button";
valMinus.value = "-";
valMinus.setAttribute("onclick", "resInpt.value += '-'")
col24.appendChild(valMinus);

container2.append(col21, col22, col23, col24); //appending 4 columns to rows2

// container-fluid of rows3
const container3 = document.createElement('div');
container3.className = "container-fluid";
rows3.appendChild(container3);

//4 columns inside the container
const col31 = document.createElement('div');
col31.className = "col-lg-3";
const val7 = document.createElement('input');
val7.type = "button";
val7.value = "7";
val7.setAttribute("onclick", "resInpt.value += '7'")
col31.appendChild(val7);

const col32 = document.createElement('div');
col32.className = "col-lg-3";
const val8 = document.createElement('input');
val8.type = "button";
val8.value = "8";
val8.setAttribute("onclick", "resInpt.value += '8'")
col32.appendChild(val8);

const col33 = document.createElement('div');
col33.className = "col-lg-3";
const val9 = document.createElement('input');
val9.type = "button";
val9.value = "9";
val9.setAttribute("onclick", "resInpt.value += '9'")
col33.appendChild(val9);

const col34 = document.createElement('div');
col34.className = "col-lg-3";
const valMul = document.createElement('input');
valMul.type = "button";
valMul.value = "*";
valMul.setAttribute("onclick", "resInpt.value += '*'")
col34.appendChild(valMul);

container3.append(col31, col32, col33, col34); //appending 4 columns to rows3

// container-fluid of rows4
const container4 = document.createElement('div');
container4.className = "container-fluid";
rows4.appendChild(container4);

//4 columns inside the container
const col41 = document.createElement('div');
col41.className = "col-lg-3";
const valC = document.createElement('input');
valC.type = "button";
valC.value = "C";
valC.setAttribute("onclick", "resInpt.value = ''")
col41.appendChild(valC);

const col42 = document.createElement('div');
col42.className = "col-lg-3";
const val0 = document.createElement('input');
val0.type = "button";
val0.value = "0";
val0.setAttribute("onclick", "resInpt.value += '0'")
col42.appendChild(val0);

const col43 = document.createElement('div');
col43.className = "col-lg-3";
const valDot = document.createElement('input');
valDot.type = "button";
valDot.value = ".";
valDot.setAttribute("onclick", "resInpt.value += '.'")
col43.appendChild(valDot);

const col44 = document.createElement('div');
col44.className = "col-lg-3";
const valDiv = document.createElement('input');
valDiv.type = "button";
valDiv.value = "/";
valDiv.setAttribute("onclick", "resInpt.value += '/'")
col44.appendChild(valDiv);

container4.append(col41, col42, col43, col44); //appending 4 columns to rows4

// container-fluid of rows5
const container5 = document.createElement('div');
container5.className = "container-fluid";
rows5.appendChild(container5);

//2 columns inside the container
const col51 = document.createElement('div');
col51.className = "col-lg-6";
col51.setAttribute("style", "column-count:2");
const valDel = document.createElement('input');
valDel.type = "button";
valDel.className = "colDel";
valDel.value = "DEL";
valDel.setAttribute("onclick", "resInpt.value = resInpt.value.substr(0, (resInpt.value.length -1))");

col51.appendChild(valDel);

const col52 = document.createElement('div');
col52.className = "col-lg-6";
col52.setAttribute("style", "column-count:2");
const valEq = document.createElement('input');
valEq.type = "button";
valEq.className = "colEq";
valEq.value = "=";
valEq.setAttribute("onclick", "resInpt.value = eval(resInpt.value)")
col52.appendChild(valEq);

container5.append(col51, col52); //appending 2 columns to rows5
