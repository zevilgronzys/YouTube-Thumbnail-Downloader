function getThumbnail() {
    let url = document.getElementById("videoUrl").value;
    let videoId = extractVideoID(url);
    if (videoId) {
        let thumbnailURL = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        document.getElementById("result").innerHTML = `
            <img src="${thumbnailURL}" alt="Thumbnail">
            <br>
            <a href="${thumbnailURL}" download="thumbnail.jpg">
                <button>Download Thumbnail</button>
            </a>
        `;
    } else {
        alert("Invalid YouTube URL!");
    }
}

function extractVideoID(url) {
    let regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    let match = url.match(regExp);
    return match ? match[1] : null;
}