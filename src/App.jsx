import { useState } from 'react'
import { BookOpen, CheckCircle2, ChevronDown, Eye, EyeOff, Lightbulb, RotateCcw, Sparkles } from 'lucide-react'
import './App.css'

const clueDetails = {
  patrimonio: ['bridge', 'heritage', 'A valuable cultural inheritance, not simply a “patrimony.”'],
  elaboración: ['learn', 'making / production', '“Elaboración del queso” means cheese-making or how the cheese is made, not English “elaboration.”'],
  masificadas: ['context', 'crowded with tourists', 'The contrast with quiet streets and tourists supplies the meaning.'],
  desplazarse: ['learn', 'to get around / travel', 'The next phrase says “toward any other point.”'],
  ubicación: ['bridge', 'location', 'A place where something is located.'],
  arquitectónica: ['direct', 'architectural', 'The English adjective comes from the same root.'],
  histórico: ['direct', 'historic', 'Nearly identical to English “historic.”'],
  personalidad: ['direct', 'personality', 'A close match in form and meaning.'],
  interior: ['direct', 'interior', 'Think of the inside or inland part of the island.'],
  archipiélago: ['bridge', 'archipelago', 'The shared Greek root appears in the English geographical term.'],
  cultural: ['direct', 'cultural', 'The English adjective has the same meaning.'],
  diferencia: ['direct', 'difference', 'Look for the familiar root “difer-.”'],
  arquitectura: ['direct', 'architecture', 'The word is nearly the same in English.'],
  tradicional: ['direct', 'traditional', 'A direct cognate.'],
  históricos: ['direct', 'historic', 'Same helpful English connection as histórico.'],
  habitantes: ['bridge', 'inhabitants', 'People who live somewhere; compare “inhabit.”'],
  utilizaban: ['context', 'used', 'The sentence explains what the mills were for.'],
  molinos: ['learn', 'windmills', 'Learn this high-value noun from the description “de viento.”'],
  alimento: ['bridge', 'food', 'Related to “alimentary”; it means something to eat.'],
  básico: ['direct', 'basic', 'A direct cognate.'],
  núcleo: ['bridge', 'core / centre', 'Compare “nucleus”: the central part.'],
  acceso: ['direct', 'access', 'A direct cognate.'],
  ventaja: ['bridge', 'advantage', 'The meaning is strongly supported by “gran.”'],
  posible: ['direct', 'possible', 'A direct cognate.'],
  geográfico: ['direct', 'geographic', 'A direct cognate.'],
  famosa: ['direct', 'famous', 'A close match in form and meaning.'],
  visitantes: ['bridge', 'visitors', 'People who visit; notice the familiar root.'],
  contraste: ['direct', 'contrast', 'A direct cognate.'],
  perfecto: ['direct', 'perfect', 'A direct cognate.'],
  turismo: ['direct', 'tourism', 'A direct cognate.'],
  deportes: ['context', 'sports', 'The sentence specifies water sports.'],
  náuticos: ['bridge', 'nautical', 'A sea-related word; compare “nautical.”'],
  restaurantes: ['direct', 'restaurants', 'A direct cognate.'],
  belleza: ['bridge', 'beauty', 'Connected to “belle” and “beautiful.”'],
  mundialmente: ['direct', 'worldwide', 'Built from mundo, “world”; the ending means “-ly.”'],
  gastronomía: ['bridge', 'gastronomy', 'A food-related word used in English too.'],
  local: ['direct', 'local', 'A direct cognate.'],
  producto: ['direct', 'product', 'A direct cognate.'],
  artesanal: ['bridge', 'artisanal', 'Made by skilled handcraft rather than mass production.'],
  delicioso: ['bridge', 'delicious', 'A close family resemblance in sound and meaning.'],
  Denominación: ['learn', 'designation / name', 'Here it means the official “Designation of Origin.”'],
  Origen: ['direct', 'origin', 'A direct cognate.'],
  interesa: ['bridge', 'interests you', 'The familiar root signals something that matters to you.'],
  descubrir: ['bridge', 'discover', 'A close cognate: to find out something new.'],
  secretos: ['direct', 'secrets', 'A direct cognate.'],
  moderno: ['direct', 'modern', 'A direct cognate.'],
  Museo: ['direct', 'museum', 'A direct cognate.'],
  ubicado: ['bridge', 'located', 'Use the context “a las afueras” to identify where it is.'],
  municipio: ['bridge', 'municipality', 'An administrative town area; compare “municipal.”'],
}

const labCards = [
  ['patrimonio', 'heritage', 'Cultural property, traditions, and history passed on and valued by a community.'],
  ['elaboración', 'making / production', 'Elaboración del queso means cheese-making or how the cheese is made, not English “elaboration.”'],
  ['masificadas', 'crowded / overrun', 'Here the tourist coastal zones are busy and packed with people.'],
  ['desplazarse', 'to get around', 'To move or travel from one place to another.'],
  ['ubicación', 'location', 'The place or position of something.'],
  ['arquitectónica', 'architectural', 'Connected with architecture or building design.'],
]

const questions = [
  ['Why are the streets in Antigua described as quiet?', ['They are beside the airport.', 'It is inland, unlike busy coastal tourist areas.', 'Cars are not allowed in the town.', 'The town only opens in the morning.'], 1, 'The text contrasts Antigua with crowded coastal areas full of tourists.'],
  ['What did people use the windmills for?', ['To make electricity', 'To watch the coast', 'To grind grain and make gofio', 'To store cheese'], 2, 'The passage says they used the mills to moler el grano and make gofio.'],
  ['What does “elaboración del queso” mean?', ['A long discussion about cheese', 'Cheese-making or how cheese is made', 'A type of cheese museum', 'A cheese decoration'], 1, 'Elaboración means making or production here, not English “elaboration.”'],
  ['What can visitors do because Caleta de Fuste is nearby?', ['Enjoy rural peace and beach activities on the same day', 'Walk directly from Antigua to Africa', 'Visit a different island without transport', 'See the windmills from the sea'], 0, 'The text presents countryside in the morning, then coast and water activities later.'],
]

function App() {
  const [showClues, setShowClues] = useState(true)
  const [selectedClue, setSelectedClue] = useState(null)
  const [openCard, setOpenCard] = useState(null)
  const [answers, setAnswers] = useState({})
  const score = questions.reduce((total, question, index) => total + (answers[index] === question[2] ? 1 : 0), 0)
  const mark = (word) => {
    const detail = clueDetails[word]
    if (!showClues || !detail) return word
    return <button type="button" className={`word-mark ${detail[0]}`} aria-expanded={selectedClue === word} onClick={() => setSelectedClue(selectedClue === word ? null : word)}>{word}</button>
  }

  return <main>
    <header className="site-header"><a className="brand" href="#reading"><BookOpen size={22} aria-hidden="true" /> Antigua Cognate Reading Lab</a><nav aria-label="Main navigation"><a href="#lab">Guessing Lab</a><a href="#check">Quick Check</a></nav></header>
    <section className="intro" aria-labelledby="page-title"><p className="eyebrow">READ BETWEEN THE COGNATES</p><h1 id="page-title">Read Spanish with what you already know.</h1><p>Use familiar words, context, and a few careful guesses to explore Antigua, Fuerteventura.</p></section>
    <section className="reading-section" id="reading" aria-labelledby="reading-title">
      <div className="section-heading"><div><p className="eyebrow">01 / GUIDED READING</p><h2 id="reading-title">Antigua: El corazón histórico de Fuerteventura</h2></div><button className="clue-toggle" type="button" onClick={() => { setShowClues(!showClues); setSelectedClue(null) }}>{showClues ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}{showClues ? 'Hide clues' : 'Show clues'}</button></div>
      <div className="legend" aria-label="Clue key"><span className="legend-item direct">Direct cognate</span><span className="legend-item bridge">Bridge cognate</span><span className="legend-item context">Context clue</span><span className="legend-item learn">Learn directly</span></div>
      {selectedClue && <aside className={`clue-note ${clueDetails[selectedClue][0]}`} aria-live="polite"><Lightbulb size={21} aria-hidden="true" /><div><strong>{selectedClue} → {clueDetails[selectedClue][1]}</strong><p>{clueDetails[selectedClue][2]}</p></div></aside>}
      <article className="reading-copy" lang="es">
        <p><strong>Antigua es uno de los municipios con más historia y personalidad en el interior de la isla de Fuerteventura, situada en el archipiélago canario.</strong> Fundado a finales del siglo XV, este pintoresco pueblo combina a la perfección la tranquilidad de la vida rural con un {mark('patrimonio')} {mark('cultural')} muy valioso.</p>
        <p>A {mark('diferencia')} de las ruidosas zonas costeras, que suelen estar {mark('masificadas')} de turistas, aquí las calles son silenciosas y conservan una {mark('arquitectura')} {mark('tradicional')} muy bien cuidada. Paseando por el centro, destacan las típicas viviendas de paredes blancas, los hermosos balcones de madera y los {mark('históricos')} {mark('molinos')} de viento. En el pasado, los {mark('habitantes')} {mark('utilizaban')} estos enormes molinos para moler el grano y hacer gofio, un {mark('alimento')} {mark('básico')} y muy antiguo en la dieta canaria.</p>
        <p>Aunque el {mark('núcleo')} urbano de Antigua no tiene {mark('acceso')} directo al mar, su {mark('ubicación')} en el centro de la isla es una gran {mark('ventaja')}. Desde aquí, es {mark('posible')} {mark('desplazarse')} rápidamente hacia cualquier otro punto {mark('geográfico')}. Por ejemplo, la {mark('famosa')} costa de Caleta de Fuste se encuentra a tan solo un cuarto de hora en coche. Esta cercanía ofrece a los {mark('visitantes')} un {mark('contraste')} {mark('perfecto')}: pueden disfrutar de la paz del campo por la mañana y del {mark('turismo')} de sol y playa, los {mark('deportes')} {mark('náuticos')} y los {mark('restaurantes')} por la tarde.</p>
        <p>Además de su {mark('belleza')} {mark('arquitectónica')}, la zona es {mark('mundialmente')} conocida por su rica {mark('gastronomía')} {mark('local')}. Antigua es el hogar del famoso Queso Majorero, un {mark('producto')} {mark('artesanal')} {mark('delicioso')} que cuenta con {mark('Denominación')} de {mark('Origen')}. Si te {mark('interesa')} la gastronomía, puedes {mark('descubrir')} todos los {mark('secretos')} de su {mark('elaboración')} visitando el {mark('moderno')} {mark('Museo')} del Queso, que está {mark('ubicado')} a las afueras del mismo {mark('municipio')}.</p>
      </article>
    </section>
    <section className="lab-section" id="lab" aria-labelledby="lab-title"><div className="section-heading"><div><p className="eyebrow">02 / GUESSING LAB</p><h2 id="lab-title">Look. Guess. Adjust.</h2></div><Sparkles size={30} aria-hidden="true" /></div><div className="strategy"><div><b>1</b><h3>Look</h3><p>Spot a word shape, ending, or root you recognise.</p></div><div><b>2</b><h3>Guess</h3><p>Make a quick, flexible English reading guess.</p></div><div><b>3</b><h3>Adjust</h3><p>Use the sentence to refine your guess.</p></div></div><div className="guess-grid">{labCards.map(([word, guess, explanation]) => <button key={word} type="button" className="guess-card" aria-expanded={openCard === word} onClick={() => setOpenCard(openCard === word ? null : word)}><span>{word}</span><ChevronDown size={20} aria-hidden="true" className={openCard === word ? 'rotated' : ''} />{openCard === word && <div><strong>Reading guess: {guess}</strong><p>{explanation}</p></div>}</button>)}</div></section>
    <section className="false-friends" aria-labelledby="friends-title"><div><p className="eyebrow">03 / WATCH OUT</p><h2 id="friends-title">False friends</h2><p>Familiar-looking words can point the wrong way. Keep your first guess flexible.</p></div><dl><div><dt>actualmente</dt><dd>currently, not actually</dd></div><div><dt>asistir</dt><dd>to attend, not to assist</dd></div><div><dt>éxito</dt><dd>success, not exit</dd></div><div><dt>sensible</dt><dd>sensitive, not sensible</dd></div><div><dt>realizar</dt><dd>to carry out / do, not to realize</dd></div><div><dt>fábrica</dt><dd>factory, not fabric</dd></div></dl></section>
    <section className="check-section" id="check" aria-labelledby="check-title"><div className="section-heading"><div><p className="eyebrow">04 / QUICK CHECK</p><h2 id="check-title">Test your reading guesses</h2></div><div className="score" aria-live="polite">{score} / {questions.length} correct</div></div><div className="question-list">{questions.map((question, questionIndex) => <fieldset key={question[0]} className="question"><legend>{questionIndex + 1}. {question[0]}</legend>{question[1].map((option, optionIndex) => <label key={option} className={answers[questionIndex] === optionIndex ? (optionIndex === question[2] ? 'correct' : 'incorrect') : ''}><input type="radio" name={`question-${questionIndex}`} checked={answers[questionIndex] === optionIndex} onChange={() => setAnswers({ ...answers, [questionIndex]: optionIndex })} />{option}</label>)}{answers[questionIndex] !== undefined && <p className="feedback"><CheckCircle2 size={18} aria-hidden="true" />{answers[questionIndex] === question[2] ? 'Correct. ' : 'Try again. '}{question[3]}</p>}</fieldset>)}</div><button className="reset" type="button" onClick={() => setAnswers({})}><RotateCcw size={18} aria-hidden="true" /> Reset answers</button></section>
    <footer>Antigua Cognate Reading Lab <span>Read for meaning, not word-for-word perfection.</span></footer>
  </main>
}

export default App
