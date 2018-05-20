// jQuery.event.swipe
// 0.5
// Stephen Band

// Dependencies
// jQuery.event.move 1.2

// One of swipeleft, swiperight, swipeup or swipedown is triggered on
// moveend, when the move has covered a threshold ratio of the dimension
// of the target node, or has gone really fast. Threshold and velocity
// sensitivity changed with:
//
// jQuery.event.special.swipe.settings.threshold
// jQuery.event.special.swipe.settings.sensitivity

(function (thisModule) {
	if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', undefined, 'jquery.event.move'], thisModule);
    } else if ((typeof module !== "undefined" && module !== null) && module.exports) {
        module.exports = thisModule;
	} else {
		// Browser globals
        thisModule(jQuery);
	}
})(function(jQuery, undefined){
	var add = jQuery.event.add,
	   
	    remove = jQuery.event.remove,

	    // Just sugar, so we can have arguments in the same order as
	    // add and remove.
	    trigger = function(node, type, data) {
	    	jQuery.event.trigger(type, data, node);
	    },

	    settings = {
	    	// Ratio of distance over target finger must travel to be
	    	// considered a swipe.
	    	threshold: 0.4,
	    	// Faster fingers can travel shorter distances to be considered
	    	// swipes. 'sensitivity' controls how much. Bigger is shorter.
	    	sensitivity: 6
	    };

	function moveend(e) {
		var w, h, event;

		w = e.currentTarget.offsetWidth;
		h = e.currentTarget.offsetHeight;

		// Copy over some useful properties from the move event
		event = {
			distX: e.distX,
			distY: e.distY,
			velocityX: e.velocityX,
			velocityY: e.velocityY,
			finger: e.finger
		};

		// Find out which of the four directions was swiped
		if (e.distX > e.distY) {
			if (e.distX > -e.distY) {
				if (e.distX/w > settings.threshold || e.velocityX * e.distX/w * settings.sensitivity > 1) {
					event.type = 'swiperight';
					trigger(e.currentTarget, event);
				}
			}
			else {
				if (-e.distY/h > settings.threshold || e.velocityY * e.distY/w * settings.sensitivity > 1) {
					event.type = 'swipeup';
					trigger(e.currentTarget, event);
				}
			}
		}
		else {
			if (e.distX > -e.distY) {
				if (e.distY/h > settings.threshold || e.velocityY * e.distY/w * settings.sensitivity > 1) {
					event.type = 'swipedown';
					trigger(e.currentTarget, event);
				}
			}
			else {
				if (-e.distX/w > settings.threshold || e.velocityX * e.distX/w * settings.sensitivity > 1) {
					event.type = 'swipeleft';
					trigger(e.currentTarget, event);
				}
			}
		}
	}

	function getData(node) {
		var data = jQuery.data(node, 'event_swipe');
		
		if (!data) {
			data = { count: 0 };
			jQuery.data(node, 'event_swipe', data);
		}
		
		return data;
	}

	jQuery.event.special.swipe =
	jQuery.event.special.swipeleft =
	jQuery.event.special.swiperight =
	jQuery.event.special.swipeup =
	jQuery.event.special.swipedown = {
		setup: function( data, namespaces, eventHandle ) {
			var data = getData(this);

			// If another swipe event is already setup, don't setup again.
			if (data.count++ > 0) { return; }

			add(this, 'moveend', moveend);

			return true;
		},

		teardown: function() {
			var data = getData(this);

			// If another swipe event is still setup, don't teardown.
			if (--data.count > 0) { return; }

			remove(this, 'moveend', moveend);

			return true;
		},

		settings: settings
	};
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcXVlcnkuZXZlbnQuc3dpcGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8galF1ZXJ5LmV2ZW50LnN3aXBlXHJcbi8vIDAuNVxyXG4vLyBTdGVwaGVuIEJhbmRcclxuXHJcbi8vIERlcGVuZGVuY2llc1xyXG4vLyBqUXVlcnkuZXZlbnQubW92ZSAxLjJcclxuXHJcbi8vIE9uZSBvZiBzd2lwZWxlZnQsIHN3aXBlcmlnaHQsIHN3aXBldXAgb3Igc3dpcGVkb3duIGlzIHRyaWdnZXJlZCBvblxyXG4vLyBtb3ZlZW5kLCB3aGVuIHRoZSBtb3ZlIGhhcyBjb3ZlcmVkIGEgdGhyZXNob2xkIHJhdGlvIG9mIHRoZSBkaW1lbnNpb25cclxuLy8gb2YgdGhlIHRhcmdldCBub2RlLCBvciBoYXMgZ29uZSByZWFsbHkgZmFzdC4gVGhyZXNob2xkIGFuZCB2ZWxvY2l0eVxyXG4vLyBzZW5zaXRpdml0eSBjaGFuZ2VkIHdpdGg6XHJcbi8vXHJcbi8vIGpRdWVyeS5ldmVudC5zcGVjaWFsLnN3aXBlLnNldHRpbmdzLnRocmVzaG9sZFxyXG4vLyBqUXVlcnkuZXZlbnQuc3BlY2lhbC5zd2lwZS5zZXR0aW5ncy5zZW5zaXRpdml0eVxyXG5cclxuKGZ1bmN0aW9uICh0aGlzTW9kdWxlKSB7XHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuICAgICAgICBkZWZpbmUoWydqcXVlcnknLCB1bmRlZmluZWQsICdqcXVlcnkuZXZlbnQubW92ZSddLCB0aGlzTW9kdWxlKTtcclxuICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlICE9PSBudWxsKSAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gdGhpc01vZHVsZTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXHJcbiAgICAgICAgdGhpc01vZHVsZShqUXVlcnkpO1xyXG5cdH1cclxufSkoZnVuY3Rpb24oalF1ZXJ5LCB1bmRlZmluZWQpe1xyXG5cdHZhciBhZGQgPSBqUXVlcnkuZXZlbnQuYWRkLFxyXG5cdCAgIFxyXG5cdCAgICByZW1vdmUgPSBqUXVlcnkuZXZlbnQucmVtb3ZlLFxyXG5cclxuXHQgICAgLy8gSnVzdCBzdWdhciwgc28gd2UgY2FuIGhhdmUgYXJndW1lbnRzIGluIHRoZSBzYW1lIG9yZGVyIGFzXHJcblx0ICAgIC8vIGFkZCBhbmQgcmVtb3ZlLlxyXG5cdCAgICB0cmlnZ2VyID0gZnVuY3Rpb24obm9kZSwgdHlwZSwgZGF0YSkge1xyXG5cdCAgICBcdGpRdWVyeS5ldmVudC50cmlnZ2VyKHR5cGUsIGRhdGEsIG5vZGUpO1xyXG5cdCAgICB9LFxyXG5cclxuXHQgICAgc2V0dGluZ3MgPSB7XHJcblx0ICAgIFx0Ly8gUmF0aW8gb2YgZGlzdGFuY2Ugb3ZlciB0YXJnZXQgZmluZ2VyIG11c3QgdHJhdmVsIHRvIGJlXHJcblx0ICAgIFx0Ly8gY29uc2lkZXJlZCBhIHN3aXBlLlxyXG5cdCAgICBcdHRocmVzaG9sZDogMC40LFxyXG5cdCAgICBcdC8vIEZhc3RlciBmaW5nZXJzIGNhbiB0cmF2ZWwgc2hvcnRlciBkaXN0YW5jZXMgdG8gYmUgY29uc2lkZXJlZFxyXG5cdCAgICBcdC8vIHN3aXBlcy4gJ3NlbnNpdGl2aXR5JyBjb250cm9scyBob3cgbXVjaC4gQmlnZ2VyIGlzIHNob3J0ZXIuXHJcblx0ICAgIFx0c2Vuc2l0aXZpdHk6IDZcclxuXHQgICAgfTtcclxuXHJcblx0ZnVuY3Rpb24gbW92ZWVuZChlKSB7XHJcblx0XHR2YXIgdywgaCwgZXZlbnQ7XHJcblxyXG5cdFx0dyA9IGUuY3VycmVudFRhcmdldC5vZmZzZXRXaWR0aDtcclxuXHRcdGggPSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuXHRcdC8vIENvcHkgb3ZlciBzb21lIHVzZWZ1bCBwcm9wZXJ0aWVzIGZyb20gdGhlIG1vdmUgZXZlbnRcclxuXHRcdGV2ZW50ID0ge1xyXG5cdFx0XHRkaXN0WDogZS5kaXN0WCxcclxuXHRcdFx0ZGlzdFk6IGUuZGlzdFksXHJcblx0XHRcdHZlbG9jaXR5WDogZS52ZWxvY2l0eVgsXHJcblx0XHRcdHZlbG9jaXR5WTogZS52ZWxvY2l0eVksXHJcblx0XHRcdGZpbmdlcjogZS5maW5nZXJcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gRmluZCBvdXQgd2hpY2ggb2YgdGhlIGZvdXIgZGlyZWN0aW9ucyB3YXMgc3dpcGVkXHJcblx0XHRpZiAoZS5kaXN0WCA+IGUuZGlzdFkpIHtcclxuXHRcdFx0aWYgKGUuZGlzdFggPiAtZS5kaXN0WSkge1xyXG5cdFx0XHRcdGlmIChlLmRpc3RYL3cgPiBzZXR0aW5ncy50aHJlc2hvbGQgfHwgZS52ZWxvY2l0eVggKiBlLmRpc3RYL3cgKiBzZXR0aW5ncy5zZW5zaXRpdml0eSA+IDEpIHtcclxuXHRcdFx0XHRcdGV2ZW50LnR5cGUgPSAnc3dpcGVyaWdodCc7XHJcblx0XHRcdFx0XHR0cmlnZ2VyKGUuY3VycmVudFRhcmdldCwgZXZlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZiAoLWUuZGlzdFkvaCA+IHNldHRpbmdzLnRocmVzaG9sZCB8fCBlLnZlbG9jaXR5WSAqIGUuZGlzdFkvdyAqIHNldHRpbmdzLnNlbnNpdGl2aXR5ID4gMSkge1xyXG5cdFx0XHRcdFx0ZXZlbnQudHlwZSA9ICdzd2lwZXVwJztcclxuXHRcdFx0XHRcdHRyaWdnZXIoZS5jdXJyZW50VGFyZ2V0LCBldmVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKGUuZGlzdFggPiAtZS5kaXN0WSkge1xyXG5cdFx0XHRcdGlmIChlLmRpc3RZL2ggPiBzZXR0aW5ncy50aHJlc2hvbGQgfHwgZS52ZWxvY2l0eVkgKiBlLmRpc3RZL3cgKiBzZXR0aW5ncy5zZW5zaXRpdml0eSA+IDEpIHtcclxuXHRcdFx0XHRcdGV2ZW50LnR5cGUgPSAnc3dpcGVkb3duJztcclxuXHRcdFx0XHRcdHRyaWdnZXIoZS5jdXJyZW50VGFyZ2V0LCBldmVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmICgtZS5kaXN0WC93ID4gc2V0dGluZ3MudGhyZXNob2xkIHx8IGUudmVsb2NpdHlYICogZS5kaXN0WC93ICogc2V0dGluZ3Muc2Vuc2l0aXZpdHkgPiAxKSB7XHJcblx0XHRcdFx0XHRldmVudC50eXBlID0gJ3N3aXBlbGVmdCc7XHJcblx0XHRcdFx0XHR0cmlnZ2VyKGUuY3VycmVudFRhcmdldCwgZXZlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0RGF0YShub2RlKSB7XHJcblx0XHR2YXIgZGF0YSA9IGpRdWVyeS5kYXRhKG5vZGUsICdldmVudF9zd2lwZScpO1xyXG5cdFx0XHJcblx0XHRpZiAoIWRhdGEpIHtcclxuXHRcdFx0ZGF0YSA9IHsgY291bnQ6IDAgfTtcclxuXHRcdFx0alF1ZXJ5LmRhdGEobm9kZSwgJ2V2ZW50X3N3aXBlJywgZGF0YSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHJcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwuc3dpcGUgPVxyXG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsLnN3aXBlbGVmdCA9XHJcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwuc3dpcGVyaWdodCA9XHJcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwuc3dpcGV1cCA9XHJcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwuc3dpcGVkb3duID0ge1xyXG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCBkYXRhLCBuYW1lc3BhY2VzLCBldmVudEhhbmRsZSApIHtcclxuXHRcdFx0dmFyIGRhdGEgPSBnZXREYXRhKHRoaXMpO1xyXG5cclxuXHRcdFx0Ly8gSWYgYW5vdGhlciBzd2lwZSBldmVudCBpcyBhbHJlYWR5IHNldHVwLCBkb24ndCBzZXR1cCBhZ2Fpbi5cclxuXHRcdFx0aWYgKGRhdGEuY291bnQrKyA+IDApIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0XHRhZGQodGhpcywgJ21vdmVlbmQnLCBtb3ZlZW5kKTtcclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSxcclxuXHJcblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBkYXRhID0gZ2V0RGF0YSh0aGlzKTtcclxuXHJcblx0XHRcdC8vIElmIGFub3RoZXIgc3dpcGUgZXZlbnQgaXMgc3RpbGwgc2V0dXAsIGRvbid0IHRlYXJkb3duLlxyXG5cdFx0XHRpZiAoLS1kYXRhLmNvdW50ID4gMCkgeyByZXR1cm47IH1cclxuXHJcblx0XHRcdHJlbW92ZSh0aGlzLCAnbW92ZWVuZCcsIG1vdmVlbmQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldHRpbmdzOiBzZXR0aW5nc1xyXG5cdH07XHJcbn0pOyJdLCJmaWxlIjoianF1ZXJ5LmV2ZW50LnN3aXBlLmpzIn0=
