images = [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    "https://i.dummyjson.com/data/products/2/1.jpg",
    "https://i.dummyjson.com/data/products/2/2.jpg",
    "https://i.dummyjson.com/data/products/2/3.jpg",
    "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
]

const imageGallery = {

    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    imagesContainer: document.querySelector("#img-container"),
    thumbnailImage: document.querySelector("#thumbnailimage"),
    rightSlideBtn: document.querySelector("#rightBtn"),
    leftslideBtn: document.querySelector("#leftBtn"),

    showSlidingImages: function (images) {
        this.thumbnailImage.src = this.thumbnail;
        images.map((item) => {

            let slidingimages = document.createElement("img");
            slidingimages.setAttribute("src", `${item}`);
            slidingimages.setAttribute("class", "h-20 w-20 border-2 p-2 cursor-pointer")
            this.imagesContainer.appendChild(slidingimages)

            slidingimages.addEventListener("click", () => {
                this.thumbnailImage.src = slidingimages.src;
            })
        })
    },

    slideImages: function () {
        this.rightSlideBtn.addEventListener("click", () => {
            this.imagesContainer.scrollBy(35, 0);
        })
        this.leftslideBtn.addEventListener("click", () => {
            this.imagesContainer.scrollBy(-35, 0);
        })
    },

    render: function () {
        this.slideImages();
    }

}
imageGallery.render();
imageGallery.showSlidingImages(images);