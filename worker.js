addEventListener('fetch', (event) => {
  console.log('event.request.url: ', event.request.url);
  let status = 'redirect';
  let url;

  switch (event.request.url) {
    case 'https://www.ctothink.com/tests/2018-04-24-19.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-04-24-19.html'
      break;

    case 'https://www.ctothink.com/tests/2018-04-17-18.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-04-17-18.html'
      break;

    case 'https://www.ctothink.com/tests/2018-04-10-17.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-04-10-17.html'
      break;

    case 'https://www.ctothink.com/tests/2018-04-03-16.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-04-03-16.html'
      break;

    case 'https://www.ctothink.com/tests/2018-03-27-15.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-03-27-15.html'
      break;

    case 'https://www.ctothink.com/tests/2018-03-20-14.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-03-20-14.html'
      break;

    case 'https://www.ctothink.com/tests/2018-03-14-13.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-03-14-13.html'
      break;

    case 'https://www.ctothink.com/tests/2018-03-07-12.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-03-07-12.html'
      break;

    case 'https://www.ctothink.com/tests/2018-02-25-11.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-02-25-11.html'
      break;

    case 'https://www.ctothink.com/tests/2018-02-18-10.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-02-18-10.html'
      break;

    case 'https://www.ctothink.com/tests/2018-02-10-9.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-02-10-9.html'
      break;

    case 'https://www.ctothink.com/tests/2018-02-03-8.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-02-03-8.html'
      break;

    case 'https://www.ctothink.com/tests/2018-01-27-7.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-01-27-7.html'
      break;

    case 'https://www.ctothink.com/tests/2018-01-18-6.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-01-18-6.html'
      break;

    case 'https://www.ctothink.com/tests/2018-01-12-5.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-01-12-5.html'
      break;

    case 'https://www.ctothink.com/tests/2018-01-05-4.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-01-05-4.html'
      break;

    case 'https://www.ctothink.com/tests/2018-01-02-3.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2018-01-02-3.html'
      break;

    case 'https://www.ctothink.com/tests/2017-12-28-2.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2017-12-28-2.html'
      break;

    case 'https://www.ctothink.com/tests/2017-12-23-1.html':
      console.log('Redirect triggered');
      url = 'https://www.ctothink.com/episodes/2017-12-23-1.html'
      break;
    default:
      status = 'pass-through';
      console.log('Pass-through triggered');
      break;
  };

  if (status === 'pass-through') {
    event.respondWith(fetch(event.request));
  } else {
    event.respondWith(Response.redirect(url, 301));
  }
});