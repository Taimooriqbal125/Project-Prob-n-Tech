document.addEventListener('DOMContentLoaded', function() {
    const widthScreen = screen.width;
    const checkApply = document.getElementById('apply-cursor');
    if (checkApply && widthScreen > 769) {
        const cursorColor = document.getElementById('color-cursor');
        const dotOutline = document.createElement('div')
        dotOutline.classList.add('cursor-dot-outline');
        const dot = document.createElement('div')
        dot.classList.add('cursor-dot');
        const body = document.body;
        body.classList.add('has-cursor-effect');
        body.appendChild(dotOutline);
        body.appendChild(dot);
        if (cursorColor) {
            const color = cursorColor.getAttribute('data-color');
            const style = document.createElement('style');
            style.innerHTML = `
                .cursor-dot {
                    background-color: #262B35 !important;
                }
                .cursor-dot-outline {
                    background-color: ${color} !important;
                    opacity: 0.4 !important;
                }
            `;
            document.head.appendChild(style)
        }
        var cursor = {
            delay: 1,
            _x: 0,
            _y: 0,
            endX: (window.innerWidth / 2),
            endY: (window.innerHeight / 2),
            cursorVisible: !0,
            cursorEnlarged: !1,
            $dot: document.querySelector('.cursor-dot'),
            $outline: document.querySelector('.cursor-dot-outline'),
            init: function() {
                this.dotSize = this.$dot.offsetWidth;
                this.outlineSize = this.$outline.offsetWidth;
                this.setupEventListeners();
                this.animateDotOutline()
            },
            setupEventListeners: function() {
                var self = this;
                document.querySelectorAll('a').forEach(function(el) {
                    el.addEventListener('mouseover', function() {
                        self.cursorEnlarged = !0;
                        self.toggleCursorSize()
                    });
                    el.addEventListener('mouseout', function() {
                        self.cursorEnlarged = !1;
                        self.toggleCursorSize()
                    })
                });
                document.addEventListener('mousedown', function() {
                    self.cursorEnlarged = !0;
                    self.toggleCursorSize()
                });
                document.addEventListener('mouseup', function() {
                    self.cursorEnlarged = !1;
                    self.toggleCursorSize()
                });
                document.addEventListener('mousemove', function(e) {
                    self.cursorVisible = !0;
                    self.toggleCursorVisibility();
                    self.endX = e.pageX;
                    self.endY = e.pageY;
                    self.$dot.style.top = self.endY + 'px';
                    self.$dot.style.left = self.endX + 'px'
                });
                document.addEventListener('mouseenter', function(e) {
                    self.cursorVisible = !0;
                    self.toggleCursorVisibility();
                    self.$dot.style.opacity = 1;
                    self.$outline.style.opacity = 1
                });
                document.addEventListener('mouseleave', function(e) {
                    self.cursorVisible = !0;
                    self.toggleCursorVisibility();
                    self.$dot.style.opacity = 0;
                    self.$outline.style.opacity = 0
                })
            },
            animateDotOutline: function() {
                var self = this;
                self._x += (self.endX - self._x) / self.delay;
                self._y += (self.endY - self._y) / self.delay;
                self.$outline.style.top = self._y + 'px';
                self.$outline.style.left = self._x + 'px';
                requestAnimationFrame(this.animateDotOutline.bind(self))
            },
            toggleCursorSize: function() {
                var self = this;
                if (self.cursorEnlarged) {
                    self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
                    self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)'
                } else {
                    self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                    self.$outline.style.transform = 'translate(-50%, -50%) scale(1)'
                }
            },
            toggleCursorVisibility: function() {
                var self = this;
                if (self.cursorVisible) {
                    self.$dot.style.opacity = 1;
                    self.$outline.style.opacity = 1
                } else {
                    self.$dot.style.opacity = 0;
                    self.$outline.style.opacity = 0
                }
            }
        }
        cursor.init()
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const elePopup = document.querySelector('#disable-popup-video .video-icon-box');
    elePopup.className = 'video-icon-box'
});
document.addEventListener('DOMContentLoaded', function() {
    const hire = document.querySelector(".all-demo");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 50) {
            hire.style.opacity = 1
        } else {
            hire.style.opacity = 0
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 1280) {
        jQuery(".theme-demos .all-demo a").attr("href", "/hire-us")
    }
})