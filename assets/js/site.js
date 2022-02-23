// Various custom tweaks to the site.

document.addEventListener('DOMContentLoaded', () => {
  // Make all links to external URLs open in a new tab.
  document.querySelectorAll('a').forEach((element) => {
    if (
      // Don't do this for content within the site
      (!element.href.startsWith('/') &&
        // When editing locally
        !element.href.startsWith('http://localhost') &&
        // When hosted on GitHub pages
        !element.href.startsWith('https://nichite.github.io')) ||
      // Open docs like PDFs in their own tab.
      element.href.endsWith('.pdf')
    ) {
      element.setAttribute('target', '_blank');
    }
  });

  // Fix footer stuff.
  document.querySelector('#footer').style.backgroundColor = '#ddd';
  document.querySelector('.page__footer-copyright').textContent =
    '© 2022 Nic Hite.';
});
