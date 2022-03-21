const VueScreen = {
  debounce(f, ms) {
    let isCooldown = false;
    return function() {
      if (isCooldown) return;
      f.apply(this, arguments);
      isCooldown = true;
      setTimeout(() => isCooldown = false, ms);
    };
  },

  defaultOptions: {
    debounce: 150,
    defaultHeight: 1080,
    defaultWidth: 1920,
    hasTouch: false,
  },

  install(Vue, options = {}) {
    const {
      debounce,
      defaultHeight,
      defaultWidth,
      hasTouch,
    } = { ...this.defaultOptions, ...options };

    const result = {
      window: {
        height: defaultHeight,
        width: defaultWidth,
      },
      scroll: {
        x: 0,
        y: 0,
      },
      hasTouch: hasTouch,
    };

    if (typeof window !== 'undefined') {
      const updateScreenSize = this.debounce(() => {
        result.window.height = window.innerHeight;
        result.window.width = window.innerWidth;
      }, debounce);

      const updateScrollPosition = this.debounce(() => {
        result.scroll.x = window.scrollX;
        result.scroll.y = window.scrollY;
      }, debounce);

      updateScreenSize();
      updateScrollPosition();
      result.hasTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      window.addEventListener('resize', updateScreenSize);
      window.addEventListener('scroll', updateScrollPosition, { passive: true });
    }

    Vue.prototype.$screen = Vue.observable(result);
  }
}

export default VueScreen;
