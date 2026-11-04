"use strict";
const translations={
ru:{headline:"Твои люди. Твой вайб.",subheadline:"Знакомься, общайся, находи свою компанию. Весь мир — на одной волне.",explore:"Исследовать комнаты",signal:"Общение без границ",communities:"СООБЩЕСТВА",find:"Найди свою компанию",findSubtitle:"Живые темы. Настоящие интересы. Ты всегда можешь присоединиться.",all:"Все комнаты",newRoom:"Создать комнату",home:"Обзор",rooms:"Комнаты",profile:"Профиль",footer:"Разработано Brill Team Project",whyOne:"Знакомься",whyOneDesc:"Находи людей, с которыми есть о чём поговорить.",whyTwo:"Общайся",whyTwoDesc:"Присоединяйся к комнатам или создавай свои.",whyThree:"Оставайся",whyThreeDesc:"Собирай собственное сообщество по интересам.",localOnly:"Это локальный профиль для проверки дизайна. Он не создаёт настоящую учётную запись.",editProfile:"Настроить профиль",adult:"Платформа для взрослых",languages:"Три языка интерфейса",demo:"ДЕМО",offline:"Локальное сохранение",back:"К комнатам",cancel:"Отмена",search:"Поиск комнат",allLang:"Все языки",preview:"ИНТЕРАКТИВНАЯ ДЕМОВЕРСИЯ",previewDescription:"Изменения хранятся только в этом браузере. Это не общий чат.",guest:"Гость",roomTitle:"Новая комната",roomDesc:"Добавь тему, чтобы другие могли найти комнату.",title:"Название комнаты",description:"Описание",roomLang:"Язык",save:"Создать комнату",profileTitle:"Настроить профиль",profileDesc:"Измени имя для локального демонстрационного профиля.",name:"Отображаемое имя",handle:"Никнейм",profileSave:"Сохранить",reportTitle:"Отправить жалобу",reportDesc:"Жалоба будет сохранена только в этом браузере. Реальной модерации здесь нет.",reason:"Причина жалобы",reportSave:"Сохранить жалобу",message:"Написать сообщение…",messages:"сообщ.",empty:"Пока сообщений нет. Начни разговор.",emptyTitle:"Настоящие разговоры начинаются здесь.",notification:"Сохранено в этом браузере",invalid:"Проверь заполненные поля.",noRooms:"Ничего не найдено",report:"Пожаловаться"},
en:{headline:"Your people. Your vibe.",subheadline:"Meet new friends, join conversations and find your crowd. One world, one wavelength.",explore:"Explore rooms",signal:"Conversation without borders",communities:"COMMUNITIES",find:"Find your people",findSubtitle:"Real interests, shared conversations. Join in and be yourself.",all:"All rooms",newRoom:"Create room",home:"Discover",rooms:"Rooms",profile:"Profile",footer:"Developed by Brill Team Project",whyOne:"Meet",whyOneDesc:"Find people you have something in common with.",whyTwo:"Talk",whyTwoDesc:"Join conversations or create your own rooms.",whyThree:"Belong",whyThreeDesc:"Build communities around your interests.",localOnly:"This is a local demo profile, not a real account.",editProfile:"Edit demo profile",adult:"An adults-only platform",languages:"Three interface languages",demo:"DEMO",offline:"Saved locally",back:"Back to rooms",cancel:"Cancel",search:"Search rooms",allLang:"All languages",preview:"INTERACTIVE PREVIEW",previewDescription:"Changes are only saved in this browser. This is not a shared chat.",guest:"Guest",roomTitle:"New room",roomDesc:"Set a topic to help people find your room.",title:"Room title",description:"Description",roomLang:"Language",save:"Create room",profileTitle:"Edit demo profile",profileDesc:"Choose your local preview identity.",name:"Display name",handle:"Username",profileSave:"Save profile",reportTitle:"Report room",reportDesc:"This report is only saved in this browser; no real moderation happens here.",reason:"Reason",reportSave:"Save report",message:"Write a message…",messages:"msgs",empty:"No messages yet. Start the conversation.",emptyTitle:"Real connections start with a hello.",notification:"Saved in this browser",invalid:"Please check your inputs.",noRooms:"No rooms found",report:"Report"},
he:{headline:"האנשים שלך. הווייב שלך.",subheadline:"להכיר חברים, להצטרף לשיחות ולמצוא את המקום שלך בעולם.",explore:"לגלות חדרים",signal:"שיחות ללא גבולות",communities:"קהילות",find:"למצוא את האנשים שלך",findSubtitle:"תחומי עניין משותפים ושיחות אמיתיות. אפשר להצטרף.",all:"כל החדרים",newRoom:"יצירת חדר",home:"סקירה",rooms:"חדרים",profile:"פרופיל",footer:"פותח על ידי Brill Team Project",whyOne:"להכיר",whyOneDesc:"למצוא אנשים עם תחומי עניין משותפים.",whyTwo:"לדבר",whyTwoDesc:"להצטרף לחדרים או ליצור חדר חדש.",whyThree:"להשתייך",whyThreeDesc:"לבנות קהילה סביב תחומי עניין.",localOnly:"זהו פרופיל להדגמה מקומית בלבד, לא חשבון אמיתי.",editProfile:"עריכת פרופיל",adult:"פלטפורמה למבוגרים בלבד",languages:"שלוש שפות ממשק",demo:"הדגמה",offline:"שמירה מקומית",back:"בחזרה לחדרים",cancel:"ביטול",search:"חיפוש חדרים",allLang:"כל השפות",preview:"הדגמה אינטראקטיבית",previewDescription:"השינויים נשמרים בדפדפן הזה בלבד. זה אינו צ׳אט משותף.",guest:"אורח",roomTitle:"חדר חדש",roomDesc:"בחרו נושא כדי שאחרים יוכלו למצוא את החדר.",title:"שם החדר",description:"תיאור",roomLang:"שפה",save:"יצירת חדר",profileTitle:"עריכת פרופיל",profileDesc:"בחרו שם להצגה בהדגמה המקומית.",name:"שם לתצוגה",handle:"שם משתמש",profileSave:"שמירה",reportTitle:"דיווח על חדר",reportDesc:"הדיווח נשמר רק בדפדפן זה, ללא מערכת ניהול אמיתית.",reason:"סיבת הדיווח",reportSave:"שמירת הדיווח",message:"כתיבת הודעה…",messages:"הודעות",empty:"עדיין אין הודעות. אפשר להתחיל שיחה.",emptyTitle:"קשרים אמיתיים מתחילים בשיחה.",notification:"נשמר בדפדפן זה",invalid:"יש לבדוק את הפרטים.",noRooms:"לא נמצאו חדרים",report:"דיווח"}
};
const localeCatalog=window.BRILL_I18N||{packs:{},codes:["en","ru","he"]};
Object.assign(translations,localeCatalog.packs);
const supportedLocales=new Set(Object.keys(translations));
const localeCodes=[...new Set([...localeCatalog.codes,...supportedLocales])];
const rtlCodes=new Set(["ar","he","fa","ur","yi","ps","sd","dv","ug","ku","nqo"]);
const LANGUAGE_KEY="brill-vibe-interface-language";
function languageName(code){try{return new Intl.DisplayNames([code],{type:"language"}).of(code)||code}catch{return code}}
function englishLanguageName(code){try{return new Intl.DisplayNames(["en"],{type:"language"}).of(code)||code}catch{return code}}
function isTranslated(code){return supportedLocales.has(code)||supportedLocales.has(code.split("-")[0])}
function langStrings(){const base=lang.split("-")[0];return {
  ru:{title:"Выберите язык",placeholder:"Поиск по названию или коду",ready:"Полный перевод интерфейса",pending:"Пока используется английский интерфейс; перевод готовится",translated:"Переведено",fallback:"Английский вариант",count:"языковых пакетов готово"},
  en:{title:"Choose your language",placeholder:"Search language name or code",ready:"Full interface translation",pending:"English interface is shown until this translation is available",translated:"Translated",fallback:"English fallback",count:"interface translations ready"},
  he:{title:"בחירת שפה",placeholder:"חיפוש שפה או קוד",ready:"תרגום ממשק מלא",pending:"הממשק יוצג באנגלית עד להשלמת התרגום",translated:"מתורגם",fallback:"אנגלית בינתיים",count:"שפות ממשק מוכנות"},
  es:{title:"Elige tu idioma",placeholder:"Busca idioma o código",ready:"Interfaz totalmente traducida",pending:"Por ahora se muestra la interfaz en inglés",translated:"Traducido",fallback:"Inglés temporal",count:"traducciones disponibles"},
  fr:{title:"Choisir la langue",placeholder:"Rechercher une langue",ready:"Interface entièrement traduite",pending:"L’interface s’affiche en anglais en attendant la traduction",translated:"Traduit",fallback:"Anglais provisoire",count:"traductions disponibles"},
  de:{title:"Sprache wählen",placeholder:"Sprache oder Code suchen",ready:"Oberfläche vollständig übersetzt",pending:"Bis zur Übersetzung wird die englische Oberfläche angezeigt",translated:"Übersetzt",fallback:"Englisch als Ersatz",count:"Übersetzungen verfügbar"},
  pt:{title:"Escolher idioma",placeholder:"Pesquisar idioma ou código",ready:"Interface totalmente traduzida",pending:"Até haver tradução, a interface aparece em inglês",translated:"Traduzido",fallback:"Inglês temporário",count:"traduções disponíveis"},
  ar:{title:"اختر لغتك",placeholder:"ابحث عن اللغة أو الرمز",ready:"واجهة مترجمة بالكامل",pending:"ستظهر الواجهة بالإنجليزية حتى يصبح الترجمة متاحًا",translated:"مترجم",fallback:"الإنجليزية مؤقتًا",count:"ترجمات جاهزة"},
  hi:{title:"अपनी भाषा चुनें",placeholder:"भाषा या कोड खोजें",ready:"इंटरफ़ेस का पूरा अनुवाद",pending:"अनुवाद तैयार होने तक अंग्रेज़ी दिखाई देगी",translated:"अनुवादित",fallback:"अंग्रेज़ी विकल्प",count:"अनुवाद उपलब्ध"},
  zh:{title:"选择语言",placeholder:"搜索语言或代码",ready:"界面已完整翻译",pending:"该语言尚未翻译，暂时显示英文界面",translated:"已翻译",fallback:"暂用英语",count:"种界面语言已完成"},
  ja:{title:"言語を選択",placeholder:"言語名またはコードで検索",ready:"翻訳済みの画面",pending:"翻訳が完成するまで英語で表示します",translated:"翻訳済み",fallback:"英語で表示",count:"言語の翻訳が完成"},
  tr:{title:"Dilini seç",placeholder:"Dil adı veya kod ara",ready:"Arayüz tamamen çevrildi",pending:"Çeviri hazır olana kadar İngilizce gösterilir",translated:"Çevrildi",fallback:"İngilizce gösterilir",count:"arayüz çevirisi hazır"},
  uk:{title:"Оберіть мову",placeholder:"Пошук мови або коду",ready:"Повний переклад інтерфейсу",pending:"Поки що інтерфейс відображається англійською",translated:"Перекладено",fallback:"Англійська тимчасово",count:"перекладів готово"}
}[lang]||({ru:null,en:null}[base]||null)||({ru:translations.ru,en:translations.en}[base]&&{title:base==="ru"?"Выберите язык":"Choose your language",placeholder:base==="ru"?"Поиск языков":"Search languages",ready:"Full interface translation",pending:"English is displayed until the translation is available",translated:"Translated",fallback:"English fallback",count:"interface translations ready"})||{title:"Choose your language",placeholder:"Search languages",ready:"Full interface translation",pending:"English interface is displayed until translation is available",translated:"Translated",fallback:"English fallback",count:"interface translations ready"});
}
function suggestedLocale(){
  try{const selected=localStorage.getItem(LANGUAGE_KEY);if(selected&&localeCodes.includes(selected))return selected;}catch{}
  const browserLanguages=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"en"]);
  for(const requested of browserLanguages){const code=String(requested).replace("_","-");if(localeCodes.includes(code)&&isTranslated(code))return code;const base=code.split("-")[0];if(isTranslated(base))return base;}
  for(const requested of browserLanguages){const code=String(requested).replace("_","-");if(localeCodes.includes(code))return code;const base=code.split("-")[0];if(localeCodes.includes(base))return base;}
  return "en";
}
function availableLanguages(){
  const collator=new Intl.Collator(lang,{sensitivity:"base"});
  return [...localeCodes].sort((a,b)=>Number(isTranslated(b))-Number(isTranslated(a))||collator.compare(languageName(a),languageName(b)));
}
function renderLanguageChoices(){
  const q=$("#languageSearch").value.trim().toLocaleLowerCase();
  const list=$("#languageList");const frag=document.createDocumentFragment();let total=0;
  for(const code of availableLanguages()){
    const nativeName=languageName(code), englishName=englishLanguageName(code);
    if(!([nativeName,englishName,code].some(v=>v.toLocaleLowerCase().includes(q))))continue;
    const option=document.createElement("button");option.type="button";option.className="languageOption"+(code===lang?" selected":"");option.setAttribute("aria-current",code===lang?"true":"false");option.setAttribute("lang",code);
    const names=document.createElement("span");names.className="languageNames";const main=document.createElement("strong");main.textContent=nativeName;const sub=document.createElement("small");sub.textContent=englishName===nativeName?code:englishName+" · "+code;names.append(main,sub);
    const state=document.createElement("small");state.className="languageState"+(isTranslated(code)?" available":"");state.textContent=isTranslated(code)?langStrings().translated:langStrings().fallback;
    option.append(names,state);option.addEventListener("click",()=>{applyLang(code);$("#languageDialog").close()});frag.append(option);total++;
  }
  list.replaceChildren(frag);$("#languageResults").textContent=String(total);
}
const starter=[
{id:"lounge",title:"The Lounge",description:"A relaxed place to meet people from around the world.",lang:"en",category:"social",symbol:"◉",color:"red"},
{id:"ru-club",title:"Русский клуб",description:"Общаемся, знакомимся и обсуждаем всё на свете.",lang:"ru",category:"social",symbol:"◈",color:"gold"},
{id:"il-club",title:"חברים מכל העולם",description:"מקום להכיר אנשים ולשוחח על כל נושא.",lang:"he",category:"social",symbol:"✺",color:"violet"},
{id:"gaming",title:"Gaming Together",description:"Find teammates, share your wins and talk games.",lang:"en",category:"gaming",symbol:"⌘",color:"violet"},
{id:"music",title:"Music After Dark",description:"Discover music, artists and late-night conversations.",lang:"en",category:"music",symbol:"♫",color:"pink"},
{id:"weekend",title:"Weekend Plans",description:"New places, new plans, new conversations.",lang:"en",category:"social",symbol:"✧",color:"gold"}
];
const KEY="brill-vibe-pages-preview-v1";
function load(){try{const stored=JSON.parse(localStorage.getItem(KEY)||"{}");return {rooms:Array.isArray(stored.rooms)?stored.rooms:[],messages:stored.messages&&typeof stored.messages==="object"?stored.messages:{},profile:stored.profile&&typeof stored.profile==="object"?stored.profile:{name:"Vibe Guest",handle:"preview"},reports:Array.isArray(stored.reports)?stored.reports:[]}}catch{return {rooms:[],messages:{},profile:{name:"Vibe Guest",handle:"preview"},reports:[]}}}
let data=load(),lang="ru",currentTab="discover",currentRoom=null,modalMode=null;
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));
const W=()=>translations[lang]||translations[lang.split('-')[0]]||translations.en;const rooms=()=>[...starter,...data.rooms];
function save(){try{localStorage.setItem(KEY,JSON.stringify(data));return true}catch{toast("Browser storage unavailable");return false}}
function toast(message){const el=$("#toast");el.textContent=message;el.hidden=false;clearTimeout(toast.timer);toast.timer=setTimeout(()=>{el.hidden=true},3300)}
function safeText(str){return String(str||"")}
function switchTab(tab){currentTab=tab;currentRoom=null;$$(".view").forEach(v=>v.classList.remove("active"));$("#view-"+tab).classList.add("active");$$("[data-tab]").forEach(el=>el.classList.toggle("on",el.dataset.tab===tab));if(tab==="rooms")renderRooms();if(tab==="profile")renderProfile();window.scrollTo(0,0)}
function applyLang(next){
lang=localeCodes.includes(next)?next:"en";
try{localStorage.setItem(LANGUAGE_KEY,lang)}catch{}
document.documentElement.lang=lang;document.documentElement.dir=rtlCodes.has(lang.split("-")[0])?"rtl":"ltr";
$("[data-i]").forEach(e=>{if(W()[e.dataset.i])e.textContent=W()[e.dataset.i]});
$("#demoIndicator").textContent=W().preview;$("#demoDescription").textContent=W().previewDescription;
$("#profileButton").childNodes[0].textContent=(data.profile.name||W().guest)+" ";
$("#roomSearch").placeholder=W().search;$("#noRooms").textContent=W().noRooms;$("#chatDraft").placeholder=W().message;
$("#languageFilter").options[0].textContent=W().allLang;
$("#langCurrentLabel").textContent=languageName(lang);$("#languagePickerButton").setAttribute("aria-label",langStrings().title);
$("#languageTitle").textContent=langStrings().title;$("#languageSearch").placeholder=langStrings().placeholder;
$("#languageHelp").textContent=isTranslated(lang)?langStrings().ready:langStrings().pending;
$("#localeCount").textContent=supportedLocales.size+" "+langStrings().count;
$("#languageFallbackNotice").hidden=isTranslated(lang);
$("#languageFallbackNotice").textContent=isTranslated(lang)?"":langStrings().pending;
const languageProfileLabel=$("#availableLangLabel");if(languageProfileLabel)languageProfileLabel.textContent=supportedLocales.size+" "+langStrings().count;
renderRooms();renderProfile();if(currentRoom)openRoom(currentRoom);
}
function card(room){const el=document.createElement("button");el.className="roomCard";el.type="button";const count=(data.messages[room.id]||[]).length;const head=document.createElement("div");head.className="roomCardHead";const icon=document.createElement("span");icon.className="roomIcon "+room.color;icon.textContent=room.symbol||"◉";const tag=document.createElement("span");tag.className="tag";tag.textContent=room.lang.toUpperCase();head.append(icon,tag);const title=document.createElement("h3");title.textContent=room.title;const desc=document.createElement("p");desc.textContent=room.description;const foot=document.createElement("div");foot.className="roomBottom";const n=document.createElement("span");n.textContent="◫ "+count+" "+W().messages;const go=document.createElement("span");go.className="go";go.textContent="↗";foot.append(n,go);el.append(head,title,desc,foot);el.addEventListener("click",()=>openRoom(room.id));return el}
function renderRooms(){const query=$("#roomSearch").value.trim().toLocaleLowerCase();const language=$("#languageFilter").value;const filtered=rooms().filter(r=>(language==="all"||language===r.lang)&&(!query||(r.title+" "+r.description+" "+r.category).toLocaleLowerCase().includes(query)));const grid=$("#roomCards");grid.replaceChildren(...filtered.map(card));$("#noRooms").hidden=filtered.length!==0;$("#featuredRooms").replaceChildren(...rooms().slice(0,3).map(card))}
function renderProfile(){const name=safeText(data.profile.name||"Vibe Guest");$("#profileTitle").textContent=name;$("#profileHandle").textContent="@"+safeText(data.profile.handle||"preview");$("#profileAvatar").textContent=name.slice(0,1).toUpperCase();$("#profileButton").childNodes[0].textContent=name+" "}
function openRoom(id){const room=rooms().find(r=>r.id===id);if(!room){switchTab("rooms");return}currentRoom=id;currentTab="chat";$$(".view").forEach(v=>v.classList.remove("active"));$("#view-chat").classList.add("active");$$("[data-tab]").forEach(b=>b.classList.remove("on"));$("#chatName").textContent=room.title;$("#chatDescription").textContent=room.description;$("#chatBadge").textContent=room.symbol;$("#chatBadge").className="roomIcon "+room.color;renderMessages();window.scrollTo(0,0)}
function renderMessages(){const root=$("#chatBody");root.replaceChildren();const messages=data.messages[currentRoom]||[];if(!messages.length){const empty=document.createElement("div");empty.className="emptyChat";const icon=document.createElement("span");icon.textContent="✳";const title=document.createElement("h3");title.textContent=W().emptyTitle;const p=document.createElement("p");p.textContent=W().empty;empty.append(icon,title,p);root.append(empty);return}for(const m of messages){const row=document.createElement("div");row.className="chatMessage";const avatar=document.createElement("div");avatar.className="messageAvatar";avatar.textContent=safeText(m.name).slice(0,1).toUpperCase();const wrapper=document.createElement("div");const meta=document.createElement("div");meta.className="messageMeta";const name=document.createElement("strong");name.textContent=m.name;const time=document.createElement("time");time.textContent=new Date(m.time).toLocaleTimeString(lang,{hour:"2-digit",minute:"2-digit"});const body=document.createElement("p");body.className="messageBody";body.textContent=m.body;meta.append(name,time);wrapper.append(meta,body);row.append(avatar,wrapper);root.append(row)}}
function openDialog(mode){modalMode=mode;$("#formError").textContent="";const fields=$("#modalFields");fields.replaceChildren();let title="",desc="",btn="";function field(label,type,name,value,required=true){const wrap=document.createElement("label");wrap.textContent=label;let control;if(type==="textarea"){control=document.createElement("textarea");control.rows=3}else if(type==="select"){control=document.createElement("select");for(const [val,text] of availableLanguages().map(c=>[c,languageName(c)])){let opt=document.createElement("option");opt.value=val;opt.textContent=text;control.append(opt)}}else{control=document.createElement("input");control.type="text"}control.name=name;control.required=required;control.value=value||"";if(name==="title")control.maxLength=60;if(name==="description")control.maxLength=240;if(name==="reason")control.maxLength=500;if(name==="name")control.maxLength=50;if(name==="handle")control.maxLength=24;wrap.append(control);fields.append(wrap)}
if(mode==="room"){title=W().roomTitle;desc=W().roomDesc;btn=W().save;field(W().title,"text","title","");field(W().description,"textarea","description","");field(W().roomLang,"select","lang",lang)}
if(mode==="profile"){title=W().profileTitle;desc=W().profileDesc;btn=W().profileSave;field(W().name,"text","name",data.profile.name);field(W().handle,"text","handle",data.profile.handle)}
if(mode==="report"){title=W().reportTitle;desc=W().reportDesc;btn=W().reportSave;field(W().reason,"textarea","reason","")}
$("#modalTitle").textContent=title;$("#modalHint").textContent=desc;$("#modalConfirm").textContent=btn+" ↗";$("#modal").showModal()}
function submitDialog(e){e.preventDefault();const raw=Object.fromEntries(new FormData($("#modalForm")).entries());const get=n=>String(raw[n]||"").trim();const error=$("#formError");error.textContent="";
if(modalMode==="room"){if(get("title").length<3||get("description").length<8){error.textContent=W().invalid;return}const id="local-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7);data.rooms.push({id,title:get("title").slice(0,60),description:get("description").slice(0,240),lang:get("lang"),category:"community",symbol:"✧",color:"gold"});save();$("#modal").close();renderRooms();openRoom(id)}
else if(modalMode==="profile"){if(get("name").length<2||! /^[a-zA-Z0-9_]{3,24}$/.test(get("handle"))){error.textContent=W().invalid;return}data.profile={name:get("name").slice(0,50),handle:get("handle")};save();$("#modal").close();renderProfile();toast(W().notification)}
else if(modalMode==="report"){if(get("reason").length<8){error.textContent=W().invalid;return}data.reports.push({roomId:currentRoom,reason:get("reason"),time:Date.now()});save();$("#modal").close();toast(W().notification)}}
$$("[data-tab]").forEach(b=>b.addEventListener("click",()=>switchTab(b.dataset.tab)));
$$("[data-lang]").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));
$("#logoBtn").addEventListener("click",()=>switchTab("discover"));
$("#profileButton").addEventListener("click",()=>switchTab("profile"));
$("#roomSearch").addEventListener("input",renderRooms);
$("#languageFilter").addEventListener("change",renderRooms);
$("#newRoom").addEventListener("click",()=>openDialog("room"));
$("#editProfile").addEventListener("click",()=>openDialog("profile"));
$("#reportRoom").addEventListener("click",()=>openDialog("report"));
$("#backToRooms").addEventListener("click",()=>switchTab("rooms"));
$("#chatComposer").addEventListener("submit",e=>{e.preventDefault();const box=$("#chatDraft"),body=box.value.trim();if(!body||!currentRoom)return;data.messages[currentRoom]??=[];data.messages[currentRoom].push({id:Date.now()+"",name:data.profile.name||"Vibe Guest",body:body.slice(0,1500),time:Date.now()});if(data.messages[currentRoom].length>100)data.messages[currentRoom]=data.messages[currentRoom].slice(-100);save();box.value="";renderMessages()});
$("#modalClose").addEventListener("click",()=>$("#modal").close());
$("#modalCancel").addEventListener("click",()=>$("#modal").close());
$("#modalForm").addEventListener("submit",submitDialog);
$("#languagePickerButton").addEventListener("click",()=>{$("#languageSearch").value="";renderLanguageChoices();$("#languageDialog").showModal();$("#languageSearch").focus()});
$("#languageDialogClose").addEventListener("click",()=>$("#languageDialog").close());
$("#languageSearch").addEventListener("input",renderLanguageChoices);
$("#languageDialog").addEventListener("close",()=>$("#languagePickerButton").focus());
const roomLanguageFilter=$("#languageFilter");
for(const code of availableLanguages()){const option=document.createElement("option");option.value=code;option.textContent=languageName(code);roomLanguageFilter.append(option)}
applyLang(suggestedLocale());switchTab("discover");
