/* -----------------------------------------
   MEDIA ARRAYS FOR EACH PROJECT SECTION
----------------------------------------- */

const media_fullhome = [
    // 29 IMAGES
    ...Array.from({ length: 29 }, (_, i) => ({
        type: "image",
        src: `projects/carandang-residences-full-home-build/images/prj-fullhome-photo${i + 1}.jpg`
    }))
];

const media_majorreno = [
    // 14 IMAGES
    ...Array.from({ length: 14 }, (_, i) => ({
        type: "image",
        src: `projects/martelino-residences-major-renovation/images/prj-major-reno-photo${i + 1}.jpg`
    })),

    // 3 VIDEOS
    { type: "video", src: "projects/martelino-residences-major-renovation/videos/prj-major-reno-vid1.mp4" },
    { type: "video", src: "projects/martelino-residences-major-renovation/videos/prj-major-reno-vid2.mp4" },
    { type: "video", src: "projects/martelino-residences-major-renovation/videos/prj-major-reno-vid3.mp4" }
];

const media_fencegate = [
    // 4 IMAGES
    ...Array.from({ length: 4 }, (_, i) => ({
        type: "image",
        src: `projects/cheok-fence-gate/images/prj-fence-gate-photo${i + 1}.jpg`
    })),

    // 2 VIDEOS
    { type: "video", src: "projects/cheok-fence-gate/videos/prj-fence-gate-vid1.mp4" },
    { type: "video", src: "projects/cheok-fence-gate/videos/prj-fence-gate-vid2.mp4" }
];

const media_ongoing = [
    // 12 IMAGES
    ...Array.from({ length: 12 }, (_, i) => ({
        type: "image",
        src: `projects/on-going-project-nuvali/images/prj-on-going-photo${i + 1}.jpg`
    })),

    // 5 VIDEOS
    { type: "video", src: "projects/on-going-project-nuvali/videos/prj-on-going-vid1.mp4" },
    { type: "video", src: "projects/on-going-project-nuvali/videos/prj-on-going-vid2.mp4" },
    { type: "video", src: "projects/on-going-project-nuvali/videos/prj-on-going-vid3.mp4" },
    { type: "video", src: "projects/on-going-project-nuvali/videos/prj-on-going-vid4.mp4" },
    { type: "video", src: "projects/on-going-project-nuvali/videos/prj-on-going-vid5.mp4" }
];

/* -----------------------------------------
   LIGHTBOX LOGIC
----------------------------------------- */

let currentSection = null;
let currentIndex = 0;

function openLightbox(section, index) {
    currentSection = section;
    currentIndex = index;

    updateLightbox();
    document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
    document.getElementById("lightbox-content").innerHTML = "";
}

function nextMedia() {
    const media = getMediaArray();
    currentIndex = (currentIndex + 1) % media.length;
    updateLightbox();
}

function prevMedia() {
    const media = getMediaArray();
    currentIndex = (currentIndex - 1 + media.length) % media.length;
    updateLightbox();
}

function getMediaArray() {
    switch (currentSection) {
        case "fullhome": return media_fullhome;
        case "majorreno": return media_majorreno;
        case "fencegate": return media_fencegate;
        case "ongoing": return media_ongoing;
        default: return [];
    }
}

function updateLightbox() {
    const container = document.getElementById("lightbox-content");
    const media = getMediaArray();
    const item = media[currentIndex];

    if (!item) return;

    if (item.type === "image") {
        container.innerHTML = `<img src="${item.src}" alt="">`;
    } else {
        container.innerHTML = `
            <video src="${item.src}" controls autoplay muted></video>
        `;
    }
}

/* -----------------------------------------
   CLOSE LIGHTBOX WITH ESC KEY
----------------------------------------- */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});
