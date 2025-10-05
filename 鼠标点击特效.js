! function (e, t, a) {
    function r() {
        for (let e = 0, len = s.length; e < len; e++) {
            const heart = s[e];
            if (heart.alpha <= 0) {
                t.body.removeChild(heart.el);
                s.splice(e, 1);
                len--;
            } else {
                heart.y--;
                heart.scale += .004;
                heart.alpha -= .013;
                heart.el.style.cssText =
                    `left: ${heart.x}px; top: ${heart.y}px; opacity: ${heart.alpha}; transform: scale(${heart.scale},${heart.scale}) rotate(45deg); background: ${heart.color}; z-index: 99999`;
            }
        }
        requestAnimationFrame(r);
    }

    function n() {
        const oldOnClick = e.onclick;
        e.onclick = function (event) {
            oldOnClick && oldOnClick();
            o(event);
        };
    }

    function o(event) {
        const heart = t.createElement("div");
        heart.className = "heart";
        s.push({
            el: heart,
            x: event.clientX - 5,
            y: event.clientY - 5,
            scale: 1,
            alpha: 1,
            color: c()
        });
        t.body.appendChild(heart);
    }

    function i(style) {
        const css = t.createElement("style");
        css.type = "text/css";
        css.appendChild(t.createTextNode(style));
        t.querySelector("head").appendChild(css);
    }

    function c() {
        return `rgb(${~~(255 * Math.random())},${~~(255 * Math.random())},${~~(255 * Math.random())})`;
    }

    const s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame ||
        e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60);
        };
    i(
        ".heart{width:10px;height:10px;position:fixed;background:#f00;transform:rotate(45deg);border-radius:50%;} .heart:after,.heart:before{content:'';width:inherit;height:inherit;background:inherit;border-radius:inherit;position:fixed;border-radius:50%;} .heart:after{top:-5px;} .heart:before{left:-5px;}"
    );
    n();
    r();
}(window, document);