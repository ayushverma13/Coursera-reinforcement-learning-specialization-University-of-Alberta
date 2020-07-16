document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-31007ea0d3bd9f80540adfbc55afc7bd.css">')
document.write('<div id=\"gist92476674\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-adam-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-adam-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-adam-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>for<\/span> <span class=pl-s1>t<\/span> <span class=pl-c1>in<\/span> <span class=pl-en>range<\/span>(<span class=pl-s1>num_iterations<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-adam-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-adam-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>g<\/span> <span class=pl-c1>=<\/span> <span class=pl-en>compute_gradient<\/span>(<span class=pl-s1>x<\/span>, <span class=pl-s1>y<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-adam-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-adam-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>m<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>beta_1<\/span> <span class=pl-c1>*<\/span> <span class=pl-s1>m<\/span> <span class=pl-c1>+<\/span> (<span class=pl-c1>1<\/span> <span class=pl-c1>-<\/span> <span class=pl-s1>beta_1<\/span>) <span class=pl-c1>*<\/span> <span class=pl-s1>g<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-adam-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-adam-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>v<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>beta_2<\/span> <span class=pl-c1>*<\/span> <span class=pl-s1>v<\/span> <span class=pl-c1>+<\/span> (<span class=pl-c1>1<\/span> <span class=pl-c1>-<\/span> <span class=pl-s1>beta_2<\/span>) <span class=pl-c1>*<\/span> <span class=pl-s1>np<\/span>.<span class=pl-en>power<\/span>(<span class=pl-s1>g<\/span>, <span class=pl-c1>2<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-adam-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-adam-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>m_hat<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>m<\/span> <span class=pl-c1>/<\/span> (<span class=pl-c1>1<\/span> <span class=pl-c1>-<\/span> <span class=pl-s1>np<\/span>.<span class=pl-en>power<\/span>(<span class=pl-s1>beta_1<\/span>, <span class=pl-s1>t<\/span>))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-adam-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-adam-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>v_hat<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>v<\/span> <span class=pl-c1>/<\/span> (<span class=pl-c1>1<\/span> <span class=pl-c1>-<\/span> <span class=pl-s1>np<\/span>.<span class=pl-en>power<\/span>(<span class=pl-s1>beta_2<\/span>, <span class=pl-s1>t<\/span>))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-adam-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-adam-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>w<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>w<\/span> <span class=pl-c1>-<\/span> <span class=pl-s1>step_size<\/span> <span class=pl-c1>*<\/span> <span class=pl-s1>m_hat<\/span> <span class=pl-c1>/<\/span> (<span class=pl-s1>np<\/span>.<span class=pl-en>sqrt<\/span>(<span class=pl-s1>v_hat<\/span>) <span class=pl-c1>+<\/span> <span class=pl-s1>epsilon<\/span>)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/bushaev/df15464561274b52e3ba65f9ae1c941a/raw/39a4d538c23ca0883493f712b12338bd3fb9361c/Adam.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/bushaev/df15464561274b52e3ba65f9ae1c941a#file-adam-py\">Adam.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
