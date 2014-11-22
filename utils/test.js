/**
 * Created by ruiyun_zhou on 11/21/14.
 */

var restClient = require('../utils/restClient.js');

restClient.get('https://api.grouphour.com/meets/recordings/${meet_id}',
    {
        path: {meet_id: '517395635'},
        parameters: {access_token: '1MGEzMgAAAUnWb7XbAACowFVRQWVHeFdtdjFDSDZYaEJ1VTJZZ0k3IAAAAANUOHJmbUkzUk9XRENYMDZOY2tVc2pJQmx1OWd5T2tjTFgw'},
        headers: {}
    },
    function (data) {
    }
);