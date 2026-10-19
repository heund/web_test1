/* Shared by the static build and the progressively enhanced portfolio. */
(function (root, factory) {
    if (typeof module === 'object' && module.exports) module.exports = factory();
    else root.PortfolioRoutes = factory();
})(typeof window === 'undefined' ? globalThis : window, function () {
    const origin = 'https://www.heund.net';
    const routes = [
        ['hero', '/', 'content/intro.html',
            'Hee-Eun Kim | Systems Artist & Researcher', '김희은 | 시스템 아티스트 · 연구자',
            'Hee-Eun Kim works with data, sound and interaction. Explore exhibitions, data sonification research, BDSS, RCS and her forthcoming ISEA 2026 paper.',
            '데이터, 소리, 상호작용을 다루는 김희은의 포트폴리오. 전시 이력, 데이터 소니피케이션 연구, BDSS, RCS와 ISEA 2026 게재 예정 논문을 소개합니다.'],
        ['about', '/about', 'content/about.html',
            'About Hee-Eun Kim | Systems Artist & Researcher', '김희은 소개 | 시스템 아티스트 · 연구자',
            'Hee-Eun Kim builds systems for knowing and relating through data, sound and interaction, with outcomes shaped by audience participation.',
            '김희은은 데이터, 소리, 상호작용을 통해 다르게 알고 관계 맺는 방법을 만듭니다. 관객의 참여로 변화하는 시스템과 작업 방법론을 소개합니다.'],
        ['exhibitions-overview', '/exhibitions/overview', 'exhibitions/exhibitions-overview.html',
            'Exhibitions & Performances | Hee-Eun Kim', '전시 및 퍼포먼스 | 김희은',
            'Exhibitions and performances by Hee-Eun Kim, including Munjeon: The Doorway at Jeju Biennale 2026 and sound and interactive installations from 2024–2025.',
            '제주비엔날레 2026의 《문전(門前)》과 2024–2025년 데이터 기반 사운드 및 인터랙티브 설치 작업을 포함한 김희은의 전시·퍼포먼스 이력입니다.'],
        ['research-overview', '/research/overview', 'research/research-overview.html',
            'Research & ISEA 2026: Data Sonification | Hee-Eun Kim', '데이터 소니피케이션 연구 · ISEA 2026 | 김희은',
            'Research questions and methodologies in data sonification and relational systems, including BDSS, RCS and Hee-Eun Kim’s forthcoming ISEA 2026 paper.',
            '데이터 소니피케이션과 관계적 시스템에 대한 김희은의 연구 질문과 방법론. BDSS, RCS 및 ISEA 2026 게재 예정 논문을 소개합니다.'],
        ['research-bdss', '/research/bdss', 'research/research-bdss.html',
            'Behaviour-Driven Systemic Sonification (BDSS) | Hee-Eun Kim', '행동 기반 시스템 소니피케이션 (BDSS) | 김희은',
            'Behaviour-Driven Systemic Sonification (BDSS): a methodology modelling data as interacting agents whose negotiation and relational behaviour produce sound.',
            '행동 기반 시스템 소니피케이션(BDSS)은 데이터의 관계적 행동, 에이전트 간 협상과 상호작용을 소리로 구현하는 방법론입니다.'],
        ['research-rcs', '/research/rcs', 'research/research-rcs.html',
            'Relational Cognitive System (RCS) | Hee-Eun Kim', '관계적 인지 시스템 (RCS) | 김희은',
            'The Relational Cognitive System (RCS) framework: relational emergence, negotiation-based coherence, recursive feedback and temporal narrativity.',
            '관계적 인지 시스템(RCS)의 이론적 배경과 핵심 원리: 관계적 발현, 협상을 통한 일관성, 재귀적 피드백, 시간적 서사성을 소개합니다.'],
        ['exhibition-resonance', '/exhibitions/resonance-loop', 'exhibitions/resonance-loop.html',
            'Resonance Loop (2025) | Hee-Eun Kim', '공진회로 (2025) | 김희은',
            'Resonance Loop, an interactive sound installation by Hee-Eun Kim, exhibited in Sound Diaries: Memory Space in Seoul in 2025.',
            '2025년 서울 《사운드 다이어리: 기억의 공간》에 전시된 김희은의 인터랙티브 사운드 설치 《공진회로》를 소개합니다.'],
        ['exhibition-rotating', '/exhibitions/rotating-weights', 'exhibitions/rotating-weights.html',
            'Rotating Weights (2025) | Hee-Eun Kim', '회전하는 무게 (2025) | 김희은',
            'Rotating Weights by Hee-Eun Kim, exhibited in To Transport Time at Ho-Gae Train Station, Ulsan, in 2025.',
            '2025년 울산 호계역 《시간을 나르는 일》에 전시된 김희은의 《회전하는 무게》를 소개합니다.'],
        ['exhibition-embodied', '/exhibitions/embodied-algorithms', 'exhibitions/embodied-algorithms.html',
            'Embodied Algorithms: CONT.ROLLING (2025) | Hee-Eun Kim', '손끝의 알고리즘: CONT.ROLLING (2025) | 김희은',
            'Embodied Algorithms, Hee-Eun Kim’s data sonification work in CONT.ROLLING (2025), Pohang. Explore the installation and its interactive systems.',
            '포항 《CONT.ROLLING》(2025)의 데이터 소니피케이션 작업 《손끝의 알고리즘》. 설치 작업과 인터랙티브 시스템을 소개합니다.'],
        ['exhibition-void', '/exhibitions/void-form', 'exhibitions/void-form.html',
            'Void && Form (2025) | Hee-Eun Kim', 'Void && Form (2025) | 김희은',
            'Void && Form, presented by Team Mangshinsal in Artificial Territories at Das LOT, Vienna, in 2025.',
            '2025년 오스트리아 비엔나 Das LOT의 《Artificial Territories》에서 팀 망신살이 선보인 《Void && Form》을 소개합니다.'],
        ['exhibition-metal', '/exhibitions/metal-rave', 'exhibitions/metal-rave.html',
            'Metal Rave (2024): Environmental Data Sonification | Hee-Eun Kim', '메탈 레이브 (2024): 환경 데이터 소니피케이션 | 김희은',
            'Metal Rave sonifies heavy metal contamination in the Hyeongsan River basin through an interactive sound installation, exhibited in Pohang in 2024.',
            '2024년 포항에서 전시된 《Metal Rave》는 형산강 유역의 중금속 오염 데이터를 인터랙티브 사운드 설치로 구현합니다.'],
        ['exhibition-solar', '/exhibitions/soil-contamination', 'exhibitions/soil-contamination.html',
            'Sonification of Soil Contamination Data (2024) | Hee-Eun Kim', '토양 오염 데이터 소니피케이션 (2024) | 김희은',
            'Hee-Eun Kim’s Sonification of Soil Contamination Data, presented in Embodying Our Land in 2024.',
            '2024년 《지형지물 地形地物 – Embodying Our Land》에서 선보인 김희은의 토양 오염 데이터 소니피케이션 작업을 소개합니다.'],
        ['exhibition-rhythm', '/exhibitions/4x4-mediengruppe', 'exhibitions/4x4-mediengruppe.html',
            '4x4: !Mediengruppe Bitnik (2024) | Hee-Eun Kim', '4x4: !Mediengruppe Bitnik (2024) | 김희은',
            'Hee-Eun Kim’s 2024 live performance record for 4x4 by !Mediengruppe Bitnik in Seoul.',
            '서울 아르코미술관 《인투 더 리듬: 스코어로부터 접촉지대로》의 2024년 4x4 라이브 퍼포먼스 참여 기록입니다.'],
        ['contact', '/contact', 'content/contact.html',
            'Contact Hee-Eun Kim', '김희은 연락처',
            'Contact Hee-Eun Kim about collaborations and her work with data, sound and interactive systems. Official Instagram and YouTube links.',
            '데이터, 소리, 인터랙티브 시스템을 다루는 김희은의 협업 및 작업 관련 연락처와 공식 Instagram, YouTube 링크입니다.']
    ].map(([id, path, source, enTitle, koTitle, enDescription, koDescription]) => ({
        id, path, source, en: { title: enTitle, description: enDescription },
        kr: { title: koTitle, description: koDescription }
    }));
    // Use existing authored media; research and general pages retain the shared fallback.
    const sharedImage = { path: '/images/embodied/app1.jpg', width: 1400, height: 788 };
    const images = {
        'exhibitions-overview': { path: '/images/jeju-biennale-2026-poster.jpg', width: 1000, height: 1368 },
        'exhibition-resonance': { path: '/images/resonance_loop/resonance_main.jpg', width: 1920, height: 802 },
        'exhibition-rotating': { path: '/images/rotating/image1.jpg', width: 1179, height: 745 },
        'exhibition-embodied': { path: '/images/embodied/algo1.jpg', width: 3797, height: 3024 },
        'exhibition-void': { path: '/images/void/lot1.JPG', width: 1000, height: 665 },
        'exhibition-metal': { path: '/images/metal_rave/metalrave01.jpg', width: 1500, height: 1125 },
        'exhibition-solar': { path: '/images/solar_happy/solar-1.jpg', width: 902, height: 700 },
        'exhibition-rhythm': { path: '/images/rhythm/rhy1.jpg', width: 2000, height: 1334 }
    };
    routes.forEach(route => { route.image = images[route.id] || sharedImage; });
    const byId = Object.fromEntries(routes.map(route => [route.id, route]));
    const href = (id, lang = 'en') => {
        const path = byId[id].path;
        return lang === 'kr' ? '/ko' + (path === '/' ? '' : path) : path;
    };
    function resolve(pathname, hash = '') {
        const path = pathname.replace(/\/+$/, '') || '/';
        const lang = path === '/ko' || path.startsWith('/ko/') ? 'kr' : 'en';
        const legacyId = hash.replace(/^#/, '');
        const legacy = byId[legacyId === 'research-isea' ? 'research-overview' : legacyId];
        const route = legacy || routes.find(item => href(item.id, lang) === path);
        return route ? { id: route.id, lang } : null;
    }
    function prepareLinks(container, lang) {
        container.querySelectorAll('[data-file], a[href^="#"], a[href^="/#"]').forEach(element => {
            const hash = (element.getAttribute('href') || '').split('#')[1];
            const id = element.dataset.file || hash;
            if (!byId[id]) return;
            let link = element;
            if (element.tagName !== 'A') {
                link = element.ownerDocument.createElement('a');
                for (const attribute of element.attributes) link.setAttribute(attribute.name, attribute.value);
                link.innerHTML = element.innerHTML;
                element.replaceWith(link);
            }
            link.dataset.file = id;
            link.setAttribute('href', href(id, lang));
        });
    }
    function metadata(document, id, lang) {
        const route = byId[id], copy = route[lang], url = origin + href(id, lang);
        document.title = copy.title;
        document.documentElement.lang = lang === 'kr' ? 'ko' : 'en';
        document.body.dataset.lang = lang;
        function meta(key, value, attribute = 'name') {
            let node = document.head.querySelector(`meta[${attribute}="${key}"]`);
            if (!node) { node = document.createElement('meta'); document.head.append(node); }
            node.setAttribute(attribute, key); node.setAttribute('content', value);
        }
        meta('title', copy.title); meta('description', copy.description);
        for (const prefix of ['og', 'twitter']) {
            meta(prefix + ':title', copy.title, 'property');
            meta(prefix + ':description', copy.description, 'property');
            meta(prefix + ':url', url, 'property');
            meta(prefix + ':image', origin + route.image.path, 'property');
            meta(prefix + ':image:alt', copy.title, 'property');
        }
        meta('og:image:width', String(route.image.width), 'property');
        meta('og:image:height', String(route.image.height), 'property');
        meta('og:locale', lang === 'kr' ? 'ko_KR' : 'en_GB', 'property');
        meta('og:locale:alternate', lang === 'kr' ? 'en_GB' : 'ko_KR', 'property');
        document.querySelector('link[rel="canonical"]').setAttribute('href', url);
        for (const code of ['en', 'ko', 'x-default']) {
            document.querySelector(`link[hreflang="${code}"]`).setAttribute('href', origin + href(id, code === 'ko' ? 'kr' : 'en'));
        }
        const person = {
            '@type': 'Person', '@id': origin + '/#person', name: 'Hee-Eun Kim',
            alternateName: ['김희은', 'heund'], url: origin + '/about',
            jobTitle: 'Systems Artist & Researcher',
            sameAs: ['https://www.instagram.com/h.eund/', 'https://www.youtube.com/@heund']
        };
        const page = {
            '@type': id === 'about' ? 'ProfilePage' : 'WebPage', '@id': url + '#webpage', url,
            name: copy.title, description: copy.description, inLanguage: lang === 'kr' ? 'ko' : 'en',
            isPartOf: { '@id': origin + '/#website' }, about: { '@id': person['@id'] },
            author: { '@id': person['@id'] }
        };
        if (id === 'about') page.mainEntity = { '@id': person['@id'] };
        // No publication date, DOI or event dates are inferred from forthcoming research.
        const graph = { '@context': 'https://schema.org', '@graph': [person, {
            '@type': 'WebSite', '@id': origin + '/#website', url: origin + '/',
            name: 'Hee-Eun Kim', inLanguage: ['en', 'ko'], publisher: { '@id': person['@id'] }
        }, page] };
        document.querySelector('script[type="application/ld+json"]').textContent = JSON.stringify(graph).replace(/</g, '\\u003c');
        document.querySelectorAll('.lang-btn').forEach(link => {
            link.setAttribute('href', href(id, link.dataset.lang));
            link.classList.toggle('active', link.dataset.lang === lang);
        });
        prepareLinks(document, lang);
        document.querySelectorAll('.nav-item').forEach(link => link.classList.toggle('active', link.dataset.file === id));
    }
    return { origin, routes, byId, href, resolve, prepareLinks, metadata };
});
