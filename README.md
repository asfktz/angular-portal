# Angular Portal

Inspired by [Ryan Florence talk about portals in React](https://youtu.be/z5e7kWSHWTg?t=15m21s),
and by the implementation of [portal-vue](https://github.com/LinusBorg/portal-vue).

This angular 1 component allows you to detach some part of your component's view and render it in some other part of the DOM.

## Usage:

```html
<div>
  <input type="text" ng-model="$ctrl.value">

  <portal to="target">
    <!-- This div will be rendered at the bottom of the body -->
     <div>{{$ctrl.value}}</div>
  </portal>
</div>
```

<img src="./showoff.gif">

### Specify a diffrent target
You can also specify an alternative target, other the the bottom of the body

Add a target wherever you wish your portal to be and give it a unique name:
```html
<portal-target name="moon"></portal-target>
```

Set the `to` attribue on your portal to the name of the target:
```html
<portal to="name" name="moon"></portal-target>
```


- Portals' default target is the bottom of the body
- use `<portal detach="false" .. />` to keep the portal's content in place

## Why:
It can be used as a building block for creating other components on top of it, such as a popup or a tooltip,
<br> in a declarative manner.




---
## Todo:
- documentation & examples
