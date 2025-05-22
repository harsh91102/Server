document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const fileList = document.getElementById("file-list");
  const player = document.getElementById("player");
  const toggleBtn = document.getElementById("toggle-theme");

  const files = [
    "http://100.64.126.75:8000/creampose.mp3",
    "http://100.64.126.75:8000/chalmereghar.mp3",
    "http://100.64.126.75:8000/LA.mp4",
    "http://100.64.126.75:8000/WAVY.mp4",
    "http://100.64.126.75:8000/TryME.mp4",
    "http://100.64.126.75:8000/Pyar.mp4",
    "http://100.64.126.75:8000/Flower.mp4",
    "http://100.64.126.75:8000/Tantrums.mp4",
    "http://100.64.126.75:8000/Tantrumsaudio.mp3",
    "http://100.64.126.75:8000/HIPHOP.mp4",
    "http://100.64.126.75:8000/videoplayback.mp4",
    "http://100.64.126.75:8000/11K.mp4",
    "http://100.64.126.75:8000/Rubaru.mp4",
    "http://100.64.126.75:8000/BringMeBack.mp4",
    "http://100.64.126.75:8000/Glassy.mp4",
  ];

  function displayFiles(filter = "") {
    fileList.innerHTML = "";

    files
      .filter(file => file.toLowerCase().includes(filter.toLowerCase()))
      .forEach(file => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = file;
        link.textContent = file;
        link.addEventListener("click", (e) => {
          e.preventDefault();
          playMedia(file);
        });
        li.appendChild(link);
        fileList.appendChild(li);
      });
  }

  function playMedia(file) {
    player.innerHTML = "";
    const ext = file.split('.').pop().toLowerCase();
    let media;

    if (ext === "mp3") {
      media = document.createElement("audio");
    } else if (ext === "mp4") {
      media = document.createElement("video");
      media.width = 480;
    }

    if (media) {
      media.src = file;
      media.controls = true;
      media.autoplay = true;
      player.appendChild(media);

      // 🔁 Auto play next file when current one ends
      const currentIndex = files.indexOf(file);

      media.addEventListener("ended", () => {
        if (currentIndex >= 0 && currentIndex < files.length - 1) {
          const nextFile = files[currentIndex + 1];
          playMedia(nextFile);
        }
      });
    }
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  searchInput.addEventListener("input", (e) => {
    displayFiles(e.target.value);
  });

  displayFiles(); // Initial load
});
