function getThumbnail() {
    let videoUrl = document.getElementById("videoUrl").value;
    let videoId = extractVideoID(videoUrl);

    if (videoId) {
        document.getElementById("thumbnailContainer").classList.remove("hidden");

        // Different thumbnail sizes
        let thumbnail4K = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        let thumbnailHD = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        let thumbnailSD = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
        let thumbnailLow = `https://img.youtube.com/vi/${videoId}/default.jpg`;

        // Set the thumbnail image
        document.getElementById("thumbnail").src = thumbnail4K;

        // Set download links
        document.getElementById("download4K").href = thumbnail4K;
        document.getElementById("downloadHD").href = thumbnailHD;
        document.getElementById("downloadSD").href = thumbnailSD;
        document.getElementById("downloadLow").href = thumbnailLow;
    } else {
        alert("Invalid YouTube URL. Please enter a correct one!");
    }
}

function extractVideoID(url) {
    let match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
}
