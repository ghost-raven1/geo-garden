<template>
  <div class="container">
    <section>
<div class="uk-accordion-content map_adaptive_container">
<h2>Фильтр по культурам "Garden Group"</h2>
    <div class="uk-alert-primary" uk-alert>
        <a class="uk-alert-close" uk-close></a>
        <p>Выберите группу растений во вкладке...</p>
    </div>            
<!-- Фильтр по полям -->
<!-- Добавить несколько параметров фильтрации-->
    <div class="filter" uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-pill">
        <li class="uk-active" uk-filter-control><a>Все</a></li>
        <li uk-filter-control="[data-plants-group='perennials']"><a href="#">Многолетники</a></li>
        <li uk-filter-control="[data-plants-group='free_fields']"><a href="#">Свободные поля</a></li>
        <li uk-filter-control="[data-plants-group='roots']"><a href="#">Корнеплоды</a></li>
        <li uk-filter-control="[data-plants-group='cereals']"><a href="#">Злаковые</a></li>
        <li uk-filter-control="[data-plants-group='berries']"><a href="#">Ягоды</a></li>
    </ul>

    <ul class="js-filter uk-child-width-1-1 uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true">
        <li data-plants-group="perennials">
            <a href="/fields/perennials/10">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №10</h3>
                    <p>Описание поля.</p>
                    </div>
                        <div class="uk-card-footer">
                            <a href="/fields/perennials/10" class="uk-button uk-button-text">Подробнее</a>
                        </div>
                </div>
            </a>
        </li>
        <li data-plants-group="perennials">
            <a href="/fields/perennials/11">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №11</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/perennials/11" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="perennials">
            <a href="/fields/perennials/12">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №12</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/perennials/12" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="perennials">
            <a href="/fields/perennials/13">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №13</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/perennials/13" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="perennials">
            <a href="/fields/perennials/14">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №14</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/perennials/14" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="perennials">
            <a href="/fields/perennials/15">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №15</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/perennials/15" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="perennials">
            <a href="/fields/perennials/16">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №16</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/perennials/16" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="perennials">
            <a href="/fields/perennials/17">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №17</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/perennials/17" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="perennials">
            <a href="/fields/perennials/18">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №18</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/perennials/18" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="cereals">
            <a href="/fields/cereals/19">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №19</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/cereals/19" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="berries">
            <a href="/fields/berries/20">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №20</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/berries/20" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="roots">
            <a href="/fields/roots/33">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №33</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/roots/33" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="free_fields">
            <a href="/fields/free_fields/35">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Избранное</div>
                    <h3 class="uk-card-title">Поле №35</h3>
                    <p>Описание поля.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/free_fields/35" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="free_fields">
            <a href="/fields/free_fields/36"><div class="uk-card uk-card-default uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">Поле №36</div></a>
        </li>
    </ul>
</div>
</div>
<div class="uk-accordion-content map_adaptive_container">
<h2>Интерактивная карта питомника "Garden Group"</h2>
    <div class="uk-alert-primary" uk-alert>
        <a class="uk-alert-close" uk-close></a>
        <p>Выберите объект на карте...</p>
    </div>
<!-- Интерактивная карта -->
    <div class="map">
                <svg viewBox="0 0 1056 724">
                    <!-- №1 -->
                    <a href="#">
                        <title>Поле №1 - Клумба</title> 
                        <path class="part c_map_p1" d="m 811.4322,46.400423 19.94068,0.766949 1.91738,58.288138 -29.91102,0.76695 V 74.010592 l 7.66949,-0.383474 -3.83475,-12.271187 4.98517,-1.533898 z" fill="#bf2523" description-data="№1" />
                    </a>
                    <!-- №2 -->
                    <a href="#">
                        <title>Поле №2</title>
                        <path class="part" d="m 739.33898,166.42797 8.43644,59.05508 78.61229,-13.42161 -1.91737,-55.22034 z" fill="#bf2523" description-data="№2" />
                    </a>
                    <!-- №3 -->
                    <a href="/ponds/3">
                        <title>Мылый пруд №3</title>
                        <path class="part" d="m 807.98093,238.13771 -0.57521,7.09428 13.42161,-1.15042 4.21822,-6.90255 z" fill="#bf2523" description-data="№3" />
                    </a>
                    <!-- №4 -->
                    <a href="/ponds/4">
                        <title>Большой пруд №4</title>
                        <path class="part" d="m 734.16208,262.10487 15.91419,-2.49258 11.12077,-4.40996 9.97033,-3.0678 8.62818,6.32733 0.57521,13.22988 -21.66631,5.75211 -21.0911,0.76695 -2.30085,9.20339 -15.33898,3.83475 -8.43644,-2.49258 -0.95869,-17.4481 10.35381,-11.3125 z" fill="#bf2523" description-data="№4" />
                    </a>
                    <!-- №5 -->
                    <a href="/buildings/5">
                        <title>Строение №5 - Бытовка</title>
                        <path class="part" d="m 721.69915,135.75 8.81992,22.24152 18.0233,-4.60169 -4.21822,-21.85805 z" fill="#bf2523" description-data="№5" />
                    </a>
                    <!-- №6 -->
                    <a href="/buildings/6">
                        <title>Строение №6 - Свинарник</title>
                        <path class="part" d="m 759.27966,49.084745 3.83475,20.707627 46.01695,2.684322 -4.21822,-11.504237 6.51906,-1.150424 -1.15042,-11.887712 z" fill="#bf2523" description-data="№6" />
                    </a>
                    <!-- №7 Теплица -->
                    <a href="/buildings/7">
                        <title>Поле №7 - Теплица</title>
                        <path class="part" d="m 487.01271,65.957626 1.91738,9.586864 36.04661,-1.533898 -1.15043,-10.353813 z" fill="#bf2523" description-data="№7" />
                    </a>
                    <!-- №8 -->
                    <a href="/trades/8">
                        <title>Зона продажи №8</title>
                        <path class="part" d="m 691.02119,184.83474 4.60169,47.93433 47.16738,-1.91738 -3.0678,-46.78389 z" fill="#bf2523" description-data="№8" />
                    </a>
                    <!-- №9 -->
                    <a href="/trades/9">
                        <title>Зона продажи камней №9</title>
                        <path class="part" d="m 797.62712,253.47669 11.12076,59.43856 39.49788,-8.81991 -13.80508,-57.52119 z" fill="#bf2523" description-data="№9" />
                    </a>
                    <!-- №10 -->
                    <a href="/fields/perennials/10">
                        <title>Поле №10</title>
                        <path class="part" d="m 704.4428,320.20127 4.98517,17.63983 54.83686,-6.13559 -7.66949,-19.55721 z" fill="#bf2523" description-data="№10" />
                    </a>
                    <!-- №11 -->
                    <a href="/fields/perennials/11">
                        <title>Поле №11</title>
                        <path class="part" d="m 621.22881,196.72246 4.98517,67.875 67.10805,-8.43644 -7.66949,-68.64195 z" fill="#bf2523" description-data="№11" />
                    </a>
                    <!-- №12 -->
                    <a href="/fields/perennials/12">
                        <title>Поле №12</title>
                        <path class="part" d="M 709.04449,342.82627 728.21822,453.65042 837.125,441.37924 809.13136,332.08898 Z" fill="#bf2523" description-data="№12" />
                    </a>
                    <!-- №13 -->
                    <a href="/fields/perennials/13">
                        <title>Поле №13</title>
                        <path class="part" d="m 669.93009,66.724575 21.85805,114.658895 44.86652,-1.53389 -6.90254,-24.92585 -12.65466,0.76695 -9.58687,-92.033901 z" fill="#bf2523" description-data="№13" />
                    </a>
                    <!-- №14 -->
                    <a href="/fields/perennials/14">
                        <title>Поле №14</title>
                        <path class="part" d="m 580.19703,286.45551 31.82839,120.02754 16.48941,-0.76695 14.18856,-3.83474 -20.70763,-122.71187 z" fill="#bf2523" description-data="№14" />
                    </a>
                    <!-- №15 -->
                    <a href="/fields/perennials/15">
                        <title>Поле №15</title>
                        <path class="part" d="m 545.68432,128.08051 13.80509,85.51483 17.25635,62.88983 45.63348,-5.36865 -15.33898,-148.78813 z" fill="#bf2523" description-data="№15" />
                    </a>
                    <!-- №16 -->
                    <a href="/fields/perennials/16">
                        <title>Поле №16</title>
                        <path class="part" d="m 612.79237,100.85381 8.05297,91.26695 65.19068,-8.43644 -13.03814,-92.033897 z" fill="#bf2523" description-data="№16" />
                    </a>
                    <!-- №17 -->
                    <a href="/fields/perennials/17" >
                        <title>Поле №17</title>
                        <path class="part" d="m 534.56356,53.68644 2.68432,22.625 65.95763,-2.684322 -2.30085,-23.008475 z" fill="#bf2523" description-data="№17"/>
                    </a>
                    <!-- №18 -->
                    <a href="/fields/perennials/18">
                        <title>Поле №18</title>
                        <path class="part" d="m 709.42797,61.355931 6.13559,61.739409 23.00848,-0.38348 -5.36865,-62.889827 z" fill="#bf2523" description-data="№18" />
                    </a>
                    <!-- №19 -->
                    <a href="/fields/cereals/19">
                        <title>Поле №19</title>
                        <path class="part" d="m 609.3411,76.694914 2.30085,20.324153 59.82203,-7.669492 -4.21822,-20.324152 z" fill="#bf2523" description-data="№19" />
                    </a>
                    <!-- №20 -->
                    <a href="/fields/berries/20">
                        <title>Поле №20</title>
                        <path class="part" d="m 479.7267,83.213982 6.51906,51.769068 55.22034,-4.21822 -6.51907,-51.002119 z" fill="#bf2523" description-data="№20" />
                    </a>
                    <!-- №21 -->
                    <a href="#">
                        <title>Поле №21</title>
                        <path class="part" d="m 494.6822,229.70127 5.75212,29.91102 63.27331,-8.05297 -5.36865,-31.44491 z" fill="#bf2523" description-data="№21" />
                    </a>
                    <!-- №22 -->
                    <a href="#">
                        <title>Поле №22</title>
                        <path class="part" d="m 503.11864,265.36441 3.0678,27.61017 67.49153,-10.35382 -5.36865,-24.1589 z" fill="#bf2523" description-data="№22" />
                    </a>
                    <!-- №23 -->
                    <a href="#">
                        <title>Поле №23</title>
                        <path class="part" d="m 508.87076,297.1928 0.76695,14.18856 23.77543,-2.68433 11.12076,31.44492 42.1822,-9.20339 -10.73729,-44.48305 z" fill="#bf2523" description-data="№23" />
                    </a>
                    <!-- №24 -->
                    <a href="#">
                        <title>Поле №24</title>
                        <path class="part" d="m 547.98517,344.36017 14.18856,35.27966 34.12924,-4.21822 -8.81992,-37.58051 z" fill="#bf2523" description-data="№24" />
                    </a>
                    <!-- №25 -->
                    <a href="#">
                        <title>Поле №25</title>
                        <path class="part" d="m 614.32627,413.76907 12.27119,58.28813 20.70763,-3.06779 -3.0678,-61.35594 z" fill="#bf2523" description-data="№25" />
                    </a>
                    <!-- №26 -->
                    <a href="#">
                        <title>Поле №26</title>
                        <path class="part" d="m 655.35805,449.4322 5.75212,21.0911 62.50636,-5.75211 -5.75212,-25.6928 z" fill="#bf2523" description-data="№26" />
                    </a>
                    <!-- №27 -->
                    <a href="#">
                        <title>Поле №27</title>
                        <path class="part" d="m 730.13559,457.86864 4.98517,29.14407 113.125,-13.80508 -9.97033,-27.61017 z" fill="#bf2523" description-data="№27" />
                    </a>
                    <!-- №28 -->
                    <a href="#">
                        <title>Поле №28</title>
                        <path class="part" d="m 649.60593,362.76695 6.90255,78.99576 60.97245,-7.66949 -12.65466,-77.07839 -28.37712,0.76695 z" fill="#bf2523" description-data="№28" />
                    </a>
                    <!-- №29 -->
                    <a href="#">
                        <title>Поле №29</title>
                        <path class="part" d="m 643.08687,331.32203 4.60169,26.45975 55.22034,-7.66949 -3.0678,-26.07627 z" fill="#bf2523" description-data="№29" />
                    </a>
                    <!-- №30 -->
                    <a href="#">
                        <title>Поле №30</title>
                        <path class="part" d="m 629.66526,295.27542 11.50423,31.06144 56.75424,-5.75211 -4.21822,-16.48941 -14.18856,-16.48941 z" fill="#bf2523" description-data="№30" />
                    </a>
                    <!-- №31 -->
                    <a href="#">
                        <title>Поле №31</title>
                        <path class="part" d="m 562.5572,384.625 11.50424,26.07627 31.44492,-5.36864 -7.66949,-23.77543 z" fill="#bf2523" description-data="№31" />
                    </a>
                    <!-- №32 -->
                    <a href="#">
                        <title>Поле №32</title>
                        <path class="part" d="m 493.53178,204.00847 2.30085,21.47458 60.58898,-9.20339 -4.98517,-19.94068 z" fill="#bf2523" description-data="№32" />
                    </a>  
                    <!-- №33 -->
                    <a href="/fields/roots/33">
                        <title>Поле №33 - Картофель</title>
                        <path class="part" d="m 485.86229,139.96822 5.36864,57.52119 59.05509,-6.51907 -8.05297,-55.60382 z" fill="#bf2523" description-data="№33" />
                    </a>
                    <!-- №34 -->
                    <a href="#">
                        <title>Поле №34</title>
                        <path class="part" d="m 578.27966,417.60381 15.72246,57.13772 28.37712,-2.68433 -15.72246,-60.97245 z" fill="#bf2523" description-data="№34" />
                    </a>
                    <!-- №35 -->
                    <a href="/fields/free_fields/35">
                        <title>Поле №35 - Свободно</title>
                        <path class="part" d="m 654.20763,478.57627 18.40678,93.5678 74.39407,-3.45127 -18.40678,-97.78602 z" fill="#bf2523" description-data="№35" />
                    </a>  
                    <!-- №36 -->
                    <a href="/fields/free_fields/36" id="free">
                        <title>Поле №36 - Свободно</title>
                        <path class="part" d="m 479.34322,156.45763 4.6017,54.45339 23.77542,100.85381 -56.75424,26.45975 8.43644,26.84322 56.37077,2.68432 18.79025,72.47669 -249.64195,-26.84322 -39.11441,-16.10593 -16.10593,-79.37924 60.20551,-6.51906 7.28602,20.32415 46.40042,-2.30085 -14.95551,-48.70127 26.45975,-2.68432 -6.1356,-19.17373 66.34111,-22.625 12.27118,-32.59534 -5.75212,-36.43009 z" fill="#bf2523" description-data="№36" />
                    </a>                                                         
                </svg>
                <img src="~/static/common_map.png" alt="">
    </div>
        </div>

    </section>
  </div>
</template>

<style>
.container {
  max-height: 90%;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 5%;
}
section {
  width: 100%;
}
div .map_adaptive_container{
    height: 100%;
    max-width: 100%;
    padding-bottom: 5%;
    padding-top: 1%;
}
div .map{
    position: relative;
    text-align: center;
}
svg {
    position: absolute;
    top: 0;
    right: 0;

    height: 100%;
    width: 100%;
}
.part {
    opacity: .3;
}
.part:hover {
    transition: opacity .2s ease;
    opacity: .7;
    cursor: pointer;
}
div .filter{
    padding-top: 40px;
}
.uk-card-primary{
    background:rgb(44, 106, 240)
}
</style>