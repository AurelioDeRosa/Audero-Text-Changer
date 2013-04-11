/*
 * Audero Text Changer is a very lightweight jQuery Mobile plugin that
 * allows you to easily change the text of all the elements of your pages
 * without breaking the enhancements made by the framework.
 *
 * @author  Aurelio De Rosa <aurelioderosa@gmail.com>
 * @version 1.0.0
 * @link    https://github.com/AurelioDeRosa/Audero-Text-Changer
 * @license Dual licensed under MIT (http://www.opensource.org/licenses/MIT)
 * and GPL-3.0 (http://opensource.org/licenses/GPL-3.0)
 */
(function($){
   var methods = {
      init: function(text) {
         return this.each(function() {
            // Based on the type of the element, the text is changed in
            // different places.
            // If the element is a link, the plugin change its title attribute
            // and the text of its inner element having <code>class="ui-btn-text"</code>.
            // If the element is a button, or an input having type submit or reset,
            // the text isn't a child of these elements but a child of a sibling element.
            // The last case applies to all the elements but the previous and
            // simply change the text of the selected element.
            if ($(this).is('a'))
               $(this).find('.ui-btn-text').attr('title', text).text(text);
            else if ($(this).is('button, input[type="submit"], input[type="reset"]'))
               $(this).closest('.ui-btn').find('.ui-btn-text').text(text);
            else
               $(this).text(text);
         });
      }
   };

   $.fn.auderoTextChanger = function(method) {
      if (methods[method])
         return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      else if (typeof method === 'object' || typeof method === 'string' || !method)
         return methods.init.apply(this, arguments);
      else
         $.error('Method ' +  method + ' does not exist on jQuery.auderoTextChanger');
   };
})(jQuery);