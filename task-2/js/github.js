function GitHubService() {
    var apiEndPoint = 'https://api.github.com/';

    this.getFunchalSubscriptions = function(callBack) {
        var url = apiEndPoint + 'users/funchal/subscriptions';
        var request = new XMLHttpRequest();
        request.onload = callBack;
        request.open('GET', url, true);
        request.send();
    }
}