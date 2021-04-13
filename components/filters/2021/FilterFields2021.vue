<template>
      <ul uk-accordion="collapsible: true">
    <li>
        <a class="uk-accordion-title" href="#">Фильтр по культурам "Garden Group"</a>
        <div class="uk-accordion-content map_adaptive_container">
    <div class="filter" uk-filter="target: .js-filter">

    <ul class="uk-subnav uk-subnav-pill">
        <li class="uk-active" uk-filter-control><a>Все</a></li>
        <li uk-filter-control="[data-plants-group='perennials']"><a href="#">Многолетники</a></li>
        <li uk-filter-control="[data-plants-group='free_fields']"><a href="#">Свободные поля</a></li>
        <li uk-filter-control="[data-plants-group='roots']"><a href="#">Корнеплоды</a></li>
        <li uk-filter-control="[data-plants-group='cereals']"><a href="#">Злаковые</a></li>
        <li uk-filter-control="[data-plants-group='berries']"><a href="#">Ягоды</a></li>
        <li uk-filter-control="[data-plants-group='bushes']"><a href="#">Кустарники</a></li>
        <li uk-filter-control="[data-plants-group='trees']"><a href="#">Деревья</a></li>
        <li uk-filter-control="[data-plants-group='fruits']"><a href="#">Плодовые</a></li>
        <li uk-filter-control="[data-zones='trades']"><a href="#">Торговые зоны</a></li>
        <li uk-filter-control="[data-zones='buildings']"><a href="#">Строения</a></li>
        <li uk-filter-control="[data-zones='ponds']"><a href="#">Пруды</a></li>
        <li uk-filter-control="[data-zones='flowerbeds']"><a href="#">Клумбы</a></li>
    </ul>

    <ul class="js-filter uk-child-width-1-1 uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 25; repeat: true">
        <li data-zones="flowerbeds">
            <a href="/fields/flowerbeds/1">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Клумба</div>
                    <h3 class="uk-card-title">Клумба №1</h3>
                    <p>Площадь поля: 164м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/flowerbeds/1" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
            <li data-zones="flowerbeds">
            <a href="/fields/flowerbeds/2">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Клумба</div>
                    <h3 class="uk-card-title">Клумба №2</h3>
                    <p>Площадь поля: 512м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/flowerbeds/2" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-zones="ponds">
            <a href="/ponds/3">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Пруды</div>
                    <h3 class="uk-card-title">Малый пруд №3</h3>
                    <p>Площадь поля: 6.7м2</p>
                    </div>
                        <div class="uk-card-footer">
                            <a href="/ponds/3" class="uk-button uk-button-text">Подробнее</a>
                        </div>
                </div>
            </a>
        </li>
        <li data-zones="ponds">
            <a href="/ponds/4">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Пруды</div>
                    <h3 class="uk-card-title">Большой пруд №4</h3>
                    <p>Площадь поля: 142м2</p>
                    </div>
                        <div class="uk-card-footer">
                            <a href="/ponds/4" class="uk-button uk-button-text">Подробнее</a>
                        </div>
                </div>
            </a>
        </li>
        <li data-zones="buildings">
            <a href="/buildings/5">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Строения</div>
                    <h3 class="uk-card-title">Строение №5 - Бытовка</h3>
                    <p>Площадь поля: 48м2</p>
                    </div>
                        <div class="uk-card-footer">
                            <a href="/buildings/5" class="uk-button uk-button-text">Подробнее</a>
                        </div>
                </div>
            </a>
        </li>
        <li data-zones="buildings">
            <a href="/buildings/6">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Строения</div>
                    <h3 class="uk-card-title">Строение №6 - Свинарник</h3>
                    <p>Площадь поля: 109м2</p>
                    </div>
                        <div class="uk-card-footer">
                            <a href="/buildings/6" class="uk-button uk-button-text">Подробнее</a>
                        </div>
                </div>
            </a>
        </li>
        <li data-zones="buildings">
            <a href="/buildings/7">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Строения</div>
                    <h3 class="uk-card-title">Строение №7 - Теплица</h3>
                    <p>Площадь поля: 37м2</p>
                    </div>
                        <div class="uk-card-footer">
                            <a href="/buildings/7" class="uk-button uk-button-text">Подробнее</a>
                        </div>
                </div>
            </a>
        </li>
        <li data-zones="trades">
            <a href="/trades/8">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Торговые зоны</div>
                    <h3 class="uk-card-title">Зона для продажи №8</h3>
                    <p>Площадь поля: 245м2</p>
                    </div>
                        <div class="uk-card-footer">
                            <a href="/trades/8" class="uk-button uk-button-text">Подробнее</a>
                        </div>
                </div>
            </a>
        </li>
        <li data-zones="trades">
            <a href="/trades/9">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Торговые зоны</div>
                    <h3 class="uk-card-title">Зона продажи камней №9</h3>
                    <p>Площадь поля: 247м2</p>
                    </div>
                        <div class="uk-card-footer">
                            <a href="/trades/9" class="uk-button uk-button-text">Подробнее</a>
                        </div>
                </div>
            </a>
        </li>
        <li data-plants-group="perennials">
            <a href="/fields/perennials/10">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Многолетники</div>
                    <h3 class="uk-card-title">Поле №10</h3>
                    <p>Площадь поля: 101м2</p>
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
                    <div class="uk-card-badge uk-label">Многолетники</div>
                    <h3 class="uk-card-title">Поле №11</h3>
                    <p>Площадь поля: 484м2</p>
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
                    <div class="uk-card-badge uk-label">Многолетники</div>
                    <h3 class="uk-card-title">Поле №12</h3>
                    <p>Площадь поля: 1254м2</p>
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
                    <div class="uk-card-badge uk-label">Многолетники</div>
                    <h3 class="uk-card-title">Поле №13</h3>
                    <p>Площадь поля: 444м2</p>
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
                    <div class="uk-card-badge uk-label">Многолетники</div>
                    <h3 class="uk-card-title">Поле №14</h3>
                    <p>Площадь поля: 487м2</p>
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
                    <div class="uk-card-badge uk-label">Многолетники</div>
                    <h3 class="uk-card-title">Поле №15</h3>
                    <p>Площадь поля: 886м2</p>
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
                    <div class="uk-card-badge uk-label">Многолетники</div>
                    <h3 class="uk-card-title">Поле №16</h3>
                    <p>Площадь поля: 627м2</p>
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
                    <div class="uk-card-badge uk-label">Многолетники</div>
                    <h3 class="uk-card-title">Поле №17</h3>
                    <p>Площадь поля: 161м2</p>
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
                    <div class="uk-card-badge uk-label">Многолетники</div>
                    <h3 class="uk-card-title">Поле №18</h3>
                    <p>Площадь поля: 149м2</p>
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
                    <div class="uk-card-badge uk-label">Злаки</div>
                    <h3 class="uk-card-title">Поле №19</h3>
                    <p>Площадь поля: 126м2</p>
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
                    <div class="uk-card-badge uk-label">Ягоды</div>
                    <h3 class="uk-card-title">Поле №20</h3>
                    <p>Площадь поля: 309м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/berries/20" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="bushes">
            <a href="/fields/bushes/21">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Кустарники</div>
                    <h3 class="uk-card-title">Поле №21</h3>
                    <p>Площадь поля: 217м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/bushes/21" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="bushes">
            <a href="/fields/bushes/22">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Кустарники</div>
                    <h3 class="uk-card-title">Поле №22</h3>
                    <p>Площадь поля: 184м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/bushes/22" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="bushes">
            <a href="/fields/bushes/23">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Кустарники</div>
                    <h3 class="uk-card-title">Поле №23</h3>
                    <p>Площадь поля: 256м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/bushes/23" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="bushes">
            <a href="/fields/bushes/24">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Кустарники</div>
                    <h3 class="uk-card-title">Поле №24</h3>
                    <p>Площадь поля: 151м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/bushes/24" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="bushes">
            <a href="/fields/bushes/25">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Кустарники</div>
                    <h3 class="uk-card-title">Поле №25</h3>
                    <p>Площадь поля: 161м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/bushes/25" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="bushes">
            <a href="/fields/bushes/26">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Кустарники</div>
                    <h3 class="uk-card-title">Поле №26</h3>
                    <p>Площадь поля: 152м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/bushes/26" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="bushes">
            <a href="/fields/bush/27">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Кустарники</div>
                    <h3 class="uk-card-title">Поле №27</h3>
                    <p>Площадь поля: 337м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/bush/27" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="trees">
            <a href="/fields/trees/28">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Деревья</div>
                    <h3 class="uk-card-title">Поле №28</h3>
                    <p>Площадь поля: 487м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/trees/28" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="trees">
            <a href="/fields/trees/29">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Деревья</div>
                    <h3 class="uk-card-title">Поле №29</h3>
                    <p>Площадь поля: 146м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/trees/29" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="trees">
            <a href="/fields/trees/30">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Деревья</div>
                    <h3 class="uk-card-title">Поле №30</h3>
                    <p>Площадь поля: 195м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/trees/30" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="fruits">
            <a href="/fields/fruits/31">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Плодовые</div>
                    <h3 class="uk-card-title">Поле №31</h3>
                    <p>Площадь поля: 93м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/fruits/31" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="trees">
            <a href="/fields/trees/32">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Деревья</div>
                    <h3 class="uk-card-title">Поле №32</h3>
                    <p>Площадь поля: 132м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/trees/32" class="uk-button uk-button-text">Подробнее</a>
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
                    <div class="uk-card-badge uk-label">Корнеплоды</div>
                    <h3 class="uk-card-title">Поле №33</h3>
                    <p>Площадь поля: 360м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/roots/33" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="fruits">
            <a href="/fields/fruits/34">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Плодовые</div>
                    <h3 class="uk-card-title">Поле №34</h3>
                    <p>Площадь поля: 182м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/fruits/34" class="uk-button uk-button-text">Подробнее</a>
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
                    <div class="uk-card-badge uk-label">Свободное</div>
                    <h3 class="uk-card-title">Поле №35</h3>
                    <p>Площадь поля: 770м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/free_fields/35" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
        <li data-plants-group="free_fields">
            <a href="/fields/free_fields/36">
            <div class="uk-card uk-card-primary uk-card-body uk-card-hover uk-inline-clip uk-transition-toggle" tabindex="0">
                <div class="uk-card-media-top">
                    <img class="uk-transition-scale-up uk-transition-opaque" src="~/static/common_map.png" alt="">
                </div>
                <div class="uk-card-body">
                    <div class="uk-card-badge uk-label">Свободное</div>
                    <h3 class="uk-card-title">Поле №36</h3>
                    <p>Площадь поля: 4569м2</p>
                </div>
                <div class="uk-card-footer">
                    <a href="/fields/free_fields/36" class="uk-button uk-button-text">Подробнее</a>
                </div>
            </div>
            </a>
        </li>
    </ul>
    </div>
        </div>
    </li>
    </ul>
</template>