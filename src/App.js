function App() {
  return (
   
      <div className="wraper">
        <header className="">
          <div className="container m-auto sm:w-[1200px] sm:h-[100px] flex items-center justify-between px-5 py-5 sm:px-0 sm:py-0">
            <div className="flex items-center pr-5">
              <div className="sm:hidden flex flex-col gap-2">
                <div className="bg-[#EF7F04] w-10 h-1 rounded-[4px]"></div>
                <div className="bg-[#EF7F04] w-10 h-1 rounded-[4px]"></div>
                <div className="bg-[#EF7F04] w-10 h-1 rounded-[4px]"></div>
              </div>
              <img className="hidden sm:flex" src="./img/Logo.png"></img>
            </div>
            <div className="hidden xl:flex ">
              <ul className="flex gap-4">
                <li>Услуги</li>
                <li>Продукция</li>
                <li>О компании</li>
                <li>Портфолио</li>
                <li>Вопрос-ответ</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-end gap-2">
              <button className="text-white bg-[#EF7F04] flex items-center justify-center gap-3 w-[200px] h-[40px] rounded-[4px] hover:bg-buttonColorHover" >
                <img src="./img/button1.svg"></img>
                  Заявка на замер
              </button>
              <button className="text-white bg-[#EF7F04] flex items-center justify-center gap-3 w-[200px] h-[40px] rounded-[4px] hover:bg-buttonColorHover" >
                <img src="./img/button1.svg"></img>
                  Заявка на замер
              </button>
            </div>
          </div>
        </header>
        <main className="bg-[#F2F2F2] pb-10">
          <div className="bg-hero bg-no-repeat ">
            <div className="container m-auto xl:w-[1200px] w-full">
              <div className="py-10 flex items-center gap-10 justify-center">
                <div>
                  <div className="mt-10 text-center xl:text-left">
                    <h1 className="text-[#EF7F04] text-2xl">Окна Хаус-</h1>
                    <span className="text-white block text-4xl">Профессиональный подход <br/> к остеклению</span>
                  </div>
                  <div className="flex gap-1 text-center xl:text-left xl:gap-20 items-center my-10 flex-wrap justify-center">
                    <div className="flex flex-col items-center xl:items-start">
                      <img width={92} height={80} src="./img/hero1.svg"></img>
                      <span className="text-white block text-sm w-[176px] my-5  ">Современные окна и балконные конструкции по доступным ценам</span>
                    </div>
                    <div className="flex  flex-col items-center xl:items-start">
                      <img width={69} height={79} src="./img/hero2.svg"></img>
                      <span className="text-white block text-sm w-[176px] my-5">Квалифицированный подход к решению задач любой сложности</span>
                    </div>
                    <div className="flex flex-col items-center xl:items-start ">
                      <img width={73} height={83} src="./img/hero3.svg"></img>
                      <span className="text-white block text-sm w-[176px] my-5">Гарантия <br/>высочайшего качества нашей продукции</span>
                    </div>
                  </div>
                </div>
                <form className="hidden xl:flex">
                  <div className="bg-white w-[406px] h-[428px] flex flex-col rounded-[10px]">
                    <div className="w-[322px] h-[400px] flex flex-col m-auto items-center ">
                      <h2 className="flex justify-center py-5 font-bold font-lg">Вызвать замершика на дом</h2>
                      <div className="flex flex-col items-center gap-4">
                        <input className="rounded-[3px] w-[322px] h-[40px] border indent-3" placeholder="Представьтесь, пожалуйста" type="text"></input>
                        <input className="rounded-[3px] w-[322px] h-[40px] border indent-3" placeholder="Номер телефона"type="text"></input>
                        <input className="rounded-[3px] w-[322px] h-[40px] border indent-3" placeholder="E-mail"type="text"></input>
                        <div className="flex items-center gap-2">
                          <input className="w-[45px] h-[45px]" type="checkbox"></input>
                          <p className="text-xs">Согласен на обработку персональных данных в соответствии с политикой конфиденциальности</p>
                        </div>
                      </div>
                      <button className="bg-[#EF7F04] w-[200px] h-[54px] rounded-[3px] text-white mt-[24px] ">Отправить заявку</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="container m-auto xl:w-[1200px]">
              <h2 className="py-10 text-2xl font-bold flex justify-center">Наши услуги</h2>
              {/*Здесь везде делал карточки ну можно было сделать компонент и передавать внего данные */}
              <div className="flex flex-wrap justify-center gap-4  sm:gap-2 items-center">
                <div className="flex flex-col  sm:w-[595px] sm:h-[268px] bg-cards bg-no-repeat rounded-[3px] hover:shadow-xl">
                  <div className="m-12 gap-4 flex flex-col">
                    <div className="flex items-center gap-4">
                      <img src="./img/cards.svg"></img>
                      <h2 className="font-bold text-2xl w-[250px]">Установка пластиковых окон</h2>
                    </div>
                    <span className="block sm:w-[350px] ">Устанавливаем пластиковые окна Rehau от проверенного производителя с гарантией качества</span>
                  </div>
                </div>
                <div className="flex flex-col sm:w-[595px] sm:h-[268px] bg-cards2 bg-no-repeat rounded-[3px] hover:shadow-xl">
                  <div className="m-12 gap-4 flex flex-col">
                    <div className="flex items-center gap-4">
                      <img src="./img/cards1.svg"></img>
                      <h2 className="font-bold text-2xl w-[250px]">Остекление балконов и лоджий</h2>
                    </div>
                    <span className="block  sm:w-[300px]">Занимаемся остеклением и отделкой балконов и лоджий. Теплое и холодное остекление, изготовление выносов и крыш. Беремся за сложные объекты</span>
                  </div>
                </div>
                <div className="flex flex-col  sm:w-[595px] sm:h-[268px] bg-cards3 bg-no-repeat rounded-[3px] hover:shadow-xl">
                  <div className="m-12 gap-4 flex flex-col">
                    <div className="flex items-center gap-4">
                      <img src="./img/cards2.svg"></img>
                      <h2 className="font-bold text-2xl w-[250px]">Остекление коттеджей и дач</h2>
                    </div>
                    <span className="block sm:w-[350px]">Остекление и отделка под ключ:от коттеджей и дач до террас и беседок. Выделяем личного технолога под каждый объект</span>
                  </div>
                </div>
                <div className="flex flex-col sm:w-[595px] sm:h-[268px] bg-cards4 bg-no-repeat rounded-[3px] hover:shadow-xl ">
                  <div className="mx-12 my-4 gap-4 flex flex-col">
                    <div className="flex items-center gap-4">
                      <img src="./img/cards4.svg"></img>
                      <h2 className="font-bold text-2xl w-[250px]">Остекление корпоративных объектов</h2>
                    </div>
                    <span className="sm:w-[350px]">Реализуем сложные проекты по остеклению торговых центров, ресторанов, производственных помещений <br/> и офисов</span>
                  </div>
                </div>
              </div>
          </div>
          <div className="container  m-auto sm:w-[1200px] ">
              <h2 className="py-10 text-2xl font-bold flex justify-center" >О компании</h2>
              <nav className="flex justify-center flex-wrap">
                <ul className="flex flex-wrap justify-center gap-3 sm:gap-10 ">
                  <li>Описание </li>
                  <li>Как мы работаем</li>
                  <li>Отзывы</li>
                  <li>Сертификаты</li>
                </ul> 
              </nav>
              <div className=" bg-white rounded-[3px] py-10  lg:bg-compan lg:bg-no-repeat lg:bg-right lg:py-0 my-10 ">
                <div className="flex flex-col items-center gap-7  px-5 text-center lg:text-left lg:flex lg:items-start lg:p-12 lg:gap-14">
                  <img  className="w-[100px] h-[70px] lg:w-[198px] lg:h-[140px]" src="./img/Logo.png"></img>
                  <span className="block font-base sm:w-[304px] lg:w[304px] xl:ml-[200px] ">Мы помогаем клиентам подбирать решения, учитывая пожежелания к характеристикам окна и его стоимости. Окно - это объект, которым Вы будете пользоваться много лет, поэтому для нас очень важно, чтобы Вы сделали правильный выбор.</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 mt-20">
                {/*Здесь вручную везде поставил margin-top ну можно было сделать компонент и передавать внего данные */}
                <div className="flex gap-4">
                  <img src="./img/1.svg"></img>
                  <div className="flex flex-col">
                    <h2 className="font-bold uppercase">Профессионализм </h2>
                    <span className="block w-[240px] text-sm">Бригада профессиональных мастеров по монтажу и обслуживанию</span>
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <img width={97} height={65} src="./img/2.svg"></img>
                  <div className="flex flex-col pt-3 gap-1">
                    <h2 className="font-bold uppercase">Ценообразование</h2>
                    <span className="block w-[240px] text-sm">Лучшие цены на рынке пластиковых окон</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img src="./img/3.svg"></img>
                  <div className="flex flex-col pt-3 gap-1">
                    <h2 className="font-bold uppercase">Мобильность</h2>
                    <span className="block w-[240px] text-sm">Заключение договора на дому</span>
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <img src="./img/4.svg"></img>
                  <div className="flex flex-col pt-3 gap-1">
                    <h2 className="font-bold uppercase">Лояльность </h2>
                    <span className="block w-[240px] text-sm">99% клиентов рекомендуют нас своим друзьям</span>
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <img src="./img/5.svg"></img>
                  <div className="flex flex-col pt-3 gap-1">
                    <h2 className="font-bold uppercase">Скорость</h2>
                    <span className="block w-[240px] text-sm">Короткие сроки установки изделий</span>
                  </div>
                </div>
                <div className="flex gap-4 "> 
                  <img src="./img/6.svg"></img>
                  <div className="flex flex-col pt-3 gap-1">
                    <h2 className="font-bold uppercase">Служба качества </h2>
                    <span className="block w-[240px] text-sm"> Безупречное качество и контроль изделий ПВХ</span>
                  </div>
                </div>
                <button className="bg-[#EF7F04] text-white w-[312px] h-[54px] rounded-[3px] font-bold flex items-center justify-center gap-3 my-10"><img src="./img/button1.svg"></img>Оформить заявку на замер</button>
              </div> 
          </div>
          <div className="container m-auto sm:w-[1200px] bg-white rounded-[3px] py-10">
            <h2 className="font-bold text-2xl flex flex-col items-center justify-center py-10">Портфолио</h2>
            <div>
              <ul className="flex gap-10 items-center justify-center flex-wrap">
                <li><img src="./img/1-1.png"></img></li>
                <li><img src="./img/1-2.png"></img></li>
                <li><img src="./img/1-3.png"></img></li>
                <li><img src="./img/1-4.png"></img></li>
              </ul>
            </div>
          </div>
          <div className="conatiner m-auto xl:w-[1200px] bg-[#EF7F04] rounded-[3px] flex flex-col items-center py-16">
            <h2 className="text-white text-2xl font-bold mb-10">Вопрос-ответ</h2>
            <div className="  flex flex-col gap-4">
              <details className="bg-white m-auto lg:w-[1000px] w-[300px] sm:w-[540px]  py-5 px-4 rounded-[3px] flex items ">
              <summary className="font-bold hover:text-[#EF7F04] cursor-pointer">Сколько по времени занимает изготовление пластиковых окон?</summary>
                  <div className="flex flex-col gap-4">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
              </details>
              <details className="bg-white m-auto lg:w-[1000px] w-[300px] sm:w-[540px]  py-5 px-4 rounded-[3px] flex items ">
              <summary className="font-bold hover:text-[#EF7F04] cursor-pointer ">Какие существуют способы оплаты?</summary>
                  <div className="flex flex-col gap-4">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
              </details>
              <details className="bg-white m-auto lg:w-[1000px] w-[300px] sm:w-[540px]  py-5 px-4 rounded-[3px] flex items ">
              <summary className="font-bold hover:text-[#EF7F04] cursor-pointer">Где я могу посмотреть образцы?</summary>
                  <div className="flex flex-col gap-4">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
              </details>
              <details className="bg-white m-auto lg:w-[1000px] w-[300px] sm:w-[540px]  py-5 px-4 rounded-[3px] flex items ">
              <summary className="font-bold hover:text-[#EF7F04] cursor-pointer">Зачем вызывать замерщика? Я могу дать размеры</summary>
                  <div className="flex flex-col gap-4">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
              </details>
              <details className="bg-white m-auto lg:w-[1000px] w-[300px] sm:w-[540px]  py-5 px-4 rounded-[3px] flex items ">
              <summary className="font-bold hover:text-[#EF7F04] cursor-pointer">Хотелось бы отделать балкон. Поможете?</summary>
                  <div className="flex flex-col gap-4">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
              </details>
              <details className="bg-white m-auto lg:w-[1000px]  w-[300px] sm:w-[540px]  py-5 px-4 rounded-[3px] flex items ">
              <summary className="font-bold hover:text-[#EF7F04] cursor-pointer">Мне надо нанимать грузчиков для подъема?</summary>
                  <div className="flex flex-col gap-4">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
              </details>
            </div>
          </div>
        </main>
        <footer className="bg-[#2F2F51]">
          <div className="container m-auto flex items-center justify-center text-white flex-wrap  text-center lg:w-[1200px] lg:justify-between sm:justify-center sm:text-start">
            <div className="flex items-center gap-6 my-14">
              <img src="./img/Logofooter.svg" alt="logo"></img>
              <p>© ООО “Окна Хаус”, 2011 - 2022</p>
            </div>
            <div className="flex items-center gap-10 pb-10 sm:pb-0">
              <p className="font-sm">Политика кофиденциальности</p>
              <p className="font-sm">Пользовательское соглашение</p>
            </div>
          </div>
        </footer>
      </div>
    
  
  );
}

export default App;
