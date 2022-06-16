'use strict';
console.log('%c HI', 'color: firebrick') 

 document.addEventListener('DOMContentLoaded', () =>{ fetchDogImages() }
 ) 
  
 function fetchDogImages () {
    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then ((response) => response.json())
    .then ( (data )=> {
        let images = data.message ;
        images.forEach((image) =>{
            console.log(image) 
            loadImagestoDom(image)
        }
    
        ) })

    } 


    function loadImagestoDom (image) {
        let dogsCont = document.getElementById ("dog-image-container")
        let ourImage = document.createElement('img') 
        ourImage.src = image

    dogsCont.appendChild(ourImage)
    }  

    function fetchDogUrl () {
        fetch ('https://dog.ceo/api/breeds/list/all') 
        .then ((response) => response.json()) 
        .then ((updateBreedList))
        .then ((data)=> {
            let url = data ;
            url.forEach((url) => {
                console.log(url)
                loadUrltoDom(url)
            })
        })
    } 
  
    function newElement () {
        let ourDogBreed = document.getElementById ('dog-breeds')
        let dogBreed = document.createElement ('dog-breeds')
        ourUrl.scr = url 
        ourDogBreed.appendChild(ourUrl)
    } 

    function updateBreedList(breeds) {
        let ul = document.getElementById('dog-breeds')
        removeChildren (ul)
        breeds.forEach (breed => addBreed(breed))
    }
 
   
      
      function addBreedSelectListener() {
        let breedDropdown = document.getElementById('breed-dropdown');
        
      } 
      alert ("cuttiecat")
      
    

