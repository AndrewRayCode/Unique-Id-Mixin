var id = 1;

var UniqueIdMixin = {

    componentWillMount: function() {

        this._ids = {};
        this._gotten = 1;

    },
    
    componentWillUpdate: function() {

        this._gotten = 1;

    },

    getNextUid: function( ident ) {

        if ( !this._ids[ ident ] ) {
            this._ids[ ident ] = [ 'id', ident, id++ ].join( '-' );
        }
            
        return this._ids[ ident ];

    },
    
    getNextHtmlFor: function() {

        this._gotten++;
        return this.getNextUid( this._gotten - ( this._gotten % 2 ) );

    }

};

module.exports = UniqueIdMixin;
