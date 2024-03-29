На текущий момент посмотреть можно только код, т.к сборщики падают 
    на ошибке. Решать сейчас времени нет. Отправил все что есть на текущий 
    момент:

    Запуск проекта:
    1. Запуск сервера: npm run json-server (объединение параметра в команду)
        localhost - работает на 5000 порту
        
    2. Локальный запуск проекта: npm start       

# Технологический стек проекта: 
    ReactJS, TypeScript, ReactRouterDOM, Redux Toolkit, RTK Query, JSON-SERVER

# Реализованный функционал:
    1. Архитектура: Простая модульная
    2. Стилизация: CSS Modules / Ant Design 
    3. Работа с данными: Redux Toolkit / RTK Query / JSON-SERVER
    4. Типизация: TypeScript
    5. Качество кода: ESLint, Prettier
    6. Роутинг: ReactRouterDOM

    - Создание компонентов на ReactJS с добавляением стилей CSS Modules и React.FC
    - Файловая структура с максимальной разбиением для дальнейшей поддержки и улучшения
    - Организация хранилища с большим колличеством кодключений в rootReducers, и middleware
    - Работа с API через RTK Query и организация структуры папки services / api 
    - Вынесение маршрутов в компонент AppRouter для использования public и private маршруторв
    - Создание папки routers и типизация маршрутов с помощью Enum (вынесение путей маршрутов в константы)
    - Написание типизированных хуков в папке hooks - useAppSelector и useAppDispatch
    - Реализация типизации в папке types для каждого компонента своя папка и типы для этого компонента
    - Написание общих layouts для header и footer
    - Подготовка базы данных JSON-Server для хранения и более менее удобной работы с данными
    - Сборка из готовых компонентов страниц
    
# Цель проекта:
    Придумать объемный проект для резюме / стажировки и дальнейшей поддержки и 
    добавления нового функционала и технологий

# Личные впечатления:
    Из за объема проекта и выбранных подходов не получилось выполнить проект полностью. 
    
    На текущий момент адаптивной верстки нет. Проект написан на разрешении 1440px. 
        В дальнейшем все будет написано.
    
    Из за ограничений JSON-Server при работе с вложенными поинтами мешанина в базе
        из за этого планируеться переписать проект на Firebase

    UI библиотека Ant Design - вероятно из за недостатка опыта использования библиотеки
        складывалось стойкое ощущение что в моем проект она не неужно и вот почему:
        
            - Сложность стилизации 
            - Большой вес 
            - Проще было бы создать свой UI 
            - Сильное усложнение логики при работе с props и 
                динамическими данными
            
          

    
    





    
