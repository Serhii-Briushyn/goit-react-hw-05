Привіт:wave:
Новий тиждень - новий модуль. І тепер у нас маршрутизація. Починаємо ускладнювати наші проекти :face_with_peeking_eye:
Зверніть увагу на основні пункти під час виконання ДЗ:
:exclamation: файли компонентів сторінок, таких як HomePage, MoviesPage, MovieDetailsPage, NotFoundPage, повинні бути в папці src/pages
:exclamation: Саме такі повинні бути назви файлів і папок :exclamation:
:exclamation: Компоненти MovieCast і MovieReviews не є окремими сторінками, вони є лише частинами сторінки MovieDetailsPage, тому файли цих компонентів зберігаємо в src/components. Рендер цих компонентів має бути саме в Арр
<Route path="/movies/:movieId" element={<MovieDetailsPage />}>
<Route path="cast" element={<MovieCast />} />
<Route path="reviews" element={<MovieReviews />} />
</Route>
:exclamation: Саме такі повинні бути назви файлів і папок :exclamation:
Під час сабміту форми на сторінці MoviesPage обов’язково записувати слово для пошуку в параметри рядка запиту. Форма повинна бути в окремому компоненті.
const handleSubmit = value => {
setSearchParams({ query: value });
};
Запит на сторінці MoviesPage виконуємо лише в useEffect !!
На сторінках MoviesPage, MovieCast, MovieReviewsв масиві залежностей повинен бути id фільма який ми отримали з рядка запиту
const { movieId } = useParams();
useEffect(() => {
if (!movieId) return;
}, [movieId]);
Коли додаємо функціонал кнопки повернення назад, перевіряти, що точно є значення from в location.state. Також потрібно використати хук useRef , щоб повертатись відразу до списку фільмів.
const location = useLocation();
const backLink = useRef(location.state ?? '/movies');
Якщо з бека не прийшли фото акторів або постер, поставити дефолтну картинку
const defaultImg =
"https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

<img
src={
movieData.poster_path
? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
: defaultImg
}
width={250}
alt="poster"
/>
Створення списку фільмів на сторінках HomePage, MoviesPage виносимо в окремий компонент MovieList.
:exclamation: Для правильної роботи додатка з маршрутизацією після розгортання на Vercel, слід додати файл налаштувань vercel.json в кореневу папку проекту. :exclamation:
{
"rewrites": [
{"source": "/(.*)", "destination": "/"}
]
}
:exclamation:Якщо ви використовуєте для хостингу ДЗ сервіс netlify в папці public потрібно створити файл з назвою \_redirects без розширення і додайте у нього наступний код:exclamation:
/_ /index.html 200
Це правило каже Netlify, що для будь-якого запиту на невизначений шлях (/_) слід віддати index.html зі статус кодом 200, не змінюючи URL в браузері. Це дозволяє вашому клієнтському роутеру ( React-Router) обробляти всі шляхи.
Домашня робота об'ємна, багатогранна і цікава. Обов'язково дивимося демо-відео і реалізуємо покроково. Якщо стилізуєте красиво - мій особистий like :facepunch:
:+1:
5
