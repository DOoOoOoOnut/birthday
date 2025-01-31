document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.key === "U")) {
        event.preventDefault();
        alert("대리님 개발자 도구 쓰지 마세요~!");
    }
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("대리님 개발자 도구 쓰지 마세요~!");
});

// 개발자 도구 감지 (개선된 방식)
setInterval(function() {
    let devtools = window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160;
    
    if (devtools) {
        console.clear();
        document.body.innerHTML = "";
        alert("대리님 개발자 도구 쓰지 마세요~!");
    }
}, 1000);
