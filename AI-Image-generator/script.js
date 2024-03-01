const genereteForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const OPENAI_API_KEY = "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";

const updateImageCard = (imgDataArray) => {
  imgDataArray.forEach((imgObject, index) => {
    const imgCard = imageGallery.querySelectorAll(".img-card")[index];
    const imgElememnt = imgCard.querySelector("img");

    //setting the ai generated image to images data
    const aiGeneratedImg = `data:image/jpeg;base64,${imgObject.b64_json}`;
    imgElememnt.src = aiGeneratedImg;

    //remove the oading when the image has finished loading
    imgElememnt.onload = () => {
      imgCard.classList.remove("loading");
    };
  });
};

const generateAiImages = async (userPrompt, userImgQuantity) => {
  try {
    //sending request to the open ai to generate images based on user input
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": " application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: userPrompt,
          n: parseInt(userImgQuantity),
          size: "512x512",
          response_format: "b64_json",
        }),
      }
    );

    if (!response.ok)
      throw new Error("failed to generate images! please try again");

    const { data } = await response.json(); //get data from respnse
    updateImageCard([...data]);
  } catch (error) {
    alert(error.message);
  }
};

const handleFormSubmission = (e) => {
  e.preventDefault();

  //get user input and image quantity values from the form
  const userPrompt = e.srcElement[0].value;
  const userImgQuantity = e.srcElement[1].value;

  //creating html markup for image cards with loading state
  const imgCardMarkup = Array.from(
    { length: userImgQuantity },
    () =>
      ` <div class="img-card loading">
        <img src="images/loader.png" alt="image" />
        <a href="#" class="download-btn">
          <img src="images/download-button-icon-1.png" alt="download-icon" />
        </a>
      </div>`
  ).join("");
  imageGallery.innerHTML = imgCardMarkup;
  generateAiImages(userPrompt, userImgQuantity);
};

genereteForm.addEventListener("submit", handleFormSubmission);
