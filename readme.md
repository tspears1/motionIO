# MotionIO

MotionIO is a set of Vue components that use [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and [Anime.js](https://animejs.com/) to create simple transitional animations on scroll as an element or group of elements enter or exit the viewport.

`Motion` is the base component which can be applied to a single element with or without children, however it must only have one parent element.

`MotionText` will break up a string of text and animate each character separately. It will respect any html tags wrapped around the text.

`Intersect` is purely the IntersectionObserver component, which emits events for entering and exiting that can be used to trigger callbacks. Best for css based animations or using a different animation library with.


<<<<<<< HEAD
## Props: `Motion`
=======
## Props - Motion ( Vue )
>>>>>>> c9fbbf39ef0f181b5634c50a20c087839897a3a0

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
<<<<<<< HEAD
| `preset`|`String`|`'fadeIn'`| [See below](#preset)|
=======
| `preset`|`String`|`'fadeIn'`||
>>>>>>> c9fbbf39ef0f181b5634c50a20c087839897a3a0
| `stagger`| `Array / Number` | `null`| [AnimeJS](https://animejs.com/documentation)|
| `svg`|`Boolean`|`false`| [AnimeJS](https://animejs.com/documentation/#lineDrawing)|
| `threshold`|`Function / Array / Number `| `0.5`|[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|

<<<<<<< HEAD
## Props: `MotionText`

| Prop | Type      | Default   | Docs |
| :--- | :-------- | :------- | :---- |
| `applyStyles` | `Boolean` | `true` |[See below](#applyStyles)|
| `block` | `String` | `'motionText` |[See below](#block)|
=======
## Props - MotionText ( Vue )

| Prop | Type      | Default   | Docs |
| :--- | :-------- | :------- | :---- |
| `applyStyles` | `Boolean` | `true` ||
| `block` | `String` | `'motionText` ||
>>>>>>> c9fbbf39ef0f181b5634c50a20c087839897a3a0
| `custom`|`Object`|`null`|[AnimeJS](https://animejs.com/documentation)|
| `delay`|`Number / Function`|`0`|[AnimeJS](https://animejs.com/documentation/#delay)|
| `duration`|`Number / Function`| `500` (ms)|[AnimeJS](https://animejs.com/documentation/#duration)|
| `easing`|`String / Function`|`'linear'`|[AnimeJS](https://animejs.com/documentation/#easings)|
<<<<<<< HEAD
| `mask` | `Boolean` | `false` |[See below](#mask)|
| `observerRoot` | `Object` | `{ root: null, rootMargin: '0px' }` |[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|
| `once` | `Boolean` | `false` |[See below](#once)|
| `origin`|`String`|`'center center'`|[CSS transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)|
| `preset`|`String`|`'fadeIn'`|[See below](#preset)|
| `stagger`| `Array / Number` | `100`|[AnimeJS](https://animejs.com/documentation/#staggering)|
| `tag` | `String` | `'span'` |[See below](#tag)|
| `threshold`|`Function / Array / Number `| `0.5`|[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|
| `wordTarget` | `Boolean` | `false` |[See below](#wordTarget)|
| `wordWrap` | `Boolean` | `true` |[See below](#wordWrap)|

## Props: `Intersect`

| Prop | Type      | Default   | Docs |
| :--- | :-------- | :------- | :---- |
| `once` | `Boolean` | `false` |[See below](#once)|
=======
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
>>>>>>> c9fbbf39ef0f181b5634c50a20c087839897a3a0
| `observerRoot` | `Object` | `{ root: null, rootMargin: '0px' }` |[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|
| `threshold`|`Function / Array / Number `| `0.5`|[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)|


<<<<<<< HEAD
## Events

|Event | Payload | Notes |
| :--- | :------ | :---- |
| `'change'` | entry.isIntersecting | Fires on every IO change. |
| `'enter'` | entry | Fires on every IO entrance. |
| `'leave'` | entry | Fires on every IO exit. |
| `'begin'` | anime instance | Fires when animation begins. |
| `'complete'` | anime instance | Fires when animation has completed. |

## Scoped Slots
All three components use scoped slots which allows you to directly pass the following to a nested component: `hasEntered`, `anime` (animejs instance object), `observer` ( intersection observer instance object)

## Additional Documentation

### `applyStyles`
If `true` will add `display: inline-flex` and `margin-left: 0.25em` to each word wrapper.


### `block`
String representing the first part of all css classes applied to DOM elements.


=======
>>>>>>> c9fbbf39ef0f181b5634c50a20c087839897a3a0
### `children`
`true` to animate all direct children - works best when adding a `stagger`

Also accepts an array of any child selectors (direct or nested) for more specificity.

<<<<<<< HEAD

### `custom`
Instead of using one of the presets, add your own custom anime object.
=======
### `custom`
Instead of using one of the presets, add your own custom anime object. 
>>>>>>> c9fbbf39ef0f181b5634c50a20c087839897a3a0

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

<<<<<<< HEAD

### `mask`
If `true`, adds a clip-path mask around each word element.


### `once`
If `true`, will only run the animation on first entrance with no exit animation.


### `preset`
Pre-built animations. For list and examples, [View Demo](https://tspears1.github.io/motionIO/example/)

=======
### `once`
If `true`, will only run the animation on first entrance with no exit animation.

### `preset`
Pre-built animations - see below for list and demos.
>>>>>>> c9fbbf39ef0f181b5634c50a20c087839897a3a0

### `stagger`
AnimeJS natively has a built-in stagger function used with the delay property. This has been separated into it's own prop for ease. Accepts a number (milliseconds) or array of two numbers - a start and end value which will be distributed evenly.

<<<<<<< HEAD

### `svg`
If `true`, creates SVG path drawing animation using the `stroke-dashoffset` property.


### `tag`
HTML tag to use for the parent element.


### `wordTarget`
If `true`, will animate each individual word element, instead of each letter.


### `wordWrap`
If `true`, wraps letters in additional `div` to group each word. Required for most preset animations to work correctly.

=======
### `svg`
If `true`, creates SVG path drawing animation using the `stroke-dashoffset` property.

>>>>>>> c9fbbf39ef0f181b5634c50a20c087839897a3a0
