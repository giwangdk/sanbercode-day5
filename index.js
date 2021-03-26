
var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]

listBarang = document.getElementById("listBarang")
var item = ""

function showItems(arr) {
    var item = ""
    for (var i = 0; i < arr.length; i++){
        item += `
        <div class ="col-3 mt-2"> 
        <div class="card" style="width: 18rem;">
        <img src="img/${arr[i][4]}" class="card-img-top" height="200px" width="200px" alt="...">
        <div class="card-body">
        <h5 class="card-title" id="itemName">${arr[i][1]}</h5>
        <p class="card-text" id="itemDesc">${arr[i][3]}</p>
        <p class="card-text">${arr[i][2]}</p>
        <a href="#" onclick="tambahCart(${arr[i][0]})" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
        </div>
        </div>
        </div>
        `
    }

    listBarang.innerHTML = item
}

showItems(items)

function filter(kata) {
    var filteredItems = []
    for (var i = 0; i < items.length; i++){
        var item = items[i]
        var namaItem = item[1]
        var isMatch = namaItem.toLowerCase().includes(kata.toLowerCase())
        if(isMatch){
            filteredItems.push(item)
        }
    }
    return filteredItems
}

var formSearch = document.getElementById("formItem")
formSearch.addEventListener("submit", (e) => {
    e.preventDefault()
    var keyword = document.getElementById("keyword").value
    var terfilter = filter(keyword)
    showItems(terfilter)
})


cart = document.getElementById('cart')
i=0

function tambahCart(id) {
    i ++
    cart.innerHTML = `<i class="fas fa-shopping-cart"></i>${i}`
}