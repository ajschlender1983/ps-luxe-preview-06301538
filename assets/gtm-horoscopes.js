/* GTM horoscope funnel data (Version 2, /gtm/).
   Each sign -> a date-seeded "today" reading -> a curated, REAL astrology reader from the directory
   (matched by element), so "Sit with <Name>" deep-links to exactly that advisor via advisors.html?find=.
   The reading is deterministic per sign per day (changes daily, no external feed).
   Paths are relative to a page inside /gtm/ (../assets). */
window.HORO = (function(){
  // curated readers, one per element — all real advisors in the directory (data-name lowercase)
  var P = {
    fire:{name:'Sapphire', find:'sapphire', img:'../assets/advisors-all/Sapphire-3149.jpg', spec:'Accurate, Detailed, Cosmic', avail:'In the Channel now', mode:'live',
      why:'Sapphire reads the sky with an accuracy that unsettles people, and tells you the part a daily horoscope never can: what to actually do with it.'},
    earth:{name:'Niya', find:'niya', img:'../assets/advisors-all/Niya-6107.jpg', spec:'Divine Clarity & Master Astrologer', avail:'Her window opens tonight', mode:'window',
      why:'Niya is a master astrologer who works in clarity, not fog. She grounds the day’s transit into one plain, doable next step.'},
    air:{name:'Librana', find:'librana', img:'../assets/advisors-all/Librana-4959.jpg', spec:'Love-Focused Tarot & Astrology', avail:'In the Channel now', mode:'live',
      why:'Librana reads the sky through your connections, and tells you plainly what is really moving between you and the person on your mind.'},
    water:{name:'Rhiannon', find:'rhiannon', img:'../assets/advisors-all/Rhiannon-6044.jpg', spec:'Empath Tarot & Astrologer', avail:'In the Channel now', mode:'live',
      why:'Rhiannon is an empath as much as an astrologer. She feels the current under the chart and names the thing you already sense but have not said.'}
  };
  var SIGNS = [
    {key:'aries',name:'Aries',dates:'Mar 21 – Apr 19',el:'fire',trait:'You move first and ask later, and today rewards the ones who move.'},
    {key:'taurus',name:'Taurus',dates:'Apr 20 – May 20',el:'earth',trait:'You build slowly and keep what you build, and something you planted is about to hold weight.'},
    {key:'gemini',name:'Gemini',dates:'May 21 – Jun 20',el:'air',trait:'Two things are true at once for you today, and the tension between them is information.'},
    {key:'cancer',name:'Cancer',dates:'Jun 21 – Jul 22',el:'water',trait:'You feel the weather in a room before it breaks, and today you are the calm in it.'},
    {key:'leo',name:'Leo',dates:'Jul 23 – Aug 22',el:'fire',trait:'You were made to be seen, and today someone finally looks the right way.'},
    {key:'virgo',name:'Virgo',dates:'Aug 23 – Sep 22',el:'earth',trait:'You see the one detail everyone missed, and today it matters more than the plan.'},
    {key:'libra',name:'Libra',dates:'Sep 23 – Oct 22',el:'air',trait:'You are weighing something that will not settle, and today the scale finally tips.'},
    {key:'scorpio',name:'Scorpio',dates:'Oct 23 – Nov 21',el:'water',trait:'You already know the thing no one has said out loud, and today it surfaces.'},
    {key:'sagittarius',name:'Sagittarius',dates:'Nov 22 – Dec 21',el:'fire',trait:'You are aimed at a horizon again, and today the first real step appears.'},
    {key:'capricorn',name:'Capricorn',dates:'Dec 22 – Jan 19',el:'earth',trait:'You have carried this a long way, and today you are closer to the top than it feels.'},
    {key:'aquarius',name:'Aquarius',dates:'Jan 20 – Feb 18',el:'air',trait:'You see the version of things that does not exist yet, and today someone else finally sees it too.'},
    {key:'pisces',name:'Pisces',dates:'Feb 19 – Mar 20',el:'water',trait:'The line between a feeling and a knowing is thin for you, and today it disappears.'}
  ];
  // element-flavored daily pools (seeded by day so the reading changes every day)
  var POOL = {
    fire:{
      overview:['A door you thought was closed is only ajar today; a small push settles a question you have been circling.','Your impatience is not a flaw today, it is a compass. The thing you keep wanting to start is the thing to start.','Someone is waiting on your yes. Given honestly, today, it changes more than you expect.','A spark of the old certainty comes back. Trust the first instinct before the committee in your head convenes.','Momentum favors you now. One brave sentence, said plainly, moves a stuck thing all at once.'],
      love:['Say the bold thing gently and watch it land softer than you feared.','A warmth you have been rationing wants to be spent. Spend a little of it today.','The person who keeps surfacing is not an accident. Let them see you mean it.','Heat without honesty burns out; today, pair the two and it holds.'],
      work:['A risk you have been sizing up is smaller than it looks from here. Step.','Lead with the idea, not the apology. The room is readier than you think.','Your name is in a conversation you are not in yet. Be worth the sentence.','The leap and the ladder both work today; pick the one you would not regret at midnight.']
    },
    earth:{
      overview:['Something you planted quietly is ready to hold weight. Lean on it and it will not give.','Slow is not behind today; slow is exactly on time. Keep the pace that is yours.','A practical detail unlocks a feeling you could not name. Tend the small thing first.','The ground under a decision is firmer than your nerves report. Check it, then trust it.','What you have built is more solid than the day is loud. Stand on it.'],
      love:['Steadiness is not the opposite of romance today; it is the proof of it.','A quiet gesture outweighs a grand one now. Do the quiet one.','Let someone see the effort you usually hide. It is the part they will keep.','The safe love and the real love are the same one today, if you let them be.'],
      work:['Do the unglamorous thing first; it clears the path for the rest of the week.','Your patience is a strategy, not a weakness. It pays out this week.','A number you have been avoiding is friendlier than you feared. Look at it.','Build the boring foundation today and the visible win arrives sooner than planned.']
    },
    air:{
      overview:['Two true things are pulling you in two directions; today you learn they are the same road.','A conversation you keep rehearsing goes better than the rehearsal. Have it.','Your restlessness is a question, not a problem. Follow it one honest step.','The idea that will not leave you alone is asking to be said out loud today.','Clarity comes sideways today, in a remark you almost missed. Catch it.'],
      love:['Say what you actually mean, not the clever version. The clever version is a wall.','The space between you and someone is not distance today; it is a question waiting for a plain answer.','A message you keep drafting works best short and true. Send that one.','Let them read you correctly for once. It is a relief on both sides.'],
      work:['The room is more persuadable than you assume; go first, go clear.','Connect two people or two ideas today and you become the reason it works.','Your read on the situation is sharper than the loudest voice in it. Say so.','A door opens through a person, not a plan. Reach out to the one you keep meaning to.']
    },
    water:{
      overview:['You feel the shift in a room before it breaks; today you are the calm that steadies it.','Something under the surface wants to be spoken kindly, even clumsily. It is nearer than you think.','Your intuition is not moody today; it is accurate. Act on the quiet knowing.','A feeling you have been carrying changes shape from weight to warmth. Let it.','The tide is with you now. Stop rowing against the thing that wants to carry you.'],
      love:['Let yourself be held instead of holding. Today it is safe to.','The name that keeps surfacing is a message, not a memory. Read it gently.','Say the tender true thing before the fear edits it. It will be received.','A closeness returns that you thought had gone quiet. Answer it.'],
      work:['Trust the read you cannot fully explain; it is right more than the spreadsheet.','Protect your energy today; the people who drain it can wait.','A quiet room and one honest hour move more than a loud week. Take the hour.','Someone needs the steadiness only you bring. Offer it, then keep some for yourself.']
    }
  };
  function daySeed(){ var d=new Date(); return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000); }
  function todayLabel(){ var d=new Date(), mo=['January','February','March','April','May','June','July','August','September','October','November','December']; return mo[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear(); }
  function pick(a,seed){ return a[((seed%a.length)+a.length)%a.length]; }
  function bySign(key){ for(var i=0;i<SIGNS.length;i++){ if(SIGNS[i].key===key) return {sign:SIGNS[i],idx:i}; } return null; }
  function read(key){
    var m=bySign(key); if(!m) return null;
    var s=m.sign, pool=POOL[s.el], seed=daySeed()+m.idx*7, reader=P[s.el];
    return { sign:s, psychic:reader, why:reader.why, date:todayLabel(), trait:s.trait,
      overview:pick(pool.overview,seed), love:pick(pool.love,seed+3), work:pick(pool.work,seed+5) };
  }
  return {SIGNS:SIGNS, P:P, read:read};
})();
