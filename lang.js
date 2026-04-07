// l1ft0ff — Mission Babel v2 — i18n for nextelite-boxing
// "the ring speaks every language. the work is universal."
// Detects ?lang= param, saves to localStorage, persists across pages.
// v2: proper bokmål (æøå), translated nav, trendy no/en mix

(function() {
  'use strict';

  // ═══════════════════════════════════════
  // TRANSLATIONS
  // ═══════════════════════════════════════
  var translations = {

    // === NAV LABELS (main menu items) ===
    'nav-boxing': { en: 'BOXING', no: 'BOKSING' },
    'nav-tagteach': { en: 'TAGTEACH', no: 'TAGTEACH' },
    'nav-space': { en: 'THE SPACE', no: 'THE SPACE' },
    'nav-schedule': { en: 'SCHEDULE', no: 'TIMEPLAN' },
    'nav-n3xt3lit3': { en: 'N3XT3LIT3', no: 'N3XT3LIT3' },

    // === PAGE TITLES (h1 on sub-pages) ===
    'page-title-boxing': { en: 'BOXING', no: 'BOKSING' },
    'page-title-tagteach': { en: 'TAGTEACH', no: 'TAGTEACH' },
    'page-title-space': { en: 'THE SPACE', no: 'THE SPACE' },
    'page-title-schedule': { en: 'SCHEDULE', no: 'TIMEPLAN' },
    'page-title-n3xt3lit3': { en: 'N3XT3LIT3', no: 'N3XT3LIT3' },

    // === INDEX (nav hover labels) ===
    'nav-hover-boxing': { en: 'GLOVES ON', no: 'HANSKER PÅ' },
    'nav-hover-tagteach': { en: 'CLICK.', no: 'KLIKK.' },
    'nav-hover-space': { en: 'THE GYM', no: 'TRENINGSLOKALET' },
    'nav-hover-schedule': { en: 'SHOW UP', no: 'MØTT OPP' },
    'nav-hover-n3xt3lit3': { en: 'XXX', no: 'XXX' },
    'footer-mailing': { en: 'MAILING LIST', no: 'NYHETSBREV' },
    'footer-boring': { en: 'BORING STUFF', no: 'KJEDELIGE TING' },

    // === MOBILE BOTTOM NAV LABELS ===
    'mob-nav-home': { en: 'HOME', no: 'HJEM' },
    'mob-nav-train': { en: 'TRAIN', no: 'TRÉN' },
    'mob-nav-walls': { en: 'WALLS', no: 'REGLER' },
    'mob-nav-more': { en: 'MORE', no: 'MER' },
    'mob-nav-box': { en: 'BOX', no: 'BOKS' },
    'mob-nav-space': { en: 'SPACE', no: 'ROM' },
    'mob-nav-gear': { en: 'GEAR', no: 'UTSTYR' },
    'mob-nav-time': { en: 'TIME', no: 'TID' },
    'mob-nav-tag': { en: 'TAG', no: 'TAG' },
    'mob-nav-nxt': { en: 'NXT', no: 'NXT' },

    // === BOXING PAGE ===
    'boxing-subtitle': { en: 'gloves on.', no: 'hansker på.' },
    'boxing-intro': {
      en: 'not a fitness class. not cardio. boxing. the kind where you learn what your hands are for and your ego becomes optional.',
      no: 'ikke en treningstime. ikke cardio. boksing. den typen der du lærer hva hendene dine er til og egoet blir valgfritt.'
    },
    'boxing-what-happens': { en: 'WHAT HAPPENS HERE', no: 'HVA SKJER HER' },
    'boxing-list-1': { en: 'rounds on the bag', no: 'runder på sekken' },
    'boxing-list-2': { en: 'combinations', no: 'kombinasjoner' },
    'boxing-list-3': { en: 'footwork', no: 'fotarbeid' },
    'boxing-list-4': { en: 'pad work', no: 'putearbeid' },
    'boxing-statement': { en: 'the ring remembers.', no: 'ringen husker.' },

    // === TAGTEACH PAGE ===
    'tagteach-subtitle': { en: 'click.', no: 'klikk.' },
    'tagteach-intro': {
      en: 'precision feedback. one click at a time. tagteach applies clicker training principles to human coaching. the tag point is the smallest piece of behavior that matters.',
      no: 'presisjon i tilbakemelding. ett klikk om gangen. tagteach bruker klikkertrening på mennesker. tag point er den minste delen av atferd som betyr noe.'
    },
    'tagteach-how': { en: 'HOW IT WORKS', no: 'SLIK FUNGERER DET' },
    'tagteach-step-1': { en: 'identify the tag point', no: 'identifiser tag point' },
    'tagteach-step-2': { en: 'mark the moment', no: 'markér øyeblikket' },
    'tagteach-step-3': { en: 'reinforce', no: 'forsterk' },
    'tagteach-statement': {
      en: 'the click is not a reward. it is information.',
      no: 'klikket er ikke en belønning. det er informasjon.'
    },

    // === THE SPACE PAGE ===
    'space-subtitle': { en: 'the gym.', no: 'lokalet.' },
    'space-intro': {
      en: 'a garage gym above the arctic circle. no memberships. no mirrors for vanity. every piece earned its place.',
      no: 'et garasjelokale over polarsirkelen. ingen medlemskap. ingen speil for forfengelighet. hvert eneste utstyr fortjente plassen sin.'
    },
    'space-location': { en: 'myre, vesterålen.', no: 'myre, vesterålen.' },
    'space-coords': { en: '68 degrees north.', no: '68 grader nord.' },
    // Equipment labels
    'equip-full-space': { en: 'the full space', no: 'hele lokalet' },
    'equip-command-wall': { en: 'command wall', no: 'kommandoveggen' },
    'equip-speed-bag': { en: 'meister speed bag', no: 'meister speed bag' },
    'equip-trx-corner': { en: 'trx + speed bag corner', no: 'trx + speed bag-hjørnet' },
    'equip-trx-straps': { en: 'trx straps', no: 'trx stropper' },
    'equip-wallbag': { en: 'fighter wallbag', no: 'fighter veggbag' },
    'equip-wallbag-slip': { en: 'wallbag + slip line', no: 'veggbag + sliplinje' },
    'equip-speed-detail': { en: 'meister speed bag', no: 'meister speed bag' },
    'equip-timeless': { en: 'timeless jump', no: 'timeless jump' },
    'equip-wallbag-crate': { en: 'fighter wallbag + crate', no: 'fighter veggbag + bur' },
    'equip-reflex': { en: 'reflex ball', no: 'refleksball' },
    'equip-reflex-detail': { en: 'reflex ball detail', no: 'refleksball detalj' },
    'equip-reflex-stick': { en: 'title reflex stick', no: 'title refleksstav' },
    'equip-slip-line': { en: 'slip line', no: 'sliplinje' },

    // === SCHEDULE PAGE ===
    'schedule-subtitle': { en: 'show up.', no: 'møt opp.' },
    'schedule-intro': {
      en: 'the hardest round is the one before you start. open the door.',
      no: 'den tyngste runden er den før du begynner. åpne døra.'
    },
    'schedule-weekly': { en: 'WEEKLY', no: 'UKENTLIG' },
    'schedule-monday': { en: 'MONDAY', no: 'MANDAG' },
    'schedule-wednesday': { en: 'WEDNESDAY', no: 'ONSDAG' },
    'schedule-friday': { en: 'FRIDAY', no: 'FREDAG' },
    'schedule-boxing': { en: 'Boxing', no: 'Boksing' },
    'schedule-tbd': { en: 'time tbd', no: 'tid kommer' },
    'schedule-contact': { en: 'CONTACT', no: 'KONTAKT' },
    'schedule-location': { en: 'myre, vesterålen', no: 'myre, vesterålen' },
    'schedule-statement': {
      en: 'no excuses accepted. no excuses needed.',
      no: 'ingen unnskyldninger akseptert. ingen unnskyldninger trengs.'
    },

    // === N3XT3LIT3 PAGE ===
    'n3xt3lit3-subtitle': {
      en: 'not here to be pretty. here to be dangerous.',
      no: 'ikke her for å være pen. her for å være farlig.'
    },
    'n3xt3lit3-about': {
      en: 'nextelite boxing and tagteach. run by nemine steffensen. myre, vesterålen, northern norway. above the arctic circle.',
      no: 'nextelite boksing og tagteach. drevet av nemine steffensen. myre, vesterålen, nord-norge. over polarsirkelen.'
    },
    'n3xt3lit3-wall-1': { en: 'show up', no: 'møt opp' },
    'n3xt3lit3-wall-2': { en: 'gloves on', no: 'hansker på' },
    'n3xt3lit3-wall-3': { en: 'no shortcuts', no: 'ingen snarveier' },
    'n3xt3lit3-wall-4': { en: 'the ring remembers', no: 'ringen husker' },

    // === MOBILE SPECIFIC ===
    'mobile-swipe': { en: 'swipe', no: 'sveip' },
    'mobile-gallery-space': { en: 'THE SPACE', no: 'LOKALET' },
    'mobile-gallery-equipment': { en: 'THE EQUIPMENT', no: 'UTSTYRET' },
    'mobile-gallery-gear': { en: 'THE GEAR', no: 'UTSTYRET' },
    'mobile-gallery-method': { en: 'THE METHOD', no: 'METODEN' },
    'mobile-four-walls': { en: 'THE FOUR WALLS', no: 'DE FIRE VEGGENE' },
    'mobile-training': { en: 'THE TRAINING', no: 'TRENINGA' },

    // Boxing mobile equipment
    'mob-equip-bag-name': { en: 'the bag', no: 'sekken' },
    'mob-equip-bag-desc': {
      en: 'everlast heavy bag. chain-mounted. the one that swings back. this is where you learn what your hands are for.',
      no: 'everlast tung sekk. kjedemontert. den som svinger tilbake. det er her du lærer hva hendene dine er til.'
    },
    'mob-equip-dummy-name': { en: 'the dummy', no: 'dukken' },
    'mob-equip-dummy-desc': {
      en: 'century bob. it never hits back. that is the point. practice precision when there are no consequences. then carry it into chaos.',
      no: 'century bob. den slår aldri tilbake. det er hele poenget. øv presisjon når det ikke er konsekvenser. så tar du det med inn i kaoset.'
    },
    'mob-equip-speed-name': { en: 'the speed', no: 'farten' },
    'mob-equip-speed-desc': {
      en: 'meister speed bag. wall-mounted on wood. rhythm is violence made precise. you don\'t hit it. you listen to it.',
      no: 'meister speed bag. veggmontert på tre. rytme er vold gjort presist. du slår den ikke. du lytter til den.'
    },
    'mob-equip-wall-name': { en: 'the wall', no: 'veggen' },
    'mob-equip-wall-desc': {
      en: 'fighter wallbag. wall-mounted uppercuts in the dark. when the heavy bag teaches power, the wall teaches angles. close range. personal.',
      no: 'fighter veggbag. veggmonterte uppercuts i mørket. når den tunge sekken lærer kraft, lærer veggen vinkler. nærdistanse. personlig.'
    },

    // Boxing mobile statement
    'mob-boxing-statement-1': {
      en: 'boxing is meditation with consequences.',
      no: 'boksing er meditasjon med konsekvenser.'
    },
    'mob-boxing-statement-2': {
      en: 'one room. blue mats. bags that don\'t care about your day. two dogs watching from the corner. this is not a fitness center. this is where you go to remember what discipline feels like.',
      no: 'ett rom. blå matter. sekker som ikke bryr seg om dagen din. to hunder som ser på fra hjørnet. dette er ikke et treningssenter. dette er dit du går for å huske hva disiplin føles som.'
    },

    // Boxing mobile training cards
    'mob-train-rounds': { en: 'rounds', no: 'runder' },
    'mob-train-boxing': { en: 'boxing', no: 'boksing' },
    'mob-train-boxing-desc': {
      en: 'heavy bag. speed bag. bob. wallbag. reflex stick. combinations until your brain stops narrating and your body takes over. that is the goal.',
      no: 'tung sekk. speed bag. bob. veggbag. refleksstav. kombinasjoner til hjernen slutter å kommentere og kroppen tar over. det er målet.'
    },
    'mob-train-circuits': { en: 'circuits', no: 'sirkler' },
    'mob-train-conditioning': { en: 'conditioning', no: 'kondisjon' },
    'mob-train-conditioning-desc': {
      en: 'jump rope. agility ladder. trx suspension. no machines. no screens. just you, gravity, and the timer. the kind of tired that fixes things.',
      no: 'hopptau. agility-stige. trx. ingen maskiner. ingen skjermer. bare deg, tyngdekraften og klokka. den typen sliten som fikser ting.'
    },
    'mob-train-film': { en: 'film', no: 'film' },
    'mob-train-analysis': { en: 'analysis', no: 'analyse' },
    'mob-train-analysis-desc': {
      en: 'tripod-recorded sessions. watch yourself. see what you thought you were doing vs. what you actually did. the mirror lies. the camera doesn\'t.',
      no: 'økter filmet på stativ. se deg selv. se hva du trodde du gjorde vs. hva du faktisk gjorde. speilet lyver. kameraet gjør ikke det.'
    },
    'mob-train-intro': {
      en: 'three modes. one principle: show up and the work reveals itself.',
      no: 'tre moduser. ett prinsipp: møt opp og arbeidet viser seg.'
    },

    // Boxing mobile four walls
    'mob-wall-1-name': { en: 'show up', no: 'møt opp' },
    'mob-wall-1-desc': {
      en: 'the hardest round is the one before you start. open the door. that is the workout.',
      no: 'den tyngste runden er den før du begynner. åpne døra. det er økta.'
    },
    'mob-wall-2-name': { en: 'gloves on', no: 'hansker på' },
    'mob-wall-2-desc': {
      en: 'no spectators. once you are here, you are here. wrap your hands. commit.',
      no: 'ingen tilskuere. når du er her, er du her. surr hendene. forplikt deg.'
    },
    'mob-wall-3-name': { en: 'no shortcuts', no: 'ingen snarveier' },
    'mob-wall-3-desc': {
      en: 'every rep counts or none of them do. form over speed. patience over ego. always.',
      no: 'hvert rep teller eller ingen av dem gjør det. form over fart. tålmodighet over ego. alltid.'
    },
    'mob-wall-4-name': { en: 'the ring remembers', no: 'ringen husker' },
    'mob-wall-4-desc': {
      en: 'what you do when no one is watching is who you are. the room keeps score.',
      no: 'det du gjør når ingen ser på er den du er. rommet holder telling.'
    },

    // Boxing mobile location
    'mob-location-title': { en: 'myre, vesterålen', no: 'myre, vesterålen' },
    'mob-location-body-1': {
      en: 'above the arctic circle. where winter is five months of darkness and the gym lights are always on. this is not a destination. this is where the work lives.',
      no: 'over polarsirkelen. der vinteren er fem måneder mørke og lyset i lokalet alltid er på. dette er ikke en destinasjon. dette er der arbeidet bor.'
    },
    'mob-location-body-2': {
      en: 'nextelite boxing and tagteach. run by nemine steffensen. two dogs on site. they don\'t judge your footwork. much.',
      no: 'nextelite boksing og tagteach. drevet av nemine steffensen. to hunder på stedet. de dømmer ikke fotarbeidet ditt. stort sett.'
    },
    'mob-closing-ring': { en: 'the ring remembers.', no: 'ringen husker.' },

    // The-space mobile equipment descriptions
    'mob-space-speed-desc': { en: 'wall-mounted on wood. rhythm is violence made precise.', no: 'veggmontert på tre. rytme er vold gjort presist.' },
    'mob-space-trx-desc': { en: 'suspension training. no machines. just gravity and intent.', no: 'suspensjonstrening. ingen maskiner. bare tyngdekraft og intensjon.' },
    'mob-space-reflex-desc': { en: 'hand-eye coordination. the thing that doesn\'t care how ready you think you are.', no: 'hånd-øye-koordinasjon. tingen som ikke bryr seg om hvor klar du tror du er.' },
    'mob-space-jump-desc': { en: 'jump rope collection. the oldest conditioning tool. still the best.', no: 'hopptausamling. det eldste kondisjonsverktøy. fortsatt det beste.' },
    'mob-space-wallbag-desc': { en: 'wall-mounted uppercuts. close range. personal.', no: 'veggmonterte uppercuts. nærdistanse. personlig.' },
    'mob-space-location-body': {
      en: 'above the arctic circle. where winter is five months of darkness and the gym lights are always on.',
      no: 'over polarsirkelen. der vinteren er fem måneder mørke og lyset i lokalet alltid er på.'
    },
    'mob-space-closing': { en: 'every piece earned its place.', no: 'hvert eneste utstyr fortjente plassen sin.' },

    // Tagteach mobile
    'mob-tagteach-step-1-desc': {
      en: 'the smallest learnable piece. one thing at a time. nothing more.',
      no: 'den minste lærbare delen. én ting om gangen. ikke mer.'
    },
    'mob-tagteach-step-2-desc': {
      en: 'the click happens at the exact instant the behavior is correct. timing is everything.',
      no: 'klikket skjer i nøyaktig det øyeblikket atferden er korrekt. timing er alt.'
    },
    'mob-tagteach-step-3-desc': {
      en: 'the brain connects the click to the action. repeat. the body learns what words cannot teach.',
      no: 'hjernen kobler klikket til handlingen. gjenta. kroppen lærer det ord ikke kan lære bort.'
    },

    // Schedule mobile
    'mob-schedule-statement': {
      en: 'no excuses accepted. no excuses needed.',
      no: 'ingen unnskyldninger akseptert. ingen unnskyldninger trengs.'
    },

    // n3xt3lit3 mobile
    'mob-n3xt3lit3-closing': { en: 'the ring remembers.', no: 'ringen husker.' },

    // Gallery captions (boxing mobile)
    'caption-dummy': { en: 'the dummy', no: 'dukken' },
    'caption-bag': { en: 'the bag', no: 'sekken' },
    'caption-floor': { en: 'the floor', no: 'gulvet' },
    'caption-speed': { en: 'the speed', no: 'farten' },
    'caption-wall': { en: 'the wall', no: 'veggen' },
    'caption-gear': { en: 'the gear', no: 'utstyret' },
    'caption-marker': { en: 'the marker', no: 'markøren' },
    'caption-bridge': { en: 'the bridge', no: 'broen' },
    'caption-focus': { en: 'the focus', no: 'fokuset' },
    'caption-review': { en: 'the review', no: 'gjennomgangen' },
    'caption-command': { en: 'command wall', no: 'kommandoveggen' },
    'caption-trx': { en: 'trx corner', no: 'trx-hjørnet' },
    'caption-reflex-stick': { en: 'reflex stick', no: 'refleksstav' },
    'caption-view': { en: 'the view', no: 'utsikten' },
    'caption-space': { en: 'the space', no: 'lokalet' },
    'caption-kriger': { en: 'kriger', no: 'kriger' },
    'caption-morning': { en: 'morning light', no: 'morgenlys' },

    // Back link
    'back': { en: '\u2190 BACK', no: '\u2190 TILBAKE' }
  };

  // ═══════════════════════════════════════
  // LANGUAGE DETECTION
  // ═══════════════════════════════════════
  function detectLanguage() {
    // 1. Check URL parameter
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    if (urlLang === 'no' || urlLang === 'en') {
      localStorage.setItem('nextelite-lang', urlLang);
      // Clean URL without reload
      if (window.history && window.history.replaceState) {
        var cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, '', cleanUrl);
      }
      return urlLang;
    }

    // 2. Check localStorage
    var stored = localStorage.getItem('nextelite-lang');
    if (stored === 'no' || stored === 'en') {
      return stored;
    }

    // 3. Default to English
    return 'en';
  }

  // ═══════════════════════════════════════
  // APPLY TRANSLATIONS
  // ═══════════════════════════════════════
  function applyLanguage(lang) {
    // Update html lang attribute
    document.documentElement.lang = lang === 'no' ? 'no' : 'en';

    // Find all elements with data-i18n
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      }
    });

    // Find all elements with data-i18n-html (for HTML content like arrows)
    var htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (translations[key] && translations[key][lang]) {
        el.innerHTML = translations[key][lang];
      }
    });

    // Update toggle buttons
    var langBtns = document.querySelectorAll('[data-lang-btn]');
    langBtns.forEach(function(btn) {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang-btn') === lang) {
        btn.classList.add('active');
      }
    });

    // Save to localStorage
    localStorage.setItem('nextelite-lang', lang);
  }

  // ═══════════════════════════════════════
  // TOGGLE SETUP
  // ═══════════════════════════════════════
  function setupToggle() {
    var langBtns = document.querySelectorAll('[data-lang-btn]');
    langBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var lang = btn.getAttribute('data-lang-btn');
        applyLanguage(lang);
      });
    });
  }

  // ═══════════════════════════════════════
  // INIT
  // ═══════════════════════════════════════
  var currentLang = detectLanguage();

  // Apply on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      applyLanguage(currentLang);
      setupToggle();
    });
  } else {
    applyLanguage(currentLang);
    setupToggle();
  }

  // Expose for external use
  window.nexteliteLang = {
    get: function() { return localStorage.getItem('nextelite-lang') || 'en'; },
    set: applyLanguage
  };

  // the ring speaks every language. the work is universal.
  // l1ft0ff — bokmål er ikke SMS. æøå eller ingenting.
  console.log('%c lang: ' + currentLang + ' ', 'color: #888; font-size: 10px;');
})();
