function createDinaDiv() {
    const div = document.createElement('div');
    div.id = 'dinamikusDiv';

    div.addEventListener('click', () => {
        const eredeti = "url('https://www.wallpaperbetter.com/wallpaper/163/129/314/beautifull-sunset-with-sunflower-high-resolution-jpeg-1080P-wallpaper-middle-size.jpg')";
        const masodik = "url('https://www.wallpaperbetter.com/wallpaper/480/929/236/sunflower-night-free-high-resolution-jpeg-1080P-wallpaper.jpg')";

        div.style.backgroundImage = masodik;

        setTimeout(() => {
            div.style.backgroundImage = eredeti;
        }, 2000);
    });

    return div;
}

document.addEventListener('DOMContentLoaded', () => {
    const dinacDiv = createDinaDiv();
    document.body.appendChild(dinacDiv);
});

    


