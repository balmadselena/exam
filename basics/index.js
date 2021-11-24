// 1. 0 - ээс 100 хүртэлх тоог хэвлэ.
// -- Энд кодоо бичнэ үү!!
for (let i = 0; i < 101; i++) {
    console.log(i);
}



// 2. 60 - с 30 хүртэлх бүх СОНДГОЙ тоог хэвлэ.
// -- Энд кодоо бичнэ үү!!
for (let i = 60; i <= 30; i--) {
    if (i % 2 === 1) {
        console.log(i);
    }
}


// 3. Чагтаас бүрдсэн квадрат зурах ба баруун тийшээ налсан диагональ нь нэмэх тэмдэг байна:
// ######+
// #####+#
// ####+##
// ###+###
// ##+####
// #+#####
// +######
// -- Энд кодоо бичнэ үү!!
function third() {
    let string = "#".repeat(7)
    for (var i = 6; i >= 0; i--) {
        console.log(string.substring(0, i) + '+' + string.substring(i + 1));
    }
}

// 4. Регистрийн дугаар өгөхөд төрсөн он, сар, өдөр (YYYY-MM-DD) хүйсийг хэвлэдэг convertRegNum функц бич.
//      РД - гийн сүүлийн орон сондгой бол эрэгтэй, тэгш бол эмэгтэй байна.
// Жишээ нь:
//      convertRegNum('АБ90020321')
//      >> 1990-02-03 онд төрсөн эрэгтэй
// -- Энд кодоо бичнэ үү!!
function convertRegNum(reg) {
    let string = ''

    string += `19${reg.substring(2, 4)}-${reg.substring(4, 6)}-${reg.substring(6, 8)} онд төрсөн `

    if (reg.substring(8, 10) % 2 == 1) {
        string += 'эрэгтэй'
    }
    else {
        string += 'эмэгтэй'
    }
    console.log(string);
}

// 5. Бүх .red-boxes гэсэн класстай элемэнтийг улаан болго;
// -- Энд кодоо бичнэ үү!!
let redBoxes = document.getElementsByClassName('red-boxes')

for (let i = 0; i < redBoxes.length; i++) {
    redBoxes[i].style.backgroundColor = 'red'
}

// 6. blue-box гэсэн ID-тай элемэнтийг цэнхэр болго;
// -- Энд кодоо бичнэ үү!!
let blueBoxes = document.getElementById('blue-box box')
blueBoxes.style.backgroundColor = 'blue'




// 7. Бүх div - ийг бор болго;
// -- Энд кодоо бичнэ үү!!
let boxes = document.getElementsByTagName('div')

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = '#795548'

    // 8. Шинээр box гэсэн класстай section tag үүсгээд, хар өнгөтэй болгоно.
    //    Дотор нь box гэсэн класстай article tag үүсгэнэ.
    //    article tag - ыг улаан өнгөтэй бөөрөнхий болгоно (JS - ээр)
    //    section tag - ыг body руу append хийнэ.
    //    улаан бөөрөнхий дээр дарахад бөөрөнхийг ногоон болгоно.
    // -- Энд кодоо бичнэ үү!!
    let section = document.createElement("section")
    section.classList.add('box')
    section.style.backgroundColor = 'black'

    let article = document.createElement('article')
    article.classList.add('box')
    article.style.cssText = 'background-color: red; border-radius: 50%'
    article.onclick = function () {
        let tmp = document.getElementsByTagName('article')
        tmp[0].style.cssText = 'background-color: green; border-radius: 50%'
    }

    section.appendChild(article)

    document.body.appendChild(section)