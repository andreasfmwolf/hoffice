CBR.Services.Browser = {
    ScrollbarWidth: (function () {
        var _scrollbarWidth = null;

        function _getScrollarWidth() {
            var outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.width = "100px";
            outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

            document.body.appendChild(outer);

            var widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = "scroll";

            // add innerdiv
            var inner = document.createElement("div");
            inner.style.width = "100%";
            outer.appendChild(inner);

            var widthWithScroll = inner.offsetWidth;

            // remove divs
            outer.parentNode.removeChild(outer);

            return widthNoScroll - widthWithScroll;
        }

        return {
            get: function () {
                if (_scrollbarWidth === null) {
                    _scrollbarWidth = _getScrollarWidth();
                }
                return _scrollbarWidth;
            }
        }
    })()
};
