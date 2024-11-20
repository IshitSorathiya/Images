import Images from 'https://raw.githubusercontent.com/IshitSorathiya/Images/refs/heads/main/images.json' assert { type: 'json' }

const result = document.getElementById("result");
const button = document.querySelector(".button");
let ResultHtml = "";

let arr = [];
for(let item in Images) {
    arr.push(Images[item])
}
console.log(arr);

let newArr = arr[0];
console.log(newArr);

function CoolImages() {
    
    for (let i = 0; i < newArr.length; i++) {
        let imageLink = newArr[i].imageUrl
        let imageName = newArr[i].name

        ResultHtml =  `
        <div class="card">
            <div>
                <img class="image-content" src="${imageLink}" alt="${imageName}"> 
            </div>
            <div class="card-info">
                <div class="image-name">
                    <h3>${imageName}</h3>
                </div> <br>
                <div class="icon">
                    <i class="fa-solid fa-download fa-xl"></i>
                </div>
            </div>
        </div> 
            `
        result.innerHTML += ResultHtml
    }
    console.log(result);
}

CoolImages();

function Subscribe() {
    location.href="http://127.0.0.1:5500/Subscribe.html"
}

button.addEventListener("click", Subscribe)
