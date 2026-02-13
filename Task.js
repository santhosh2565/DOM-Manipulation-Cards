//body get boy on html
const body = document.getElementById("body")
console.log(body)

//body-css
body.style.display ="flex"
body.style.justifyContent ="center"
body.style.gap = "20px"
body.style.padding = "100px"
body.style.backgroundColor = "#ffa500"
body.style.fontFamily = "Arial,sans-serif"

//card1 Html-structure
const card1= document.createElement("div")
body.appendChild(card1)
const box1 =  document.createElement("div")
const box2 = document.createElement("div")
card1.appendChild(box1)
card1.appendChild(box2)
const avatar = document.createElement("div")
box1.appendChild(avatar)
const img = document.createElement("img")
avatar.appendChild(img)
const $name = document.createElement("h2")
box2.appendChild($name)
const roll = document.createElement("h5")
box2.appendChild(roll)
const social = document.createElement("div")
box2.appendChild(social)
const circle1 = document.createElement("span")
social.appendChild(circle1)
const fb = document.createElement("img")
circle1.appendChild(fb)
const circle2 = document.createElement("span")
social.appendChild(circle2)
const li_in = document.createElement("img")
circle2.appendChild(li_in)
const circle3 = document.createElement("span")
social.appendChild(circle3)
const insta = document.createElement("img")
circle3.appendChild(insta)
const circle4 = document.createElement("span")
social.appendChild(circle4)
const x = document.createElement("img")
circle4.appendChild(x)
const btn = document.createElement("button")
box2.appendChild(btn)


//card-1 inner tegs - section
$name.innerHTML = "YOOGESH"
roll.innerHTML = "WEB DEVELOPER"
btn.innerHTML = "Read More"

//card-2 CSS-Section
//card
card1.style.height = "500px"
card1.style.width = "350px"
card1.style.backgroundColor = "#fff"
card1.style.border ="0px solid white"
card1.style.borderRadius = "30px"
card1.style.overflow = "hidden"
card1.style.boxShadow = "0 15px 40px #0000001A"

// card - top
box1.style.height = "200px"
box1.style.backgroundColor = "#00039d"
box1.style.borderBottomRightRadius = "30px"
box1.style.borderBottomLeftRadius = "30px"
box1.style.position = " relative"

//Avatar 
avatar.style.width = "100px"
avatar.style.height = "100px"
avatar.style.borderRadius = "50%"
avatar.style.border = "5px solid #ffffff"
avatar.style.position = "absolute"
avatar.style.top = "50%"
avatar.style.left = "50%"
avatar.style.transform = "translate(-50%,-50%)"

//img
img.src = "./Avatar/Fotos.jpeg "
img.style.height = "100px"
img.style.width = "100px"
img.style.borderRadius = "50%"
img.style.boxShadow = "0px 0px 0px 3px #00039d"
img.style.objectFit = "cover"

// card - body 
box2.style.height = "250px"
box2.style.padding = "25px 25px"
box2.style.display ="flex"
box2.style.flexDirection = "column"
box2.style.alignItems = "center"
// Name 
$name.style.fontSize = "26px"
$name.style.margin = "15px 0px"
$name.style.fontWeight ="bolder"
$name.style.color = "#09003a"

//roll 
roll.style.fontSize = "14px"
roll.style.fontWeight ="bold"
roll.style.color = "#09003a"
roll.style.marginTop = "0px"
roll.style.marginBottom = "30px"

//social
social.style.display = "flex"
social.style.justifyContent = "space-between"
social.style.paddingBottom = "10px"

//circle1
circle1.style.backgroundColor = "#00039d"
circle1.style.width = "40px"
circle1.style.height = "40px"
circle1.style.borderRadius = "50%"
circle1.style.margin = "10px"
circle1.style.display = "flex"
circle1.style.justifyContent = "center"
circle1.style.alignItems = "center"

//circle2
circle2.style.backgroundColor = "#00039d"
circle2.style.width = "40px"
circle2.style.height = "40px"
circle2.style.borderRadius = "50%"
circle2.style.margin = "10px"
circle2.style.display = "flex"
circle2.style.justifyContent = "center"
circle2.style.alignItems = "center"

//circle3
circle3.style.backgroundColor = "#00039d"
circle3.style.width = "40px"
circle3.style.height = "40px"
circle3.style.borderRadius = "50%"
circle3.style.margin = "10px"
circle3.style.display = "flex"
circle3.style.justifyContent = "center"
circle3.style.alignItems = "center"

//circle4 
circle4.style.backgroundColor = "#00039d"
circle4.style.width = "40px"
circle4.style.height = "40px"
circle4.style.borderRadius = "50%"
circle4.style.margin = "10px"
circle4.style.display = "flex"
circle4.style.justifyContent = "center"
circle4.style.alignItems = "center"

//btn
btn.style.display ="inline-block"
btn.style.margin ="10px"
btn.style.padding = "10px 26px"
btn.style.borderRadius ="8px"
btn.style.border = "1px solid #00039d"
btn.style.backgroundColor = "#00039d"
btn.style.color ="#fff"
btn.style.fontSize = "14px"
btn.style.textDecoration = "none"

//fb
fb.src = "./Icons/brand-facebook.svg"
fb.style.width = "28px"
fb.style.height = "28px"

//linked-in
li_in.src = "./Icons/brand-linkedin.svg"
li_in.style.width = "28px"
li_in.style.height = "28px"

//instagram
insta.src = "./Icons/brand-instagram.svg"
insta.style.width = "28px"
insta.style.height = "28px"

//twitter
x.src = "./Icons/brand-twitter.svg"
x.style.width = "28px"
x.style.height = "28px"

//card2 Html-structure
const card2= document.createElement("div")
body.appendChild(card2)
const box1_2 =  document.createElement("div")
const box2_2 = document.createElement("div")
card2.appendChild(box1_2)
card2.appendChild(box2_2)
const avatar_2 = document.createElement("div")
box1_2.appendChild(avatar_2)
const img_2 = document.createElement("img")
avatar_2.appendChild(img_2)
const $name_2 = document.createElement("h2")
box2_2.appendChild($name_2)
const roll_2 = document.createElement("h5")
box2_2.appendChild(roll_2)
const social_2 = document.createElement("div")
box2_2.appendChild(social_2)
const circle1_2 = document.createElement("span")
social_2.appendChild(circle1_2)
const fb_2 = document.createElement("img")
circle1_2.appendChild(fb_2)
const circle2_2 = document.createElement("span")
social_2.appendChild(circle2_2)
const li_in_2 = document.createElement("img")
circle2_2.appendChild(li_in_2)
const circle3_2 = document.createElement("span")
social_2.appendChild(circle3_2)
const insta_2 = document.createElement("img")
circle3_2.appendChild(insta_2)
const circle4_2 = document.createElement("span")
social_2.appendChild(circle4_2)
const x_2 = document.createElement("img")
circle4_2.appendChild(x_2)
const btn_2 = document.createElement("button")
box2_2.appendChild(btn_2)

//card-2 inner tegs - section
$name_2.innerHTML = "SANTHOSH"
roll_2.innerHTML = "UI DESIGNER"
btn_2.innerHTML = "Read More"

//card-2 CSS-Section
//card
card2.style.height = "500px"
card2.style.width = "350px"
card2.style.backgroundColor = "#fff"
card2.style.border ="0px solid white"
card2.style.borderRadius = "30px"
card2.style.overflow = "hidden"
card2.style.boxShadow = "0 15px 40px #0000001A"

// card - top
box1_2.style.height = "200px"
box1_2.style.backgroundColor = "#00039d"
box1_2.style.borderBottomRightRadius = "30px"
box1_2.style.borderBottomLeftRadius = "30px"
box1_2.style.position = " relative"

//Avatar 
avatar_2.style.width = "100px"
avatar_2.style.height = "100px"
avatar_2.style.borderRadius = "50%"
avatar_2.style.border = "5px solid #ffffff"
avatar_2.style.position = "absolute"
avatar_2.style.top = "50%"
avatar_2.style.left = "50%"
avatar_2.style.transform = "translate(-50%,-50%)"

//img
img_2.src = "./Avatar/46b3c77.jpeg"
img_2.style.height = "100px"
img_2.style.width = "100px"
img_2.style.borderRadius = "50%"
img_2.style.boxShadow = "0px 0px 0px 3px #00039d"
img_2.style.objectFit = "cover"

// card - body 
box2_2.style.height = "250px"
box2_2.style.padding = "25px 25px"
box2_2.style.display ="flex"
box2_2.style.flexDirection = "column"
box2_2.style.alignItems = "center"

// Name 
$name_2.style.fontSize = "26px"
$name_2.style.margin = "15px 0px"
$name_2.style.fontWeight ="bolder"
$name_2.style.color = "#09003a"

//roll 
roll_2.style.fontSize = "14px"
roll_2.style.fontWeight ="bold"
roll_2.style.color = "#09003a"
roll_2.style.marginTop = "0px"
roll_2.style.marginBottom = "30px"

//social
social_2.style.display = "flex"
social_2.style.justifyContent = "space-between"
social_2.style.paddingBottom = "10px"

//circle1
circle1_2.style.backgroundColor = "#00039d"
circle1_2.style.width = "40px"
circle1_2.style.height = "40px"
circle1_2.style.borderRadius = "50%"
circle1_2.style.margin = "10px"
circle1_2.style.display = "flex"
circle1_2.style.justifyContent = "center"
circle1_2.style.alignItems = "center"

//circle2
circle2_2.style.backgroundColor = "#00039d"
circle2_2.style.width = "40px"
circle2_2.style.height = "40px"
circle2_2.style.borderRadius = "50%"
circle2_2.style.margin = "10px"
circle2_2.style.display = "flex"
circle2_2.style.justifyContent = "center"
circle2_2.style.alignItems = "center"

//circle3
circle3_2.style.backgroundColor = "#00039d"
circle3_2.style.width = "40px"
circle3_2.style.height = "40px"
circle3_2.style.borderRadius = "50%"
circle3_2.style.margin = "10px"
circle3_2.style.display = "flex"
circle3_2.style.justifyContent = "center"
circle3_2.style.alignItems = "center"

//circle4 
circle4_2.style.backgroundColor = "#00039d"
circle4_2.style.width = "40px"
circle4_2.style.height = "40px"
circle4_2.style.borderRadius = "50%"
circle4_2.style.margin = "10px"
circle4_2.style.display = "flex"
circle4_2.style.justifyContent = "center"
circle4_2.style.alignItems = "center"

//btn
btn_2.style.display ="inline-block"
btn_2.style.margin ="10px"
btn_2.style.padding = "10px 26px"
btn_2.style.borderRadius ="8px"
btn_2.style.border = "1px solid #00039d"
btn_2.style.backgroundColor = "#00039d"
btn_2.style.color ="#fff"
btn_2.style.fontSize = "14px"
btn_2.style.textDecoration = "none"

//fb
fb_2.src = "./Icons/brand-facebook.svg"
fb_2.style.width = "28px"
fb_2.style.height = "28px"

//linked-in
li_in_2.src = "./Icons/brand-linkedin.svg"
li_in_2.style.width = "28px"
li_in_2.style.height = "28px"

//instagram
insta_2.src = "./Icons/brand-instagram.svg"
insta_2.style.width = "28px"
insta_2.style.height = "28px"

//twitter
x_2.src = "./Icons/brand-twitter.svg"
x_2.style.width = "28px"
x_2.style.height = "28px"

//card3 Html-structure
const card3= document.createElement("div")
body.appendChild(card3)
const box1_3 =  document.createElement("div")
const box2_3 = document.createElement("div")
card3.appendChild(box1_3)
card3.appendChild(box2_3)
const avatar_3 = document.createElement("div")
box1_3.appendChild(avatar_3)
const img_3 = document.createElement("img")
avatar_3.appendChild(img_3)
const $name_3 = document.createElement("h2")
box2_3.appendChild($name_3)
const roll_3 = document.createElement("h5")
box2_3.appendChild(roll_3)
const social_3 = document.createElement("div")
box2_3.appendChild(social_3)
const circle1_3 = document.createElement("span")
social_3.appendChild(circle1_3)
const fb_3 = document.createElement("img")
circle1_3.appendChild(fb_3)
const circle2_3 = document.createElement("span")
social_3.appendChild(circle2_3)
const li_in_3 = document.createElement("img")
circle2_3.appendChild(li_in_3)
const circle3_3 = document.createElement("span")
social_3.appendChild(circle3_3)
const insta_3 = document.createElement("img")
circle3_3.appendChild(insta_3)
const circle4_3 = document.createElement("span")
social_3.appendChild(circle4_3)
const x_3 = document.createElement("img")
circle4_3.appendChild(x_3)
const btn_3 = document.createElement("button")
box2_3.appendChild(btn_3)

//card-3 inner tegs - section
$name_3.innerHTML = "HARINI"
roll_3.innerHTML = "HIRING MANAGER"
btn_3.innerHTML = "Read More"

//card-3 CSS-Section
//card
card3.style.height = "500px"
card3.style.width = "350px"
card3.style.backgroundColor = "#fff"
card3.style.border ="0px solid white"
card3.style.borderRadius = "30px"
card3.style.overflow = "hidden"
card3.style.boxShadow = "0 15px 40px #0000001A"

// card - top
box1_3.style.height = "200px"
box1_3.style.backgroundColor = "#00039d"
box1_3.style.borderBottomRightRadius = "30px"
box1_3.style.borderBottomLeftRadius = "30px"
box1_3.style.position = " relative"

//Avatar 
avatar_3.style.width = "100px"
avatar_3.style.height = "100px"
avatar_3.style.borderRadius = "50%"
avatar_3.style.border = "5px solid #ffffff"
avatar_3.style.position = "absolute"
avatar_3.style.top = "50%"
avatar_3.style.left = "50%"
avatar_3.style.transform = "translate(-50%,-50%)"

//img
img_3.src = "Avatar/3d-cartoon.jpeg"
img_3.style.height = "100px"
img_3.style.width = "100px"
img_3.style.borderRadius = "50%"
img_3.style.boxShadow = "0px 0px 0px 3px #00039d"
img_3.style.objectFit = "cover"

// card - body 
box2_3.style.height = "250px"
box2_3.style.padding = "25px 25px"
box2_3.style.display ="flex"
box2_3.style.flexDirection = "column"
box2_3.style.alignItems = "center"

// Name 
$name_3.style.fontSize = "26px"
$name_3.style.margin = "15px 0px"
$name_3.style.fontWeight ="bolder"
$name_3.style.color = "#09003a"

//roll 
roll_3.style.fontSize = "14px"
roll_3.style.fontWeight ="bold"
roll_3.style.color = "#09003a"
roll_3.style.marginTop = "0px"
roll_3.style.marginBottom = "30px"

//social
social_3.style.display = "flex"
social_3.style.justifyContent = "space-between"
social_3.style.paddingBottom = "10px"


//circle1
circle1_3.style.backgroundColor = "#00039d"
circle1_3.style.width = "40px"
circle1_3.style.height = "40px"
circle1_3.style.borderRadius = "50%"
circle1_3.style.margin = "10px"
circle1_3.style.display = "flex"
circle1_3.style.justifyContent = "center"
circle1_3.style.alignItems = "center"

//circle2
circle2_3.style.backgroundColor = "#00039d"
circle2_3.style.width = "40px"
circle2_3.style.height = "40px"
circle2_3.style.borderRadius = "50%"
circle2_3.style.margin = "10px"
circle2_3.style.display = "flex"
circle2_3.style.justifyContent = "center"
circle2_3.style.alignItems = "center"

//circle3
circle3_3.style.backgroundColor = "#00039d"
circle3_3.style.width = "40px"
circle3_3.style.height = "40px"
circle3_3.style.borderRadius = "50%"
circle3_3.style.margin = "10px"
circle3_3.style.display = "flex"
circle3_3.style.justifyContent = "center"
circle3_3.style.alignItems = "center"

//circle4 
circle4_3.style.backgroundColor = "#00039d"
circle4_3.style.width = "40px"
circle4_3.style.height = "40px"
circle4_3.style.borderRadius = "50%"
circle4_3.style.margin = "10px"
circle4_3.style.display = "flex"
circle4_3.style.justifyContent = "center"
circle4_3.style.alignItems = "center"

//btn
btn_3.style.display ="inline-block"
btn_3.style.margin ="10px"
btn_3.style.padding = "10px 26px"
btn_3.style.borderRadius ="8px"
btn_3.style.border = "1px solid #00039d"
btn_3.style.backgroundColor = "#00039d"
btn_3.style.color ="#fff"
btn_3.style.fontSize = "14px"
btn_3.style.textDecoration = "none"

//fb
fb_3.src = "./Icons/brand-facebook.svg"
fb_3.style.width = "28px"
fb_3.style.height = "28px"

//linked-in
li_in_3.src = "./Icons/brand-linkedin.svg"
li_in_3.style.width = "28px"
li_in_3.style.height = "28px"

//instagram
insta_3.src = "./Icons/brand-instagram.svg"
insta_3.style.width = "28px"
insta_3.style.height = "28px"

//twitter
x_3.src = "./Icons/brand-twitter.svg"
x_3.style.width = "28px"
x_3.style.height = "28px"
