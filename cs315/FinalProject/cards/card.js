const arrProducts= [
    {
        url: "#",
        title: "AE Super Soft Hooded Flannel Shacket",
        image: "../images/four.webp",
        category: "top",
        description: " new+ good quality",
        price:"34.99",
        duration: "12",
        discount:" 20%"
    },
    {
        url: "#",
        title: "AEO Plastic Frame Aviator Sunglasses",
        image: "../images/sunglass.webp",
        category: "accessories",
        description: "Online only",
        price:"45.99",
        duration: "11",
        discount:" 20%"
    },
   
    {
        url: "#",
        title: "AE Super Soft Hooded Flannel Shirt",
        image: "../images/hoody.webp",
        category: "top",
        description: "online only",
        price:"45.99",
        duration: "11",
        discount:" 20%"
    },
    {
        url: "#",
        title: "AE Camo Baggy Cargo Jogger",
        image: "../images/bottom2.webp",
        category: "bottom",
        description: " this a nice quality",
        price:"45.99",
        duration: "11",
        discount:" 20%"
    },
    {
        url: "#",
        title: "AEO Plaid Ultra Soft Boxer Short 3-Pack",
        image: "../images/bottom.webp",
        category: "bottom",
        description: " online only",
        price:"45.99",
        duration: "12",
        discount:" 20%"
    },
    {
        url: "#",
        title: "AE Road Tripper Hat",
        image: "../images/hat2.webp",
        category: "accessories",
        description: " verrythis a nice quality",
        price:"45.99",
        duration: "11",
        discount:" 20%"
    },
    {
        url: "#",
        title: "AE Super Soft Hooded Flannel Shacket",
        image: "../images/bottom1.webp",
        category: "bottom",
        description: " good+good Quality",
        price:"45.99",
        duration: "12",
        discount:" 20%"
    },
  
    {
        url: "#",
        title: "AE Camo Baggy Cargo Jogger",
        image: "../images/socks.webp",
        category: "accessories",
        description: " new+ good quality",
        price:"40.99",
        duration: "11",
        discount:" 20%"
    },
    {
        url: "#",
        title: "AE Super Soft Hooded Flannel Shacket",
        image: "../images/six.webp",
        category: "top",
        description: " good+good Quality",
        price:"49.99",
        duration: "12",
        discount:" 20%"
    }
  


]

//need this to append
const courseContainer = document.querySelector(".course-container")

const displayProducts = (urlValue, titleValue,categoryValue,imageValue,
    descriptionValue, priceValue, durationValue)=>{
        //create card 
   const card = document.createElement("div");
   card.classList.add("card");
   //create href a
   const a = document.createElement("a");
   a.setAttribute("href", urlValue);

   //create category
   const category = document.createElement("div");
   category.classList.add("category");
   category.innerHTML = categoryValue;

   //create IMAGE
   const img = document.createElement("img");
   img.setAttribute("src",imageValue);

   //create title

   const title = document.createElement("h2");
   title.classList.add("title");
   title.innerHTML=titleValue;

   //create description 

   const description = document.createElement("div");
   description.classList.add("description");
   description.innerHTML= descriptionValue;

   //create info
   const info = document.createElement("div");
   info.classList.add("info");
   
   //crate a price

   const price = document.createElement("div");
   price.classList.add("price");
   price.innerHTML= priceValue;

   //duration 
   const duration = document.createElement("div");
   duration.classList.add("duration");

   //icon

   const timeIcon = document.createElement("div");
   timeIcon.classList.add("time-icon");
   timeIcon.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
 </svg>`

 //duration value

 const value = document.createElement("div");
 value.classList.add("value");
 value.innerHTML= durationValue;

 //append element
  courseContainer.appendChild(card);
  card.appendChild(a);
  a.appendChild(category);
  a.appendChild(img);
  a.appendChild(title);
  a.appendChild(description);
  a.appendChild(info);
  info.appendChild(price);
  info.appendChild(duration);
  duration.appendChild(timeIcon);
  duration.appendChild(value);


};

const generateData = ()=>{
    arrProducts.forEach((element) =>{
        displayProducts(element.url,element.title, 
            element.category,element.image,
            element.description, element.price,
             element.duration)
    });
};

generateData();