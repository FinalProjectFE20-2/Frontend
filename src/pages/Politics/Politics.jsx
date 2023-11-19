import React from 'react';
import PropTypes from 'prop-types';
import styles from './Politics.module.scss';

const Politics = () => (
  <section className={`${styles.politics} container`} data-testid="Politics">
    <div className={styles.containerFluid}>
      <h1 className={styles.pagesTitle}> Політика конфеденційності </h1>
    </div>
    <div className={styles.informationViev}>
      <p>
        Справжня Політика конфіденційності персональних даних (далі - «Політика
        конфіденційності») розроблена відповідно до вимог «Про персональні дані»
        та діє відносно всієї інформації, яку ресторан «MIDAS», розташований на
        сайті https://midasproject.vercel.app/ (далі - «Ресторан»), може
        отримати про Користувача під час використання сайту, програм і продуктів
        Ресторану.
      </p>

      <ol>
        <br></br>
        <li className={styles.informationTermin}>1. ВИЗНАЧЕННЯ ТЕРМІНІВ</li>
        <li>
          1.1. У цій Політиці конфіденційності використовуються такі терміни:
        </li>
        <li>
          1.1.2. «Адміністрація сайту Ресторану (далі -« Адміністрація ресторану
          ») - уповноважені на управління сайтом співробітники, які
          організовують і (або) здійснюють обробку персональних даних, а також
          визначає цілі обробки персональних даних, склад персональних даних, що
          підлягають обробці, дії (операції ), що здійснюються з персональними
          даними.
        </li>
        <li>
          1.1.3. «Персональні дані» - будь-яка інформація, що відноситься прямо
          або побічно до певного або визначається фізичній особі (суб'єкту
          персональних даних).
        </li>
        <li>
          1.1.4. «Обробка персональних даних» - будь-яка дія (операція) або
          сукупність дій (операцій), що здійснюються з використанням засобів
          автоматизації або без використання таких засобів з персональними
          даними, включаючи збір, запис, систематизацію, накопичення,
          зберігання, уточнення (оновлення, зміна), витяг, використання,
          передачу (поширення, надання, доступ), знеособлення, блокування,
          видалення, знищення персональних даних.
        </li>
        <li>
          1.1.5. «Конфіденційність персональних даних» - обов'язкове для
          дотримання оператором або іншим отримав доступ до персональних даних
          особою вимога не допускати їх поширення без згоди суб'єкта
          персональних даних або наявності іншого законного підстави.
        </li>
        <li>
          1.1.6. «Користувач сайту Ресторану» (далі - «Користувач») - особа, яка
          має доступ до Сайту, за допомогою мережі Інтернет і використовує Сайт
          ресторану.
        </li>
        <li>
          1.1.7. «Cookies» - невеликий фрагмент даних, відправлений веб-сервером
          і зберігається на комп'ютері користувача, який веб-клієнт або
          веб-браузер кожен раз пересилає веб-серверу в HTTP-запиті при спробі
          відкрити сторінку відповідного сайту.
        </li>
        <li>
          1.1.8. «IP-адреса» - унікальний мережеву адресу вузла в комп'ютерній
          мережі, побудованої за протоколом IP.
        </li>
        <br></br>
        <li className={styles.informationTermin}>2. ЗАГАЛЬНІ ПОЛОЖЕННЯ</li>
        <li>
          2.1.Використання Користувачем сайту Ресторану означає згоду з цією
          Політикою конфіденційності та умовами обробки персональних даних
          Користувача.
        </li>
        <li>
          2.2.У разі незгоди з умовами Політики конфіденційності Користувач
          повинен припинити використання сайту Ресторану.
        </li>
        <li>
          2.3.Справжня Політика конфіденційності застосовується лише до сайту
          Ресторану «MIDAS». Ресторан не контролює і не несе відповідальність за
          сайти третіх осіб, на які Користувач може перейти по посиланнях,
          доступним на сайті Ресторану.
        </li>
        <li>
          2.4.Адміністрація сайту не перевіряє достовірність персональних даних,
          що надаються Користувачем сайту Ресторану.
        </li>
        <br></br>
        <li className={styles.informationTermin}>
          3. ПРЕДМЕТ ПОЛІТИКИ КОНФІДЕНЦІЙНОСТІ
        </li>
        <li>
          3.1. Справжня Політика конфіденційності встановлює зобов'язання
          адміністрації сайту Ресторану з нерозголошення и забезпечення режиму
          захисту конфіденційності персональних даних, Які Користувач повинен за
          вимоги надати адміністрації сайту при реєстрації на сайті Ресторану
          або під час оформленні замовлення на послуги громадського харчування.
        </li>
        <li>
          3.2. Персональні дані, дозволені до ОБРОБКИ в рамках цієї Політики
          конфіденційності, Надаються Користувачем Шляхом Заповнення
          реєстраційної форми на сайті Ресторану «MIDAS» і містять в собі
          Наступну інформацію:
        </li>
        <li>3.2.1. прізвище, ім'я, по батькові Користувача;</li>
        <li>3.2.2. контактний телефон Користувача;</li>
        <li>3.2.3. адреси Електронної пошта (e-mail);</li>
        <li>
          3.2.4. адреси Надання послуг громадського харчування (доставки
          кулінарних виробів);
        </li>
        <li>3.2.5. прізвище, ім'я, по батькові одержувача замовлення.</li>
        <li>
          3.3. Ресторан захищає дані, Які автоматично передаються в процесі
          перегляду рекламних блоків и при відвідуванні сторінок, на яких
          встановлено статистичний скрипт системи ( "піксель"):
        </li>
        <li>IP адреси;</li>
        <li>Інформація з cookies;</li>
        <li>
          Інформація про браузер (чи Іншої програми, яка Здійснює доступ до
          показу реклами);
        </li>
        <li>Час доступу;</li>
        <li>Адреса сторінки, на Якій розташованій рекламний блок;</li>
        <li>Реферер (адреси попередньої Сторінки).</li>
        <li>
          3.3.1. Відключення cookies може спричинитися неможливість доступу до
          частин сайту Ресторану, что вимагають авторизації.
        </li>
        <li>
          3.3.2. Ресторан Здійснює збір статистики про IP-адреси своих
          відвідувачів. Дана інформація використовується з метою Виявлення та
          вирішенню технічних проблем, для контролю законності проведення
          ФІНАНСОВИХ платежів.
        </li>
        <li>
          3.4. Будь-яка Інша персональна інформація НЕ обговорені вище (історія
          покупок, використовувані браузери и операційні системи и т.д.)
          підлягає надійному зберіганню та нерозповсюдження, за винятком
          випадків, передбачення в п.п. 5.2. и 5.3. цієї Політики
          конфіденційності.
        </li>
        <br></br>
        <li className={styles.informationTermin}>
          4.ЦІЛІ ОБРОБКИ ПЕРСОНАЛЬНИХ ДАНИХ КОРИСТУВАЧА
        </li>
        <li>
          4.1. Персональні дані Користувача Адміністрація сайту Ресторан може
          використовувати в цілях:
        </li>
        <li>
          4.1.1. Ідентифікації Користувача, зареєстрованого на сайті Ресторану,
          для оформлення замовлення на послуги громадського харчування.
        </li>
        <li>
          4.1.2. Надання Користувачеві доступу до персоналізованих ресурсів
          Сайту Ресторану.
        </li>
        <li>
          4.1.3. Встановлення з Користувачем зворотного зв'язку, включаючи
          напрямок повідомлень, запитів, що стосуються використання Сайту
          Ресторану, надання послуг, обробка запитів і заявок від Користувача.
        </li>
        <li>
          4.1.4. Створення облікового запису для здійснення замовлень, якщо
          Користувач дав згоду на створення облікового запису.
        </li>
        <li>
          4.1.5. Повідомлення Користувача Сайту Ресторану про стан Замовлення.
        </li>
        <li>4.1.6. Обробки і отримання платежів.</li>
        <li>
          4.1.7. Надання Користувачеві ефективної клієнтської і технічної
          підтримки при виникненні проблем, пов'язаних з використанням Сайту
          Ресторану.
        </li>
        <li>
          4.1.8. Надання Користувачеві інформації про оновлення продукції,
          спеціальні пропозиції, інформації про ціни, розсилки новин та інших
          відомостей від імені Ресторану або від імені партнерів Ресторану.
        </li>
        <li>
          4.1.9. Здійснення рекламних заходів, спрямованих на привернення уваги
          Користувача до продукції і послуг Ресторану.
        </li>
        <li>
          4.1.10. Надання доступу Користувачеві на сайти або сервіси партнерів
          Ресторану з метою отримання продуктів, оновлень і послуг.{' '}
        </li>
        <li>
          4.1.11. Здійснення маркетингових заходів, в т.ч. оцінки рівня
          обслуговування, моніторингу трафіку і показника популярності різних
          продуктів і послуг.
        </li>
        <br></br>
        <li className={styles.informationTermin}>
          5. СПОСОБИ І ТЕРМІНИ ОБРОБКИ ПЕРСОНАЛЬНОЇ ІНФОРМАЦІЇ
        </li>
        <li>
          5.1. Обробка персональних даних Користувача здійснюється без обмеження
          терміну, будь-яким законним способом, в тому числі в інформаційних
          системах персональних даних з використанням засобів автоматизації або
          без використання таких засобів.
        </li>
        <li>
          5.2. Користувач погоджується з тим, що Адміністрація сайту має право
          передавати персональні дані третім особам, зокрема, кур'єрським
          службам, організаціями поштового зв'язку, операторам електрозв'язку, з
          метою виконання замовлення Користувача, оформленого на Сайті Ресторану
          «MIDAS», включаючи доставку замовлених кулінарних виробів, а також з
          метою інформування та привернення уваги Користувача про умови надання
          послуг, включаючи рекламні акції, нової продукції.
        </li>
        <li>
          5.3. Персональні дані Користувача можуть бути передані уповноваженим
          органам державної влади України тільки на підставах та в порядку,
          встановленим законодавством України.
        </li>
        <li>
          5.4. При втраті або розголошення персональних даних Адміністрація
          сайту інформує Користувача про втрату або розголошення персональних
          даних.
        </li>
        <li>
          5.5. Адміністрація сайту вживає необхідних організаційних і технічних
          заходів для захисту персональної інформації Користувача від
          неправомірного або випадкового доступу, знищення, перекручення,
          блокування, копіювання, поширення, а також від інших неправомірних дій
          третіх осіб.
        </li>
        <li>
          5.6. Адміністрація сайту спільно з Користувачем вживає всіх необхідних
          заходів щодо запобігання збиткам або інших негативних наслідків,
          викликаних втратою або розголошенням персональних даних Користувача.
        </li>
        <br></br>
        <li className={styles.informationTermin}>
          6. ЗГОДА НА ОБРОБКУ ПЕРСОНАЛЬНИХ ДАНИХ
        </li>
        <li>
          6.1. Збір та обробка персональний даних здійснюється за згодою
          користувачів, крім випадків, встановлених законом.
        </li>
        <li>
          6.2. Згода Користувача на обробку персональних даних вважається
          одержаним при наданні їм персональних даних вільно, своєю волею і в
          своєму інтересі і підтверджується шляхом натискання кнопки «З
          Правилами надання послуг ознайомлений і згоден» при реєстрації на
          сайті.
        </li>
        <li>
          6.3. Незгода з обробкою персональних даних виражається шляхом відмови
          від використання сайту.
        </li>
        <li>
          6.4. Користувач має право скасувати раніше дану згоду на обробку
          персональних даних шляхом подання відповідного повідомлення за формою
          зворотного зв'язку, розміщеної на сайті. У разі отримання повідомлення
          про скасування згоди на обробку персональних даних Користувача
          Адміністрація сайту приймає негайні заходи до виключення персональних
          даних Користувача з бази даних і припиняє їх обробку будь-яким
          способом, крім випадків, передбачених законом.
        </li>
        <li>
          6.5. У разі якщо скасування згоди на обробку персональних даних
          здійснюється Користувачем до виконання розміщеного і підтвердженого
          замовлення, використання персональних даних припиняється після
          виконання замовлення.
        </li>
        <br></br>
        <li className={styles.informationTermin}>
          7. ЗОБОВ'ЯЗАННЯ ЩОДО ЗАХИСТУ ПЕРСОНАЛЬНИХ ДАНИХ
        </li>
        <li>Адміністрація сайту зобов'язується:</li>
        <li>
          7.1. Використовувати отриману інформацію виключно для цілей,
          зазначених у п. 4 цієї Політики конфіденційності.
        </li>
        <li>
          7.2. Забезпечити зберігання конфіденційної інформації в таємниці, не
          розголошувати без попередньої письмової згоди Користувача, а також не
          здійснювати продаж, обмін, опублікування, або розголошення іншими
          можливими способами переданих персональних даних Користувача, за
          винятком п.п. 5.2 і 5.3 цієї Політики Конфіденційності.
        </li>
        <li>
          7.3. Вживати заходів обережності для захисту конфіденційності
          персональних даних Користувача згідно з порядком, який зазвичай
          використовується для захисту такого роду інформації в існуючому
          діловому обороті.
        </li>
        <li>
          7.4. Здійснити блокування персональних даних, що відносяться до
          відповідного Користувачеві, з моменту звернення або запиту Користувача
          або його законного представника або уповноваженого органу з захисту
          прав суб'єктів персональних даних на період перевірки, в разі
          виявлення недостовірних персональних даних або неправомірних дій.
        </li>
        
      </ol>
    </div>
  </section>
);

// PolitipropTypes = {};

Politics.defaultProps = {};

export default Politics;
