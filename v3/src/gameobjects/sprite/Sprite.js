
var Class = require('../../utils/Class');
var GameObject = require('../GameObject');
var Components = require('../../components');
var SpriteRender = require('./SpriteRender');

var Sprite = new Class({

    Mixins: [
        Components.Alpha,
        Components.BlendMode,
        Components.Flip,
        Components.GetBounds,
        Components.Origin,
        Components.ScaleMode,
        Components.Size,
        Components.Texture,
        Components.Transform,
        Components.Visible,
        SpriteRender
    ],

    initialize:

    function Sprite (state, x, y, texture, frame)
    {
        GameObject.call(this, state);

        this.anims = new Components.Animation(this);

        this.setTexture(texture, frame);
        this.setPosition(x, y);
        this.setSizeToFrame();
        this.setOrigin();
    },

    preUpdate: function (timestamp, frameDelta)
    {
        this.anims.update(timestamp, frameDelta);
    }

});

module.exports = Sprite;
