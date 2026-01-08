export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background to-zinc-50 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Добро пожаловать в{" "}
              <span className="text-electric-blue">ConnectExpo</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
              Профессиональные решения для вашего бизнеса. ООО "Коннект Экспо" - ваш надежный партнер в мире современных технологий.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Консультации</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Профессиональные консультации по вопросам развития вашего бизнеса
              </p>
            </div>
            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Разработка</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Создание современных решений для ваших задач
              </p>
            </div>
            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Поддержка</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Комплексная поддержка и сопровождение проектов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Решения
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Инновационные технологии</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Использование передовых технологий для решения бизнес-задач
              </p>
            </div>
            <div className="p-8 rounded-lg bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Индивидуальный подход</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Решения, адаптированные под специфику вашего бизнеса
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Проекты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <div className="h-48 bg-gradient-to-br from-primary to-electric-blue rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Проект 1</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Описание проекта</p>
            </div>
            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <div className="h-48 bg-gradient-to-br from-primary to-electric-blue rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Проект 2</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Описание проекта</p>
            </div>
            <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
              <div className="h-48 bg-gradient-to-br from-primary to-electric-blue rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Проект 3</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Описание проекта</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Новости
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Новость 1</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">Дата публикации</p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Краткое описание новости...
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Новость 2</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-2">Дата публикации</p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Краткое описание новости...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
