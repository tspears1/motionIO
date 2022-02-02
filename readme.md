# MotionIO

MotionIO is a set of Vue components that use [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and [Anime.js](https://animejs.com/) to create simple transitional animations on scroll as an element or group of elements enter or exit the viewport.

`Motion` is the base component which can be applied to a single element with or without children, however it must only have one parent element.

`MotionText` will break up a string of text and animate each character separately. It will respect any html tags wrapped around the text.

`Intersect` is purely the IntersectionObserver component, which emits events for entering and exiting that can be used to trigger callbacks. Best for css based animations or using a different animation library with.


## Props - Motion ( Vue )

| Prop | Type      | Required  | Default   |
| :--- | :-------- | :--------- | :------- |
| `once` | `Boolean` | `false` | `false` |
| `observerRoot` | `Object` | `false` | `{ root: null, rootMargin: '0px' }` |
| `threshold`|`Function / Array / Number `| `false`| `0.5`|
| `children` | `Array / Boolean` | `false` | `false` |
|`custom`|`Object`|`false`|`null`|
|`delay`|`Number / Function`|`false`|`0`|
|`duration`|`Number / Function`|`false`| `1000` (ms)|
|`easing`|`String / Function`|`false`|`'linear'`|
|`origin`|`String`|`false`|`'center center'`|
|`preset`|`String`|`false`|`'fadeIn'`|
|`svg`|`Boolean`|`false`|`false`|
|`stagger`| `Array / Number` |`false`| `null`|

## Props - MotionText ( Vue )

| Prop | Type      | Required  | Default   |
| :--- | :-------- | :--------- | :------- |
| `applyStyles` | `Boolean` | `false` | `true` |
| `block` | `String` | `false` | `'motionText` |
| `mask` | `Boolean` | `false` | `false` |
| `tag` | `String` | `false` | `'span'` |
| `wordWrap` | `Boolean` | `false` | `true` |
| `once` | `Boolean` | `false` | `false` |
| `observerRoot` | `Object` | `false` | `{ root: null, rootMargin: '0px' }` |
| `threshold`|`Function / Array / Number `| `false`| `0.5`|
| `children` | `Array / Boolean` | `false` | `false` |
|`custom`|`Object`|`false`|`null`|
|`delay`|`Number / Function`|`false`|`0`|
|`duration`|`Number / Function`|`false`| `500` (ms)|
|`easing`|`String / Function`|`false`|`'linear'`|
|`origin`|`String`|`false`|`'center center'`|
|`preset`|`String`|`false`|`'fadeIn'`|
|`svg`|`Boolean`|`false`|`false`|
|`stagger`| `Array / Number` |`false`| `100`|

## Props - Intersect ( Vue )

| Prop | Type      | Required  | Default   |
| :--- | :-------- | :--------- | :------- |
| `once` | `Boolean` | `false` | `false` |
| `observerRoot` | `Object` | `false` | `{ root: null, rootMargin: '0px' }` |
| `threshold`|`Function / Array / Number `| `false`| `0.5`|
