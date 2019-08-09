module.exports = {

  create: function(adapter, data, cb) {
    var res = '';

    switch(data.ref_type) {
      case 'tag':
        res = 'New Tagged Release: ' + data.ref + '\n';
        res += data.repository.html_url + '/releases/tag/' + data.ref;
        /* ToDo
         * Tag body not found in Github API v3
         * https://developer.github.com/v3/activity/events/types/#createevent
         */
        res += '\n\n';
        break;
    default:
        break;
    }

    return cb(res);
  },

//   release: function(adapter, data, cb) {
//     var res = '';
    
//     switch(data.action) {
//       case 'published':
//         res = 'Release [' + data.repository.name + '/' + data.release.target_commitish + ']: '+ data.release.name + '\n';
//         res += data.release.html_url + '\n\n' + data.release.body;
//         break;
//       default:
//         break;
//     }
    
//     return cb(res);
//   },

//   issues: function(adapter, data, cb) {
//     var res = '';

//     switch(data.action) {
//       case 'labeled':
//         res = '@here Labeled Issue: ';
//         if(data.label.name.match(/sos|critical/)) {
//           res += data.label.name + '\n' + data.issue.html_url;
//           return cb(res,'#development');
//         }
//         if(data.label.name.match(/design/)) {
//           res += data.label.name + '\n' + data.issue.html_url;
//           return cb(res, '#design');
//         }
//         break;
//       default:
//         break;
//     }
//   }
};

