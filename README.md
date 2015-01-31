Unique Id Mixin by [@andrewray](https://twitter.com/andrewray)
---------------

This ReactJS mixin adds component methods letting you generate unique IDs for
your current component. This is useful when you need to assign `for=""`
attributes for labels and their respective inputs.

Install
-------

    npm install unique-id-mixin --save-dev

Example Usage
-------------

    var UniqeIdMixin = require('unique-id-mixin');
    
    var Component = React.createClass({

        mixins: [ UniqeIdMixin ],

        render: function() {

            <label htmlFor={ this.getNextUid( 'unique-string' ) }>Label</label>
            <input id={ this.getNextUid( 'unique-string' ) } type="text" />

        }

    });

The above can be a bit verbose to type, and has the problem that you need to
duplicate the string between each HTML element. There is also a convenience
method that will generate UIDs every *other* call. The first two calls will
return the same UID, then the next two calls will return a new UID, etc.

    <!-- Both function calls return the same UID -->
    <label htmlFor={ this.getNextHtmlFor() }>Label</label>
    <input id={ this.getNextHtmlFor() } type="text" />

    <!-- Both calls now return the same UID, but different than above -->
    <label htmlFor={ this.getNextHtmlFor() }>Label</label>
    <input id={ this.getNextHtmlFor() } type="text" />

API
---

**`this.getNextUid( identifier:String )`**

Returns a UID generated using the `identifier`. If `identifier` has already
been passed, the cached UID will be returned.

**`this.getNextHtmlFor()`**

Returns a UID which changes every other call.
