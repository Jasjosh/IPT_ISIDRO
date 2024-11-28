document.addEventListener("DOMContentLoaded", function() {
    new SweetScroll({});
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 300,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 19.18081918081918,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 4,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            nb: 80
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}, false);

class SweetScroll {
    constructor(options = {}, container = "html, body") {
        // Initialization code
        this.options = Object.assign({}, SweetScroll.defaults, options);
        this.container = document.querySelector(container);
        this.header = document.querySelector(this.options.header);
        this._bindContainerClick();
    }

    static defaults = {
        // Default options
        duration: 1000,
        delay: 0,
        easing: 'easeInOutQuad',
        offset: 0,
        verticalScroll: true,
        horizontalScroll: false,
        stopOnUserScroll: true,
        // More default options
    };

    log(message) {
        if (this.options.outputLog) {
            console.log(message);
        }
    }

    getScrollOffset(target) {
        // Calculate scroll offset
        const offset = this.options.offset;
        // More calculations
        return offset;
    }

    normalizeScrollOffset(offset, axis) {
        // Normalize scroll offset
        // Adjust offset based on viewport bounds
        return offset;
    }

    to(target, options) {
        // Scroll to the specified target
        const offset = this.getScrollOffset(target);
        const normalizedOffset = this.normalizeScrollOffset(offset);
        // Perform scrolling animation
    }

    toTop(options) {
        this.to({ top: 0 }, options);
    }

    toLeft(options) {
        this.to({ left: 0 }, options);
    }

    toElement(element, options) {
        const rect = element.getBoundingClientRect();
        this.to({ top: rect.top, left: rect.left }, options);
    }

    stop() {
        // Stop the current scroll animation
    }

    update(options) {
        this.options = Object.assign({}, this.options, options);
    }

    destroy() {
        // Remove all event listeners and clean up
    }

    _bindContainerClick() {
        this.container.addEventListener('click', (event) => {
            // Handle container click
        });
    }

    _animateScroll(start, end, duration, easing, callback) {
        const tween = new Tween(duration, 0, (progress) => {
            const current = start + (end - start) * progress;
            this.container.scrollTo(current.left, current.top);
            if (callback && progress === 1) {
                callback();
            }
        });
        tween.run();
    }
}
