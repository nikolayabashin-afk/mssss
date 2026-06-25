(function () {
  const root = document.getElementById('site-root');
  const page = document.body.dataset.page || 'home';
  let lang = localStorage.getItem('mss-lang') || 'en';

  const t = (item) => {
    if (item == null) return '';
    if (typeof item === 'string') return item;
    return item[lang] || item.en || '';
  };
  const esc = (str) => String(str ?? '').replace(/[&<>"']/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
  const img = (key) => SITE_DATA.images[key] || key || SITE_DATA.images.fallback;
  const reviewBadge = (text) => `<span class="tag tag-review">${esc(text || t(SITE_DATA.common.review))}</span>`;
  const demoBadge = () => `<span class="tag tag-demo">${esc(t(SITE_DATA.common.demo))}</span>`;
  const arrow = '<span aria-hidden="true">→</span>';

  function setDocumentLanguage() {
    document.documentElement.lang = lang;
    document.title = document.title.replace(' | Mineral Spectrum Survey', '') + ' | Mineral Spectrum Survey';
  }

  function header() {
    return `
      <header class="site-header" data-header>
        <a class="brand" href="index.html" aria-label="${esc(t(SITE_DATA.brand.name))}">
          <span class="brand-mark" aria-hidden="true">MSS</span>
          <span class="brand-copy"><strong>${esc(t(SITE_DATA.brand.name))}</strong><small>${esc(t(SITE_DATA.brand.descriptor))}</small></span>
        </a>
        <button class="menu-toggle" data-menu-toggle aria-label="Open menu"><span></span><span></span><span></span></button>
        <nav class="main-nav" data-main-nav>
          ${SITE_DATA.nav.map((item) => `
            <div class="nav-group">
              <a class="nav-link" href="${item.href}">${esc(t(item.label))}</a>
              ${item.children ? `<div class="mega-menu">${item.children.map(child => `<a href="${child.href}">${esc(t(child.label))}</a>`).join('')}</div>` : ''}
            </div>`).join('')}
        </nav>
        <div class="header-actions">
          <a class="contact-link" href="contacts.html">${esc(t(SITE_DATA.common.contact))}</a>
          <button class="icon-button" data-search-open aria-label="${esc(t(SITE_DATA.common.search))}">⌕</button>
          <div class="lang-switch" aria-label="Language switcher">
            <button class="${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button class="${lang === 'ru' ? 'active' : ''}" data-lang="ru">RU</button>
          </div>
        </div>
      </header>
      <div class="search-panel" data-search-panel aria-hidden="true">
        <div class="search-shell">
          <button class="search-close" data-search-close aria-label="Close search">×</button>
          <p class="section-kicker">${esc(t(SITE_DATA.common.search))}</p>
          <input data-search-input type="search" placeholder="${lang === 'ru' ? 'Поиск по услугам, проектам, партнёрам...' : 'Search services, projects, partners...'}" />
          <div class="search-results" data-search-results></div>
        </div>
      </div>
    `;
  }

  function footer() {
    return `
      <footer class="site-footer">
        <section class="footer-cta">
          <div>
            <p class="section-kicker">${esc(t(SITE_DATA.common.consultation))}</p>
            <h2>${lang === 'ru' ? 'Готовы обсудить участок, исходные данные или техническое задание?' : 'Ready to discuss an area, input data or technical scope?'}</h2>
          </div>
          <a class="button button-light" href="contacts.html">${esc(t(SITE_DATA.common.requestProposal))} ${arrow}</a>
        </section>
        <div class="footer-main">
          <div>
            <div class="footer-brand">MSS</div>
            <p>${esc(t(SITE_DATA.brand.descriptor))}</p>
          </div>
          <div class="footer-columns">
            <div><h3>${esc(t(SITE_DATA.nav[1].label))}</h3>${SITE_DATA.serviceOverview.map(s => `<a href="${s.href}">${esc(t(s.title))}</a>`).join('')}</div>
            <div><h3>${esc(t(SITE_DATA.nav[0].label))}</h3><a href="about.html#who-we-are">${lang === 'ru' ? 'Кто мы' : 'Who we are'}</a><a href="about.html#mission">${lang === 'ru' ? 'Миссия' : 'Mission'}</a><a href="partners.html">${lang === 'ru' ? 'Партнёры' : 'Partners'}</a></div>
            <div><h3>${esc(t(SITE_DATA.common.contact))}</h3><a href="contacts.html">${esc(t(SITE_DATA.common.contactUs))}</a><a href="resources.html">${lang === 'ru' ? 'Материалы' : 'Resources'}</a><a href="newsroom.html">${lang === 'ru' ? 'Новости' : 'Newsroom'}</a></div>
          </div>
        </div>
        <p class="footer-note">© ${new Date().getFullYear()} Minerals Spectrum Survey. ${lang === 'ru' ? 'Статический демо-сайт; форма подготовлена для будущей интеграции.' : 'Static demo website; form prepared for future integration.'}</p>
      </footer>
    `;
  }

  function hero({ title, subtitle, eyebrow, imageKey = 'hero', primaryHref = 'services.html', primaryText, secondaryHref = 'contacts.html', secondaryText, large = true }) {
    return `
      <section class="hero ${large ? 'hero-large' : ''}">
        <div class="hero-bg"><img src="${img(imageKey)}" loading="eager" alt="" onerror="this.onerror=null;this.src='${SITE_DATA.images.fallback}'"></div>
        <div class="hero-overlay"></div>
        <div class="hero-grid" aria-hidden="true"></div>
        <div class="container hero-content reveal">
          ${eyebrow ? `<p class="eyebrow">${esc(t(eyebrow))}</p>` : ''}
          <h1>${esc(t(title))}</h1>
          <p>${esc(t(subtitle))}</p>
          <div class="hero-actions">
            <a class="button" href="${primaryHref}">${esc(t(primaryText || SITE_DATA.common.explore))} ${arrow}</a>
            <a class="button button-ghost" href="${secondaryHref}">${esc(t(secondaryText || SITE_DATA.common.contactUs))}</a>
          </div>
        </div>
      </section>
    `;
  }

  function sectionHeader(kicker, title, subtitle, extra = '') {
    return `<div class="section-header reveal">${kicker ? `<p class="section-kicker">${esc(t(kicker))}</p>` : ''}<h2>${esc(t(title))}</h2>${subtitle ? `<p>${esc(t(subtitle))}</p>` : ''}${extra}</div>`;
  }

  function statGrid() {
    return `<div class="stat-grid">${SITE_DATA.stats.map(s => `<article class="stat-card reveal"><strong>${esc(s.value)}</strong><span>${esc(t(s.label))}</span></article>`).join('')}</div>`;
  }

  function serviceCards(compact = false) {
    return `<div class="solution-grid ${compact ? 'compact' : ''}">${SITE_DATA.serviceOverview.map((s, i) => `
      <a class="solution-card reveal" href="${s.href}" style="--i:${i}">
        <span class="card-index">0${i + 1}</span>
        <h3>${esc(t(s.title))}</h3>
        <p>${esc(t(s.short))}</p>
        <span class="card-link">${esc(t(SITE_DATA.common.explore))} ${arrow}</span>
      </a>`).join('')}</div>`;
  }

  function newsStrip() {
    const items = [...SITE_DATA.news.events, ...SITE_DATA.news.articles, ...SITE_DATA.news.bulletins].slice(0, 3);
    return `<div class="news-strip">${items.map(n => `<article class="news-mini reveal">${n.demo ? demoBadge() : ''}<small>${esc(n.date || t(n.type) || 'MSS')}</small><h3>${esc(t(n.title))}</h3><p>${esc(t(n.summary))}</p></article>`).join('')}</div>`;
  }

  function caseGrid(limit, filterService) {
    let items = SITE_DATA.caseStudies;
    if (filterService) items = items.filter(c => c.service === filterService);
    if (limit) items = items.slice(0, limit);
    return `<div class="case-grid">${items.map((c, i) => `
      <article class="case-card reveal">
        <div class="case-media"><span>${esc(t(c.commodity))}</span></div>
        <div class="case-body">
          <div class="case-tags"><span class="tag">${esc(t(c.tag))}</span>${c.review ? reviewBadge() : ''}</div>
          <h3>${esc(t(c.title))}</h3>
          <dl>
            <div><dt>${lang === 'ru' ? 'Локация' : 'Location'}</dt><dd>${esc(t(c.location))}</dd></div>
            <div><dt>${lang === 'ru' ? 'Сырьё' : 'Commodity'}</dt><dd>${esc(t(c.commodity))}</dd></div>
          </dl>
          <p>${esc(t(c.scope))}</p>
          <p class="outcome">${esc(t(c.outcome))}</p>
        </div>
      </article>`).join('')}</div>`;
  }

  function renderHome() {
    const p = SITE_DATA.pages.home;
    return `
      ${hero({ ...p.hero, imageKey: 'hero', primaryHref: 'services.html', secondaryHref: 'about.html', primaryText: p.hero.primary, secondaryText: p.hero.secondary })}
      <main>
        <section class="section light-section">
          <div class="container two-col">
            <div class="reveal"><p class="section-kicker">${esc(t(p.whatDrivesUs.title))}</p><h2>${esc(t(p.whatDrivesUs.body).split('.')[0])}.</h2></div>
            <div class="lead-block reveal"><p>${esc(t(p.whatDrivesUs.body))}</p></div>
          </div>
        </section>
        <section class="section dark-section">
          <div class="container">
            ${sectionHeader({en:'Our solutions',ru:'Наши решения'}, {en:'Five connected capabilities for smarter exploration.',ru:'Пять взаимосвязанных возможностей для более умной разведки.'}, {en:'Use each service independently or combine them into an integrated workflow for risk reduction and technical decision support.',ru:'Используйте каждую услугу отдельно или объединяйте их в комплексный рабочий процесс для снижения рисков и поддержки технических решений.'})}
            ${serviceCards()}
          </div>
        </section>
        <section class="section light-section">
          <div class="container">
            ${sectionHeader({en:'Latest news',ru:'Новости'}, {en:'Technical updates and company activity.',ru:'Технические обновления и активность компании.'}, {en:'Demo content is included now and can be replaced with real news later.',ru:'Сейчас добавлен демо-контент, который позже можно заменить реальными новостями.'}, demoBadge())}
            ${newsStrip()}
          </div>
        </section>
        <section class="section split-section">
          <div class="container two-col align-start">
            <div class="reveal">${sectionHeader({en:'Our case studies',ru:'Примеры работ / Наш опыт'}, {en:'Explore MSS solutions in action.',ru:'Изучите решения MSS в действии.'}, {en:'A consolidated selection from Earth Remote Sensing, Adaptive Seismic Evaluation and Magnetic Aerotomography.',ru:'Сводная подборка по дистанционному зондированию, адаптивной сейсмической оценке и магнитной аэротомографии.'})}<a class="text-link" href="newsroom.html#case-studies">${esc(t(SITE_DATA.common.readMore))} ${arrow}</a></div>
            <div>${caseGrid(3)}</div>
          </div>
        </section>
        <section class="section dark-section compact-section"><div class="container">${statGrid()}</div></section>
      </main>
    `;
  }

  function renderAbout() {
    const p = SITE_DATA.pages.about;
    return `
      ${hero({ ...p.hero, imageKey: 'fieldCamp', primaryHref: 'services.html', secondaryHref: 'contacts.html', large: false })}
      <main>
        <section id="who-we-are" class="section light-section">
          <div class="container two-col align-start">
            <div class="image-panel reveal"><img src="${img('gis')}" loading="lazy" alt="GIS field mapping device" onerror="this.onerror=null;this.src='${SITE_DATA.images.fallback}'"></div>
            <div class="reveal"><p class="section-kicker">${lang === 'ru' ? 'Кто мы' : 'Who we are'}</p><h2>${esc(t(p.founded.title))}</h2>${reviewBadge()}<p>${esc(t(p.founded.body))}</p><p class="editor-note">${esc(t(p.founded.note))}</p></div>
          </div>
        </section>
        <section id="mission" class="section dark-section">
          <div class="container two-col">
            <div class="reveal"><p class="section-kicker">${lang === 'ru' ? 'Наша цель' : 'Our Mission'}</p><h2>${esc(t(p.mission.title))}</h2><p>${esc(t(p.mission.body))}</p></div>
            ${statGrid()}
          </div>
        </section>
        <section class="section light-section">
          <div class="container">
            ${sectionHeader({en:'What drives us',ru:'Что нас движет'}, {en:'People, technology and performance.',ru:'Люди, технологии и результат.'}, {en:'MSS combines practical field experience with a focus on remote sensing, data interpretation and technical reliability.',ru:'MSS объединяет практический полевой опыт с фокусом на дистанционном зондировании, интерпретации данных и технической надёжности.'})}
            <div class="value-grid">${p.values.map(v => `<article class="value-card reveal"><h3>${esc(t(v.title))}</h3><p>${esc(t(v.body))}</p></article>`).join('')}</div>
          </div>
        </section>
        <section class="section split-section"><div class="container"><div class="section-header reveal"><p class="section-kicker">${lang === 'ru' ? 'Наши работы' : 'Case studies'}</p><h2>${lang === 'ru' ? 'Успешные проекты и области применения.' : 'Success in action across multiple applications.'}</h2></div>${caseGrid(6)}</div></section>
      </main>
    `;
  }

  function list(items) {
    return `<ul class="clean-list">${items.map(item => `<li>${esc(t(item))}</li>`).join('')}</ul>`;
  }

  function applicationCards(apps) {
    return `<div class="mini-grid">${apps.map(a => `<article class="mini-card"><h4>${esc(t(a.title))}</h4><p>${esc(t(a.text))}</p></article>`).join('')}</div>`;
  }

  function serviceDetail(s) {
    return `
      <article id="${s.id}" class="service-detail reveal">
        <div class="service-visual"><img src="${img(s.image)}" loading="lazy" alt="${esc(t(s.title))}" onerror="this.onerror=null;this.src='${SITE_DATA.images.fallback}'"></div>
        <div class="service-copy">
          <p class="section-kicker">${esc(t(s.kicker))}</p>
          <h2>${esc(t(s.title))}</h2>
          <h3>${esc(t(s.headline))}</h3>
          ${s.note ? `<div class="editor-note inline-note">${reviewBadge()}<span>${esc(t(s.note))}</span></div>` : ''}
          <p>${esc(t(s.overview))}</p>
          <div class="service-actions"><a class="button" href="contacts.html">${esc(t(SITE_DATA.common.contactUs))}</a><a class="button button-subtle" href="resources.html">${esc(t(SITE_DATA.common.additionalResources))}</a></div>
        </div>
        <div class="service-tabs">
          <details open><summary>${lang === 'ru' ? 'Преимущества' : 'Benefits'}</summary>${list(s.benefits || [])}</details>
          ${s.capabilities ? `<details><summary>${lang === 'ru' ? 'Основные возможности' : 'Key capabilities'}</summary>${list(s.capabilities)}</details>` : ''}
          ${s.applications ? `<details><summary>${lang === 'ru' ? 'Области применения' : 'Application areas'}</summary>${applicationCards(s.applications)}</details>` : ''}
          ${s.deliverables ? `<details><summary>${lang === 'ru' ? 'Результаты' : 'Deliverables'}</summary>${list(s.deliverables)}</details>` : ''}
          ${s.science ? `<details><summary>${lang === 'ru' ? 'Принцип технологии' : 'The science behind'}</summary>${applicationCards(s.science)}</details>` : ''}
          ${s.input ? `<details><summary>${lang === 'ru' ? 'Исходные данные' : 'Input data'}</summary>${list(s.input)}</details>` : ''}
          ${s.validation ? `<details><summary>${lang === 'ru' ? 'Проверка технологии' : 'Technology validation'}</summary><p>${esc(t(s.validation))}</p></details>` : ''}
          ${s.features ? `<details><summary>${lang === 'ru' ? 'Особенности' : 'Features'}</summary>${Array.isArray(s.features) && s.features[0]?.title ? applicationCards(s.features) : list(s.features)}</details>` : ''}
          ${s.expertise ? `<details><summary>${lang === 'ru' ? 'Наш опыт' : 'Our expertise'}</summary><p>${esc(t(s.expertise))}</p></details>` : ''}
        </div>
      </article>
    `;
  }

  function renderServices() {
    const p = SITE_DATA.pages.services;
    return `
      ${hero({ ...p.hero, imageKey: 'fieldMap', primaryHref: '#approach', secondaryHref: 'contacts.html', primaryText: SITE_DATA.common.explore, secondaryText: SITE_DATA.common.contactUs, large: false })}
      <main>
        <section class="section light-section"><div class="container two-col"><div class="reveal"><p class="section-kicker">${lang === 'ru' ? 'Проблема' : 'Challenge'}</p><h2>${esc(t(p.challenge.title))}</h2></div><div class="lead-block reveal"><p>${esc(t(p.challenge.body))}</p></div></div></section>
        <section id="approach" class="section dark-section"><div class="container">${sectionHeader({en:'Approach',ru:'Подход'}, {en:'Our MSS Solutions',ru:'Наши решения MSS'}, {en:'Hover and open each capability to explore how the technology contributes to the geological exploration workflow.',ru:'Наведите и откройте каждую возможность, чтобы увидеть роль технологии в рабочем процессе геологоразведки.'})}${serviceCards()}</div></section>
        <section class="section light-section service-stack"><div class="container">${SITE_DATA.services.map(serviceDetail).join('')}</div></section>
        <section class="section dark-section compact-section"><div class="container">${sectionHeader(null, p.impactTitle, p.impactSubtitle)}${statGrid()}</div></section>
        <section class="section split-section"><div class="container">${sectionHeader({en:'Case studies',ru:'Примеры работ'}, {en:'Explore our success stories.',ru:'Изучите наши успешные проекты.'}, {en:'All case studies listed in the sitemap are included; uncertain historical examples are marked for review.',ru:'Включены все примеры из sitemap; спорные исторические примеры отмечены для проверки.'})}${caseGrid()}</div></section>
      </main>
    `;
  }

  function renderPartners() {
    const p = SITE_DATA.pages.partners;
    return `
      ${hero({ ...p.hero, imageKey: 'mine', primaryHref: '#partners-list', secondaryHref: 'contacts.html', large: false })}
      <main>
        <section class="section light-section"><div class="container two-col"><h2 class="reveal">${esc(t(p.hero.title))}</h2><p class="lead-block reveal">${esc(t(p.intro))}</p></div></section>
        <section id="partners-list" class="section dark-section"><div class="container">
          ${sectionHeader({en:'Global reach',ru:'Глобальное присутствие'}, {en:'Partners by region.',ru:'Партнёры по регионам.'}, {en:'Partner contact details are placeholders until approved.',ru:'Контактные данные партнёров пока оставлены как заполнители.'}, reviewBadge())}
          <span id="middle-east" class="anchor-target"></span><span id="south-east-asia" class="anchor-target"></span><div class="partner-grid">${SITE_DATA.partners.map((partner, index) => `<article class="partner-card reveal"><span class="tag">${partner.region === 'middle-east' ? (lang === 'ru' ? 'Ближний Восток' : 'Middle East') : (lang === 'ru' ? 'Южная Азия' : 'South East Asia')}</span>${partner.statusReview ? reviewBadge() : ''}<h3>${esc(partner.name)}</h3><p>${esc(t(partner.text))}</p><a class="text-link" href="${partner.url}">${partner.url === '#' ? (lang === 'ru' ? 'Ссылка будет добавлена' : 'Link to be added') : partner.url}</a></article>`).join('')}</div>
        </div></section>
        <section class="section light-section"><div class="container cta-card reveal"><div><p class="section-kicker">${lang === 'ru' ? 'Стать партнёром' : 'Become a partner'}</p><h2>${esc(t(p.become))}</h2></div><a class="button" href="contacts.html">${esc(t(SITE_DATA.common.contactUs))} ${arrow}</a></div></section>
      </main>
    `;
  }

  function articleGrid(items) {
    return `<div class="article-grid">${items.map(item => `<article class="article-card reveal">${item.demo ? demoBadge() : ''}<small>${esc(item.date || t(item.type) || 'MSS')}</small><h3>${esc(t(item.title))}</h3><p>${esc(t(item.summary))}</p><a class="text-link" href="resources.html">${esc(t(SITE_DATA.common.readMore))} ${arrow}</a></article>`).join('')}</div>`;
  }

  function renderNewsroom() {
    return `
      ${hero({ title: {en:'Newsroom',ru:'Новости'}, subtitle: {en:'Events, articles, bulletins and MSS case studies.',ru:'События, статьи, бюллетени и примеры работ MSS.'}, imageKey: 'core', primaryHref: '#case-studies', secondaryHref: 'contacts.html', large: false })}
      <main>
        <section id="events" class="section light-section"><div class="container">${sectionHeader({en:'Events',ru:'События'}, {en:'Upcoming and recent activity.',ru:'Будущие и недавние события.'}, {en:'Demo entries are included until real announcements are provided.',ru:'Демо-записи добавлены до предоставления реальных анонсов.'}, demoBadge())}${articleGrid(SITE_DATA.news.events)}</div></section>
        <section id="articles" class="section dark-section"><div class="container">${sectionHeader({en:'Articles',ru:'Статьи'}, {en:'Technical perspectives.',ru:'Технические материалы.'}, null, demoBadge())}${articleGrid(SITE_DATA.news.articles)}</div></section>
        <section id="bulletins" class="section light-section"><div class="container">${sectionHeader({en:'Bulletins',ru:'Бюллетени'}, {en:'Short technical updates and checklists.',ru:'Краткие технические обновления и чек-листы.'}, null, demoBadge())}${articleGrid(SITE_DATA.news.bulletins)}</div></section>
        <section id="case-studies" class="section split-section"><div class="container">${sectionHeader({en:'Case Studies',ru:'Наши проекты'}, {en:'Our case studies.',ru:'Наши примеры работ.'}, {en:'All cases from the sitemap are represented as compact cards.',ru:'Все примеры из sitemap представлены компактными карточками.'})}${caseGrid()}</div></section>
      </main>
    `;
  }

  function renderContacts() {
    const p = SITE_DATA.pages.contacts;
    return `
      ${hero({ ...p.hero, imageKey: 'fieldMap', primaryHref: '#contact-form', secondaryHref: 'resources.html', primaryText: SITE_DATA.common.requestProposal, secondaryText: SITE_DATA.common.additionalResources, large: false })}
      <main>
        <section class="section light-section"><div class="container contact-layout">
          <form id="contact-form" class="contact-form reveal">
            <p class="section-kicker">${esc(t(SITE_DATA.common.consultation))}</p>
            <h2>${esc(t(SITE_DATA.common.requestProposal))}</h2>
            <div class="form-grid">
              <label>${lang === 'ru' ? 'Имя' : 'First Name'}*<input required name="firstName" type="text"></label>
              <label>${lang === 'ru' ? 'Фамилия' : 'Last Name'}*<input required name="lastName" type="text"></label>
              <label>${lang === 'ru' ? 'Рабочий e-mail' : 'Business e-mail'}*<input required name="email" type="email"></label>
              <label>${lang === 'ru' ? 'Номер телефона' : 'Phone number'}<input name="phone" type="tel"></label>
              <label>${lang === 'ru' ? 'Должность' : 'Job Title'}<input name="job" type="text"></label>
              <label>${lang === 'ru' ? 'Компания' : 'Company'}*<input required name="company" type="text"></label>
              <label>${lang === 'ru' ? 'Локация проекта' : 'Project location'}<input name="location" type="text"></label>
              <label>${lang === 'ru' ? 'Искомое сырьё' : 'Commodity / mineral type'}<input name="commodity" type="text"></label>
              <label class="full">${lang === 'ru' ? 'Необходимая услуга' : 'Required service'}<select name="service"><option value="">${lang === 'ru' ? 'Выберите услугу' : 'Select a service'}</option>${SITE_DATA.serviceOverview.map(s => `<option>${esc(t(s.title))}</option>`).join('')}</select></label>
              <label class="full">${lang === 'ru' ? 'Комментарии' : 'Comments'}*<textarea required rows="6" name="comments"></textarea></label>
            </div>
            <button class="button" type="submit">${esc(t(SITE_DATA.common.contactUs))}</button>
            <p class="form-status" data-form-status>${lang === 'ru' ? 'Форма статическая. Интеграция будет подключена позже.' : 'This is a static form. Integration will be connected later.'}</p>
          </form>
          <aside class="contact-panel reveal">
            <h2>${lang === 'ru' ? 'Контактные данные' : 'Contact placeholders'}</h2>
            <p><strong>Email</strong><br>${esc(p.placeholders.email)}</p>
            <p><strong>${lang === 'ru' ? 'Телефон' : 'Phone'}</strong><br>${esc(p.placeholders.phone)}</p>
            <p><strong>${lang === 'ru' ? 'Офис' : 'Office'}</strong><br>${esc(t(p.placeholders.office))}</p>
            <div class="editor-note">${reviewBadge()}<span>${lang === 'ru' ? 'Замените заполнители на реальные контакты перед публикацией.' : 'Replace placeholders with real contact details before launch.'}</span></div>
          </aside>
        </div></section>
      </main>
    `;
  }

  function renderResources() {
    return `
      ${hero({ title: {en:'Resources',ru:'Материалы'}, subtitle: {en:'Technical resources, future downloads and anonymized project portfolio.',ru:'Технические материалы, будущие загрузки и обезличенное портфолио проектов.'}, imageKey: 'europeMap', primaryHref: '#library', secondaryHref: 'contacts.html', large: false })}
      <main>
        <section id="library" class="section light-section"><div class="container">${sectionHeader({en:'Resource library',ru:'Библиотека материалов'}, {en:'Prepared for future documents and technical downloads.',ru:'Подготовлено для будущих документов и технических загрузок.'}, {en:'PDFs are not included yet to keep the file count low.',ru:'PDF-файлы пока не включены, чтобы сохранить малое количество файлов.'}, demoBadge())}<div class="resource-grid">${SITE_DATA.resources.map(r => `<article class="resource-card reveal">${r.demo ? demoBadge() : ''}<small>${esc(t(r.type))}</small><h3>${esc(t(r.title))}</h3><p>${esc(t(r.summary))}</p><a class="button button-subtle" href="#">${esc(t(SITE_DATA.common.downloadPdf))}</a></article>`).join('')}</div></div></section>
        <section class="section dark-section"><div class="container">${sectionHeader({en:'G&G portfolio',ru:'G&G портфолио'}, {en:'Anonymized project experience.',ru:'Обезличенный опыт проектов.'}, {en:'The guide requested a portfolio table without exact field or company names.',ru:'В руководстве указано подготовить таблицу портфолио без точных названий месторождений и компаний.'}, reviewBadge())}<div class="table-wrap reveal"><table><thead><tr><th>${lang === 'ru' ? 'Год' : 'Year'}</th><th>${lang === 'ru' ? 'Цель / работа' : 'Work description'}</th><th>${lang === 'ru' ? 'Направление' : 'Area'}</th><th>${lang === 'ru' ? 'Регион' : 'Region'}</th><th>${lang === 'ru' ? 'Сырьё' : 'Mineral'}</th></tr></thead><tbody>${SITE_DATA.portfolio.map(p => `<tr><td>${esc(p.year)}</td><td>${esc(t(p.work))}</td><td>${esc(t(p.area))}</td><td>${esc(t(p.region))}</td><td>${esc(t(p.mineral))}</td></tr>`).join('')}</tbody></table></div></div></section>
      </main>
    `;
  }

  function buildSearchIndex() {
    const entries = [];
    SITE_DATA.serviceOverview.forEach(s => entries.push({ title: t(s.title), text: t(s.short), href: s.href, type: lang === 'ru' ? 'Услуга' : 'Service' }));
    SITE_DATA.caseStudies.forEach(c => entries.push({ title: t(c.title), text: `${t(c.scope)} ${t(c.commodity)} ${t(c.location)}`, href: 'newsroom.html#case-studies', type: lang === 'ru' ? 'Кейс' : 'Case' }));
    SITE_DATA.partners.forEach(p => entries.push({ title: p.name, text: t(p.text), href: 'partners.html', type: lang === 'ru' ? 'Партнёр' : 'Partner' }));
    [...SITE_DATA.news.events, ...SITE_DATA.news.articles, ...SITE_DATA.news.bulletins].forEach(n => entries.push({ title: t(n.title), text: t(n.summary), href: 'newsroom.html', type: lang === 'ru' ? 'Новости' : 'News' }));
    return entries;
  }

  function installInteractions() {
    document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      localStorage.setItem('mss-lang', lang);
      render();
    }));
    const toggle = document.querySelector('[data-menu-toggle]');
    const nav = document.querySelector('[data-main-nav]');
    toggle?.addEventListener('click', () => nav?.classList.toggle('open'));

    const searchPanel = document.querySelector('[data-search-panel]');
    const searchInput = document.querySelector('[data-search-input]');
    const searchResults = document.querySelector('[data-search-results]');
    const openSearch = () => { searchPanel.classList.add('open'); searchPanel.setAttribute('aria-hidden', 'false'); setTimeout(() => searchInput?.focus(), 60); };
    const closeSearch = () => { searchPanel.classList.remove('open'); searchPanel.setAttribute('aria-hidden', 'true'); };
    document.querySelector('[data-search-open]')?.addEventListener('click', openSearch);
    document.querySelector('[data-search-close]')?.addEventListener('click', closeSearch);
    searchPanel?.addEventListener('click', e => { if (e.target === searchPanel) closeSearch(); });
    searchInput?.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      const entries = buildSearchIndex().filter(e => `${e.title} ${e.text}`.toLowerCase().includes(q)).slice(0, 8);
      searchResults.innerHTML = !q ? '' : entries.length ? entries.map(e => `<a href="${e.href}"><span>${esc(e.type)}</span><strong>${esc(e.title)}</strong><small>${esc(e.text)}</small></a>`).join('') : `<p>${lang === 'ru' ? 'Ничего не найдено.' : 'No results found.'}</p>`;
    });

    const form = document.querySelector('#contact-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.querySelector('[data-form-status]');
      status.textContent = lang === 'ru' ? 'Спасибо. В этой статической версии заявка не отправляется; подключение формы запланировано позже.' : 'Thank you. This static version does not send requests yet; form integration is planned later.';
      status.classList.add('visible');
    });

    const observer = 'IntersectionObserver' in window ? new IntersectionObserver((items) => {
      items.forEach(item => { if (item.isIntersecting) { item.target.classList.add('is-visible'); observer.unobserve(item.target); } });
    }, { threshold: 0.12 }) : null;
    document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('is-visible'));

    if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
  }

  function render() {
    setDocumentLanguage();
    let content = '';
    if (page === 'home') content = renderHome();
    if (page === 'about') content = renderAbout();
    if (page === 'services') content = renderServices();
    if (page === 'partners') content = renderPartners();
    if (page === 'newsroom') content = renderNewsroom();
    if (page === 'contacts') content = renderContacts();
    if (page === 'resources') content = renderResources();
    root.innerHTML = header() + content + footer();
    installInteractions();
  }

  render();
})();
