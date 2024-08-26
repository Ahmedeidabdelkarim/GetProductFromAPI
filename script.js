
// Function to handle API request and update content
function loadCategory(category) {
    let para = document.querySelector(".content");
    let request = new XMLHttpRequest();
    request.open('GET', 'https://fakestoreapi.com/products', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let data = JSON.parse(request.responseText);
            console.log(data);
            let content = '';
            data.map(element => {
                if (element.category === category)
                    content += `
                    <div class="pro">
                        <img style="width:150px;height:150px;border-radius:10px;margin-top:15px" src="${element.image}">
                        <h3 style="margin: 20px;color:white">${element.title}</h3>
                        <p>${element.price}</p>
                    </div>`;
            });

            para.innerHTML = content;
        }
    }
    request.send();
}

loadCategory("men's clothing")

// Event listeners for each category button
document.getElementById("men").onclick = function () {
    loadCategory("men's clothing");
}

document.getElementById("women").onclick = function () {
    loadCategory("women's clothing");
}

document.getElementById("elec").onclick = function () {
    loadCategory("electronics");
}

document.getElementById("jew").onclick = function () {
    loadCategory("jewelery");
}