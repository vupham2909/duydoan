function Main() {
    var githubService = new GitHubService();
    var btnChangeOrder = document.getElementById('btnChangeOrder');
    var defaultImg = 'https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png';

    this.onInit = function () {
        githubService.getFunchalSubscriptions(loadDataToContainer);
    }

    function loadDataToContainer() {
        var data = JSON.parse(this.responseText);
        var container = document.getElementById('container');
        var template = getHTMLContent(data);

        container.innerHTML = template;
    }
    
    function getItemHref(item) {
        return item.homepage ? 'title="View home page" href="' + item.homepage + '"' : '';
    }

    function getHTMLContent(data) {
        var template = '';
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            template += '<li class="card"><a ' + getItemHref(item) + ' target="_blank">'
            template += '<header class="image-container"><img src="' + defaultImg + '" /></header>'
            template += '<footer><p class="name"><b>' + item.name + '</b></p>';
            template += '<p class="full-name"><i>' + item.full_name + '</i></p></footer>';
            template += '</a></li>'
        }
        return template;
    }
}

window.onload = function () {
    var main = new Main();
    main.onInit();
}