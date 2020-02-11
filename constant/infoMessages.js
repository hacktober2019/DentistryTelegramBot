const start = ' Ласкаво просимо у "Simstomat"! Оберіть, будь ласка, потрібний вам розділ із меню:';
const menu =
    {
        reply_markup: {
            keyboard: [
                ["Про нас", "Де знаходиться клініка", "Наші послуги"], ["Наші працівники", "Графік роботи"]
            ]
        }
    };
const aboutUs = 'Наша стоматологія - це новітня апаратура та висококваліфіковані лікарі. Ми надаємо повний спектр ' +
    'послуг, від консультації до протезування та художньої реставрації зубів. З нами Ви можете бути впевнені у' +
    ' здоров\'ї своїх зубів. Нашу професійність підтверджено сотнями задоволених клієнтів.';
const anyMsg = 'Для того щоб почати спілкуватися з ботом, напишіть йому "start" і виберіть один із розділів меню.';

const location = {
    lat: 50.5049227,
    long: 30.4238932,
    locInfo:'Проспект Правди, 72, Київ'
};

module.exports = {
    start,
    menu,
    aboutUs,
    anyMsg,
    location
}