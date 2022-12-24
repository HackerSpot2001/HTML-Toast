const buttons = document.querySelectorAll('.buttons .btn')
const notifications = document.querySelector('.notifications')
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => createToast(e))
})
const toastContent = {
    success: {
        icon: "fa-circle-check",
        txt: "Success: This is a success Toast"
    },
    error: {
        icon: "fa-circle-xmark",
        txt: "Error: This is a Error Toast"
    },
    warning: {
        icon: "fa-circle-exclamation",
        txt: "Warning: This is a Warning Toast"
    },
    info: {
        icon: "fa-circle-info",
        txt: "Info: This is a Info Toast"
    }
}
const createToast = (e) => {
    var id = e.target.id;
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    const {icon,txt} = toastContent[id];
    toast.innerHTML = `<div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${txt}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
                    `;
    notifications.appendChild(toast)
    setTimeout(() => {
        removeToast(toast)
    }, 5000);
}

const removeToast = (toast)=>{
        toast.classList.add('hide')
        setTimeout(()=>{
            toast.remove()
        },500);
}