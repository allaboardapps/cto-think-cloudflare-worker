addEventListener('fetch', (event) => {
  let status = 'redirect';
  let url;

  switch (event.request.url) {
    case 'https://www.ctothink.com/rss.xml':
      url = 'https://feeds.transistor.fm/cto-think'
      break;

    case 'https://www.ctothink.com/episodes/2018-04-17-18.html':
      url = 'https://www.ctothink.com/episodes/18-choosing-a-tech-stack'
      break;

    case 'https://www.ctothink.com/episodes/2018-04-10-17.html':
      url = 'https://www.ctothink.com/episodes/17-identity-heft'
      break;

    case 'https://www.ctothink.com/episodes/2018-04-03-16.html':
      url = 'https://www.ctothink.com/episodes/16-dont-be-evil-ish'
      break;

    case 'https://www.ctothink.com/episodes/2018-03-27-15.html':
      url = 'https://www.ctothink.com/episodes/15-non-disclosures-non-competes-no-way'
      break;

    case 'https://www.ctothink.com/episodes/2018-03-20-14.html':
      url = 'https://www.ctothink.com/episodes/2018-03-20-14.html'
      break;

    case 'https://www.ctothink.com/episodes/2018-03-14-13.html':
      url = 'https://www.ctothink.com/episodes/14-youre-so-vain-you-think-in-office-work-is-about-you'
      break;

    case 'https://www.ctothink.com/episodes/2018-03-07-12.html':
      url = 'https://www.ctothink.com/episodes/12-communicating-on-a-roller-coaster-of-uptime-and-downtime'
      break;

    case 'https://www.ctothink.com/episodes/2018-02-25-11.html':
      url = 'https://www.ctothink.com/episodes/11-are-code-challenges-a-lazy-or-legitimate-method-for-hiring-developers'
      break;

    case 'https://www.ctothink.com/episodes/2018-02-18-10.html':
      url = 'https://www.ctothink.com/episodes/10-skills-for-a-career-in-tech-leadership'
      break;

    case 'https://www.ctothink.com/episodes/2018-02-10-9.html':
      url = 'https://www.ctothink.com/episodes/9-developer-focus-is-an-excuse-not-to-talk-right'
      break;

    case 'https://www.ctothink.com/episodes/2018-02-03-8.html':
      url = 'https://www.ctothink.com/episodes/8-your-hosting-strategy-choosing-from-self-managed-cloud-or-serverless'
      break;

    case 'https://www.ctothink.com/episodes/2018-01-27-7.html':
      url = 'https://www.ctothink.com/episodes/7-work-life-or-non-tech-balance-is-it-worth-the-hype'
      break;

    case 'https://www.ctothink.com/episodes/2018-01-18-6.html':
      url = 'https://www.ctothink.com/episodes/6-does-a-tech-manager-need-to-code-to-be-effective'
      break;

    case 'https://www.ctothink.com/episodes/2018-01-12-5.html':
      url = 'https://www.ctothink.com/episodes/5-antifragile-and-tdd-whats-the-value'
      break;

    case 'https://www.ctothink.com/episodes/2018-01-05-4.html':
      url = 'https://www.ctothink.com/episodes/4-risk-and-exploits-dealing-with-meltdown-and-spectre'
      break;

    case 'https://www.ctothink.com/episodes/2018-01-02-3.html':
      url = 'https://www.ctothink.com/episodes/3-managing-tech-debt-when-best-to-work-on-it'
      break;

    case 'https://www.ctothink.com/episodes/2017-12-28-2.html':
      url = 'https://www.ctothink.com/episodes/2-hiring-developers-who-should-i-hire-to-build-an-app'
      break;

    case 'https://www.ctothink.com/episodes/2017-12-23-1.html':
      url = 'https://www.ctothink.com/episodes/1-introducing-cto-think'
      break;
    default:
      status = 'pass-through';
      break;
  };

  if (status === 'pass-through') {
    event.respondWith(fetch(event.request));
  } else {
    event.respondWith(Response.redirect(url, 301));
  }
});