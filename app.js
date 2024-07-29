const API_KEY = "Your API KEY"
const submitButton = document.querySelector("#submit-button");
const inputElement = document.querySelector("input")
const imageSection = document.querySelector(".image")

const ringImages = async () => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify( {
        
            "prompt": inputElement.value,
            "n": 4,
            "size": "1024x1024"
        })
    }
    try {
        const result = await fetch('https://api.openai.com/v1/images/generations', options)
        const data = await result.json()
        console.log(data);

        data?.data.forEach(imageObject => {
            const ImageContainer = document.createElement('div')
            ImageContainer.classList.add('image-container')
            const imageElement = document.createElement('img')
            imageElement.setAttribute('src', imageObject.url)
            ImageContainer.append(imageElement)
            imageSection.append(ImageContainer)
        });
    } catch (error) {
        console.error(error);
    }
}


submitButton.addEventListener('click', ringImages)