export interface Club {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: 'programming' | 'robotics' | 'security' | 'design' | 'general' | 'sports';
  benefits: string[];
  schedule: {
    day: string;
    time: string;
    room: string;
  }[];
  leader: {
    name: string;
    role: string;
    avatar?: string;
  };
  contacts: {
    email?: string;
    telegram?: string;
    vk?: string;
  };
  image: string;
}

export const CLUBS: Club[] = [
  {
    id: 'dev-force',
    name: 'DevForce: Секция веб-разработки',
    description: 'Освой современные веб-технологии от React до Node.js и создавай реальные проекты.',
    longDescription: 'Секция объединяет студентов, увлеченных созданием современных веб-приложений. Мы изучаем полный стек разработки, работаем в командах и участвуем в хакатонах регионального и федерального уровней.',
    category: 'programming',
    benefits: [
      'Практика на реальных кейсах',
      'Поддержка опытных менторов',
      'Портфолио из 5+ проектов к концу года',
      'Доступ к закрытым ИТ-мероприятиям'
    ],
    schedule: [
      { day: 'Вторник', time: '08:00 - 09:30', room: 'Ауд. 302' },
      { day: 'Четверг', time: '15:00 - 16:35', room: 'Ауд. 302' }
    ],
    leader: {
      name: 'Артем Юрьевич',
      role: 'Ведущий разработчик, преподаватель спецдисциплин'
    },
    contacts: {
      email: 'devforce@tech-college.ru',
      telegram: '@devforce_admin'
    },
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cyber-shield',
    name: 'CyberShield: Кибербезопасность',
    description: 'Изучай методы защиты данных, этичный хакинг и основы сетевой безопасности.',
    longDescription: 'В CyberShield мы погружаемся в мир информационной безопасности. Участники изучают уязвимости систем, учатся предотвращать атаки и участвуют в соревнованиях формата CTF (Capture The Flag).',
    category: 'security',
    benefits: [
      'Навыки тестирования на проникновение',
      'Подготовка к CTF-соревнованиям',
      'Сертификаты о прохождении курсов',
      'Понимание работы современных сетей'
    ],
    schedule: [
      { day: 'Понедельник', time: '08:00 - 09:30', room: 'Ауд. 202' },
      { day: 'Среда', time: '15:00 - 16:35', room: 'Ауд. 202' }
    ],
    leader: {
      name: 'Артем Юрьевич',
      role: 'Эксперт по ИБ, куратор студенческих проектов'
    },
    contacts: {
      email: 'security@tech-college.ru',
      vk: 'vk.com/cyber_shield_tech'
    },
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pixel-art',
    name: 'PixelArt: Студия UI/UX дизайна',
    description: 'Научись создавать красивые и удобные интерфейсы, изучай основы композиции и цвета.',
    longDescription: 'Студия дизайна PixelArt помогает студентам развить эстетический вкус и освоить профессиональные инструменты: Figma, Adobe CC. Мы создаем макеты для реальных проектов наших ИТ-клубов.',
    category: 'design',
    benefits: [
      'Освоение Figma на профессиональном уровне',
      'Разработка реального дизайн-портфолио',
      'Основы типографики и UX-исследований',
      'Креативная среда и обмен опытом'
    ],
    schedule: [
      { day: 'Понедельник', time: '08:00 - 09:30', room: 'Ауд. 302' },
      { day: 'Пятница', time: '15:00 - 16:35', room: 'Ауд. 302' }
    ],
    leader: {
      name: 'Анастасия Алексеевна',
      role: 'Арт-директор, UI/UX дизайнер'
    },
    contacts: {
      email: 'design@tech-college.ru',
      vk: 'vk.com/pixelart_tech'
    },
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'arm-wrestling',
    name: 'Секция армрестлинга',
    description: 'Развивай силу, технику и характер на тренировках по армрестлингу под руководством опытного тренера.',
    longDescription: 'Секция армрестлинга техникума принимает всех желающих — от новичков до спортсменов с опытом. На тренировках мы отрабатываем технику борьбы, развиваем силу кисти, предплечья и плечевого пояса. Участники регулярно выступают на городских и региональных соревнованиях.',
    category: 'sports',
    benefits: [
      'Развитие силы и выносливости',
      'Постановка правильной техники с нуля',
      'Участие в городских и региональных турнирах',
      'Дружная команда и здоровая конкуренция'
    ],
    schedule: [
      { day: 'Вторник', time: '08:00 - 09:30', room: 'Кб. С.з. (корпус 1)' },
      { day: 'Пятница', time: '15:00 - 16:35', room: 'Кб. С.з. (корпус 1)' }
    ],
    leader: {
      name: 'Кандерский Макар Александрович',
      role: 'Тренер по армрестлингу, КМС'
    },
    contacts: {
      telegram: '@arm_wrestling_tech',
      vk: 'vk.com/arm_tech_club'
    },
    image: 'https://sun9-29.userapi.com/impg/bkIrexaQ65717y10wqeDRiDUnw4XTNpFbv4eqw/b_E8-rOt5Eo.jpg?size=0x400&crop=0.039,0.008,0.945,0.945&quality=95&sign=f0be364563e0a7215f8180d226ade4db&c_uniq_tag=RPluXcQupP_pwAgV6gGs1D6Mcc77m9FGec_tWy4W8Hc'
  },
  {
    id: 'table-tennis',
    name: 'Секция настольного тенниса',
    description: 'Тренируй реакцию, координацию и тактическое мышление в одном из самых динамичных видов спорта.',
    longDescription: 'Секция настольного тенниса открыта для студентов любого уровня подготовки. Мы проводим регулярные тренировки, внутренние турниры и готовим участников к межтехникумовским соревнованиям. Настольный теннис — отличный способ снять стресс и развить концентрацию.',
    category: 'sports',
    benefits: [
      'Тренировки для любого уровня подготовки',
      'Развитие реакции и координации',
      'Внутренние и межтехникумовские турниры',
      'Современный инвентарь и оборудование'
    ],
    schedule: [
      { day: 'Понедельник', time: '08:00 - 09:30', room: 'Кб. С.з. (корпус 1)' },
      { day: 'Среда', time: '15:00 - 16:35', room: 'Кб. С.з. (корпус 1)' }
    ],
    leader: {
      name: 'Мошкин Родион Александрович',
      role: 'Тренер по настольному теннису, 1 разряд'
    },
    contacts: {
      email: 'tennis@tech-college.ru',
      telegram: '@table_tennis_tech'
    },
    image: 'https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&q=80&w=800'
  }
];
