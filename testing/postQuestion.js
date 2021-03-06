import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1500,
  duration: '60s',
};

export default function () {
  var url = 'http://localhost:3000/qa/questions';

  var data = {
    body: 'k6test',
    name: 'k6test',
    email: 'k6test@test.com',
    product_id: 10000000
  };

  http.post(url, data);
  sleep(1);
}

//  k6 run testing/postQuestion.js to execute the test;