﻿chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('index.html', {
        'bounds': {
            'width': 820,
            'height': 510
        },
        maxWidth: 820,
        maxHeight: 530,
        minWidth: 300,
        minHeight:510
    });
}); 