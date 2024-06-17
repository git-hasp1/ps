"use strict"

// Common 
const OPEN = "open"

const openPopup = (node, cls = OPEN) => node.classList.add(cls);

const closePopup = (node, cls = OPEN) => node.classList.remove(cls);

const only_close_popup = (node, cls = "open") => node.classList.remove(cls);

const conteinsPopupState = (node, cls = "open") => { 
  if (node.classList.contains(cls)) {
    closePopup(node);
  } else {
    openPopup(node);
  }
};

// Map popup
const minimap = document.querySelector("#minimap");
const modalMinimap = document.querySelector("#modal-minimap");
const closeMinimap = document.querySelector("#close-modal-map-btn");
const modalMapBackground = document.querySelector("#modal-minimap .modal__box");

minimap.addEventListener("click", () => {
  conteinsPopupState(modalMinimap);
});

closeMinimap.addEventListener("click", () => {
  conteinsPopupState(modalMinimap);
});

modalMinimap.addEventListener("click", event => {
  if (event._isClickWithInModal) return;
  conteinsPopupState(modalMinimap)
})

modalMapBackground.addEventListener("click", event => {
  event._isClickWithInModal = true
})

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    only_close_popup(modalMinimap)
  };
});


// Video popup
const video = document.querySelector('#video');
const videoDiv = document.querySelector("#video-div");
const modalVideo = document.querySelector("#modal-video");
const closeVideo = document.querySelector("#close-modal-video-btn")
const modalVideoBackground = document.querySelector("#modal-video .modal__box");

console.log(video)


const conteinsPopupVideoState = (node, cls = "open") => { 
  if (node.classList.contains(cls)) {
    video.pause();
    closePopup(node);
  } else {
    openPopup(node);
    video.play();
  }
};


videoDiv.addEventListener("click", () => {
  conteinsPopupVideoState(modalVideo);
});

closeVideo.addEventListener("click", () => {
  conteinsPopupVideoState(modalVideo);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    only_close_popup(modalVideo)
  };
});


// th popup
const th = document.querySelector('#th');
const thDiv = document.querySelector('#th-div');
const modalTh = document.querySelector('#modal-th');
const closeTh = document.querySelector('#close-modal-th-btn');
const modalThBackground = document.querySelector("#modal-th .modal__box");

console.log(closeTh)

thDiv.addEventListener("click", () => {
  conteinsPopupState(modalTh);
});

closeTh.addEventListener("click", () => {
  conteinsPopupState(modalTh);
});

// history popup
const history = document.querySelector("#history");
const modalHistory = document.querySelector("#modal-history");
const closeHistory = document.querySelector("#close-modal-history-btn");
const modalHistoryBackground = document.querySelector("#modal-history .modal__box");

history.addEventListener("click", () => {
  conteinsPopupState(modalHistory);
});

closeHistory.addEventListener("click", () => {
  conteinsPopupState(modalHistory);
});

// modalMinimap.addEventListener("click", event => {
//   if (event._isClickWithInModal) return;
//   conteinsPopupState(modalMinimap)
// })
//
// modalMapBackground.addEventListener("click", event => {
//   event._isClickWithInModal = true
// })
//
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    only_close_popup(modalHistory)
  };
});
