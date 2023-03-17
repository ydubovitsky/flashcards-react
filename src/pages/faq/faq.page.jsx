import styles from './faq.module.css';

const FaqPage = () => {
  return (
    <div className={styles.container}>
      <h1>Часто задаваемые вопросы</h1>
      <div className={styles.questionContainer}>
        <h1>Что такое <strong>memo<span className={styles.r}>R</span>ush?</strong></h1>
        <p>Интерактивный тренажер для запоминания слов!</p>
      </div>
      <div className={styles.questionContainer}>
        <h1>Зачем мне ваше приложение?</h1>
        <ol>
          <li>Удобно работать с различными типами смартфонов/ планшетов</li>
          <li>Регулярные обновления и обратная связь</li>
          <li>Размеры приложение адаптируется под ваше персональное устойство</li>
          <li>Абсолютно бесплатное</li>
          <li>Все ваши данные хранятся в облаке и вы их никогда не потеряете</li>
          <li>Удобный интерактивный и настраиваемый тренажер</li>
        </ol>
      </div>
      <div className={styles.questionContainer}>
        <h1>Как создать свой набора карточек?</h1>
        <ol>
          <li>Войдите в свою учетную запись.</li>
          <li>Нажмите <strong>Создать флеш-карточки</strong>.</li>
          <li>Нажмите <strong>Создать Набор</strong>.</li>
          <li>Введите название набора</li>
          <li>Введите краткое описание</li>
          <li>Добавьте необходимое количество карточек</li>
          <li>Нажмите <strong>Создать</strong>, чтобы сохранить набор</li>
        </ol>
      </div>
      <div className={styles.questionContainer}>
        <h1>Поиск готовых наборов карточек</h1>
        <p>В Memorush десятки готовых наборов, созданных пользователями. Вы обязательно найдете тот, который подойдет именно вам!</p>
        <ol>
          <li>Войдите в свою учетную запись.</li>
          <li>Введите поисковый запрос с ключевыми словами</li>
          <li>Выберите подходящий именно вам</li>
          <li>Добавьте этот набор к себе</li>
          <li>При желании отредактируйте</li>
        </ol>
      </div>
      <div className={styles.questionContainer}>
        <h1>Изменение пароля</h1>
        <ol>
          <li>Войдите в свою учетную запись.</li>
          <li>Нажмите <strong>Настройки</strong>.</li>
          <li>Прокрутите до <strong>Изменить пароль</strong>.</li>
          <li>Введите свой текущий пароль.</li>
          <li>Введите и подтвердите новый пароль.</li>
          <li>Нажмите <strong>Отправить</strong>, чтобы сохранить новый пароль.</li>
        </ol>
      </div>
      <div className={styles.questionContainer}>
        <h1>Совместимость браузеров и устройств</h1>
        <p>Вы можете пользоваться Memorush на различных устройствах. Мы предлагаем официальные приложения для iOS и Android, а наш веб-сайт можно использовать с различными браузерами на компьютерах Windows and Mac.</p>
      </div>
    </div>
  )
}

export default FaqPage;