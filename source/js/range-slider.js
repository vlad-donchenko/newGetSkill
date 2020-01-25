'use strict';

(function () {
  var Code = {
    ENTER_SLIDER_CODE: 13,
    KEY_UP_SLIDER_CODE: 38,
    KEY_DOWN_SLIDER_CODE: 40
  };
  var slider = document.querySelector('.slider__progress');
  var inputMinPrice = document.querySelector('#filter_min_price');
  var inputMaxPrice = document.querySelector('#filter_max_price');
  var minValue = parseInt(inputMinPrice.min);
  var maxValue = parseInt(inputMinPrice.max);
  var inputs = [inputMinPrice, inputMaxPrice];

  if (slider) {
    noUiSlider.create(slider, {
      start: [minValue, maxValue],
      connect: true,
      range: {
        'min': [minValue],
        'max': [maxValue]
      }
    });

    slider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });

    inputs.forEach(function (input, handle) {

      input.addEventListener('change', function () {
        slider.noUiSlider.setHandle(handle, this.value);
      });

      input.addEventListener('keydown', function (e) {
        var values = slider.noUiSlider.get();
        var value = Number(values[handle]);
        var steps = slider.noUiSlider.steps();
        var step = steps[handle];
        var position;

        switch (e.which) {

          case Code.ENTER_SLIDER_CODE:
            slider.noUiSlider.setHandle(handle, this.value);
            break;

          case Code.KEY_UP_SLIDER_CODE:

            position = step[1];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              slider.noUiSlider.setHandle(handle, value + position);
            }

            break;

          case Code.KEY_DOWN_SLIDER_CODE:

            position = step[0];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              slider.noUiSlider.setHandle(handle, value - position);
            }

            break;
        }
      });
    });
  }
})();
