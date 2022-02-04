# MotionIO

MotionIO is a set of Vue components that use [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and [Anime.js](https://animejs.com/) to create simple transitional animations on scroll as an element or group of elements enter or exit the viewport.

`Motion` is the base component which can be applied to a single element with or without children, however it must only have one parent element.

`MotionText` will break up a string of text and animate each character separately. It will respect any html tags wrapped around the text.

`Intersect` is purely the IntersectionObserver component, which emits events for entering and exiting that can be used to trigger callbacks. Best for css based animations or using a different animation library with.


## Props - Motion ( Vue )

| Prop | Type      | Default   | Docs |
| :--- | :-------- | :------- | :------|
| `children` | `Array / Boolean` | `false` | [See below](#children)|
| `custom`|`Object`|`null`| [AnimeJS](https://animejs.com/documentation)|
| `delay`|`Number / Function`|`0`| [AnimeJS](https://animejs.com/documentation/#delay)|
| `duration`|`Number / Function`| `1000` (ms)| [AnimeJS](https://animejs.com/documentation/#duration)|
| `easing`|`String / Function`|`'linear'`| [AnimeJS](https://animejs.com/documentation/#easings)|
| `observerRoot` | `Object` | `{ root: null, rootMargin: '0px' }` | [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|
| `once` | `Boolean` | `false` | [See below](#once)|
| `origin`|`String`|`'center center'`| [CSS transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
| `preset`|`String`|`'fadeIn'`||
| `stagger`| `Array / Number` | `null`| [AnimeJS](https://animejs.com/documentation)|
| `svg`|`Boolean`|`false`| [AnimeJS](https://animejs.com/documentation/#lineDrawing)|
| `threshold`|`Function / Array / Number `| `0.5`|[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|

## Props - MotionText ( Vue )

| Prop | Type      | Default   | Docs |
| :--- | :-------- | :------- | :---- |
| `applyStyles` | `Boolean` | `true` ||
| `block` | `String` | `'motionText` ||
| `custom`|`Object`|`null`|[AnimeJS](https://animejs.com/documentation)|
| `delay`|`Number / Function`|`0`|[AnimeJS](https://animejs.com/documentation/#delay)|
| `duration`|`Number / Function`| `500` (ms)|[AnimeJS](https://animejs.com/documentation/#duration)|
| `easing`|`String / Function`|`'linear'`|[AnimeJS](https://animejs.com/documentation/#easings)|
| `mask` | `Boolean` | `false` ||
| `observerRoot` | `Object` | `{ root: null, rootMargin: '0px' }` |[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|
| `once` | `Boolean` | `false` ||
| `origin`|`String`|`'center center'`|[CSS transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)|
| `preset`|`String`|`'fadeIn'`||
| `stagger`| `Array / Number` | `100`|[AnimeJS](https://animejs.com/documentation/#staggering)|
| `tag` | `String` | `'span'` ||
| `threshold`|`Function / Array / Number `| `0.5`|[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|
| `wordTarget` | `Boolean` | `false` ||
| `wordWrap` | `Boolean` | `true` ||

## Props - Intersect ( Vue )

| Prop | Type      | Default   | Docs |
| :--- | :-------- | :------- | :---- |
| `once` | `Boolean` | `false` ||
| `observerRoot` | `Object` | `{ root: null, rootMargin: '0px' }` |[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|
| `threshold`|`Function / Array / Number `| `0.5`|[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|


### `children`
`true` to animate all direct children - works best when adding a `stagger`

Also accepts an array of any child selectors (direct or nested) for more specificity.

### `custom`
Instead of using one of the presets, add your own custom anime object. 

Does not support AnimeJS Timelines. `delay`, `duration` and `easing` should be applied by their props.


Full list of options can be found in the [AnimeJS Documentation](https://animejs.com/documentation)

#### Example
```
<motion :custom="{ rotateX: 50, opacity: [ 0, 1 ], translateX: '-100%' }" easing="easeOutExpo">
    <div class="box__wrapper">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</motion>
```

### `once`
If `true`, will only run the animation on first entrance with no exit animation.

### `preset`
Pre-built animations - see below for list and demos.

### `stagger`
AnimeJS natively has a built-in stagger function used with the delay property. This has been separated into it's own prop for ease. Accepts a number (milliseconds) or array of two numbers - a start and end value which will be distributed evenly.

### `svg`
If `true`, creates SVG path drawing animation using the `stroke-dashoffset` property.

