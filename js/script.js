let openModal = function (img, heading, text) {
    let htmlModal = `<div class="projects__modal" id="modal"
                         style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 10; background-color: rgba(0,0,0,0.3); padding: 5px;">
                            <div class="projects__modal-container"
                            style="width: 100%; max-width: 520px; margin: 3rem auto; padding: 0 5px 10px; background-color:#fff; border-radius: 5px; z-index: 20;">
                                <button type="button" class="projects__modal-close close" onclick="closeModal()">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <img class="projects__modal-image" src="${img}" alt=""
                                style="width: 100%; padding: 10px; position: relative;">
                                <h2 class="projects__modal-heading"
                                style="text-align: center; font-size: 30px; color: #344258;">${heading}</h2>
                                <p class="projects__modal-text"
                                style="text-align: center; font-size: 18px; color: #08172d;">${text}</p>
                            </div>
                        </div>`;
    const container = document.getElementsByClassName("projects__examples");
    container[0].insertAdjacentHTML('beforebegin', htmlModal);
};
let closeModal = function () {
    let modal = document.getElementById("modal");
    modal.remove();
};