HW 45. Gulp V1

Перед исполнением нужно просмотреть -  https://lms.ithillel.ua/groups/65808945f1d84d87405d2baf/homeworks/6612764807bbfaae452ae0fb

1. Создайте директорию  layout-project  для своего проекта
2. Установите таск-менеджер Gulp и проверьте, чтобы версия была не ниже 4.0
3. Создайте приблизительную структуру вашего проекта. Вы можете придумать ее самостоятельно или взять пример из урока. Главное — наличие отдельных директорий под версию для работы и версию после работы
4. Залейте все на GITHub




mkdir layout-project
cd layout-project
npm init -y
npm install gulp-cli -g
npm install gulp --save-dev
gulp -v
npm install gulp-sass --save-dev
npm install sass --save-dev
npm install gulp-clean-css --save-dev
npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev
npm install browser-sync --save-dev
