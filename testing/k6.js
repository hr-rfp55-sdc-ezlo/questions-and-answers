import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  // stages: [
  //   { duration: '10s', target: 100 },
  //   { duration: '10s', target: 500 },
  //   { duration: '10s', target: 1000 },
  //   { duration: '10s', target: 0 },
  // ],
  vus: 1500,
  duration: '60s',
};

export default function () {
  var url = 'http://localhost:3000/qa/questions/';
  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
    product_id : 1, //top
    // product_id : 10000000, //bottom
    // product_id : 483206, //mid point
  };

  http.get(url, params);
  sleep(1);
}