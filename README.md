# EU Cookie Law

Plugin that helps you to deal with the EU Cookie Law.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/frnd/jquery-eu-cookie-law/master/dist/jquery.eu-cookie-law.min.js
[max]: https://raw.github.com/frnd/jquery-eu-cookie-law/master/dist/jquery.eu-cookie-law.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="jquery.cookie.js"></script>
<script src="dist/eu-cookie-law.min.js"></script>
<script>
jQuery(function($) {
  $.euCookieLaw();
});
</script>
```

## Documentation

The plugin can be configured with the following options:

```javascript
{
    message: 'We use cookies on this website. To use the website as intended please...',
    acceptButtonText: 'Accept',
    declineButtonText: 'Decline',
    readMoreButtonText: 'Read More',
    readMoreLink: '',
    position: '(top|bottom)',
    cookieDomain: '',
    cookieNames: ['__utma', '__utmb', '__utmc', '__utmz']
}
```

## Examples

https://rawgit.com/frnd/eu-cookie-law/master/example/example.html

## Release History

0.0.1 First version.
