
let background = document.querySelector('.background');
let action = document.querySelector('.action')
let  text = document.querySelector('.text');
let tanya = document.querySelector('.tanya');
let kirya = document.querySelector('.kirya');
let money = document.getElementById('money');
let plus = document.querySelector('.plus-wrapper')

let list =  document.createElement('ul');
let list2 = document.createElement("ul");
let list3 = document.createElement('ul');
let list4 = document.createElement("ul");
let list5 = document.createElement("ul");
let beerMagnat = document.createElement('li');
let coolGuy =  document.createElement('li');
let molodoy = document.createElement('li');
let yes = document.createElement("li");
let no = document.createElement("li");
let ring = document.createElement('img');
let more = document.createElement("li");
let besedka = document.createElement("li");
let menDream = document.createElement("li");
let classic = document.createElement("li");
let tanyaDream = document.createElement("li");
let classic2 = document.createElement("li");

let textMore = document.createElement('p');
let countMore = document.createElement('p');
let textMen = document.createElement('p');
let countMen = document.createElement('p');
let textTanya = document.createElement("p");

beerMagnat.innerHTML = 'Пивной магнат';
coolGuy.innerHTML = 'Крутой чувак';
molodoy.innerHTML = 'Молодой романтик';
yes.innerHTML = 'Да!';
no.innerHTML = 'Нет!';
textMore.innerHTML = 'На берегу моря';
countMore = '25';
besedka.innerHTML = 'Коттедж Свояки на Ватутина';
textMen.innerHTML = 'Мужчина мечты';
classic.innerHTML = 'Суженый - ненаряженный';
textTanya.innerHTML = 'Самая красивая нивета на свете';
classic2.innerHTML = 'Платье не нашлось:('


ring.setAttribute('src', '/img/ring.png');
ring.setAttribute('class', 'ring');
more.setAttribute('class', 'plata');
menDream.setAttribute("class", "plata");
tanyaDream.setAttribute("class", "plata");


let textArray = [
  "Сейчас начнется ваша история. Основано на реальных событиях.",
  "Жила была девучшка по имени Танюшка. Жила и бед не знала, пока ЕГО не повстречала.",
  "Он был красив, умен, романтик, ну в общем чистый бриллиантик. Она была под стать ему, чутка красивше, на долю одну",
  "Давайте же узнаем, как его она повестречала",
  'Дай-ка я зарегаюсь в тиндоре, вечером скучно просто одной пить шампанское, хоть посмеюсь с этих вот',
  'О господи, секунды не прошло, накинулись уже. Кто тут мне пишет?',
  'выберите мужика',
  'я выбран',
  'Даровки, на Сашу Грей похожа. Погуляем? Можем пивка бахнуть. Я в Витебске живу сейчас, так что тока один шанс, цветошка',
  '"Ну вот тока мне такие кринжовые попадаются. Ну зато красивый и пиво любит"',
  'Встретив друг друга, оторваться они уже не могли. Это была химия, которую даже расстояние не смогло остудить.',
  'Она жила ради выходных, когда он приедет. А он готов был на все, лишь бы быстрее вернуться.',
  'Он своим друзьям уже рассказал про нее. Даже больше, он ни о чем другом говорить-то и не мог. Уж я то знаю, о чем говорю.',
  'Она прекрасно готовила, попробовав один раз ее шаурму с секретным соусом, рецепт которого мы обязательно узнаем, он понял, что никогда не отпустит эту женщину.',
  'Он думал, готовился, волновался, старался, выбирал кольцо. Даже лучшей подруге ничего не сказал (оно понятно почему, я до сих пор плачу). Ну и вот, день икс.',
  'Так хочется пива попить на закате, пошли посидим на речке, насладимся природой',
  'Ты ж дома любишь сидеть, шо стобой?',
  "Ну пошли, конечно, тебя вытащи попробуй, а тут сам, кто ж откажется",
  '"Что он уже задумал?"',
  'И вот, превозмогая волнение, на закате у реки, он стал на одно колено, перед девушкой, которая стала ему ближе всех, с которой он готов провести всю свою жизнь и видеть только ее рядом с собой. Но согласна ли она?',
  "Ты согласна?",
  '',
  'Пора готовиться к свадьбе! ',
  'Где же будет проходить свадьба? Выбирайте с умом, кристаллики не бесконечные и за них придется платить',
    'Столько переживаний, столько сил, нервов, но этот день будет лучшим.',
    'Рядом только самые близкие, без которых этот день был бы не полным. Они поздравляют, желают от сердца только самого лучшего.',
    "Коленки дрожат, сердце колотится, сдерживая слезы, возле арки стоит Он",
    'Выберите, как будет выглядеть жених',
    "Знал ли он, что переписка в тиндере приведет к таким последствиям, к этой самой лучшей девочке на свете",
    'Жду тебя, моя пушишка',
    'И вот идет она: прекрасная, нежная и самая любимая. Все так улыбаются, что наверное сейчас щеки заболят. У меня вообще глаза на мокром месте, думала как сдержаться, чтобы не заплакать.',
    'Как же выглядит наша нивета',
    'А вот она я',
    'Это был лучший праздник! Алкоголь лился рекой в прямом и переносном смысле, еще б без икон, но это мелочи жизни. Все веселились, отдыхали и поздравляли молодых. Мир еще не видел пары прекраснее.',
    "Было много всего, и сколько всего еще будет, самое главное, что вы пройдете это вдвоем. Спасибо, что вы у нас такие классные есть. Опора и поддержка друг для друга. Лучшие друзья на свете. Насколько мы вас любим, так же как вы любите друг друга.",
    "Я буду дополнять эту прекрасную историю, ведь это самое начало",
    'А что же дальше спросите вы?',
    "Второй сезон: каминг сун"
];
let i = 0;
function addCrystals() {
    alert('Вам единоразово добавиться 25 кристаллов, но вы должны выполнить любое из 3 условий: 1. Поднять тост за разработчика 2. Угостить пивом 3. Рассказать рецепт секретного соуса')
    money.innerHTML = Number(money.textContent) + 25;
}
    plus.addEventListener("click", addCrystals, {once: true});

action.addEventListener( 'click', function() {
    text.innerHTML = textArray[i];
    i++;
    if(i >= 5) {
        tanya.classList.add('active');
        text.classList.add('personText');
    }
    if ( i >= 7) {
        tanya.classList.remove('active');
        text.append(list)
        list.append(beerMagnat);
        list.append(coolGuy);
        list.append(molodoy);

        beerMagnat.addEventListener('click', function() {
            kirya.classList.add('beerMagnat')
        })

        coolGuy.addEventListener('click', function() {
            kirya.classList.add('coolGuy');
        })
        molodoy.addEventListener('click', function() {
            kirya.classList.add('molodoy');
        })
    }
    if ( i >= 8) {
        text.innerHTML = textArray[i];
    }
    if (i >= 9) {
          text.innerHTML = textArray[i];
          kirya.classList.add('hide');
          tanya.classList.add("active");
        }
    if (i >= 10) {
          text.innerHTML = textArray[i];
          tanya.classList.remove("active");
        }
    if ( i >= 14) {
        background.classList.add('newBack');
    }
    if (i >= 15) {
          kirya.classList.remove("hide");
        }
    if (i >= 16) {
          kirya.classList.add("hide");
          tanya.classList.add('active');
        }
    if (i >= 19) {
            tanya.classList.remove("active");
    }
    if( i >= 20) {
        text.append(list2);
                    list2.append(yes);
                    list2.append(no);

                    yes.addEventListener("click", function () {
                      textArray[21] = 'Ты получила кольцо и жониха';
                    });
                    no.addEventListener("click", function () {
                      textArray[21] = "Нет я не могу сказать! Конечно да!";
                    });
    }
    if ( i>= 21) {
        text.innerHTML = textArray[i];
        text.append(ring);
    }
    if ( i >= 22) {
        text.innerHTML = textArray[i];
    }
    if ( i>= 23) {
        text.append(list3);
        list3.append(more);
        list3.append(besedka);
        more.append(textMore);
        more.append(countMore);

        more.addEventListener('click', function() {
            money.innerHTML = Number(money.textContent) - Number(countMore);
            background.classList.add('moreBack')
        })
        besedka.addEventListener('click', function() {
            background.classList.add('besedkaBack');
        })
    }
    if ( i>= 24) {
        text.innerHTML = textArray[i] 
    }
    if ( i >= 27) {
        text.append(list4);
        list4.append(menDream);
        list4.append(classic);
        menDream.append(textMen);
        menDream.append(countMore);

        menDream.addEventListener('click', function() {
            money.innerHTML = Number(money.textContent) - Number(countMore);
            kirya.classList.add('dream');
        });
        classic.addEventListener('click', function() {
            kirya.classList.remove('hide');
        })
    }
    if ( i >= 28) {
        text.innerHTML = textArray[i];
        kirya.classList.remove('hide');
    }
    if ( i >= 30) {
        kirya.classList.add('hide');
    }
    if ( i >= 31) {
        text.append(list5);
        list5.append(tanyaDream);
        list5.append(classic2);
        tanyaDream.append(textTanya);
        tanyaDream.append(countMore);

        console.log(money);
        console.log(money.textContent);
        console.log(money.innerHTML);

                tanyaDream.addEventListener("click", function () {
                    if(money.textContent == 0) {
                        tanyaDream.setAttribute('disabled', 'disabled')
                    } else if (money.textContent == 25) {
                        money.innerHTML = Number(money.textContent) - Number(countMore);
                        tanya.classList.add("dreamTanya");
                    }
                });

                classic2.addEventListener("click", function () {
                    tanya.classList.add('active');
                });
        }
    if ( i >= 32) {
        text.innerHTML= textArray[i];
        tanya.classList.add('active');
    }
    if ( i >= 33) {
        tanya.classList.remove('active');
    }
    if ( i >= 38) {
        text.classList.add('hide');
        background.classList.add('final'); 
    }
});

