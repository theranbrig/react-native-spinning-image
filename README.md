# react-native-spinning-image

## About

Simple spinner for any image file or link that is supported within React Native. Perfect for using a custom icon or image in a loading screen.

## Usage

First install the package using the following:

```ssh
npm i react-native-spinning-image
```

or

```ssh
yarn add react-native-spinning-image
```

Import the package into your React Native file.

```js
import SpinningImage from 'react-native-spinning-image';
```

**Note**

If you you are using an http link you can just enter the link into the `source` property. However, if you are using a static or local asset you must require it first as follows:

```js
const imageSource = require('../PathToImage');
```

Add the Loader to your component.

```js
<SpinningImageLoader source={imageSource} />
```

or

```js
<SpinningImageLoader source='https://link-to-image' />
```

You can also adjust settings like in the example below:

```js
<SpinningImageLoader
  source={imageSource}
  speed={3000}
  rotations={5}
  height={400}
  width={300}
  direction='counter'
/>
```

## Properties

| Property     | Default  | Description                                                                                                                                                   |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`source`** | **None** | **Image source. Enter as a string if using a web url and use a require variable if using a local image as shown above. This requires a value to be entered.** |
| `speed`      | 5000     | Speed of image rotation in milliseconds. A higher number is a slower rotation speed.                                                                                                                 |
| `rotations`  | null     | Set number of rotations for image to spin. It will spin infinitely without an entered property value or a property value of 0                                 |
| `height`     | 200      | Sets height of image                                                                                                                                          |
| `width`      | 200      | Sets width of image                                                                                                                                           |
| direction    | null     | Set to "counter" to make it spin counterclockwise.                                                                                                            |

## Issues

Address any issues or feature requests @

https://github.com/theranbrig/react-native-spinning-image/issues

## Author

Theran Brigowatz is a Full-stack Web Developer currently out of Seoul, South Korea, but transitioning back to the US. Check him out at the following:

- [theran.co](https://www.theran.co)
- theran.brigowatz@gmail.com
- [twitter.com/wellBuilt](https://www.twitter.com/wellBuilt)
- [github.com/theranbrig](https://www.github.com/theranbrig)
