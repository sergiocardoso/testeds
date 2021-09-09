import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var TesteComponent = function () { return React.createElement("button", null, "botao de exemplo"); };

var TesteComponent_stories = {
    title: "Components/TesteComponent",
    component: TesteComponent,
};
// Create a master template for mapping args to render the Button component
var Template = function (args) { return React.createElement(TesteComponent, __assign({}, args)); };
// Reuse that template for creating different stories
var Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large" };
var Secondary = Template.bind({});
Secondary.args = __assign(__assign({}, Primary.args), { primary: false, label: "Secondary 😇" });

export { TesteComponent_stories as TesteComponentStories };
//# sourceMappingURL=index.esm.js.map
