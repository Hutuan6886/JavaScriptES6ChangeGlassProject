

import { GlassObject } from "./GlassObject.js";
import { GlassList } from "./GlassList.js";
//todo: create the variable to represent for GlassList
let glassList = new GlassList();


//! Step by step
// 1 step: displaying the list glass
// - GlassObject: which is the object in data list, to query that by #id  
// - GlassList Class: which is an array contains many GlassObjects class
// 2 step: to build the wearing glass function
// 3 step: to build the comparison fuction after wearing the glass


//todo: curently, haven't conected with backend, so don't have a data from backend to display the list glass, so let use the data below 
//todo: after that, when conect with backend, the data will be JSON files 
let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];


const getEle = (id) => {
    return document.getElementById(id);
}


//! where declare the displayGlassList() function
//todo: the displaying glass list function
const displayGlassList = () => {
    //todo: The displaying glass list position
    let positionList = getEle("vglassesList");

    //todo: create the glass objects, after that adding that into the glass list
    //todo: use for loop to get elements in dataGlasses to add attributes to the glassObject, after having glass objects, let get the glassObject to add into the glassList

    //todo: geting the datas into dataGlasses, we can use the for loop, bt this is the new way to resolves them which is map() function
    // dataGlasses.map(function(item,index){

    // });
    dataGlasses.map((item, index) => {
        //todo: create the variable to represent for glassObject
        let glass = new GlassObject(item.id, item.src, item.virtualImg, item.brand, item.name, item.price, item.color, item.description);


        //! adding the glass objects into GlassList class
        glassList.addGlass(glass);
    });
    console.log(glassList);

    positionList.innerHTML = glassList.renderList();
}

//! where execute the displayGlassList() function
displayGlassList();


//todo: create the wearing function 

const wearGlass = (event) => {
    // console.log(event);
    //todo: get out the object by data-id which is appointed by click on()
    //todo: tạo biến hứng thành phần được click và lấy id bằng getAttribute("data-id")
    let gId = event.currentTarget.getAttribute("data-id");          //* thuộc tính target là thuộc tính của thẻ được click, khi click sẽ hiển thị trên consol.log(event)
    let gObject = 0;
    //todo: duyệt danh sách thành phần, so sánh id của thành phần với id của thành phần được click thì getout và hiển thị lên UI
    for (let value of glassList.gList) {         //* value là mỗi đối tượng trong danh sách được duyệt, sau khi xét điều kiện sẽ trả ra đối tượng value cần lấy
        if (value.id === gId) {
            gObject = value;
        }
    }
    // console.log(gObject);
    showWearingGlass(gObject);
}

//! Bởi vì trong ES6, file main là file module, hàm trong main chỉ có phạm vi trong file main, nên không thể gọi sự kiện hàm onclick="wearGlass(event)" ở bên class glassList được, nên phải set phạm vi của nó về window 
window.wearGlass = wearGlass;


//todo: Tạo hàm để hiển thị đeo kính và hiển thị thông tin
const showWearingGlass = (gObject) => {
    let status = 0;
    if (gObject.status == true) {
        status = "stocking";
    }
    else {
        status = "sold out";
    }

    //todo: thẻ nơi để hiển thị đeo kính
    let divAva = getEle("avatar");

    divAva.innerHTML = `
        <img style = "transition : all 0.5s" id = "beforeAndAfter" src="${gObject.vImg}">
    `;
    //todo: thẻ nơi để hiển thị thông tin
    let divInfo = getEle("glassesInfo");
    divInfo.innerHTML = `
        <div>
            <h5>${gObject.name} - ${gObject.brand} (${gObject.color})</h5>
            <div class = "card-text vglasses__items">
                <span class = "btn btn-danger btn-sm mr-2">$${gObject.price}</span><span class = "text-success">${status}</span>
            </div>
            <p class = "card-text">${gObject.ds}</p>
        </div>
    `;
    divInfo.style.display = "block";        // khi chưa có nội dung, phần nội dung sẽ có đường kẻ màu đen, nên khi chưa có sẽ tạm ẩn đi, khi có nội dung rồi thì bật lên để hiển thị

}


//todo: hàm ẩn hiện kính
const removeGlasses = (hideOrDisplay) => {
    let divBeforeAfter = getEle("beforeAndAfter");

    // if(hideOrDisplay == true){
    //     divBeforeAfter.style.opacity = "0.8";
    // }
    // else{
    //     divBeforeAfter.style.opacity = "0";
    // }
    //* phải có ấn, mắt kính hiện ra thì mới thực hiện before và after
    if (divBeforeAfter != null) {
        if (hideOrDisplay == true) {
            divBeforeAfter.style.opacity = "0.8";
        }
        else {
            divBeforeAfter.style.opacity = "0";
        }
    }
    else{
        alert("Vui lòng chọn kính");
        // return;
    }
}

window.removeGlasses = removeGlasses;