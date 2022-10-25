# bu-gap-calculator-widget

## Usage

In order to embed the widget add the following snippet at any location on the hosting page.
```html
<script>
  (function (w,d,s,o,f,js,fjs) {
      w['JS-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
      js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
      js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'mw', './widget.js'));
  mw('init');
</script>
```

You can pass additional configurations to widget like so:

```
mw('init', { someConfiguration: 42 });
```

## Develop

To get started:
```
yarn install
yarn dev
```
This will open the browser with "demo" page which hosts the widget.
