import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1500,
  duration: '60s',
};

export default function () {
  // var questionId = ?; //top
  // var questionId = ?; //bottom
  // var questionId = ?; //mid

  var url = `http://localhost:3000/qa/questions/${questionId}/report`;

  http.put(url);
  sleep(1);
}

//  k6 run testing/putReportQ.js to execute the test;