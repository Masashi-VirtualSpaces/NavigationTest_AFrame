/* global THREE AFRAME  */
AFRAME.registerComponent('sync-position', {
      schema: { type: 'selector' },
      tick: function () {
        var position = this.data.getAttribute('position');
        var bodyPosition = this.el.getAttribute('position');
        var bodyScale = (position.y)/(1.08);
        var newBodyPosition = position.y - ((bodyScale)*(0.5)*0.5408) - 0.6;
        this.el.setAttribute('scale', 'y',bodyScale);
        this.el.setAttribute('position','y',newBodyPosition);
        this.el.setAttribute('position', 'x', position.x);
        this.el.setAttribute('position', 'z', position.z);
      }
    });