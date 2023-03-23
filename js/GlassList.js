export class GlassList{
    constructor(){
        //todo: the array of the glass list
        this.gList =[];
    }
    //todo: create the adding glass method
        // the value input is a glass object
    addGlass(glass) {
        this.gList.push(glass);
    }

    //todo: build the method to display the glass list 
    renderList() {
        //! get objects into gList array with for loop or map(), after geting out objects, we create the html tags contain them and then we assign them on displayGlassList() to display them out

        //todo: create a variable contain the content of glass object 
        let content = "";
        //! map() can't return the value out, but reduce() can 
        content = this.gList.reduce((glassContent,item,index) => {   //! glassContent is the value or content which we want to return it out

            //! phải sử dụng nối chuỗi trong biến glassContent bởi vì có 9 objects cần được hiển thị, nếu chỉ sử dụng gán giá trị thì sẽ chỉ hiển thị được 1 object bởi vì giá trị mới sẽ gán đè len giá trị cũ 
            //* glassContent = glassContent + ``;
            //todo: want to display 3 item in row, we create the class col-4

            //todo: tạo thêm chức năng onclick trong danh sách hiển thị để có thể ấn vào được. Event là đối tượng đặc biệt trong Js, dùng để chứ tất cả thông tin của thẻ vừa click và thao tác của người dùng lên thẻ đó
            //todo: create data-id to get it out when clicking on.
            glassContent += `
                <div class = "col-4 vglasses__items">
                    <img onclick="wearGlass(event)" data-id="${item.id}" class ="img-fluid" src="${item.src}" alt="glass"></img>
                </div>
            `;
            return glassContent;

            //! after returning and asigning glassContent variable to content variable, content variable still stay in renderList()
        },``);  // `` which is declare the glassContent variable
            //! so we let return content variable to get it out
        return content;
    }
}

