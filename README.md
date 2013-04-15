# Audero Text Changer #
[Audero Text Changer](https://github.com/AurelioDeRosa/Audero-Text-Changer) is a very lightweight (minimized version is less than 1Kb) jQuery Mobile plugin that allows you to easily change the text of all the elements of your pages without breaking the enhancements made by the framework.

Sometimes you need to change the text inside elements, for example a `<button>` or an `<a>`. As you might know, while the links are rendered as buttons, they aren't actually buttons and, for this reason, the button widget doesn't apply to them. This means that you can't change the text directly and then use the method `button('refresh')` to redraw the button. To manage this and other situations, you can rely on Audero Text Changer.

## Demo ##
A live demo is available [here](http://htmlpreview.github.io/?https://github.com/AurelioDeRosa/Audero-Text-Changer/blob/master/demo/index.html).

## Requirements ##
Being a jQuery Mobile plugin, the only requirement is [jQuery Mobile](http://jquerymobile.com) which, of course, depends on [jQuery](http://www.jquery.com).

## Compatibility ##
Audero Text Changer has been tested and works on jQuery Mobile 1.0.1 and later.

## Installation ##
To install this plugin you need to include the script **after** the [jQuery](http://www.jquery.com) library in the header of your page. While it could make sense for your mental schema, it isn't required to include the plugin after jQuery Mobile. In conclusion, you should have a piece of code like the following:

    <script src="path/to/jquery.js"></script>
    <script src="path/to/jquery.auderoTextChanger.js"></script>

## Usage ##
Using this plugin is very simple. Just call the `auderoTextChanger()` method on the element(s) you want to change the text. You don't need to worry about the type of the elements, the plugin will manage them for you.
Let that you have the following code:

    <div id="box">
       <a href="#" id="info-button" data-icon="info">Info</a>
       <button id="demo-button">Button</button>
       <input id="reset-button" type="reset" value="Reset" />
       <input id="submit-button" type="submit" value="Submit" />
    </div>

A basic call to the plugin is:

    <script>
       $(document).on(
          "pageinit",
          function () {
             $("#info-button").auderoTextChanger("About...");
             $("#demo-button").auderoTextChanger("A Private Text");
             $("#box input").auderoTextChanger("A New Text!");
          }
       );
    </script>

## License ##
[Audero Text Changer](https://github.com/AurelioDeRosa/Audero-Text-Changer) is dual licensed under [MIT](http://www.opensource.org/licenses/MIT) and [GPL-3.0](http://opensource.org/licenses/GPL-3.0)

## Authors ##
[Aurelio De Rosa](http://www.audero.it) ([@AurelioDeRosa](https://twitter.com/AurelioDeRosa))
