const skillCategories = {
  ALL: 'ALL',
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  INFRA: 'INFRA',
  TOOL: 'TOOL',
}

const skillsData = [
  {
    title: 'Linguagens',
    skills: [
      { name: 'HTML5', category: skillCategories.FRONTEND, icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', category: skillCategories.FRONTEND, icon: 'devicon-css3-plain colored' },
      { name: 'SASS', category: skillCategories.FRONTEND, icon: 'devicon-sass-original colored' },
      { name: 'JavaScript', category: `${skillCategories.BACKEND}/${skillCategories.FRONTEND}`, icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', category: `${skillCategories.BACKEND}/${skillCategories.FRONTEND}`, icon: 'devicon-typescript-plain colored' },
      { name: 'Python', category: skillCategories.BACKEND, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg' },
      { name: 'Go', category: skillCategories.BACKEND, icon: 'devicon-go-original-wordmark colored' },
      { name: 'Java', category: skillCategories.BACKEND, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    ]
  },
  {
    title: 'Frameworks & Bibliotecas',
    skills: [
      { name: 'React', category: skillCategories.FRONTEND, icon: 'devicon-react-original colored' },
      { name: 'jQuery', category: skillCategories.FRONTEND, icon: 'devicon-jquery-plain-wordmark colored' },
      { name: 'ViteJs', category: skillCategories.FRONTEND, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
      { name: 'Bootstrap', category: skillCategories.FRONTEND, icon: 'devicon-bootstrap-plain colored' },
      { name: 'Django', category: skillCategories.BACKEND, icon: 'devicon-django-plain colored' },
      { name: 'Django Rest', category: skillCategories.BACKEND, icon: 'devicon-djangorest-plain colored' },
      { name: 'FastAPI', category: skillCategories.BACKEND, icon: 'devicon-fastapi-plain-wordmark colored' },
      { name: 'Laravel', category: skillCategories.BACKEND, icon: 'devicon-laravel-original colored' },
      { name: 'Express', category: skillCategories.BACKEND, icon: 'devicon-express-original colored' },
      { name: 'Fiber', category: skillCategories.BACKEND, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fiber/fiber-plain.svg' },
    ]
  },
  {
    title: 'Infraestrutura',
    skills: [
      { name: 'Linux', category: skillCategories.INFRA, icon: 'devicon-linux-plain colored' },
      { name: 'Docker', category: skillCategories.INFRA, icon: 'devicon-docker-plain colored' },
      { name: 'Nginx', category: skillCategories.INFRA, icon: 'devicon-nginx-original colored' },
      { name: 'RabbitMQ', category: skillCategories.INFRA, icon: 'devicon-rabbitmq-original colored' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQLite', category: skillCategories.INFRA, icon: 'devicon-sqlite-plain colored' },
      { name: 'PostgreSQL', category: skillCategories.INFRA, icon: 'devicon-postgresql-plain colored' },
      { name: 'Mongo', category: skillCategories.INFRA, icon: 'devicon-mongodb-plain colored' },
      { name: 'Redis', category: skillCategories.INFRA, icon: 'devicon-redis-plain colored' },
    ]
  },
  {
    title: 'Ferramentas & Vivências',
    skills: [
      { name: 'Git', category: skillCategories.TOOL, icon: 'devicon-git-plain colored' },
      { name: 'Github', category: skillCategories.TOOL, icon: 'devicon-github-original' },
      { name: 'Godot', category: skillCategories.TOOL, icon: 'devicon-godot-plain colored' },
      { name: 'Embarcados', category: skillCategories.TOOL, icon: 'bi bi-cpu' },
      { name: 'Mapbox', category: skillCategories.TOOL, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mapbox/mapbox-original.svg' },
      { name: 'NTRIP / Protocolo RTK', category: skillCategories.TOOL, icon: 'bi bi-crosshair' },
    ]
  }
];

const skillsGrid = document.getElementById('skills-grid');
const filterButtons = document.querySelectorAll('.skills-filter-btn');

function renderSkills(filterCategory = skillCategories.ALL) {
  skillsGrid.innerHTML = '';

  skillsData.forEach(group => {
    const filteredSkills = filterCategory === skillCategories.ALL
      ? group.skills
      : group.skills.filter(skill => skill.category.includes(filterCategory));

    if (filteredSkills.length === 0) return;

    const card = document.createElement('div');
    card.className = 'skills-card';

    const title = document.createElement('h3');
    title.className = 'skills-card-title';
    title.textContent = group.title;
    card.appendChild(title);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'skills-card-items';

    filteredSkills.forEach(skill => {
      const item = document.createElement('div');
      item.className = 'skills-item';

      console.log(skill.icon)
      if (skill.icon) {
        const icon = document.createElement('i');
        icon.className = skill.icon;
        item.appendChild(icon);
      } else {
        const img = document.createElement('img');
        img.src = skill.img;
        item.appendChild(img);
      }

      const name = document.createElement('span');
      name.textContent = skill.name;
      item.appendChild(name);

      itemsContainer.appendChild(item);
    });

    card.appendChild(itemsContainer);
    skillsGrid.appendChild(card);
  });
}

renderSkills();

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filterValue = button.getAttribute('data-filter');
    renderSkills(filterValue);
  });
});
