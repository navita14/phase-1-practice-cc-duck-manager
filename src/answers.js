///////take 1
const duckImgDiv = document.querySelector("#duck-nav")
const duckName = document.querySelector("#duck-display-name")
const image = document.querySelector("#duck-display-image")
const likeBtn = document.querySelector('#duck-display-likes')
const form = document.querySelector('#new-duck-form')
const newDuckName = document.querySelector("#duck-name-input")
const newDuckImage = document.querySelector("#duck-image-input")


fetch("http://localhost:3000/ducks")
.then(res => res.json())
.then(data => {
    data.forEach(duck => {
        const img = document.createElement("img");
        img.src = duck.img_url;
        duckImgDiv.append(img)

        img.addEventListener("click", e => {
            addDuckies(duck)
        })

        likeBtn.addEventListener("click", e => {
            likeBtn.textContent = `${duck.likes ++} likes`
        })
    })

    addDuckies(data[0])
})

function addDuckies(duck){
    duckName.textContent = duck.name
    image.src = duck.img_url
    likeBtn.textContent = `${duck.likes} likes`

}

form.addEventListener("submit", e => {
    e.preventDefault();
    const newDuck = {};
        newDuck["name"] = newDuckName.value;
        newDuck["img_url"] = newDuckImage.value;
        newDuck["id"] = 6
        newDuck["likes"] = 0

    addDuckies(newDuck)
})


//test new duck - https://media.istockphoto.com/id/1003673646/vector/yellow-rubber-duck-toy-adorable-duckling.jpg?s=1024x1024&w=is&k=20&c=u0CiA46Z-i2QRfxOVEATBHnDPn_2D7CzmEyo71VspvI=
////end of take 1



///take 2
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
