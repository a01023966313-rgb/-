// 영화 데이터
const movies = [
    {
        id: 1,
        title: "듄: 파트 2",
        year: 2024,
        genre: "sf",
        genreKo: "SF",
        rating: 8.8,
        runtime: "166분",
        director: "드니 빌뇌브",
        cast: ["티모시 샬라메", "젠데이아", "레베카 퍼거슨", "오스틴 버틀러"],
        description: "아트레이데스 가문의 후계자 폴은 프레멘 부족과 함께 하코넨 가문에 맞서 복수를 준비한다. 모래 행성 아라키스의 운명을 건 거대한 전쟁이 시작된다.",
        poster: "dune.jpg"
    },
    {
        id: 2,
        title: "파묘",
        year: 2024,
        genre: "horror",
        genreKo: "공포",
        rating: 8.1,
        runtime: "134분",
        director: "장재현",
        cast: ["최민식", "김고은", "유해진", "이도현"],
        description: "미국 LA, 기이한 일들이 발생하는 한 집안. 무당 화림과 봉길은 저주를 풀기 위해 묘를 이장하기로 결심한다. 하지만 무덤을 파헤칠수록 더 큰 비밀이 드러난다.",
        poster: "파묘.webp"
    },
    {
        id: 3,
        title: "범죄도시 4",
        year: 2024,
        genre: "action",
        genreKo: "액션",
        rating: 7.9,
        runtime: "109분",
        director: "허명행",
        cast: ["마동석", "김무열", "이동휘", "박지환"],
        description: "괴물형사 마석도가 새로운 범죄 조직을 소탕하기 위해 다시 나선다. 이번에는 온라인 불법 도박 사이트를 운영하는 빌런과의 대결이 펼쳐진다.",
        poster: "범죄도시 4.jpg"
    },
    {
        id: 4,
        title: "오펜하이머",
        year: 2023,
        genre: "drama",
        genreKo: "드라마",
        rating: 8.9,
        runtime: "180분",
        director: "크리스토퍼 놀란",
        cast: ["킬리언 머피", "에밀리 블런트", "맷 데이먼", "로버트 다우니 주니어"],
        description: "원자폭탄의 아버지 로버트 오펜하이머의 이야기. 맨해튼 프로젝트를 이끌며 세상을 바꾼 천재 물리학자의 영광과 비극을 그린다.",
        poster: "오펜하이머.webp"
    },
    {
        id: 5,
        title: "가디언즈 오브 갤럭시 Vol.3",
        year: 2023,
        genre: "action",
        genreKo: "액션",
        rating: 8.0,
        runtime: "150분",
        director: "제임스 건",
        cast: ["크리스 프랫", "조 샐다나", "데이브 바티스타", "브래들리 쿠퍼"],
        description: "로켓의 과거가 밝혀지면서 가디언즈 팀은 그를 구하기 위한 위험한 미션에 나선다. 팀의 마지막 모험이 시작된다.",
        poster: "가오갤.webp"
    },
    {
        id: 6,
        title: "서울의 봄",
        year: 2023,
        genre: "drama",
        genreKo: "드라마",
        rating: 8.7,
        runtime: "141분",
        director: "김성수",
        cast: ["황정민", "정우성", "이성민", "박해준"],
        description: "1979년 12월 12일, 군사반란의 그날 밤. 수도 서울을 지키려는 자들과 빼앗으려는 자들의 긴박한 9시간을 그린다.",
        poster: "서울의 봄.jpg"
    },
    {
        id: 7,
        title: "존 윅 4",
        year: 2023,
        genre: "action",
        genreKo: "액션",
        rating: 7.8,
        runtime: "169분",
        director: "채드 스타헬스키",
        cast: ["키아누 리브스", "빌 스카르스가드", "로렌스 피시번", "이병헌"],
        description: "존 윅은 자유를 얻기 위해 최고 조직과의 마지막 대결을 준비한다. 파리, 오사카, 베를린을 넘나드는 액션이 펼쳐진다.",
        poster: "존 윅.jpg"
    },
    {
        id: 8,
        title: "엘리멘탈",
        year: 2023,
        genre: "comedy",
        genreKo: "코미디",
        rating: 7.5,
        runtime: "101분",
        director: "피터 손",
        cast: ["레아 루이스", "마무두 아티에"],
        description: "불, 물, 흙, 공기의 원소들이 함께 사는 도시. 불 원소 엠버와 물 원소 웨이드의 특별한 우정과 사랑 이야기.",
        poster: "엘리멘탈.webp"
    },
    {
        id: 9,
        title: "인터스텔라",
        year: 2014,
        genre: "sf",
        genreKo: "SF",
        rating: 9.0,
        runtime: "169분",
        director: "크리스토퍼 놀란",
        cast: ["매튜 맥커너히", "앤 해서웨이", "제시카 차스테인", "마이클 케인"],
        description: "황폐해진 지구를 대신할 새로운 행성을 찾아 우주로 떠나는 탐험대. 시간과 공간을 초월한 인류 생존 프로젝트가 시작된다.",
        poster: "인터스텔라.webp"
    },
    {
        id: 10,
        title: "극한직업",
        year: 2019,
        genre: "comedy",
        genreKo: "코미디",
        rating: 7.6,
        runtime: "111분",
        director: "이병헌",
        cast: ["류승룡", "이하늬", "진선규", "이동휘"],
        description: "마약반 형사들이 수사를 위해 치킨집을 인수했는데, 치킨이 대박 나버렸다! 범인 검거와 장사 사이에서 고군분투하는 형사들의 이야기.",
        poster: "극한직업.jpg"
    },
    {
        id: 11,
        title: "곤지암",
        year: 2018,
        genre: "horror",
        genreKo: "공포",
        rating: 6.9,
        runtime: "94분",
        director: "정범식",
        cast: ["위하준", "박지현", "오아연"],
        description: "CNN이 선정한 세계 7대 소름끼치는 장소, 곤지암 정신병원. 유튜브 공포 체험 촬영을 위해 들어간 크루들이 겪는 실제 공포.",
        poster: "곤지암.jpg"
    },
    {
        id: 12,
        title: "매트릭스",
        year: 1999,
        genre: "sf",
        genreKo: "SF",
        rating: 8.7,
        runtime: "136분",
        director: "워쇼스키 자매",
        cast: ["키아누 리브스", "로렌스 피시번", "캐리 앤 모스", "휴고 위빙"],
        description: "해커 네오는 현실이 가상 시뮬레이션임을 알게 된다. 인류를 기계로부터 해방시키기 위한 혁명에 합류하며 자신의 운명을 마주한다.",
        poster: "매트릭스.png"
    }
];
// DOM 요소
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');
// 현재 필터 상태
let currentGenre = 'all';
let searchTerm = '';
// 영화 카드 렌더링
function renderMovies() {
    const filteredMovies = movies.filter(movie => {
        const matchesGenre = currentGenre === 'all' || movie.genre === currentGenre;
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            movie.cast.some(actor => actor.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesGenre && matchesSearch;
    });
    if (filteredMovies.length === 0) {
        moviesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.2rem;">검색 결과가 없습니다 😢</p>
            </div>
        `;
        return;
    }
    moviesGrid.innerHTML = filteredMovies.map(movie => `
        <div class="movie-card" onclick="openModal(${movie.id})">
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span class="movie-rating">⭐ ${movie.rating}</span>
                    <span class="movie-genre">${movie.genreKo}</span>
                </div>
            </div>
        </div>
    `).join('');
}
// 모달 열기
function openModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;
    modalBody.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="modal-poster">
        <div class="modal-info">
            <h2>${movie.title}</h2>
            <div class="modal-meta">
                <span>📅 ${movie.year}</span>
                <span>⏱️ ${movie.runtime}</span>
                <span>⭐ ${movie.rating}</span>
                <span>🎬 ${movie.director}</span>
            </div>
            <p class="modal-description">${movie.description}</p>
            <div class="modal-cast">
                <h3>출연진</h3>
                <div class="cast-list">
                    ${movie.cast.map(actor => `<span class="cast-tag">${actor}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
// 모달 닫기
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}
// 이벤트 리스너
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentGenre = btn.dataset.genre;
        renderMovies();
    });
});
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderMovies();
});
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
// 초기 렌더링
renderMovies();