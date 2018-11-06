(function($) {

  // 面向对象

  function PreLoad(imgs, options) {

    this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;

    this.opts = $.extend({}, PreLoad.DEFAULTS,options); // options和PreLoad.DEFAULTS这2个对象融合，生成新的对象，将新对象返回给opts保存下来。

    this._unordered(); // _表示只在函数内部使用，而不在外部调用

  }

  PreLoad.DEFAULTS = {

    each: null, // 每一张图片加载完毕后执行的方法

    all: null  // 所有图片加载完毕后执行的方法

  };

  PreLoad.prototype._unordered = function () {

    var imgs = this.imgs,

        opts = this.opts,

        count = 0,

        len = imgs.length;

    $.each(imgs, function(i, src) {

      if (typeof src != 'string') return;

      var imgObj = new Image();

      $(imgObj).on('load error', function() {

        opts.each && opts.each(count); // 如果opts.each存在，执行opts.each方法

        if (count >= len - 1) {

          opts.all && opts.all();

        }

        count ++;

      });

      imgObj.src = src;

    });

  }

  // 插件:①附在$.fn上（要选择一个元素）；②直接跟在jquery对象，是一个工具函数。(工具方法)

  // $.fn.extend -> $('#img').preload();

  $.extend({

    preload: function(imgs, opts) {

      new PreLoad(imgs, opts);

    }

  });

})(jQuery);