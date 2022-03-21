# @AndBoh/vue-screen
[![npm version](https://badge.fury.io/js/@andboh%2Fvue-screen.svg)](https://badge.fury.io/js/@andboh%2Fvue-screen)

Reactive wrapper for window size and scroll position for Vue 2.

##Motivation

Sometimes you need to watch the size of the window inside the javascript application code,
but the window object is not reactive. This plugin for Vue 2 provides a reactive object with current
window size, scroll position and touch feature.

## Installation
#### 1. Install plugin


    npm i -S @andboh/vue-screen

### #2. Use in your app

        import VueScreen from '@andboh/vue-screen';

        Vue.use(VueScreen, { options });

## Plugin options fields
*number* **debounce** - Debounce time in ms to avoid recalculating values too often. Defaults to 150.

*number* **defaultWidth**, *number* **defaultHeight** - Standard window size if the window object
is undefined (for example, with SSR). Defaults to 1920 and 1080.

## Usage
You can get value in any component accessing `this.$screen` option 

        console.log(this.$screen);

---
Result:

        {
              window: {
                   height: 969, // window client height
                   width: 1920, // window client width
              },
              scroll: {
                  x: 0, // scroll x position
                  y: 0, // scroll y position
              },
              hasTouch: false // is it touch device
        }

Also, you can set a deep watcher for the whole object

        watch: {
            $store: {
                handler(newVal) {
                    ...
                },
                deep: true,
            }
        }

or any field of it

        watch: {
            '$store.window.width'(newVal) {
                ...
            }
        }

## License
[MIT](https://github.com/AndBoh/vue-screen/blob/main/LICENSE)
