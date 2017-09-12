# angular-portal

Inspired by Ryan Florence concept of portals for React, and the implementation of portal-vue.

This angular 1 component allows you to detach some part of your component's view and render it in some other part of the DOM.

It can be used to simplify the creation of other components, such as popups and tooltips in a declarative manner.


Usage:

```html
<div>
  <input type="text" ng-model="$ctrl.value">

  <portal to="target" ng-if="$ctrl.isOpen">
     <!-- you component scope is available here -->
     <div>{{$ctrl.value}}</div>
  </portal>
</div>
```

```html
<!-- Somewhere around the DOM -->
<portal-target name="target"></portal-target>
```


- Portals' default target is the bottom of the body
- use `<portal detach="false" .. />` to keep the portal's content in place

---
**Todo:** documentation & examples
