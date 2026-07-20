/* GTM_FLOWS — the single source of truth for the persona top-of-funnel flows (Version 2, /gtm/).
   Consumed by /gtm/index.html (the chooser), /gtm/for-you.html (persona landing), and /gtm/oracle-demo.html (?p= preset).
   Image + dest paths are written relative to a page inside /gtm/ (so ../assets, and sibling .html). */
window.GTM_FLOWS = [
  {
    key:'hannah', label:'My heart is in question', sub:'Late, and heavier than you would tell most people.',
    img:'../assets/personas/hannah.jpg', mechanic:'oracle', theme:'love',
    dest:'oracle-demo.html?p=hannah', cta:'Ask the Oracle, free',
    intro:'You are up late with this, and it is heavier than you would tell most people. Ask it plainly. Nothing here is scripted, and no one is selling.',
    proof:'A free reading first. If you go on to a human, it is $1 a minute with a ceiling you set. No scripted upsell while you are raw.',
    starterQ:'Will he come back to me?'
  },
  {
    key:'carla', label:'A crossroads at work', sub:'A real decision, and everyone has an opinion but you.',
    img:'../assets/personas/carla.jpg', mechanic:'oracle', theme:'career',
    dest:'oracle-demo.html?p=carla', cta:'Ask the Oracle, free',
    intro:'A real crossroads at work, and everyone has an opinion but you. Ask it straight. You will get a clear read, not a horoscope-flavored pep talk.',
    proof:'A clear-eyed outside read that helps you commit or walk away. Then a career specialist who reads the turning point, not a fortune.',
    starterQ:'Should I take the offer, or wait?'
  },
  {
    key:'dana', label:'A decision I cannot make alone', sub:'Sort your own gut from your fear.',
    img:'../assets/personas/dana.jpg', mechanic:'oracle', theme:'path',
    dest:'oracle-demo.html?p=dana', cta:'Ask the Oracle, free',
    intro:'A big decision, and you need to sort your own gut from your fear. Ask it here first. No one will push you to spend or make you feel foolish.',
    proof:'Someone warm who actually hears you out. No pressure to keep the meter running, and you set the limit before you ever speak.',
    starterQ:'Should I make this move, or stay?'
  },
  {
    key:'grace', label:'Someone I have lost', sub:'Reaching for the one you carry.',
    img:'../assets/personas/grace.jpg', mechanic:'oracle', theme:'grief',
    dest:'oracle-demo.html?p=grace', cta:'Begin, gently',
    intro:'You are reaching for someone you carry. Take your time. This is handled gently, and nothing is ever sold to you here.',
    proof:'A medium who works at the threshold with reverence. She refuses to perform reunions; she listens for what remains and tells you honestly what she hears.',
    starterQ:'Is my loved one still near me?'
  },
  {
    key:'wendy', label:'I need someone, now', sub:'A real person, in about a minute.',
    img:'../assets/personas/wendy.jpg', mechanic:'directory',
    dest:'advisors.html?status=now', cta:'See who is available now',
    intro:'It is late and you want a real person now, not hoops. These readers are live this minute. No account to start.',
    proof:'A real, trustworthy psychic in about a minute, by phone or chat. Someone is genuinely awake, and your question just reached them.'
  },
  {
    key:'sofia', label:'A deeper reflection', sub:'A mirror, not a fortune.',
    img:'../assets/personas/sofia.jpg', mechanic:'oracle', theme:'path',
    dest:'oracle-demo.html?p=sofia', cta:'Ask the Oracle, free',
    intro:'You already read your own cards. Treat this as a mirror, not a fortune-teller who sells fear by the minute. Ask the real question.',
    proof:'A genuine reader who holds up a mirror on a love-and-life-path question. Nothing mass-produced, nothing that trades on fear.',
    starterQ:'What is my next chapter asking of me?'
  },
  {
    key:'bella', label:'My first reading, kept simple', sub:'Free now. Then $1/min, with a cap you set.',
    img:'../assets/personas/bella.jpg', mechanic:'oracle', theme:'love',
    dest:'oracle-demo.html?p=bella', cta:'Try it, free',
    intro:'First time here? Good. This reading is free, and if you go on to a human it is $1 a minute with a ceiling you set. Ask your real question.',
    proof:'Ten minutes is $10, and you set the limit. No surprise charges, ever. The first reading is the smallest, safest step there is.',
    starterQ:'Is this relationship right for me?'
  },
  {
    key:'rosa', label:'Back to my reader', sub:'Your pricing and perks, unchanged.',
    img:'../assets/personas/rosa.jpg', mechanic:'directory',
    dest:'advisors.html?find=', cta:'Find your reader',
    intro:'You have readers you trust. Find them by name or extension, right here. Your pricing and your perks have not changed.',
    proof:'Reach your regular reader by name, confirm your rate and rewards are exactly as they were, and get on with your reading.'
  },
  {
    key:'sam', label:'Honestly, just curious', sub:'Costs nothing. Judge it yourself.',
    img:'../assets/personas/sam.jpg', mechanic:'oracle', theme:'path',
    dest:'oracle-demo.html?p=sam', cta:'See for yourself, free',
    intro:'Skeptic? Perfect audience. This costs nothing, no signup, no card. Ask anything and judge it for yourself.',
    proof:'Zero money, zero risk of feeling like a mark. Only 2% of applicants are accepted to read here, and every reading carries a guarantee.',
    starterQ:'Is there anything to this at all?'
  },
  {
    key:'greg', label:'A gift for someone', sub:'Never cheap, never embarrassing.',
    img:'../assets/personas/greg.jpg', mechanic:'gift',
    dest:'gift.html', cta:'Give a reading',
    intro:'A gift for the spiritually-inclined person in your life, one that never feels cheap or embarrassing. A real session, beautifully given.',
    proof:'A giftable session and a printable certificate that looks like a real present, not a coupon. Handed over with a name on it, ready to open.'
  }
];
