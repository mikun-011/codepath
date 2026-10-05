// ===== QUIZ DATA =====
const quizData = {
  HTML: [
    { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language","High Text Machine Language","Hyperlinks and Text Markup Language","Home Tool Markup Language"], ans: 0, exp: "HTML stands for HyperText Markup Language — the standard language for creating web pages." },
    { q: "Which tag is used for the largest heading?", opts: ["&lt;h6&gt;","&lt;heading&gt;","&lt;h1&gt;","&lt;head&gt;"], ans: 2, exp: "<code>&lt;h1&gt;</code> defines the most important (largest) heading. <code>&lt;h6&gt;</code> is the smallest." },
    { q: "What is the correct HTML for creating a hyperlink?", opts: ["&lt;a url='...'&gt;Link&lt;/a&gt;","&lt;a href='...'&gt;Link&lt;/a&gt;","&lt;link href='...'&gt;","&lt;a&gt;Link&lt;/a&gt;"], ans: 1, exp: "The <code>&lt;a&gt;</code> element uses the href attribute to specify the URL." },
    { q: "Which HTML element is used to define important text?", opts: ["&lt;b&gt;","&lt;i&gt;","&lt;strong&gt;","&lt;em&gt;"], ans: 2, exp: "<code>&lt;strong&gt;</code> marks text as important (semantic). <code>&lt;b&gt;</code> is presentational with no semantic meaning." },
    { q: "What attribute makes an input field required?", opts: ["validate","mandatory","required","must"], ans: 2, exp: "The 'required' attribute prevents form submission if the field is empty." },
    { q: "Which tag creates an unordered list?", opts: ["&lt;ol&gt;","&lt;li&gt;","&lt;ul&gt;","&lt;list&gt;"], ans: 2, exp: "<code>&lt;ul&gt;</code> creates an unordered (bulleted) list. <code>&lt;ol&gt;</code> creates an ordered (numbered) list." },
    { q: "What does the <code>alt</code> attribute on an image do?", opts: ["Sets image title","Provides fallback text","Hides the image","Sets image size"], ans: 1, exp: "The alt attribute provides descriptive text shown when the image fails to load, and read by screen readers." },
    { q: "Which element represents the main navigation?", opts: ["&lt;menu&gt;","&lt;links&gt;","&lt;navbar&gt;","&lt;nav&gt;"], ans: 3, exp: "<code>&lt;nav&gt;</code> is the semantic HTML5 element for navigation menus." },
    { q: "What is the purpose of the <code>&lt;meta charset&gt;</code> tag?", opts: ["Defines the page language","Sets character encoding","Links stylesheets","Defines keywords"], ans: 1, exp: "charset defines how the browser interprets the text encoding (UTF-8 supports almost all characters)." },
    { q: "Which attribute is used to open a link in a new tab?", opts: ["rel='new'","target='_blank'","href='new'","open='true'"], ans: 1, exp: "target='_blank' opens the link in a new browsing context (tab or window)." },
    { q: "What element should wrap your page's primary content?", opts: ["&lt;section&gt;","&lt;main&gt;","&lt;div&gt;","&lt;content&gt;"], ans: 1, exp: "<code>&lt;main&gt;</code> contains the dominant content of the page. Only one <code>&lt;main&gt;</code> should exist per page." },
    { q: "Which input type shows a date picker?", opts: ["type='calendar'","type='picker'","type='time'","type='date'"], ans: 3, exp: "type='date' renders a native date picker in supported browsers." },
    { q: "What does <code>&lt;br&gt;</code> do?", opts: ["Creates a border","Inserts a line break","Bolds text","Adds bullet"], ans: 1, exp: "<code>&lt;br&gt;</code> inserts a single line break — it's a void element with no closing tag." },
    { q: "Which element is NOT a semantic HTML5 element?", opts: ["&lt;article&gt;","&lt;aside&gt;","&lt;div&gt;","&lt;footer&gt;"], ans: 2, exp: "<code>&lt;div&gt;</code> is a generic non-semantic container. The others all describe meaning." },
    { q: "How do you make text italic with semantic meaning?", opts: ["&lt;i&gt;","&lt;em&gt;","&lt;italic&gt;","&lt;style italic&gt;"], ans: 1, exp: "<code>&lt;em&gt;</code> adds semantic emphasis (screen readers stress this text). <code>&lt;i&gt;</code> is purely visual." },
    { q: "What tag is used to define a table row?", opts: ["&lt;td&gt;","&lt;th&gt;","&lt;tr&gt;","&lt;row&gt;"], ans: 2, exp: "<code>&lt;tr&gt;</code> defines a row in an HTML table. Rows contain <code>&lt;td&gt;</code> (data) or <code>&lt;th&gt;</code> (header) cells." },
    { q: "Which attribute links a label to its input?", opts: ["name","id","for","bind"], ans: 2, exp: "The 'for' attribute on <code>&lt;label&gt;</code> should match the 'id' of the associated input element." },
    { q: "What does the <code>defer</code> attribute on a script tag do?", opts: ["Loads script async","Delays script until DOM is ready","Disables the script","Caches the script"], ans: 1, exp: "defer downloads the script during HTML parsing but executes it only after the document is fully parsed." },
    { q: "Which HTML5 element defines self-contained content?", opts: ["&lt;section&gt;","&lt;article&gt;","&lt;div&gt;","&lt;block&gt;"], ans: 1, exp: "<code>&lt;article&gt;</code> represents standalone content (blog post, news item, card) that makes sense on its own." },
    { q: "What's the correct way to comment in HTML?", opts: ["// comment","/* comment */","&lt;!-- comment --&gt;","# comment"], ans: 2, exp: "HTML comments use the syntax <!-- comment --> and are not rendered in the browser." }
  ],
  CSS: [
    { q: "Which property changes the text color?", opts: ["font-color","text-color","color","foreground"], ans: 2, exp: "The 'color' property sets the foreground text color." },
    { q: "What does <code>display: flex</code> do?", opts: ["Makes element invisible","Enables flexbox layout","Centers the element","Adds a border"], ans: 1, exp: "display: flex turns an element into a flex container, enabling Flexbox layout for its children." },
    { q: "Which value of <code>position</code> removes an element from document flow?", opts: ["relative","static","absolute","fixed only"], ans: 2, exp: "position: absolute (and fixed) removes the element from the normal document flow." },
    { q: "What does <code>box-sizing: border-box</code> mean?", opts: ["Adds border to box","Width includes padding and border","Removes margin","Sets border-radius"], ans: 1, exp: "border-box makes width/height include padding and border, preventing unexpected size overflow." },
    { q: "Which selector has the highest specificity?", opts: [".class","#id","element","*"], ans: 1, exp: "ID selectors (#id) have a specificity of 100, higher than class (10) or element (1) selectors." },
    { q: "What property controls space INSIDE an element?", opts: ["margin","border","padding","spacing"], ans: 2, exp: "Padding is the space between the content and its border, inside the element." },
    { q: "How do you center a block element horizontally with CSS?", opts: ["text-align: center","margin: auto","align: center","position: center"], ans: 1, exp: "margin: 0 auto (with a defined width) centers a block element by distributing horizontal margin equally." },
    { q: "Which property makes content scroll if it overflows?", opts: ["clip","overflow: scroll","display: scroll","wrap"], ans: 1, exp: "overflow: scroll adds scrollbars when content exceeds the element's size." },
    { q: "What does <code>z-index</code> control?", opts: ["Zoom level","Opacity","Stacking order","Font size"], ans: 2, exp: "z-index controls which positioned element appears on top when they overlap." },
    { q: "Which unit is relative to the root font size?", opts: ["em","px","%","rem"], ans: 3, exp: "rem (root em) is relative to the root element's font-size (usually 16px by default)." },
    { q: "What does <code>flex: 1</code> mean?", opts: ["Fixed width of 1px","Grow to fill available space","One flex item","First item only"], ans: 1, exp: "flex: 1 is shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0 — it makes the item grow to fill space." },
    { q: "Which pseudo-class applies when hovering?", opts: [":active",":focus",":hover",":target"], ans: 2, exp: ":hover applies styles when the user's pointer is over the element." },
    { q: "What property sets the space between grid items?", opts: ["spacing","padding","margin","gap"], ans: 3, exp: "The 'gap' property (formerly grid-gap) sets space between grid or flex items." },
    { q: "How do you apply a CSS variable?", opts: ["$var","@var","var(--name)","{{name}}"], ans: 2, exp: "CSS custom properties (variables) are defined with -- and used with var(--name)." },
    { q: "What does <code>opacity: 0</code> do?", opts: ["Removes element","Makes element invisible but still in flow","Hides and removes from flow","Sets color to white"], ans: 1, exp: "opacity: 0 makes the element fully transparent but it still occupies space in the layout." },
    { q: "Which property creates a CSS transition?", opts: ["animate","transform","transition","motion"], ans: 2, exp: "The 'transition' property specifies duration and easing for smooth property changes." },
    { q: "What value of <code>display</code> hides AND removes from layout?", opts: ["visibility: hidden","opacity: 0","display: none","hidden: true"], ans: 2, exp: "display: none removes the element from the document flow entirely — no space is taken." },
    { q: "Which CSS rule is used for responsive design breakpoints?", opts: ["@keyframes","@media","@viewport","@breakpoint"], ans: 1, exp: "@media queries apply styles based on screen size, orientation, or other conditions." },
    { q: "What does <code>grid-template-columns: repeat(3, 1fr)</code> create?", opts: ["3 rows","3 columns of fixed width","3 equal columns","3 items max"], ans: 2, exp: "repeat(3, 1fr) creates 3 columns that each take an equal fraction of available space." },
    { q: "Which property changes how flex items wrap?", opts: ["flex-wrap","flex-flow","wrap-items","flex-break"], ans: 0, exp: "flex-wrap: wrap allows flex items to wrap onto multiple lines when they exceed the container width." }
  ],
  JavaScript: [
    { q: "Which keyword declares a block-scoped variable that can be reassigned?", opts: ["var","const","let","def"], ans: 2, exp: "let is block-scoped and can be reassigned. const is block-scoped but cannot be reassigned. var is function-scoped." },
    { q: "What does <code>===</code> check?", opts: ["Value only","Type only","Value and type","Reference"], ans: 2, exp: "=== (strict equality) checks both value AND type. == performs type coercion before comparing." },
    { q: "What does <code>typeof null</code> return?", opts: ['"null"','"undefined"','"object"','"NaN"'], ans: 2, exp: "This is a famous JS bug — typeof null returns 'object', not 'null'. It's been kept for backward compatibility." },
    { q: "Which array method creates a new transformed array?", opts: ["forEach","filter","map","reduce"], ans: 2, exp: "map() returns a new array with each element transformed by the callback function." },
    { q: "What is a closure?", opts: ["A syntax error","A function with access to its outer scope","A class method","An async function"], ans: 1, exp: "A closure is a function that 'remembers' and can access variables from its outer lexical scope, even after the outer function has returned." },
    { q: "What does <code>event.preventDefault()</code> do?", opts: ["Stops event bubbling","Removes the listener","Prevents the default browser action","Stops all JS"], ans: 2, exp: "preventDefault() stops the browser's default behavior (e.g., preventing form submission or link navigation)." },
    { q: "Which method adds an element to the END of an array?", opts: ["unshift","push","append","add"], ans: 1, exp: "push() adds one or more elements to the end of an array and returns the new length." },
    { q: "What does the spread operator <code>...</code> do?", opts: ["Declares a rest param","Expands an iterable into individual elements","Loops over items","Declares a variable"], ans: 1, exp: "The spread operator expands an iterable (array, string) into individual elements." },
    { q: "How do you select an element by its ID?", opts: ["querySelector('.id')","document.getElement('id')","document.getElementById('id')","document.findById('id')"], ans: 2, exp: "getElementById() is the fastest and most direct way to select an element by its unique ID." },
    { q: "What does <code>async/await</code> build on top of?", opts: ["Callbacks","Generators","Promises","Observables"], ans: 2, exp: "async/await is syntactic sugar over Promises — it makes async code read like synchronous code." },
    { q: "What's the difference between <code>null</code> and <code>undefined</code>?", opts: ["No difference","null is set by developer, undefined is set by JS","undefined is intentional","Only type differs"], ans: 1, exp: "null is an intentional absence of a value. undefined means a variable was declared but not assigned." },
    { q: "Which method returns the first array element matching a condition?", opts: ["filter","findIndex","find","some"], ans: 2, exp: "find() returns the first element that satisfies the provided testing function." },
    { q: "What is event bubbling?", opts: ["Creating new events","Event propagating from child to parent","Mouse hover effect","Adding listeners"], ans: 1, exp: "When an event fires, it bubbles up the DOM tree from the target element to its ancestors." },
    { q: "What does <code>JSON.stringify()</code> do?", opts: ["Parses JSON text","Validates JSON","Converts object to JSON string","Fetches JSON"], ans: 2, exp: "JSON.stringify() serializes a JavaScript object/value into a JSON string." },
    { q: "Which statement is true about arrow functions?", opts: ["They have their own 'this'","They can't be used as callbacks","They inherit 'this' from enclosing scope","They're slower"], ans: 2, exp: "Arrow functions don't have their own 'this' — they inherit it from the surrounding lexical context." },
    { q: "What does <code>localStorage.setItem()</code> do?", opts: ["Reads data from storage","Deletes data","Stores data persistently in browser","Stores data for session only"], ans: 2, exp: "localStorage.setItem() stores key-value pairs that persist even after the browser is closed." },
    { q: "What is the output of <code>[1,2,3].length</code>?", opts: ["2","3","4","undefined"], ans: 1, exp: "The length property of an array returns the number of elements. [1,2,3] has 3 elements." },
    { q: "Which loop is best for iterating over array values?", opts: ["for...in","while","for...of","do...while"], ans: 2, exp: "for...of iterates over iterable values (arrays, strings). for...in iterates over object keys." },
    { q: "What does the <code>?.</code> operator do?", opts: ["Ternary shorthand","Optional chaining — safely access nested props","Null coalescing","Type check"], ans: 1, exp: "Optional chaining (?.) returns undefined instead of throwing an error when accessing properties on null/undefined." },
    { q: "What is the result of <code>'5' + 3</code> in JavaScript?", opts: ["8","53","'53'","Error"], ans: 2, exp: "The + operator with a string triggers concatenation. '5' + 3 = '53'. This is type coercion in action." }
  ]
};
// ===== STATE =====
let currentTopic = 'HTML';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let skipped = 0;
let answered = 0;
let timerInterval = null;
let timeLeft = 30;
let answered_flag = false;
// ===== NAV =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById(page).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => { if (l.textContent.trim().toLowerCase() === page) l.classList.add('active'); });
  window.scrollTo(0,0);
  if (page === 'home') updateContinue();
  if (page === 'notes') { openedAt = Date.now(); updateProgressUI(); updateReadBar(); checkRead(); }
}
function openNotes(topic) {
  showPage('notes');
  openNote(topic + '-intro');
}
// ===== NOTES =====
function openNote(id) {
  document.querySelectorAll('.note-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sidebar-item, .mobile-chip').forEach(s => s.classList.remove('active'));
  const section = document.getElementById('note-' + id);
  if (section) section.classList.add('active');
  document.querySelectorAll('.sidebar-item, .mobile-chip').forEach(item => {
    if (item.dataset.note === id) {
      item.classList.add('active');
      if (item.classList.contains('mobile-chip')) item.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }
  });
  window.scrollTo(0, 0);
  openedAt = Date.now();
  store.set('last', id);
  updateReadBar();
  checkRead();
}
// ===== QUIZ =====
function selectTopic(topic) {
  currentTopic = topic;
  document.querySelectorAll('.picker-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('pick-' + topic).classList.add('selected');
}
function startQuizFor(topic) {
  showPage('quiz');
  selectTopic(topic);
  startQuiz();
}
function startQuiz() {
  const data = quizData[currentTopic];
  currentQuestions = [...data].sort(() => Math.random() - 0.5).slice(0, 10);
  currentIndex = 0; score = 0; skipped = 0; answered = 0; streak = 0; updateStreak();
  document.getElementById('quiz-picker').style.display = 'none';
  document.getElementById('quiz-active').style.display = 'block';
  document.getElementById('quiz-result').style.display = 'none';
  renderQuestion();
}
function renderQuestion() {
  if (currentIndex >= currentQuestions.length) { showResult(); return; }
  answered_flag = false;
  const q = currentQuestions[currentIndex];
  document.getElementById('q-topic').textContent = currentTopic;
  document.getElementById('q-count').textContent = `${currentIndex + 1} / ${currentQuestions.length}`;
  document.getElementById('q-num-label').textContent = `Question ${currentIndex + 1}`;
  document.getElementById('q-text').innerHTML = q.q;
  document.getElementById('q-progress').style.width = `${(currentIndex / currentQuestions.length) * 100}%`;
  const optDiv = document.getElementById('q-options');
  optDiv.innerHTML = '';
  const keys = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const el = document.createElement('div');
    el.className = 'option';
    el.innerHTML = `<div class="option-key">${keys[i]}</div><div class="option-text">${opt}</div><div class="option-result"></div>`;
    el.addEventListener('click', () => selectAnswer(i));
    optDiv.appendChild(el);
  });
  const expBox = document.getElementById('q-explanation');
  expBox.classList.remove('show');
  expBox.innerHTML = '';
  document.getElementById('next-btn').style.display = 'none';
  startTimer();
}
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  const el = document.getElementById('timer-val');
  const wrapper = document.getElementById('q-timer');
  el.textContent = timeLeft;
  wrapper.classList.remove('warn');
  timerInterval = setInterval(() => {
    timeLeft--;
    el.textContent = timeLeft;
    if (timeLeft <= 10) wrapper.classList.add('warn');
    if (timeLeft <= 0) skipQuestion("Time's up!");
  }, 1000);
}
function showExplanation(html) {
  const box = document.getElementById('q-explanation');
  box.innerHTML = html;
  box.classList.add('show');
  document.getElementById('next-btn').style.display = 'inline-flex';
}
function selectAnswer(idx) {
  if (answered_flag) return;
  answered_flag = true;
  clearInterval(timerInterval);
  const q = currentQuestions[currentIndex];
  document.querySelectorAll('.option').forEach((el, i) => {
    el.classList.add('disabled');
    const resultEl = el.querySelector('.option-result');
    if (i === q.ans) { el.classList.add('correct'); resultEl.textContent = '✓'; }
    if (i === idx && idx !== q.ans) { el.classList.add('wrong'); resultEl.textContent = '✗'; }
  });
  if (idx === q.ans) { score++; streak++; } else { streak = 0; }
  updateStreak();
  answered++;
  showExplanation(`<strong>Explanation:</strong> ${q.exp}`);
}
// used for both "Skip" and "Time's up"
function skipQuestion(label = 'Skipped.') {
  if (answered_flag) return;
  answered_flag = true;
  clearInterval(timerInterval);
  skipped++; streak = 0; updateStreak();
  const q = currentQuestions[currentIndex];
  document.querySelectorAll('.option').forEach((el, i) => {
    el.classList.add('disabled');
    if (i === q.ans) { el.classList.add('correct'); el.querySelector('.option-result').textContent = '✓'; }
  });
  showExplanation(`<strong>${label}</strong> ${q.exp}`);
}
function nextQuestion() {
  currentIndex++;
  renderQuestion();
}
function showResult() {
  clearInterval(timerInterval);
  document.getElementById('quiz-active').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';
  const total = currentQuestions.length;
  const pct = Math.round((score / total) * 100);
  const wrong = answered - score;
  countUp(document.getElementById('res-pct'), pct);
  document.getElementById('res-correct').textContent = score;
  document.getElementById('res-wrong').textContent = wrong;
  document.getElementById('res-skipped').textContent = skipped;
  let title, sub;
  if (pct >= 80) { title = 'Excellent Work! 🎉'; sub = `You got ${score}/${total} correct. You clearly know your ${currentTopic}!`; }
  else if (pct >= 60) { title = 'Good Effort!'; sub = `${score}/${total} correct. Review the notes and try again to hit 80%.`; }
  else { title = 'Keep Practicing'; sub = `${score}/${total} correct. Revisit the ${currentTopic} notes — you've got this.`; }
  document.getElementById('res-title').textContent = title;
  document.getElementById('res-sub').textContent = sub;
  // personal best + celebration
  const best = store.get('best', {});
  const prev = best[currentTopic];
  const bestEl = document.getElementById('res-best');
  bestEl.innerHTML = '';
  if (prev === undefined || pct > prev) {
    best[currentTopic] = pct; store.set('best', best);
    if (prev !== undefined) bestEl.innerHTML = '<span class="best-badge">🏆 New personal best!</span>';
  } else {
    bestEl.innerHTML = '<span class="best-badge" style="color:var(--text2);background:var(--bg3)">Your best: ' + prev + '%</span>';
  }
  if (pct >= 80) launchConfetti();
}
function restartQuiz() {
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-picker').style.display = 'block';
  renderBest();
}
// ===== ENGAGEMENT LAYER =====
let streak = 0;
const store = (() => {
  // Progress is written to every storage layer the browser allows, and read back
  // from the first one that has data — so a refresh never wipes it.
  const KEY = 'codepath_state';
  const tiers = [];
  try {
    localStorage.setItem('__cp', '1'); localStorage.removeItem('__cp');
    tiers.push({ perm: true, read: () => localStorage.getItem(KEY), write: v => localStorage.setItem(KEY, v) });
  } catch (e) {}
  try {
    document.cookie = '__cp=1; path=/; SameSite=Lax';
    if (document.cookie.indexOf('__cp=1') > -1) {
      document.cookie = '__cp=; path=/; max-age=0';
      tiers.push({
        perm: true,
        read: () => { const m = document.cookie.match(/(?:^|; )codepath_state=([^;]*)/); return m ? decodeURIComponent(m[1]) : null; },
        write: v => { document.cookie = KEY + '=' + encodeURIComponent(v) + '; path=/; max-age=31536000; SameSite=Lax'; }
      });
    }
  } catch (e) {}
  try {
    sessionStorage.setItem('__cp', '1'); sessionStorage.removeItem('__cp');
    tiers.push({ perm: false, read: () => sessionStorage.getItem(KEY), write: v => sessionStorage.setItem(KEY, v) });
  } catch (e) {}
  // last resort: window.name survives a refresh of the same tab, even where storage is blocked
  tiers.push({
    perm: false,
    read: () => { const m = (window.name || '').match(/CODEPATH::([\s\S]*)$/); return m ? m[1] : null; },
    write: v => { window.name = (window.name || '').replace(/CODEPATH::[\s\S]*$/, '') + 'CODEPATH::' + v; }
  });
  let mem = {};
  for (const t of tiers) {
    try { const raw = t.read(); if (raw) { mem = JSON.parse(raw) || {}; break; } } catch (e) {}
  }
  const save = () => { const s = JSON.stringify(mem); tiers.forEach(t => { try { t.write(s); } catch (e) {} }); };
  return {
    permanent: tiers.some(t => t.perm),
    get(k, d) { return mem[k] !== undefined ? mem[k] : d; },
    set(k, v) { mem[k] = v; save(); }
  };
})();
// topic order + labels come straight from the sidebar, so new topics are picked up automatically
const noteItems = [...document.querySelectorAll('.sidebar-item')].map(el => {
  const m = el.getAttribute('onclick').match(/openNote\('([^']+)'\)/);
  const group = el.querySelector('.sidebar-dot').classList.contains('dot-html') ? 'HTML'
              : el.querySelector('.sidebar-dot').classList.contains('dot-css') ? 'CSS' : 'JS';
  el.dataset.note = m[1];
  return { id: m[1], label: el.textContent.trim(), group, el };
});
const noteOrder = noteItems.map(n => n.id);
// --- read tracking
function getRead() { return store.get('read', []); }
function markRead(id) {
  const read = getRead();
  if (!read.includes(id)) { read.push(id); store.set('read', read); updateProgressUI(); }
}
function updateProgressUI() {
  const read = getRead().filter(id => noteOrder.includes(id));
  noteItems.forEach(n => n.el.classList.toggle('read', read.includes(n.id)));
  document.querySelectorAll('.mobile-chip').forEach(c => c.classList.toggle('read', read.includes(c.dataset.note)));
  document.getElementById('sp-count').textContent = read.length + ' / ' + noteOrder.length + ' read';
  const pct = (read.length / noteOrder.length * 100) + '%';
  document.getElementById('sp-fill').style.width = pct;
  document.getElementById('mp-fill').style.width = pct;
  document.getElementById('mp-count').textContent = read.length + ' / ' + noteOrder.length + ' read';
  document.getElementById('sp-note').textContent = store.permanent ? '' : 'Your browser blocks permanent storage, so progress is kept only while this tab stays open.';
}
function resetProgress() {
  if (!confirm('Reset your reading progress? Your quiz best scores are kept.')) return;
  store.set('read', []); updateProgressUI();
}
function activeNoteId() {
  const s = document.querySelector('.note-section.active');
  return s ? s.id.replace('note-', '') : null;
}
let openedAt = Date.now(), readTimer = null;
function checkRead() {
  if (!document.getElementById('notes').classList.contains('active')) return;
  const s = document.querySelector('.note-section.active');
  if (!s) return;
  if (s.getBoundingClientRect().bottom > window.innerHeight + 120) return;   // haven't reached the end yet
  const wait = 4000 - (Date.now() - openedAt);                                // and spent a few seconds here
  if (wait > 0) { clearTimeout(readTimer); readTimer = setTimeout(checkRead, wait + 50); return; }
  markRead(activeNoteId());
}
function updateReadBar() {
  const bar = document.getElementById('read-progress');
  const max = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = max > 0 ? Math.min(100, window.scrollY / max * 100) + '%' : '100%';
}
window.addEventListener('scroll', () => {
  updateReadBar(); checkRead();
  document.querySelector('nav').classList.toggle('scrolled', scrollY > 8);
}, { passive: true });
// --- previous / next buttons at the bottom of each topic
document.querySelectorAll('.note-section').forEach(sec => {
  const id = sec.id.replace('note-', '');
  const i = noteOrder.indexOf(id);
  const prev = noteItems[i - 1], next = noteItems[i + 1];
  const nav = document.createElement('div');
  nav.className = 'topic-nav';
  nav.innerHTML =
    (prev ? `<button class="topic-nav-btn" onclick="openNote('${prev.id}')"><small>← Previous</small><span>${prev.label}</span></button>` : '<span></span>') +
    (next ? `<button class="topic-nav-btn next" onclick="openNote('${next.id}')"><small>Next →</small><span>${next.label}</span></button>` : '');
  const cta = sec.querySelector('.quiz-cta');
  if (cta) sec.insertBefore(nav, cta); else sec.appendChild(nav);
});
// --- mobile topic chips
const chipBar = document.getElementById('mobile-topics');
noteItems.forEach(n => {
  const c = document.createElement('button');
  c.className = 'mobile-chip' + (n.el.classList.contains('active') ? ' active' : '');
  c.dataset.note = n.id;
  c.textContent = n.group + ' · ' + n.label;
  c.onclick = () => openNote(n.id);
  chipBar.appendChild(c);
});
// --- copy buttons on code blocks
document.querySelectorAll('.notes-content pre').forEach(pre => {
  const b = document.createElement('button');
  b.className = 'copy-btn'; b.textContent = 'Copy';
  b.onclick = async () => {
    const clone = pre.cloneNode(true); clone.querySelector('.copy-btn').remove();
    try { await navigator.clipboard.writeText(clone.textContent); b.textContent = 'Copied ✓'; }
    catch (e) { b.textContent = 'Press Ctrl+C'; }
    setTimeout(() => b.textContent = 'Copy', 1600);
  };
  pre.appendChild(b);
});
// --- quiz extras
function updateStreak() {
  const el = document.getElementById('streak');
  if (streak >= 2) { el.textContent = '🔥 ' + streak + ' in a row'; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); }
  else el.classList.remove('show');
}
function renderBest() {
  const best = store.get('best', {});
  ['HTML', 'CSS', 'JavaScript'].forEach(t => {
    const card = document.getElementById('pick-' + t);
    let el = card.querySelector('.picker-best');
    if (!el) { el = document.createElement('div'); el.className = 'picker-best'; card.appendChild(el); }
    el.textContent = best[t] !== undefined ? '🏆 Best: ' + best[t] + '%' : 'Not attempted yet';
    if (best[t] === undefined) el.style.color = 'var(--text3)';
  });
}
function countUp(el, target) {
  const t0 = performance.now(), dur = 900;
  (function tick(now) {
    const k = Math.min(1, (now - t0) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + '%';
    if (k < 1) requestAnimationFrame(tick);
  })(t0);
}
function reviewNotes() {
  openNotes({ HTML: 'html', CSS: 'css', JavaScript: 'js' }[currentTopic] || 'html');
}
function launchConfetti() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = document.getElementById('confetti'), ctx = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const colors = ['#6c63ff', '#8b85ff', '#4ac0e8', '#f0c040', '#e8734a', '#4ade80'];
  const bits = Array.from({ length: 140 }, () => ({
    x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.5,
    w: 6 + Math.random() * 6, h: 8 + Math.random() * 8,
    vx: -2 + Math.random() * 4, vy: 2 + Math.random() * 4,
    r: Math.random() * 6, vr: -0.2 + Math.random() * 0.4,
    c: colors[Math.floor(Math.random() * colors.length)]
  }));
  const start = performance.now();
  (function frame(now) {
    ctx.clearRect(0, 0, cv.width, cv.height);
    bits.forEach(b => {
      b.x += b.vx; b.y += b.vy; b.r += b.vr;
      ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r);
      ctx.fillStyle = b.c; ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h); ctx.restore();
    });
    if (now - start < 3200) requestAnimationFrame(frame); else ctx.clearRect(0, 0, cv.width, cv.height);
  })(start);
}
// --- home extras
const facts = [
  "JavaScript was created by Brendan Eich in just 10 days back in 1995.",
  "In JavaScript, 0.1 + 0.2 isn't exactly 0.3 — it's 0.30000000000000004.",
  "typeof null returns \"object\" in JavaScript — a famous bug from the very first version that was never fixed.",
  "The very first website went live in 1991 and was nothing but plain text and links.",
  "With CSS, changing a single line in one stylesheet can restyle every page of a website.",
  "The <div> tag has no meaning at all — semantic tags like <nav> and <article> help screen readers and search engines understand a page.",
  "Flexbox and Grid exist because floats were never designed for page layout — they were meant for wrapping text around images.",
  "JavaScript and Java are two completely different languages — the name was a 1990s marketing decision."
];
let factIdx = Math.floor(Math.random() * facts.length);
function nextFact(first) {
  const el = document.getElementById('dyk-text');
  if (!first) factIdx = (factIdx + 1) % facts.length;
  el.classList.add('fade');
  setTimeout(() => { el.textContent = facts[factIdx]; el.classList.remove('fade'); }, first ? 0 : 250);
}
setInterval(() => { if (document.getElementById('home').classList.contains('active')) nextFact(); }, 9000);
function updateContinue() {
  const last = store.get('last', null);
  const chip = document.getElementById('continue-chip');
  const item = noteItems.find(n => n.id === last);
  if (item) { document.getElementById('continue-label').textContent = item.group + ' · ' + item.label; chip.style.display = 'inline-flex'; }
  else chip.style.display = 'none';
}
function continueLearning() {
  const last = store.get('last', null);
  if (!last) return;
  showPage('notes'); openNote(last);
}
// --- background: floating code glyphs + cursor spotlight
(function () {
  const glyphs = ['</>', '{ }', '#', '=>', '( )', '[ ]', ';', '&&', '<div>', 'const', 'let', '@media', '===', 'fn()', '.map()', 'npm', '{ css }', '</p>'];
  const colors = ['var(--html)', 'var(--css)', 'var(--js)', 'var(--accent2)'];
  const count = innerWidth < 700 ? 7 : 15;
  document.querySelectorAll('.page-fx').forEach(fx => {
    for (let i = 0; i < count; i++) {
      const g = document.createElement('span');
      g.className = 'glyph';
      g.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      g.style.left = (Math.random() * 96) + '%';
      g.style.fontSize = (14 + Math.random() * 22) + 'px';
      g.style.color = colors[Math.floor(Math.random() * colors.length)];
      g.style.animationDuration = (22 + Math.random() * 26) + 's';
      g.style.animationDelay = (-Math.random() * 40) + 's';
      g.style.setProperty('--drift', (-60 + Math.random() * 120) + 'px');
      fx.appendChild(g);
    }
  });
  if (window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let raf = 0, x = 0, y = 0;
    addEventListener('pointermove', e => {
      x = e.clientX; y = e.clientY;
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0;
        document.documentElement.style.setProperty('--mx', x + 'px');
        document.documentElement.style.setProperty('--my', y + 'px');
      });
    }, { passive: true });
  }
})();
updateProgressUI();
renderBest();
updateContinue();
nextFact(true);
selectTopic('HTML');
