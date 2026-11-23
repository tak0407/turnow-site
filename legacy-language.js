// The published App Store and app settings links use the original fragment.
function openLegacyEnglishPage() {
  if (location.hash === "#english") {
    location.replace("en/" + location.search);
  }
}

openLegacyEnglishPage();
addEventListener("hashchange", openLegacyEnglishPage);
