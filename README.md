eem
===
> Lightweight Event Emitter for ES5

## INSTALL/DOWNLOAD
http://npmjs.com/package/eem

```sh
npm install eem
```

## Node.Js : Import module:
```javascript
var eem = require("eem");
```

## Web : Import module:
```html
<script src="eem/eem.js"></script>
```

### Add listener:
```javascript
e.on('hi', function (data) {
        console.log("hi " + name + "!");
});

```

### Emit event
```javascript
e.emit('hi', 'master');
```

### Remove listener
```javascript
e.remove('hi');
```
