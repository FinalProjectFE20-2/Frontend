import React from 'react';
import PropTypes from 'prop-types';
import styles from './Terms.module.scss';

const Terms = () => (
  <section className={`${styles.terms} container main`} data-testid="Terms">
    <div className={styles.containerHead}>
      <h1 className={styles.pagesHead}> Правила надання послуг </h1>
    </div>
    <div className={styles.pageViev}>
      <ol>
        <br></br>
        <li className={styles.pageTermin}>1. ОСНОВНІ ПОНЯТТЯ</li>
        <li>
          Поняття і визначення, що використовуються в цих Правилах надання
          послуг з приготування і доставки страв на замовлення клієнтів (далі -
          «Правила»), вживаються в наступних значеннях:
        </li>
        <li>
          <strong>«Виконавець», ресторан «MIDAS»</strong> — організація,
          безпосередньо або через залучених осіб надає послуги з приготування
          готових страв і їх доставці на замовлення Клієнтів.
        </li>
        <li>
          <strong>«Клієнт»</strong> — особа, кому надаються послуги з
          приготування і доставки страв для власного споживання.
        </li>
        <li>
          <strong>«Одержувач Замовлення»</strong> — особа, яка отримує
          приготовлену і доставлену на замовлення Клієнта продукцію.
        </li>
        <li>
          <strong>«Сайт»</strong> — сукупність комп'ютерних програм, що
          забезпечують публікацію даних, що стосуються послуг, продукції
          Виконавця шляхом повідомлення їх для загального відома за допомогою
          технічних засобів зв'язку в мережі Інтернет за адресою
          https://midasproject.vercel.app/
        </li>
        <li>
          <strong>«Послуга»</strong> — сукупність дій Виконавця з приготування,
          пакування та доставку Продукції, замовленої Клієнтом.
        </li>
        <li>
          <strong>«Продукція»</strong> — страви і супутні товари, зазначені на
          Сайті Виконавця і доступні для замовлення Клієнтом.
        </li>
        <li>
          <strong>«Замовлення»</strong> — сукупність дій Клієнта за висловом
          наміри отримати від Виконавця послугу з приготування і доставки
          готових страв і супутніх товарів, замовлені для приготування і
          доставки. Під Замовленням розуміється також комплект страв і супутніх
          товарів, замовлених Клієнтом.
        </li>
        <br></br>
        <li className={styles.pageTermin}>
          2. ОФОРМЛЕННЯ ТА ТЕРМІНИ ВИКОНАННЯ ЗАМОВЛЕННЯ
        </li>
        <li>
          2.1.Замовлення Клієнта може бути оформлений Клієнтом самостійно на
          Сайті, в мобільних додатках або по телефону за допомогою оператора
          Call-центру.
        </li>
        <li>2.2.Оформлення Замовлення через Сайт.</li>
        <li>
          При оформленні Замовлення Клієнт повинен вказати наступну інформацію:
        </li>
        <ul className={styles.pageNotes}>
          <li> Ім'я</li>
          <li>Контактний телефон</li>
          <li>
            Адреса доставки: назва міста, вулиці, номер будинку і квартири
            (офісу)
          </li>
          <li>
            Прізвище, ім'я, по батькові отримувача передплаченого замовлення
          </li>
        </ul>
        <li>
          2.3. Оформлення Замовлення по телефону в Call-центр за багатоканальним
          телефоном у своєму місті або по телефону і оператори проконсультують
          Клієнта за асортиментом і оформлять Замовлення.
        </li>
        <li>
          2.3.1. Всі інформаційні матеріали, представлені на Сайті, носять
          довідковий характер і не можуть в повній мірі передавати достовірну
          інформацію про властивості та характеристики Продукції, включаючи
          колір, розмір і форму. У разі виникнення у Клієнта питань, що
          стосуються властивостей і характеристик Продукції, перед оформленням
          Замовлення Клієнт повинен звернутися до Виконавця.
        </li>
        <li>
          2.3.2. У разі відсутності можливості з приготування замовленої
          Продукції у Виконавця, Виконавець має право анулювати Замовлення в
          частині зазначеної Продукції і повідомити про це Клієнта по телефону.
        </li>
        <li>
          2.3.3. У разі анулювання повністю або частково передплаченого
          Замовлення вартість анульованою Продукції повертається Виконавцем
          Клієнту тим способом, яким Продукція спочатку була оплачено.
        </li>
        <li>
          2.3.4. Мінімальна сума замовлення складає від 300 до 500 грн і може
          бути змінена Виконавцем в залежності від адреси доставки чи у святкові
          дні.
        </li>
        <br></br>
        <li className={styles.pageTermin}>3. ДОСТАВКА</li>
        <li>
          3.1. Доставка здійснюється безкоштовно в межах територіальних зон
          доставки, визначених Виконавцем. Доставка в заміські будинки
          здійснюється за наявності під'їзних шляхів.
        </li>
        <li>
          3.2. Служба доставки компанії Виконавця працює цілодобово або в іншому
          режимі, зазначеному для конкретного міста.
        </li>
        <li>
          3.3. Орієнтовний термін доставки - від 60 хвилин. Конкретний термін
          доставки визначається з урахуванням віддаленості Клієнта, дорожньої
          ситуації, погодних умов та інших, що не залежать від Виконавця
          обставин, і повідомляється оператором при прийомі замовлення.
          Перевищення встановленого терміну доставки можливо з огляду на
          обставини непереборної сили.
        </li>
        <li>
          3.4. Якщо будь-які непередбачені обставини заважають Клієнту отримати
          Замовлення, необхідно якомога раніше зв'язатися з операторами
          Call-центру за телефоном і домовитися про перенесення часу або місця
          доставки. У разі відсутності Клієнта / отримувача в призначений час за
          адресою доставки Кур'єр очікує Клієнта / отримувача протягом 5 хвилин.
        </li>
        <li>
          3.5. Якщо замовлення не виконано Виконавцем протягом зазначеного при
          оформленні замовлення терміну, Клієнт повинен повідомити про це або по
          телефону оператору, або шляхом подачі письмового повідомлення або по
          електронній пошті: midas@gmail.com не пізніше 24 годин після
          закінчення терміну доставки замовлення.
        </li>
        <br></br>
        <li className={styles.pageTermin}>4.ПЕРЕДАЧА ЗАМОВЛЕННЯ</li>
        <li>При доставці замовлення передається Клієнту / Одержувачу.</li>
        <li>
          Клієнт / Одержувач повинен перевірити комплектацію Замовлення і в разі
          відсутності претензій до комплектності та кількості - оплатити
          замовлення.
        </li>
        <li>
          При передачі передплаченого замовлення оформляється Акт приймання
          замовлення, що підписується кур'єром і Замовником / Одержувачем.
        </li>
        <li>
          Оплата Продукції при отриманні замовлення або підписання Акту при
          отриманні передплаченого замовлення є підтвердженням Клієнтом факту
          належного надання послуги з приготування і доставки Продукції.
        </li>
        <br></br>
        <li className={styles.pageTermin}>5. ОПЛАТА ПОСЛУГ</li>
        <li>
          5.1. Вартість послуг з приготування і доставки Продукції вказана на
          Сайті і може бути змінена Виконавцем в односторонньому порядку. При
          цьому ціна на вже замовлену клієнтом Продукцію зміні не підлягає.
        </li>
        <li>5.2. Способи оплати Продукції:</li>
        <li>Оплата готівкою при отриманні замовлення</li>
        <li>
          5.3. Виконавець має право надавати Клієнту знижки на Продукцію. Види і
          розміри знижок, порядок і умови їх надання вказані в розділі АКЦІЇ і
          можуть бути змінені Виконавцем в односторонньому порядку.
        </li>
        <br></br>
        <li className={styles.pageTermin}>6. ВІДМОВА ВІД ПОСЛУГ</li>
        <li>
          6.1. Відповідно до законодавства України повернення продовольчої
          Продукції належної якості не допускається, повернення грошових коштів
          за таку Продукцію не проводиться.
        </li>
        <li>6.2. Повернення Продукції неналежної якості</li>
        <li>
          У разі якщо Клієнт виявить, що йому передана Продукція неналежної
          якості, він має право до закінчення терміну придатності повернути
          Продукцію неналежної якості Виконавцю і зажадати повернення сплаченої
          грошової суми, або вимагати заміни Продукції неналежної якості.
        </li>
        <li>
          При цьому вартість Продукції повертається Клієнту протягом 10 днів з
          моменту отримання Виконавцем заяви Клієнта.
        </li>
        <li>6.3. Порядок дій при пересорті</li>
        <li>
          У разі виявлення в замовленні Продукції, що не відповідає замовленої,
          Клієнт має право прийняти дану Продукцію або відмовитися від неї і
          вимагати заміни на Продукцію, передбачену Замовленням, або повернення
          грошових коштів за фактично не одержану Продукцію.
        </li>
        <li>
          6.4. Заміна Продукції, що не відповідає Замовленню за асортиментом,
          здійснюється шляхом оформлення нового замовлення.
        </li>
        <li>
          6.5. Порядок дій при доставці в повному обсязі скомплектованого
          замовлення
        </li>
        <li>
          При доставці меншої кількості Продукції, ніж визначено Замовленням,
          Клієнт має право прийняти Продукцію в частині, що відповідає
          Замовленню, і зажадати передати відсутню кількість Продукції або, якщо
          відсутня Продукція була оплачена, відмовитися від Замовлення в частині
          недостатньої Продукції і вимагати повернення грошових коштів за
          відсутню Продукцію. Даний факт недовкладання Продукції оформляється
          Актом в довільній формі, який підписується Клієнтом / Одержувачем і
          кур'єром.
        </li>
        <li>
          Доставка відсутньої Продукції здійснюється за допомогою оформлення
          нового Замовлення.
        </li>
        <br></br>
        <li className={styles.pageTermin}>7. ГАРАНТІЇ ТА ВІДПОВІДАЛЬНІСТЬ</li>
        <li>
          7.1. Продукція може бути використана Клієнтом тільки до закінчення
          терміну придатності Продукції. Виконавець не несе відповідальності за
          шкоду, заподіяну Клієнту внаслідок неналежного використання,
          зберігання, споживання Продукції.
        </li>
        <li>
          7.2. Виконавець не несе відповідальності за зміст і функціонування
          інших сайтів, крім https://midasproject.vercel.app/
        </li>
        <li>
          7.3. Клієнт зобов'язується не використовувати замовлену Продукцію в
          підприємницьких цілях.
        </li>

        <br></br>
        <li className={styles.pageTermin}>
          8. КОНФІДЕНЦІЙНІСТЬ І ЗАХИСТ ПЕРСОНАЛЬНОЇ ІНФОРМАЦІЇ
        </li>
        <li>
          8.1. Надаючи свої персональні дані при замовленні Продукції або
          реєстрації на Сайті, Клієнт погоджується на їх обробку Виконавцем, в
          тому числі і з метою просування Продукції і послуг.
        </li>
      </ol>
    </div>
  </section>
);

// Terms.propTypes = {};

Terms.defaultProps = {};

export default Terms;
