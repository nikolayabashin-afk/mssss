/*
  Minerals Spectrum Survey static website content.
  Edit text, cards, case studies, partners and images here.
  The site is bilingual: every visible content item uses { en: "...", ru: "..." }.
*/

const SITE_DATA = {
  brand: {
    short: "MSS",
    name: {
      en: "Minerals Spectrum Survey",
      ru: "Minerals Spectrum Survey"
    },
    descriptor: {
      en: "Remote sensing and geological intelligence",
      ru: "Дистанционное зондирование и геологическая аналитика"
    }
  },
  images: {
    hero: "https://commons.wikimedia.org/wiki/Special:FilePath/Exploration_drill_cores_(Potter_Mine,_east_of_Timmins,_Ontario,_Canada)_(32928527137).jpg",
    fieldMap: "https://commons.wikimedia.org/wiki/Special:FilePath/Geologic_Field_Map.jpg",
    gis: "https://commons.wikimedia.org/wiki/Special:FilePath/PDA_Mapping.jpg",
    core: "https://commons.wikimedia.org/wiki/Special:FilePath/Drill_core_repository_-_Geological_and_Mining_Institute_of_Spain_03.JPG",
    mine: "https://commons.wikimedia.org/wiki/Special:FilePath/Potter_Mine_headframe_(east_of_Timmins,_Ontario,_Canada)_3_(47872223581).jpg",
    europeMap: "https://commons.wikimedia.org/wiki/Special:FilePath/Europe_geological_map-en.jpg",
    fieldCamp: "https://commons.wikimedia.org/wiki/Special:FilePath/USGS_1950s_mapping_field_camp.jpg",
    hydroMap: "https://commons.wikimedia.org/wiki/Special:FilePath/Algeria_Hydrogeology4.png",
    fallback: "assets/fallback.svg"
  },
  nav: [
    {
      label: { en: "About Us", ru: "О нас" },
      href: "about.html",
      children: [
        { label: { en: "Who We Are", ru: "Кто мы" }, href: "about.html#who-we-are" },
        { label: { en: "Our Mission", ru: "Наша цель" }, href: "about.html#mission" },
        { label: { en: "Case Studies", ru: "Наши работы" }, href: "newsroom.html#case-studies" }
      ]
    },
    {
      label: { en: "MSS Services", ru: "Услуги MSS" },
      href: "services.html",
      children: [
        { label: { en: "Earth Remote Sensing", ru: "Дистанционное зондирование Земли" }, href: "services.html#ers" },
        { label: { en: "Adaptive Seismic Data Evaluation", ru: "Адаптивная оценка сейсмических данных" }, href: "services.html#asde" },
        { label: { en: "Magnetic Aerotomography", ru: "Магнитная аэротомография" }, href: "services.html#ma" },
        { label: { en: "Geology & Geophysics Services", ru: "Геологический консалтинг" }, href: "services.html#ggs" },
        { label: { en: "Integrated Solutions", ru: "Комплексные решения" }, href: "services.html#integrated" }
      ]
    },
    {
      label: { en: "Partners", ru: "Партнёры" },
      href: "partners.html",
      children: [
        { label: { en: "Middle East", ru: "Ближний Восток" }, href: "partners.html#middle-east" },
        { label: { en: "South East Asia", ru: "Южная Азия" }, href: "partners.html#south-east-asia" }
      ]
    },
    {
      label: { en: "Newsroom", ru: "Новости" },
      href: "newsroom.html",
      children: [
        { label: { en: "Bulletins", ru: "Бюллетени" }, href: "newsroom.html#bulletins" },
        { label: { en: "Case Studies", ru: "Наши проекты" }, href: "newsroom.html#case-studies" },
        { label: { en: "Events", ru: "События" }, href: "newsroom.html#events" },
        { label: { en: "Articles", ru: "Статьи" }, href: "newsroom.html#articles" }
      ]
    },
    { label: { en: "Resources", ru: "Материалы" }, href: "resources.html" }
  ],
  common: {
    contact: { en: "Contact", ru: "Контакты" },
    search: { en: "Search", ru: "Поиск" },
    explore: { en: "Explore", ru: "Исследовать" },
    readMore: { en: "Read more", ru: "Узнать больше" },
    contactUs: { en: "Contact Us", ru: "Связаться с нами" },
    consultation: { en: "Start the conversation", ru: "Давайте обсудим" },
    downloadPdf: { en: "Download PDF", ru: "Скачать PDF" },
    additionalResources: { en: "Additional resources", ru: "Доп. материалы" },
    review: { en: "Review copy", ru: "Проверить текст" },
    demo: { en: "Demo content", ru: "Демо-контент" },
    requestProposal: { en: "Request a technical proposal", ru: "Запросить техническое предложение" }
  },
  stats: [
    { value: "3×", label: { en: "Potential reduction of exploration cost", ru: "Потенциальное снижение стоимости поиска" } },
    { value: "3–6", label: { en: "Months standard lead time", ru: "Месяцев стандартный срок работ" } },
    { value: "25+", label: { en: "Years average team expertise", ru: "Лет средний опыт команды" } },
    { value: "100%", label: { en: "Remote-first and low-impact workflow", ru: "Дистанционный и экологичный подход" } }
  ],
  serviceOverview: [
    {
      id: "ers",
      title: { en: "MSS Earth Remote Sensing", ru: "MSS Дистанционное зондирование Земли" },
      short: { en: "Innovative technology of remote identification of solid minerals, gases and fluids.", ru: "Инновационная технология дистанционной идентификации твердых минералов, газов и жидкостей." },
      href: "services.html#ers"
    },
    {
      id: "asde",
      title: { en: "MSS Adaptive Seismic Data Evaluation", ru: "MSS Адаптивная оценка сейсмических данных" },
      short: { en: "Adaptive neural-network geological modelling based on reference wells and 3D seismic data.", ru: "Адаптивное нейросетевое геологическое моделирование на основе эталонных скважин и 3D-сейсмики." },
      href: "services.html#asde"
    },
    {
      id: "ma",
      title: { en: "MSS Magnetic Aerotomography", ru: "MSS Магнитная аэротомография" },
      short: { en: "Vector description of magnetic field induction for locating and delineating ore bodies.", ru: "Векторное описание индукции магнитного поля для обнаружения и выделения рудных тел." },
      href: "services.html#ma"
    },
    {
      id: "ggs",
      title: { en: "MSS Geology & Geophysics Services", ru: "MSS Геолого-геофизические услуги" },
      short: { en: "Comprehensive G&G services, reserves evaluation support, modelling and expert consulting.", ru: "Комплексные геолого-геофизические услуги, поддержка оценки запасов, моделирование и экспертный консалтинг." },
      href: "services.html#ggs"
    },
    {
      id: "integrated",
      title: { en: "MSS Integrated Solutions", ru: "MSS Комплексные решения" },
      short: { en: "Combined MSS technologies and methodologies for integrated resource exploration and field-development decisions.", ru: "Объединение технологий и методов MSS для комплексных решений в разведке и разработке месторождений." },
      href: "services.html#integrated"
    }
  ],
  services: [
    {
      id: "ers",
      kicker: { en: "Remote resource identification", ru: "Дистанционная идентификация ресурсов" },
      title: { en: "MSS Earth Remote Sensing", ru: "MSS Дистанционное зондирование Земли" },
      headline: { en: "World-class technology for remote identification of minerals, gases and fluids.", ru: "Передовая технология мирового уровня для удаленной идентификации полезных ископаемых, газов и жидкостей." },
      image: "fieldMap",
      overview: {
        en: "MSS Earth Remote Sensing is a fully remote, high-precision approach for identifying hydrocarbons, mineral targets and underground water. The workflow is designed to narrow search areas, reduce field risk and provide decision-ready anomaly maps before expensive ground activity begins.",
        ru: "MSS Дистанционное зондирование Земли — полностью дистанционный высокоточный подход для выявления углеводородов, минеральных объектов и подземных вод. Рабочий процесс помогает сузить площадь поиска, снизить полевые риски и получить карты аномалий до начала дорогостоящих наземных работ."
      },
      note: { en: "Technical claims and validation wording were edited into a more corporate format; review before public legal use.", ru: "Технические заявления и текст о валидации переработаны в корпоративный формат; проверьте перед публичным юридическим использованием." },
      benefits: [
        { en: "Unambiguous identification of mineral presence", ru: "Однозначное выявление наличия полезных ископаемых" },
        { en: "Effective narrowing of exploration areas", ru: "Эффективное сужение зоны поиска" },
        { en: "Significant reduction of overall exploration costs", ru: "Значительное снижение общих затрат на разведку" },
        { en: "Short standard lead time of 3 to 6 months", ru: "Короткие сроки выполнения — от 3 до 6 месяцев" },
        { en: "No direct environmental and HSE risks from the remote phase", ru: "Отсутствие прямых экологических и производственных рисков на дистанционном этапе" }
      ],
      applications: [
        { title: { en: "Oil & gas", ru: "Нефтегазовая отрасль" }, text: { en: "Rapid identification of hydrocarbon anomalies down to 6,000 m and beyond.", ru: "Оперативный поиск углеводородных аномалий до глубин 6 000 м и более." } },
        { title: { en: "Mining", ru: "Горнодобывающая промышленность" }, text: { en: "Identification of metallic ore occurrences to depths of 500 m and beyond.", ru: "Оперативный поиск оруденений различных металлов до глубин 500 м и более." } },
        { title: { en: "Underground waters", ru: "Подземные воды" }, text: { en: "Fresh, saline and geothermal water search at depths of 1,000 m and beyond.", ru: "Поиск пресных, солёных и геотермальных вод до глубин 1 000 м и более." } },
        { title: { en: "Energy transition", ru: "Энергетика" }, text: { en: "Screening for natural hydrogen as a prospective clean energy source.", ru: "Поиск природного водорода как перспективного источника чистой энергии." } }
      ],
      deliverables: [
        { en: "Mineral presence identification", ru: "Определение наличия полезных ископаемых" },
        { en: "Deposit and anomaly mapping", ru: "Картирование залежей и аномалий" },
        { en: "Depth calculation and cross-sections", ru: "Расчёт глубины и построение разрезов" },
        { en: "Tectonic fault identification", ru: "Выявление тектонических разломов" },
        { en: "Preliminary resource assessment", ru: "Предварительная оценка ресурсов" },
        { en: "Drilling recommendations with target coordinates", ru: "Рекомендации по бурению с координатами целей" }
      ],
      science: [
        { title: { en: "Physical principle", ru: "Физический принцип" }, text: { en: "The guide describes detection and amplification of weak electromagnetic responses associated with target objects under natural physical fields.", ru: "В руководстве технология описана как регистрация и усиление слабых электромагнитных откликов, связанных с искомыми объектами под воздействием природных физических полей." } },
        { title: { en: "Data processing", ru: "Обработка данных" }, text: { en: "Processed analogue satellite imagery and reference spectra are used to visualize high-response zones and delineate anomaly boundaries.", ru: "Для визуализации зон повышенного отклика и выделения границ аномалий используются обработанные аналоговые спутниковые снимки и эталонные спектры." } },
        { title: { en: "Depth calculation", ru: "Определение глубины" }, text: { en: "Depth is interpreted from displacement of anomaly boundaries across images taken from different orbital angles.", ru: "Глубина интерпретируется по смещению границ аномалий на снимках, полученных с разных орбитальных углов." } }
      ],
      input: [
        { en: "Area of Interest coordinates in WGS-84", ru: "Координаты области исследования в системе WGS-84" },
        { en: "Target mineral type and concentration in host rock", ru: "Тип ископаемого и концентрация целевого минерала в породе" },
        { en: "Rock, HC sample, or detailed chemical analysis", ru: "Образец породы/УВ или детальный химический анализ" },
        { en: "Photograph of the sampling site", ru: "Фотография места отбора образца" },
        { en: "Producing well coordinates, depth and thickness where applicable", ru: "Координаты, глубина и толщина пласта добывающей скважины при наличии" }
      ],
      validation: {
        en: "Validation can be organized as a blind test using data from one or two recent wells supplied by the customer. The output report is compared against real geological data and reviewed by a joint commission.",
        ru: "Проверка может быть организована как слепой тест с использованием данных одной или двух недавних скважин, предоставленных заказчиком. Итоговый отчёт сравнивается с фактическими геологическими данными и рассматривается совместной комиссией."
      },
      features: [
        { en: "Depth calculation method", ru: "Метод определения глубины" },
        { en: "Physical essence of the technology", ru: "Физическая сущность технологии" },
        { en: "Remote identification of hydrocarbon deposit-type anomalies", ru: "Дистанционный поиск углеводородных аномалий" },
        { en: "Remote identification of metallic ores", ru: "Дистанционный поиск металлических руд" },
        { en: "Remote search technology for underground waters", ru: "Дистанционный поиск глубокозалегающих подземных вод" }
      ]
    },
    {
      id: "asde",
      kicker: { en: "3D seismic neural evaluation", ru: "Нейронная оценка 3D-сейсмики" },
      title: { en: "MSS Adaptive Seismic Data Evaluation", ru: "MSS Адаптивная оценка сейсмических данных" },
      headline: { en: "Highly effective technology for neural analysis of 3D seismic data.", ru: "Высокоэффективная технология нейронного анализа 3D-сейсмических данных." },
      image: "europeMap",
      overview: {
        en: "This solution re-evaluates geological data using adaptive 3D seismic analysis and reference wells. More than 50 parameters are analyzed simultaneously to produce geological, lithological and reservoir-level prognosis across the full deposit interval.",
        ru: "Решение переоценивает геологические данные на основе адаптивного анализа 3D-сейсмики и эталонных скважин. Одновременно анализируется более 50 параметров для формирования геологического, литологического и коллекторного прогноза по всей толщине залежи."
      },
      benefits: [
        { en: "Higher field development efficiency", ru: "Повышение эффективности разработки месторождений" },
        { en: "Comprehensive geological, lithological and reservoir data", ru: "Комплексные геолого-литолого-коллекторные данные" },
        { en: "Short standard lead time of 3 to 6 months", ru: "Короткие сроки выполнения — от 3 до 6 месяцев" }
      ],
      capabilities: [
        { en: "Integrated geophysical, geological and petrophysical analysis", ru: "Комплексный геофизический, геологический и петрофизический анализ" },
        { en: "Seismic data processing, reprocessing and interpretation", ru: "Обработка, переобработка и интерпретация сейсмических данных" },
        { en: "Well log, core and PVT data interpretation", ru: "Анализ данных ГИС, керна и PVT" },
        { en: "Production data analysis for static and dynamic models", ru: "Анализ данных добычи для статических и динамических моделей" },
        { en: "Integration of remote sensing and neural-network insights", ru: "Интеграция дистанционного зондирования и нейросетевого анализа" },
        { en: "Volumetric estimations for resource evaluation", ru: "Оценка объёмов ресурсов" }
      ],
      applications: [
        { title: { en: "Oil & gas fields", ru: "Нефтегазовые месторождения" }, text: { en: "Applicable to both underexplored and mature fields with 3D seismic coverage and production history.", ru: "Применимо как для слабоизученных, так и для освоенных месторождений при наличии 3D-сейсмики и истории добычи." } }
      ],
      deliverables: [
        { en: "Comprehensive analytical report", ru: "Развёрнутый аналитический отчёт" },
        { en: "Maps and sections showing new or overlooked hydrocarbon layers", ru: "Карты и разрезы с новыми или ранее незамеченными пластами" },
        { en: "Technical justification for previously unattractive resources", ru: "Техническое обоснование разработки ранее непривлекательных ресурсов" },
        { en: "Strategy concepts for maximizing recovery", ru: "Стратегические концепции для максимального извлечения" },
        { en: "Optimized well trajectory layouts", ru: "Оптимизированные траектории скважин" },
        { en: "Incremental hydrocarbon volume evaluation", ru: "Оценка дополнительных объёмов углеводородов" }
      ],
      input: [
        { en: "3D seismic data", ru: "Данные 3D-сейсмики" },
        { en: "Data from at least three producing wells", ru: "Данные минимум трёх эксплуатационных скважин" }
      ],
      expertise: { en: "25+ years average professional experience within the team.", ru: "Более 25 лет средний профессиональный опыт команды." }
    },
    {
      id: "ma",
      kicker: { en: "Vector magnetic survey", ru: "Векторная магнитная съёмка" },
      title: { en: "MSS Magnetic Aerotomography", ru: "MSS Магнитная аэротомография" },
      headline: { en: "A unique vector-based magnetic survey method to locate and delineate ore bodies.", ru: "Уникальный векторный магнитный метод для обнаружения и выделения рудных тел." },
      image: "mine",
      overview: {
        en: "MSS Magnetic Aerotomography combines the efficiency of airborne magnetic acquisition with the precision of ground-based methods. It is designed to map geological structures within prospective anomalies across difficult terrains and at depths of 500 m or more.",
        ru: "MSS Магнитная аэротомография объединяет эффективность аэромагнитной съёмки с точностью наземных методов. Подход предназначен для картирования геологических объектов в пределах перспективных аномалий на сложных территориях и глубинах 500 м и более."
      },
      benefits: [
        { en: "Effective narrowing of exploration areas", ru: "Эффективное сужение площади разведки" },
        { en: "Significant optimization of exploration costs", ru: "Существенная оптимизация затрат на разведку" },
        { en: "Simultaneous study of multiple mineral resources", ru: "Одновременное изучение нескольких типов полезных ископаемых" },
        { en: "Minimal environmental impact", ru: "Минимальное воздействие на окружающую среду" },
        { en: "Workable in mountains, jungles, water surfaces and other complex conditions", ru: "Работа в горах, джунглях, на водных поверхностях и в других сложных условиях" }
      ],
      applications: [
        { title: { en: "Mining industry", ru: "Горнодобывающая промышленность" }, text: { en: "Exploration and mapping of metallic ore deposits and mineral resources.", ru: "Поиск и картирование месторождений металлических руд и полезных ископаемых." } },
        { title: { en: "Artefacts", ru: "Артефакты" }, text: { en: "Detection of hidden metallic objects and valuable findings for search and restoration projects.", ru: "Обнаружение скрытых металлических объектов и ценных находок для поисковых и реставрационных проектов." } },
        { title: { en: "Archaeology", ru: "Археология" }, text: { en: "Identification of ancient structures, burial sites and cultural layers using non-invasive methods.", ru: "Выявление древних сооружений, захоронений и культурных слоёв бесконтактными методами." } }
      ],
      deliverables: [
        { en: "Detailed geological object report", ru: "Детальный отчёт о геологическом объекте" },
        { en: "Processed aerial survey data, maps and profiles", ru: "Обработанные аэросъёмочные данные, карты и профили" },
        { en: "3D magnetic field model using tomographic inversion", ru: "3D-модель магнитного поля методом томографической инверсии" },
        { en: "2D inversions along selected sections", ru: "2D-инверсии по выбранным разрезам" },
        { en: "Geomagnetic maps at different depths", ru: "Геомагнитные карты на разных глубинах" },
        { en: "Conclusions and key interpretation results", ru: "Выводы и ключевые результаты интерпретации" }
      ],
      features: [
        { title: { en: "System-level noise control", ru: "Системный контроль шумов" }, text: { en: "The system is evaluated by total magnetic noise, not only sensor sensitivity; the guide indicates 0.2 nT noise level.", ru: "Система оценивается по общему уровню магнитных шумов, а не только по чувствительности датчиков; в руководстве указан уровень 0,2 нТл." } },
        { title: { en: "Ultra-high sampling frequency", ru: "Ультравысокая частота дискретизации" }, text: { en: "A 1000 Hz sampling approach can collect far more data than conventional 10 Hz systems.", ru: "Частота 1000 Гц позволяет собирать значительно больше данных, чем стандартные системы 10 Гц." } },
        { title: { en: "Full vector data", ru: "Полноценные векторные данные" }, text: { en: "The workflow captures XYZ vector data instead of only total magnetic intensity.", ru: "Подход фиксирует векторные данные XYZ вместо только общей напряжённости магнитного поля." } },
        { title: { en: "3D magnetic field mapping", ru: "3D-картирование магнитного поля" }, text: { en: "Tomographic algorithms reconstruct magnetic field distribution and improve depth estimates.", ru: "Томографические алгоритмы восстанавливают распределение магнитного поля и уточняют глубину объектов." } },
        { title: { en: "Gradient analysis", ru: "Градиентный анализ" }, text: { en: "Magnetic field variations are used to reduce depth ambiguity and refine source interpretation.", ru: "Изменения магнитного поля используются для снижения неопределённости глубины и уточнения источника аномалии." } },
        { title: { en: "Rock age interpretation", ru: "Интерпретация возраста пород" }, text: { en: "The guide describes field capture of intrinsic rock magnetic vector related to Curie point passage and magnetic pole migration.", ru: "В руководстве описан полевой анализ собственного магнитного вектора пород, связанного с прохождением точки Кюри и миграцией магнитного полюса." } }
      ],
      input: [
        { en: "Survey area coordinates in WGS 84", ru: "Координаты района съёмки в WGS 84" },
        { en: "Map with licensed area boundaries", ru: "Карта с границами лицензионного участка" },
        { en: "Logistics from port of arrival to survey area", ru: "Логистика от порта прибытия до района съёмки" },
        { en: "Magnetic survey scale such as 1:5,000 or 1:10,000", ru: "Масштаб магнитной съёмки, например 1:5 000 или 1:10 000" },
        { en: "Information about available field supplies and site conditions", ru: "Информация о доступных ресурсах и условиях на объекте" }
      ]
    },
    {
      id: "ggs",
      kicker: { en: "Expert geology and geophysics", ru: "Экспертная геология и геофизика" },
      title: { en: "MSS Geology & Geophysics Services", ru: "MSS Геолого-геофизические услуги" },
      headline: { en: "Comprehensive geology and geophysics services, reserves evaluation support and expert consulting.", ru: "Комплексные геолого-геофизические услуги, поддержка оценки запасов и экспертный консалтинг." },
      image: "core",
      overview: {
        en: "For more than two decades, the team has specialized in reserves evaluation and audit, geological research, field development planning, enhanced recovery methods, economic analysis and strategic consulting.",
        ru: "На протяжении более двух десятилетий команда специализируется на оценке и аудите запасов, геологических исследованиях, проектировании разработки, методах увеличения нефтеотдачи, экономическом анализе и стратегическом консалтинге."
      },
      benefits: [
        { en: "Independent reserves evaluation and classification", ru: "Независимая оценка и классификация запасов" },
        { en: "Integrated field development and modelling expertise", ru: "Комплексная экспертиза в моделировании и разработке месторождений" },
        { en: "Technical and economic support for strategic decisions", ru: "Техническая и экономическая поддержка стратегических решений" },
        { en: "Experience with international consulting standards and regional projects", ru: "Опыт работы с международными консалтинговыми стандартами и региональными проектами" }
      ],
      capabilities: [
        { en: "Reserves evaluation and SPE/WPC classification support", ru: "Оценка запасов и поддержка классификации SPE/WPC" },
        { en: "Geological research and reservoir modelling", ru: "Геологические исследования и моделирование пластов" },
        { en: "Field development design and optimization", ru: "Проектирование и оптимизация разработки месторождений" },
        { en: "Idle well analysis and rehabilitation planning", ru: "Анализ фонда простаивающих скважин и планирование восстановления" },
        { en: "Hydrocarbon volume assessment and feasibility studies", ru: "Оценка объёмов углеводородов и ТЭО проектов" },
        { en: "Technical and economic justification for drilling and development", ru: "Техническое и экономическое обоснование бурения и разработки" }
      ],
      applications: [
        { title: { en: "Oil & gas industry", ru: "Нефтегазовая отрасль" }, text: { en: "Portfolio analysis, seismic interpretation, modelling, production analysis and reserve-management consulting.", ru: "Анализ портфеля, интерпретация сейсмики, моделирование, производственный анализ и консалтинг по управлению запасами." } }
      ],
      deliverables: [
        { en: "Detailed exploration portfolio analysis", ru: "Комплексный анализ портфеля проектов" },
        { en: "2D/3D seismic data processing and interpretation", ru: "Обработка и интерпретация 2D/3D сейсмических данных" },
        { en: "Static and dynamic reservoir modelling", ru: "Статическое и динамическое моделирование пластов" },
        { en: "Petrophysical and production analysis", ru: "Петрофизический и производственный анализ" },
        { en: "Field development and infrastructure planning", ru: "Проектирование разработки месторождений и инфраструктуры" },
        { en: "Independent volume evaluation", ru: "Независимая оценка объёмов" },
        { en: "Marketing policy and reserves management assessment", ru: "Анализ маркетинговой стратегии и управления запасами" }
      ],
      expertise: { en: "25+ years average professional experience within the team.", ru: "Более 25 лет средний профессиональный опыт команды." },
      note: { en: "Portfolio table is intentionally anonymized, as requested in the guide.", ru: "Таблица портфолио намеренно обезличена, как указано в руководстве." }
    },
    {
      id: "integrated",
      kicker: { en: "Combined workflows", ru: "Комплексные рабочие процессы" },
      title: { en: "MSS Integrated Solutions", ru: "MSS Комплексные решения" },
      headline: { en: "Synergy of integrated solutions for maximum efficiency in exploration and field development.", ru: "Синергия интегрированных решений для максимальной эффективности поиска и разработки месторождений." },
      image: "hydroMap",
      overview: {
        en: "MSS Integrated Solutions combine remote sensing, seismic interpretation, well data and geology & geophysics expertise to identify resources, estimate volumes and optimize exploration or production decisions.",
        ru: "MSS Комплексные решения объединяют дистанционное зондирование, интерпретацию сейсмики, данные скважин и геолого-геофизическую экспертизу для выявления ресурсов, оценки объёмов и оптимизации решений по разведке или добыче."
      },
      benefits: [
        { en: "Cross-validation of seismic, well and ERS findings", ru: "Взаимная проверка данных сейсмики, скважин и ERS" },
        { en: "Reduced uncertainty in hydrocarbon and mineral presence", ru: "Снижение неопределённости наличия углеводородов и минералов" },
        { en: "Better target prioritization before drilling", ru: "Более точная приоритизация целей до бурения" },
        { en: "Integrated resource and development decision support", ru: "Комплексная поддержка решений по ресурсам и разработке" }
      ],
      applications: [
        { title: { en: "AOI with seismic coverage, no drilling", ru: "AOI с сейсмикой, без бурения" }, text: { en: "ERS findings corroborate seismic interpretations and reduce hydrocarbon uncertainty.", ru: "Данные ERS подтверждают сейсмическую интерпретацию и снижают неопределённость по углеводородам." } },
        { title: { en: "AOI with seismic coverage and drilled wells", ru: "AOI с сейсмикой и пробуренными скважинами" }, text: { en: "Seismic and well data are re-evaluated, while ERS and G&G services refine resource estimates.", ru: "Сейсмика и данные скважин переоцениваются, а ERS и G&G уточняют оценку ресурсов." } },
        { title: { en: "Mining area with magnetic anomalies", ru: "Горнорудный объект с магнитными аномалиями" }, text: { en: "ERS identifies mineral presence and Magnetic Aerotomography provides 3D geological body interpretation.", ru: "ERS выявляет наличие минералов, а магнитная аэротомография даёт 3D-интерпретацию геологических тел." } }
      ],
      deliverables: [
        { en: "Integrated interpretation matrix", ru: "Матрица комплексной интерпретации" },
        { en: "Risk-ranked targets", ru: "Ранжированные по риску цели" },
        { en: "Recommended technology stack for each AOI", ru: "Рекомендуемый набор технологий для каждой AOI" },
        { en: "Decision-ready technical report", ru: "Технический отчёт для принятия решений" }
      ],
      note: { en: "This section was built from the table concept in the guide and needs review after real project workflows are finalized.", ru: "Раздел собран на основе концепции таблицы в руководстве и требует проверки после утверждения реальных рабочих процессов." }
    }
  ],
  caseStudies: [
    { service: "ers", tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Remote Sensing and 2D Seismic Data Processing", ru: "Дистанционное зондирование и обработка 2D-сейсмических данных" }, location: { en: "Location undisclosed", ru: "Локация не раскрывается" }, commodity: { en: "Hydrocarbons", ru: "Углеводороды" }, scope: { en: "ERS anomaly identification combined with 2D seismic review.", ru: "Идентификация аномалий ERS совместно с анализом 2D-сейсмики." }, outcome: { en: "Reduced target uncertainty before additional field decisions.", ru: "Снижена неопределённость целей до принятия дальнейших полевых решений." } },
    { service: "ers", tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Remote Identification of Nickel Anomalies", ru: "Дистанционная идентификация никелевых аномалий" }, location: { en: "Regional exploration area", ru: "Региональная зона разведки" }, commodity: { en: "Nickel", ru: "Никель" }, scope: { en: "Remote anomaly screening for metallic ore potential.", ru: "Дистанционный скрининг аномалий на потенциал металлических руд." }, outcome: { en: "Priority zones prepared for follow-up verification.", ru: "Подготовлены приоритетные зоны для последующей проверки." } },
    { service: "ers", tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Remote Identification of Mineralized Water Deposits", ru: "Дистанционная идентификация минерализованных водных месторождений" }, location: { en: "Hydrogeological area", ru: "Гидрогеологический район" }, commodity: { en: "Mineralized water", ru: "Минерализованные воды" }, scope: { en: "Remote water-resource target identification and anomaly mapping.", ru: "Дистанционное выявление водных объектов и картирование аномалий." }, outcome: { en: "Exploration focus narrowed to interpreted water-bearing zones.", ru: "Фокус разведки сужен до интерпретированных водоносных зон." } },
    { service: "ers", tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Coal Bed Methane Migration Pathways and Gas Accumulation Anomalies", ru: "Пути миграции метана угольных пластов и аномалии газонакопления" }, location: { en: "Coal basin", ru: "Угольный бассейн" }, commodity: { en: "Coal bed methane", ru: "Метан угольных пластов" }, scope: { en: "Remote identification of migration pathways and accumulation anomalies.", ru: "Дистанционная идентификация путей миграции и аномалий газонакопления." }, outcome: { en: "Anomaly framework prepared for technical review.", ru: "Подготовлена структура аномалий для технической проверки." } },
    { service: "asde", tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Search for Missed Beds and Pools", ru: "Поиск пропущенных пластов и коллекторов" }, location: { en: "Mature hydrocarbon field", ru: "Зрелое углеводородное месторождение" }, commodity: { en: "Hydrocarbons", ru: "Углеводороды" }, scope: { en: "Adaptive evaluation of 3D seismic and well data.", ru: "Адаптивная оценка 3D-сейсмики и данных скважин." }, outcome: { en: "Potential overlooked intervals identified for further assessment.", ru: "Определены потенциально пропущенные интервалы для дальнейшей оценки." } },
    { service: "asde", tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Search for Maximum Reservoir Thickness", ru: "Поиск максимальной мощности коллектора" }, location: { en: "Hydrocarbon prospect", ru: "Перспективный углеводородный объект" }, commodity: { en: "Hydrocarbons", ru: "Углеводороды" }, scope: { en: "Reservoir-thickness prognosis based on 3D seismic attributes and reference wells.", ru: "Прогноз мощности коллектора на основе атрибутов 3D-сейсмики и эталонных скважин." }, outcome: { en: "Target intervals ranked for development planning.", ru: "Целевые интервалы ранжированы для планирования разработки." } },
    { service: "asde", tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Well Orientation Prior to Drilling", ru: "Оптимальная ориентация скважины перед бурением" }, location: { en: "Field development area", ru: "Район разработки месторождения" }, commodity: { en: "Hydrocarbons", ru: "Углеводороды" }, scope: { en: "Trajectory concept support using adaptive seismic evaluation.", ru: "Поддержка концепции траектории на основе адаптивной оценки сейсмики." }, outcome: { en: "Well trajectory recommendations prepared for drilling planning.", ru: "Подготовлены рекомендации по траектории для планирования бурения." } },
    { service: "ma", tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Gold, 2024, Eastern Siberia, Russia", ru: "Золото, 2024, Восточная Сибирь, Россия" }, location: { en: "Eastern Siberia, Russia", ru: "Восточная Сибирь, Россия" }, commodity: { en: "Gold", ru: "Золото" }, scope: { en: "Magnetic aerotomography survey and anomaly delineation.", ru: "Магнитная аэротомография и выделение аномалий." }, outcome: { en: "Prospective zones prepared for geological interpretation.", ru: "Перспективные зоны подготовлены для геологической интерпретации." } },
    { service: "ma", tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Cu-Mo Object, 2024, West Siberia, Russia", ru: "Медно-молибденовый объект, 2024, Западная Сибирь, Россия" }, location: { en: "West Siberia, Russia", ru: "Западная Сибирь, Россия" }, commodity: { en: "Copper-molybdenum", ru: "Медь-молибден" }, scope: { en: "Vector magnetic survey for ore-body delineation.", ru: "Векторная магнитная съёмка для выделения рудных тел." }, outcome: { en: "Anomaly geometry prepared for follow-up works.", ru: "Геометрия аномалий подготовлена для дальнейших работ." } },
    { service: "ma", review: true, tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Gold, 2017, East Sayan Mountains, Russia", ru: "Золото, 2017, Восточный Саян, Россия" }, location: { en: "Eastern Siberia, East Sayan Mountains", ru: "Восточная Сибирь, Восточный Саян" }, commodity: { en: "Gold", ru: "Золото" }, scope: { en: "Historical magnetic survey case from the guide.", ru: "Исторический пример магнитной съёмки из руководства." }, outcome: { en: "Project details require confirmation before publication.", ru: "Детали проекта требуют подтверждения перед публикацией." } },
    { service: "ma", review: true, tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Diamonds, 2014, Yakutia, Russia", ru: "Алмазы, 2014, Якутия, Россия" }, location: { en: "Eastern Siberia, Yakutia", ru: "Восточная Сибирь, Якутия" }, commodity: { en: "Diamonds", ru: "Алмазы" }, scope: { en: "Historical target-detection case from the guide.", ru: "Исторический пример выявления целей из руководства." }, outcome: { en: "Project details require confirmation before publication.", ru: "Детали проекта требуют подтверждения перед публикацией." } },
    { service: "ma", review: true, tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Gold, 2020, Transbaikalia, Russia", ru: "Золото, 2020, Забайкалье, Россия" }, location: { en: "Eastern Siberia, Transbaikalia", ru: "Восточная Сибирь, Забайкалье" }, commodity: { en: "Gold", ru: "Золото" }, scope: { en: "Historical mineral exploration case from the guide.", ru: "Исторический пример минеральной разведки из руководства." }, outcome: { en: "Project details require confirmation before publication.", ru: "Детали проекта требуют подтверждения перед публикацией." } },
    { service: "ma", review: true, tag: { en: "Case Study", ru: "Пример работы" }, title: { en: "Archaeology, 2018, Pichugi Site, Novosibirsk Region", ru: "Археология, 2018, поселение Пичуги, Новосибирская область" }, location: { en: "Novosibirsk Region, Russia", ru: "Новосибирская область, Россия" }, commodity: { en: "Archaeology", ru: "Археология" }, scope: { en: "Non-invasive magnetic investigation for cultural layers and hidden structures.", ru: "Бесконтактное магнитное исследование культурных слоёв и скрытых структур." }, outcome: { en: "Project details require confirmation before publication.", ru: "Детали проекта требуют подтверждения перед публикацией." } }
  ],
  partners: [
    { region: "middle-east", name: "Al Ghaith Energy LLC", url: "#", statusReview: false, text: { en: "Strategic partner in the Middle East, whose expertise and local presence support effective business development and create additional advantages for clients in the region.", ru: "Стратегический партнёр на Ближнем Востоке, чья экспертиза и локальное присутствие помогают эффективно развивать бизнес и создавать дополнительные преимущества для заказчиков в регионе." } },
    { region: "south-east-asia", name: "Neural Oilfield Services NOSSB", url: "https://www.neural.com.my", statusReview: false, text: { en: "Malaysia-based partner helping the oil and gas industry reach a new level of exploration efficiency.", ru: "Партнёр в Малайзии, совместно помогающий нефтегазовой отрасли выйти на новый уровень эффективности разведки." } },
    { region: "south-east-asia", name: "PT BAHANA SELARAS ALAM", url: "#", statusReview: false, text: { en: "Trusted partner in Indonesia focused on promoting advanced technologies in solid mineral exploration.", ru: "Доверенный партнёр в Индонезии, сосредоточенный на продвижении передовых технологий в области разведки твёрдых полезных ископаемых." } },
    { region: "south-east-asia", name: "Truong Dinh Petroleum", url: "#", statusReview: true, text: { en: "Southeast Asia partner listed in the guide. Relationship status should be confirmed before external launch.", ru: "Партнёр в Юго-Восточной Азии, указанный в руководстве. Статус отношений необходимо подтвердить перед публичным запуском." } },
    { region: "middle-east", name: "BLACK SEA ENERJI", url: "#", statusReview: false, text: { en: "Turkey partner for offering MSS technologies to the oil and gas industry and geothermal energy exploration.", ru: "Партнёр в Турции для совместного предложения технологий MSS нефтегазовой отрасли и поиску геотермальной энергии." } }
  ],
  news: {
    events: [
      { demo: true, title: { en: "MSS technology briefing for exploration partners", ru: "Технологический брифинг MSS для партнёров по разведке" }, date: "2026", summary: { en: "A demo event entry for future conferences, webinars and investor presentations.", ru: "Демо-запись для будущих конференций, вебинаров и презентаций для инвесторов." } },
      { demo: true, title: { en: "Remote sensing workflow webinar", ru: "Вебинар по рабочему процессу дистанционного зондирования" }, date: "2026", summary: { en: "Placeholder for educational sessions on ERS validation, input data and reporting standards.", ru: "Заполнитель для образовательных сессий по валидации ERS, исходным данным и стандартам отчётности." } }
    ],
    articles: [
      { demo: true, title: { en: "Reducing geological uncertainty before drilling", ru: "Снижение геологической неопределённости до бурения" }, type: { en: "Article", ru: "Статья" }, summary: { en: "How integrated remote sensing, seismic evaluation and G&G consulting can improve target prioritization.", ru: "Как интеграция дистанционного зондирования, сейсмической оценки и G&G-консалтинга может улучшить приоритизацию целей." } },
      { demo: true, title: { en: "Vector magnetic data in complex terrain", ru: "Векторные магнитные данные на сложной местности" }, type: { en: "Article", ru: "Статья" }, summary: { en: "A draft editorial topic for Magnetic Aerotomography and its use in remote terrain.", ru: "Черновая тема статьи о магнитной аэротомографии и её применении на труднодоступной территории." } }
    ],
    bulletins: [
      { demo: true, title: { en: "Input data checklist for ERS studies", ru: "Чек-лист исходных данных для ERS-исследований" }, type: { en: "Bulletin", ru: "Бюллетень" }, summary: { en: "Area coordinates, target mineral definition, samples or chemical analysis, and available well data.", ru: "Координаты участка, целевое ископаемое, образцы или химический анализ, а также доступные данные скважин." } },
      { demo: true, title: { en: "Magnetic survey planning checklist", ru: "Чек-лист планирования магнитной съёмки" }, type: { en: "Bulletin", ru: "Бюллетень" }, summary: { en: "Survey boundaries, logistics, scale, site resources and safety preparation.", ru: "Границы съёмки, логистика, масштаб, ресурсы на объекте и подготовка по безопасности." } }
    ]
  },
  resources: [
    { demo: true, type: { en: "Technical note", ru: "Техническая заметка" }, title: { en: "Earth Remote Sensing overview", ru: "Обзор дистанционного зондирования Земли" }, summary: { en: "A placeholder resource for a future downloadable PDF.", ru: "Заполнитель для будущего PDF-файла." } },
    { demo: true, type: { en: "Checklist", ru: "Чек-лист" }, title: { en: "Customer input data requirements", ru: "Требования к исходным данным заказчика" }, summary: { en: "Structured list of required AOI, sample, well and logistics data.", ru: "Структурированный список данных по AOI, образцам, скважинам и логистике." } },
    { demo: true, type: { en: "Presentation", ru: "Презентация" }, title: { en: "MSS Smart Solutions presentation", ru: "Презентация интеллектуальных решений MSS" }, summary: { en: "A placeholder for a corporate overview deck.", ru: "Заполнитель для корпоративной обзорной презентации." } }
  ],
  portfolio: [
    { year: "1999–2005", area: { en: "Field development analysis", ru: "Анализ разработки месторождений" }, region: { en: "Russia / CIS", ru: "Россия / СНГ" }, mineral: { en: "Hydrocarbons", ru: "Углеводороды" }, work: { en: "Development status analysis and computer modelling for multiple mature fields.", ru: "Анализ состояния разработки и компьютерное моделирование для нескольких зрелых месторождений." } },
    { year: "2005–2012", area: { en: "Reserve evaluation", ru: "Оценка запасов" }, region: { en: "Russia / Kazakhstan", ru: "Россия / Казахстан" }, mineral: { en: "Hydrocarbons", ru: "Углеводороды" }, work: { en: "Expert hydrocarbon reserve assessment according to international classification principles.", ru: "Экспертная оценка запасов углеводородов по международным принципам классификации." } },
    { year: "2012–2018", area: { en: "Well stock optimization", ru: "Оптимизация фонда скважин" }, region: { en: "Regional fields", ru: "Региональные месторождения" }, mineral: { en: "Hydrocarbons", ru: "Углеводороды" }, work: { en: "Idle well analysis and preparation of rehabilitation action plans.", ru: "Анализ фонда простаивающих скважин и подготовка планов восстановления." } },
    { year: "2018–2024", area: { en: "Integrated exploration support", ru: "Комплексная поддержка разведки" }, region: { en: "International", ru: "Международные проекты" }, mineral: { en: "Minerals / HC", ru: "Минералы / УВ" }, work: { en: "Integrated interpretation, remote screening and technical-economic support for exploration decisions.", ru: "Комплексная интерпретация, дистанционный скрининг и технико-экономическая поддержка решений по разведке." } }
  ],
  pages: {
    home: {
      hero: {
        eyebrow: { en: "Mineral exploration · remote sensing · integrated interpretation", ru: "Геологоразведка · дистанционное зондирование · комплексная интерпретация" },
        title: { en: "Engineering geological exploration through smarter subsurface intelligence.", ru: "Инженерная геологоразведка на основе интеллектуальной аналитики недр." },
        subtitle: { en: "We are an engineering company specializing in geological exploration, delivering innovative solutions that maximize efficiency, accuracy and value worldwide.", ru: "Мы — инжиниринговая компания, специализирующаяся на геологоразведке и предлагающая инновационные решения для повышения эффективности, точности и рентабельности по всему миру." },
        primary: { en: "Explore MSS solutions", ru: "Изучить решения MSS" },
        secondary: { en: "Learn more", ru: "Узнать больше" }
      },
      whatDrivesUs: {
        title: { en: "What Drives Us", ru: "Что нами движет" },
        body: { en: "The aspiration to deliver next-generation technologies for geological exploration that reduce environmental impact, enhance exploration accuracy, ensure cost-efficiency and make natural resource development more accessible.", ru: "Стремление предлагать технологии нового поколения для геологоразведки, направленные на снижение воздействия на окружающую среду, повышение точности поиска, обеспечение рентабельности и более доступное освоение природных ресурсов." }
      }
    },
    about: {
      hero: {
        title: { en: "MSS: redefining remote sensing for mineral exploration.", ru: "MSS: меняя подход к дистанционному поиску полезных ископаемых." },
        subtitle: { en: "A technology-focused engineering company solving practical geological exploration challenges worldwide.", ru: "Технологическая инжиниринговая компания, решающая практические задачи геологоразведки по всему миру." }
      },
      founded: {
        title: { en: "Founded to commercialize validated remote sensing capabilities", ru: "Основана для коммерциализации проверенных возможностей дистанционного зондирования" },
        body: { en: "Minerals Spectrum Survey was founded in 2022 after the team was introduced to a remote sensing technology with strong potential for mineral, hydrocarbon and underground water exploration. The initial period was dedicated to technical testing, cooperation with scientists and preparation of the technology for practical commercial use.", ru: "Компания Minerals Spectrum Survey была основана в 2022 году после знакомства команды с технологией дистанционного зондирования, обладающей значительным потенциалом для поиска минералов, углеводородов и подземных вод. Начальный период был посвящён технической проверке, сотрудничеству с учёными и подготовке технологии к практическому коммерческому применению." },
        note: { en: "This founding text replaces the guide comment “needs another text”.", ru: "Этот текст заменяет комментарий в руководстве «нужен другой текст»." }
      },
      mission: {
        title: { en: "Pioneering advanced solutions for complex exploration challenges", ru: "Передовые решения для сложных задач геологоразведки" },
        body: { en: "Our technologies, experience and expertise enable us to deliver precise, reliable and sustainable results for clients worldwide.", ru: "Наши технологии, опыт и экспертиза позволяют предоставлять точные, надёжные и устойчивые результаты для клиентов по всему миру." }
      },
      values: [
        { title: { en: "Our Team: Expertise & Innovation", ru: "Наша команда: опыт и инновации" }, body: { en: "We are a blend of experience and enthusiasm, responsibility and talent, efficiency and a continuous desire to learn and innovate.", ru: "Мы объединяем опыт и энтузиазм, ответственность и талант, работоспособность и постоянное стремление к знаниям и инновациям." } },
        { title: { en: "Our Technologies: Shaping the Future", ru: "Наши технологии: формируя будущее" }, body: { en: "Innovation is not a slogan for us; it is the practical basis for improving exploration efficiency and safety.", ru: "Инновации для нас — не лозунг, а практическая основа повышения эффективности и безопасности геологоразведки." } },
        { title: { en: "Whom We Serve: Smarter Exploration", ru: "Для кого мы работаем: умная разведка" }, body: { en: "We provide high-tech solutions for companies seeking efficiency, reliability, cost reduction and better geological decisions.", ru: "Мы предлагаем высокотехнологичные решения компаниям, которым важны эффективность, достоверность, снижение затрат и более обоснованные геологические решения." } }
      ]
    },
    services: {
      hero: {
        title: { en: "MSS Smart Solutions", ru: "Интеллектуальные решения MSS" },
        subtitle: { en: "Reliable. Time and cost-efficient.", ru: "Оперативно. Надёжно. Эффективно." }
      },
      challenge: {
        title: { en: "Key challenges in geological exploration: high costs, risks and uncertainty.", ru: "Главные препятствия геологоразведки: высокая стоимость, риски и неопределённость." },
        body: { en: "Traditional methods are often costly, time-consuming and environmentally disruptive. Inaccessible terrain, high exploration risk and limited data slow progress and increase uncertainty. MSS solutions are designed to reduce risk, shorten research timelines, improve data reliability and optimize budgets without compromising technical quality.", ru: "Традиционные методы часто затратны, отнимают много времени и требуют значительных ресурсов. Труднодоступные территории, высокие риски и ограниченные данные замедляют развитие и увеличивают неопределённость. Решения MSS направлены на снижение рисков, сокращение сроков исследований, повышение достоверности данных и оптимизацию бюджета без ущерба для качества исследований." }
      },
      impactTitle: { en: "Our Impact", ru: "Наше влияние" },
      impactSubtitle: { en: "Transforming industries with innovation", ru: "Трансформируем отрасли с помощью инноваций" }
    },
    partners: {
      hero: {
        title: { en: "Our Trusted Partners", ru: "Наши надёжные партнёры" },
        subtitle: { en: "Built on trust, our partnerships expand global opportunities.", ru: "Доверие и партнёрство расширяют глобальные возможности." }
      },
      intro: { en: "Our partners are the backbone of our global reach. They help expand MSS technologies into new markets while upholding our values and maintaining high professional standards.", ru: "Наши партнёры — основа нашего глобального присутствия. Они помогают расширять технологии MSS на новые рынки, придерживаясь наших ценностей и высоких профессиональных стандартов." },
      become: { en: "If you are interested in promoting our technologies and have ideas that can help us become leaders in mineral exploration, contact us to discuss partnership opportunities.", ru: "Если вы заинтересованы в продвижении наших технологий и у вас есть идеи, которые помогут нам стать лидерами в геологоразведке, свяжитесь с нами для обсуждения партнёрства." }
    },
    contacts: {
      hero: {
        title: { en: "Connect with Our Experts", ru: "Обратитесь к нашим экспертам" },
        subtitle: { en: "What can we do for you? Start the conversation.", ru: "Что мы можем для вас сделать? Давайте обсудим." }
      },
      placeholders: {
        email: "info@mss-example.com",
        phone: "+00 000 000 0000",
        office: { en: "Office location placeholder", ru: "Адрес офиса — заполнитель" }
      }
    }
  }
};
