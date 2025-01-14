const duckNavDiv= document.querySelector("#duck-nav");
const duckName = document.querySelector("#duck-display-name")
const duckImage = document.querySelector("#duck-display-image")
const likeBtn = document.querySelector("#duck-display-likes")
const form = document.querySelector("#new-duck-form")
const newDuckName = document.querySelector("#duck-name-input")
const newDuckImage = document.querySelector("#duck-image-input")

fetch("http://localhost:4000/ducks")
.then(res => res.json())
.then(data => {
    data.forEach(ducky => {
        const img = document.createElement("img");
        img.src = ducky.img_url
        img.alt = ducky.name //not needed
        duckNavDiv.append(img)
    
        img.addEventListener("click", e => {
            addDucks(ducky)
        })

    })
    addDucks(data[0])
})

function addDucks(duck){
    duckName.textContent = duck.name;
    duckImage.src = duck.img_url;
    likeBtn.textContent = duck.likes
    
}


  likeBtn.addEventListener("click", e => {
    const currNum = parseInt(likeBtn.textContent)
    const newNum = currNum + 1
    likeBtn.textContent = newNum

  })


  form.addEventListener("submit", e => {
    e.preventDefault();

    const img = document.createElement("img");
        img.src = newDuckImage.value
        duckNavDiv.append(img)
    
    img.addEventListener("click", e => {
        addDucks(newDuck)
    })

    const newDuck = {};
        newDuck["name"] = newDuckName.value;
        newDuck["img_url"] = newDuckImage.value;
        newDuck["likes"] = 0
        // newDuck["id"] = 6


    addDucks(newDuck)

})
