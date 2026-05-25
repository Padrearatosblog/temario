const questionBank = [
  {
    type: "multi",
    topic: "Atributos del producto",
    question: "Segun el temario, el producto en marketing se entiende como...",
    options: [
      "Un instrumento capaz de satisfacer una necesidad o deseo.",
      "Solo un bien fisico que se puede vender en tienda.",
      "Un precio unido a una campana publicitaria.",
      "Un servicio postventa sin componentes tangibles."
    ],
    correct: 0,
    explanation: "El temario parte del producto como instrumento de marketing capaz de satisfacer necesidades o deseos."
  },
  {
    type: "vf",
    topic: "Atributos del producto",
    question: "Los atributos de un producto pueden ser tangibles e intangibles.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "El producto esta formado por atributos tangibles e intangibles que le permiten ser usado o intercambiado."
  },
  {
    type: "multi",
    topic: "Atributos del producto",
    question: "Cual de estos elementos aparece como atributo del producto?",
    options: [
      "La marca, la imagen, el packaging, la calidad y los servicios incluidos.",
      "Solo el coste de fabricacion.",
      "Unicamente el canal de distribucion.",
      "La competencia directa, sin relacion con el producto."
    ],
    correct: 0,
    explanation: "El temario enumera precio, marca, imagen, presentacion, servicios, calidad y componentes tecnicos, entre otros."
  },
  {
    type: "multi",
    topic: "Dimensiones del producto",
    question: "Kotler distingue tres dimensiones del producto. Cuales son?",
    options: [
      "Producto basico, producto ampliado y producto total.",
      "Producto estrella, interrogante y vaca lechera.",
      "Producto generico, esperado, aumentado y potencial.",
      "Producto tangible, industrial y de conveniencia."
    ],
    correct: 0,
    explanation: "Kotler distingue producto basico, ampliado y total."
  },
  {
    type: "multi",
    topic: "Dimensiones del producto",
    question: "En el concepto de producto total de Levitt, que indica el producto potencial?",
    options: [
      "El recorrido de la oferta y las mejoras posibles para mantener satisfaccion y fidelizar.",
      "La necesidad fundamental buscada por el comprador.",
      "Los beneficios que el comprador considera habituales.",
      "El precio minimo que permite competir."
    ],
    correct: 0,
    explanation: "Levitt define el producto potencial como recorrido y mejoras futuras de la oferta comercial."
  },
  {
    type: "vf",
    topic: "Dimensiones del producto",
    question: "El producto aumentado de Levitt incluye mejoras para diferenciarse de la competencia.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "El producto aumentado son mejoras que fabricantes o distribuidores incorporan para satisfacer mejor y diferenciarse."
  },
  {
    type: "multi",
    topic: "Clases de productos",
    question: "Los bienes de consumo son...",
    options: [
      "Los que compran los consumidores finales para su propio uso o el de su circulo.",
      "Materias primas destinadas siempre a transformacion industrial.",
      "Ideas sin soporte fisico ni comercial.",
      "Servicios aplicados solo a empresas."
    ],
    correct: 0,
    explanation: "El temario define los bienes de consumo por su compra para uso final propio o del entorno cercano."
  },
  {
    type: "multi",
    topic: "Clases de productos",
    question: "Que caracteriza a los bienes de conveniencia?",
    options: [
      "Se usan habitualmente y requieren minimo esfuerzo de compra.",
      "Exigen gran busqueda de informacion y comparacion.",
      "Solo se compran por empresas industriales.",
      "Siempre son productos de lujo."
    ],
    correct: 0,
    explanation: "Los bienes de conveniencia son habituales y su decision de compra implica poco esfuerzo."
  },
  {
    type: "vf",
    topic: "Clases de productos",
    question: "Los bienes industriales pueden incluir materias primas, equipamiento, componentes e instalaciones.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "El temario divide los bienes industriales segun su uso: materias primas, equipamiento, componentes e instalaciones."
  },
  {
    type: "multi",
    topic: "Gama y linea",
    question: "Que es la gama o cartera de productos?",
    options: [
      "El conjunto de articulos o servicios que una empresa puede proporcionar a los consumidores.",
      "La parte visual de una marca.",
      "El registro legal de signos distintivos.",
      "La fase final del ciclo de vida."
    ],
    correct: 0,
    explanation: "La gama o cartera es el conjunto de articulos o servicios disponibles de la empresa."
  },
  {
    type: "multi",
    topic: "Gama y linea",
    question: "Las lineas de productos estan formadas por articulos o servicios que...",
    options: [
      "Comparten caracteristicas comunes como marca, envase, color, componentes o proceso.",
      "No tienen relacion entre si.",
      "Solo se venden en la fase de declive.",
      "No pueden formar parte de una cartera."
    ],
    correct: 0,
    explanation: "Una linea agrupa productos con caracteristicas comunes."
  },
  {
    type: "vf",
    topic: "Gama y linea",
    question: "Ampliar la gama puede ayudar a diversificar riesgo y aumentar alcance de mercado.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "El temario relaciona gama y linea con alcance de mercado, diversificacion del riesgo, productividad y ventaja competitiva."
  },
  {
    type: "multi",
    topic: "Diferenciacion",
    question: "La diferenciacion del producto consiste en...",
    options: [
      "Resaltar atributos para que el producto o empresa sea percibido como unico.",
      "Bajar siempre el precio por debajo de la competencia.",
      "Eliminar todos los servicios postventa.",
      "Usar cualquier cambio aunque el comprador no lo perciba."
    ],
    correct: 0,
    explanation: "La diferenciacion busca que atributos relevantes sean percibidos y apreciados por el mercado."
  },
  {
    type: "vf",
    topic: "Diferenciacion",
    question: "Segun el temario, es recomendable centrarse en un factor diferenciador por credibilidad y claridad.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "Se recomienda centrarse en un factor diferenciador para evitar confusion y reforzar credibilidad."
  },
  {
    type: "multi",
    topic: "Diferenciacion",
    question: "Cual de estos factores puede usarse para diferenciar un producto?",
    options: [
      "Estetica, diseno, marca, publicidad, garantia y servicio postventa.",
      "Ocultar informacion al comprador.",
      "Reducir la seguridad de uso.",
      "Eliminar recambios y suministros."
    ],
    correct: 0,
    explanation: "El temario lista caracteristicas fisicas, diseno, envase, marca, publicidad, garantia, recambios y servicio postventa."
  },
  {
    type: "multi",
    topic: "Marca",
    question: "La marca se define como...",
    options: [
      "Nombre, signo, simbolo o combinacion con diseno especifico y diferente.",
      "Solo el precio final de un producto.",
      "La fase de crecimiento del ciclo de vida.",
      "Unicamente la etiqueta legal del envase."
    ],
    correct: 0,
    explanation: "El temario define la marca como nombre, signo, simbolo o combinacion con diseno especifico y distintivo."
  },
  {
    type: "multi",
    topic: "Marca",
    question: "Que es el imagotipo dentro de una marca?",
    options: [
      "La parte representada mediante simbolos, letras, imagenes o dibujos con diseno y colores distintivos.",
      "La parte que se pronuncia obligatoriamente.",
      "La garantia legal de diez anos.",
      "El conjunto de precios promocionales."
    ],
    correct: 0,
    explanation: "El imagotipo es la representacion visual distintiva de la marca."
  },
  {
    type: "vf",
    topic: "Marca",
    question: "La finalidad de la marca incluye identificar y diferenciar el producto.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "La marca identifica el producto y sirve para diferenciarlo con base racional o emocional."
  },
  {
    type: "multi",
    topic: "Marca",
    question: "Segun el temario, una estrategia de marca puede ser...",
    options: [
      "Marca unica, multiple, de linea o segunda marca.",
      "Solo producto basico y producto total.",
      "Conciencia, interes, evaluacion y prueba.",
      "Alta categoria y penetracion selectiva."
    ],
    correct: 0,
    explanation: "En estrategias de marca aparecen marca unica, multiple, de linea y segunda marca, entre combinaciones posibles."
  },
  {
    type: "multi",
    topic: "Postventa",
    question: "Los servicios postventa forman parte de...",
    options: [
      "Los atributos del producto y pueden servir para diferenciar y fidelizar.",
      "La clasificacion legal del nomenclator.",
      "La fase de generacion de ideas.",
      "La matriz BCG exclusivamente."
    ],
    correct: 0,
    explanation: "El temario los situa dentro de los atributos del producto, con funcion de diferenciacion y fidelizacion."
  },
  {
    type: "vf",
    topic: "Postventa",
    question: "La venta termina siempre cuando se cierra el trato y se hace efectiva.",
    options: ["Verdadero", "Falso"],
    correct: 1,
    explanation: "El temario recalca que el objetivo de la venta no acaba al cerrar el trato; puede iniciar una relacion duradera."
  },
  {
    type: "multi",
    topic: "Postventa",
    question: "Un servicio postventa puede ayudar a que el cliente...",
    options: [
      "Perciba preocupacion, confianza y una relacion mas humana con la organizacion.",
      "No pueda quejarse ni aportar reaccion.",
      "Compre sin identificar a la empresa.",
      "Ignore la especializacion de la organizacion."
    ],
    correct: 0,
    explanation: "El temario destaca confianza, humanizacion, escucha de quejas y satisfaccion."
  },
  {
    type: "multi",
    topic: "Naming",
    question: "El naming agrupa tecnicas y metodos para...",
    options: [
      "Crear el nombre de una marca.",
      "Registrar una patente industrial.",
      "Retirar productos en declive.",
      "Medir la cuota de mercado."
    ],
    correct: 0,
    explanation: "Naming es el proceso de creacion del nombre de marca."
  },
  {
    type: "multi",
    topic: "Naming",
    question: "Un buen nombre de marca, segun el temario, deberia ser...",
    options: [
      "Coherente, distintivo, evocador, facil de recordar, leer y pronunciar.",
      "Largo, dificil de pronunciar y poco registrable.",
      "Temporal y cerrado al crecimiento.",
      "Igual al de la competencia para facilitar asociacion."
    ],
    correct: 0,
    explanation: "El decalogo menciona coherencia, historia, distincion, atemporalidad, evocacion, notoriedad, credibilidad y facilidad."
  },
  {
    type: "vf",
    topic: "Naming",
    question: "El temario recomienda comprobar los nombres viendolos escritos y escuchandolos en voz alta.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "Verlos escritos y oirlos en voz alta se plantea como prueba sencilla antes de elegir."
  },
  {
    type: "multi",
    topic: "Branding",
    question: "El branding toma el relevo del naming porque trabaja sobre...",
    options: [
      "La carga visual y de comunicacion de la marca.",
      "La retirada legal del producto.",
      "El precio de penetracion selectiva.",
      "La clasificacion de bienes industriales."
    ],
    correct: 0,
    explanation: "El temario separa naming por su carga sonora/lectura y branding por la comunicacion visual de la marca."
  },
  {
    type: "vf",
    topic: "Branding",
    question: "Coherencia, diferenciacion, flexibilidad, adaptabilidad, recuerdo y apariencia pueden ser atributos a valorar en branding.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "Estos aspectos aparecen como criterios o atributos de evaluacion del branding."
  },
  {
    type: "multi",
    topic: "Registro y proteccion",
    question: "La proteccion legal de marcas se manifiesta principalmente a traves de...",
    options: [
      "El Registro de la Propiedad Industrial y su regulacion legal.",
      "La matriz BCG.",
      "El mapa de posicionamiento.",
      "La estrategia de desarrollo de demanda."
    ],
    correct: 0,
    explanation: "El temario vincula la proteccion de marcas al Registro de la Propiedad Industrial."
  },
  {
    type: "multi",
    topic: "Registro y proteccion",
    question: "Que es el Nomenclator en este tema?",
    options: [
      "Una clasificacion internacional de productos y servicios en 45 clases.",
      "Una fase del proceso de adopcion.",
      "Un tipo de bien de conveniencia.",
      "Un metodo creativo para generar ideas."
    ],
    correct: 0,
    explanation: "El Nomenclator clasifica productos y servicios en 45 clases con miles de referencias."
  },
  {
    type: "vf",
    topic: "Registro y proteccion",
    question: "Una marca concedida se otorga por 10 anos y puede renovarse por periodos sucesivos de 10 anos.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "El temario indica una concesion inicial de 10 anos y renovaciones sucesivas de 10 anos."
  },
  {
    type: "multi",
    topic: "Ciclo de vida",
    question: "Las cuatro fases del ciclo de vida del producto son...",
    options: [
      "Introduccion, crecimiento, madurez y declive.",
      "Conciencia, interes, evaluacion y adopcion.",
      "Basico, ampliado, total y potencial.",
      "Naming, branding, registro y proteccion."
    ],
    correct: 0,
    explanation: "El ciclo de vida se divide en introduccion, crecimiento, madurez y declive."
  },
  {
    type: "multi",
    topic: "Ciclo de vida",
    question: "En la fase de introduccion suele ocurrir que...",
    options: [
      "Se venden pocas unidades, hay incertidumbre y se busca estimular la prueba.",
      "El mercado esta saturado y las ventas se estancan.",
      "Los beneficios alcanzan su maximo.",
      "La oferta supera claramente a la demanda."
    ],
    correct: 0,
    explanation: "En introduccion hay pocos compradores, ventas lentas e inversiones para estimular la prueba."
  },
  {
    type: "multi",
    topic: "Ciclo de vida",
    question: "En la fase de madurez, el temario indica que...",
    options: [
      "El mercado esta saturado, las ventas son elevadas pero se estancan.",
      "No existen competidores.",
      "Los ingresos no cubren nunca los costes.",
      "Se completa siempre la primera compra."
    ],
    correct: 0,
    explanation: "La madurez es una etapa larga, con mercado saturado, ventas elevadas y estancamiento."
  },
  {
    type: "vf",
    topic: "Ciclo de vida",
    question: "En declive, las ventas disminuyen por cambios de comportamiento u obsolescencia del producto.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "El declive aparece cuando el producto pierde aceptacion, por cambios de comportamiento u obsolescencia."
  },
  {
    type: "multi",
    topic: "Proceso de adopcion",
    question: "La adopcion de un producto se completa con...",
    options: [
      "La primera compra o compras de repeticion, o su uso si es un servicio.",
      "El registro en la OAMI.",
      "La eleccion del imagotipo.",
      "La retirada de canales menos rentables."
    ],
    correct: 0,
    explanation: "Adopcion es la aceptacion del producto en el mercado y se completa con compra o uso."
  },
  {
    type: "multi",
    topic: "Proceso de adopcion",
    question: "Orden correcto de etapas del proceso de adopcion:",
    options: [
      "Conciencia, interes, evaluacion, prueba y adopcion.",
      "Prueba, conciencia, adopcion, interes y evaluacion.",
      "Introduccion, crecimiento, madurez y declive.",
      "Generacion, filtrado, test y comercializacion."
    ],
    correct: 0,
    explanation: "El temario enumera conciencia, interes, evaluacion, prueba y adopcion."
  },
  {
    type: "vf",
    topic: "Proceso de adopcion",
    question: "La rapidez de adopcion puede depender del riesgo personal, la complejidad, la mejora relativa, los sustitutivos, la compatibilidad y el esfuerzo comercial.",
    options: ["Verdadero", "Falso"],
    correct: 0,
    explanation: "Esos factores aparecen como claves para analizar la rapidez o lentitud de adopcion."
  }
];

const state = {
  questions: prepareQuestions(questionBank),
  current: 0,
  answers: new Map(),
  filter: "all"
};

const els = {
  totalQuestions: document.querySelector("#totalQuestions"),
  progressText: document.querySelector("#progressText"),
  scoreText: document.querySelector("#scoreText"),
  progressFill: document.querySelector("#progressFill"),
  questionTopic: document.querySelector("#questionTopic"),
  questionType: document.querySelector("#questionType"),
  questionText: document.querySelector("#questionText"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#feedback"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackText: document.querySelector("#feedbackText"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  startBtn: document.querySelector("#startBtn"),
  shuffleBtn: document.querySelector("#shuffleBtn"),
  filters: document.querySelectorAll(".filter"),
  resultCard: document.querySelector("#resultCard"),
  rightCount: document.querySelector("#rightCount"),
  wrongCount: document.querySelector("#wrongCount"),
  percentCount: document.querySelector("#percentCount"),
  resultTitle: document.querySelector("#resultTitle"),
  resultAdvice: document.querySelector("#resultAdvice"),
  wrongReview: document.querySelector("#wrongReview"),
  wrongList: document.querySelector("#wrongList"),
  retryWrongBtn: document.querySelector("#retryWrongBtn"),
  restartBtn: document.querySelector("#restartBtn")
};

function shuffle(array) {
  return array
    .map((item) => ({ item, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ item }) => item);
}

function prepareQuestions(questions) {
  return questions.map((question) => {
    const shuffledOptions = shuffle(
      question.options.map((text, originalIndex) => ({ text, originalIndex }))
    );

    return {
      ...question,
      shuffledOptions
    };
  });
}

function applyFilter(filter) {
  state.filter = filter;
  state.current = 0;
  state.answers.clear();
  const filteredQuestions = filter === "all"
    ? questionBank
    : questionBank.filter((question) => question.type === filter);
  state.questions = prepareQuestions(filteredQuestions);
  els.filters.forEach((button) => button.classList.toggle("is-active", button.dataset.filter === filter));
  els.resultCard.hidden = true;
  render();
}

function render() {
  const total = state.questions.length;
  const question = state.questions[state.current];
  const answered = state.answers.get(state.current);
  const right = getScore().right;

  els.totalQuestions.textContent = total;
  els.progressText.textContent = `Pregunta ${state.current + 1} de ${total}`;
  els.scoreText.textContent = `${right} aciertos`;
  els.progressFill.style.width = `${((state.current + 1) / total) * 100}%`;
  els.questionTopic.textContent = question.topic;
  els.questionType.textContent = question.type === "vf" ? "Verdadero / Falso" : "4 opciones";
  els.questionText.textContent = question.question;
  els.answers.innerHTML = "";

  question.shuffledOptions.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = option.text;
    button.disabled = answered !== undefined;

    if (answered !== undefined) {
      if (option.originalIndex === question.correct) button.classList.add("is-correct");
      if (option.originalIndex === answered && answered !== question.correct) button.classList.add("is-wrong");
    }

    button.addEventListener("click", () => selectAnswer(option.originalIndex));
    els.answers.appendChild(button);
  });

  els.feedback.hidden = answered === undefined;
  if (answered !== undefined) {
    const isCorrect = answered === question.correct;
    els.feedbackTitle.textContent = isCorrect ? "Correcto" : "Incorrecto";
    els.feedbackText.textContent = question.explanation;
  }

  els.prevBtn.disabled = state.current === 0;
  els.nextBtn.textContent = state.current === total - 1 ? "Ver resultado" : "Siguiente";
}

function selectAnswer(index) {
  state.answers.set(state.current, index);
  render();
}

function getScore() {
  let right = 0;
  let wrong = 0;

  state.questions.forEach((question, index) => {
    const selected = state.answers.get(index);
    if (selected === undefined) return;
    if (selected === question.correct) right += 1;
    else wrong += 1;
  });

  return { right, wrong };
}

function showResults() {
  const { right, wrong } = getScore();
  const totalAnswered = right + wrong;
  const pending = state.questions.length - totalAnswered;
  const percent = Math.round((right / state.questions.length) * 100);

  els.rightCount.textContent = right;
  els.wrongCount.textContent = wrong + pending;
  els.percentCount.textContent = `${percent}%`;
  els.resultTitle.textContent = pending > 0 ? "Test terminado con preguntas sin responder" : "Test completado";

  if (percent >= 85) {
    els.resultAdvice.textContent = "Muy buen dominio del tema. Repasa solo las falladas para afianzar definiciones exactas.";
  } else if (percent >= 60) {
    els.resultAdvice.textContent = "Base correcta, pero conviene repetir las preguntas falladas y fijar conceptos de marca, ciclo de vida y adopcion.";
  } else {
    els.resultAdvice.textContent = "Hace falta una segunda vuelta. Empieza por las definiciones y despues practica las preguntas de aplicacion.";
  }

  els.resultCard.hidden = false;
  renderWrongReview();
  els.resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getWrongQuestions() {
  return state.questions
    .map((question, index) => ({
      number: index + 1,
      question,
      selected: state.answers.get(index)
    }))
    .filter((item) => item.selected !== item.question.correct);
}

function renderWrongReview() {
  const wrongQuestions = getWrongQuestions();
  els.wrongReview.hidden = wrongQuestions.length === 0;
  els.wrongList.innerHTML = "";
  els.wrongList.className = "wrong-list";

  wrongQuestions.forEach((item) => {
    const selectedText = item.selected === undefined ? "Sin responder" : item.question.options[item.selected];
    const correctText = item.question.options[item.question.correct];
    const article = document.createElement("article");
    article.className = "wrong-item";
    article.innerHTML = `
      <div class="wrong-item__top">
        <span>Pregunta ${item.number}</span>
        <span>${item.question.topic}</span>
      </div>
      <strong>${item.question.question}</strong>
      <div class="wrong-answer">
        <span><b>Tu respuesta:</b> <span class="bad">${selectedText}</span></span>
        <span><b>Correcta:</b> <span class="good">${correctText}</span></span>
        <span>${item.question.explanation}</span>
      </div>
    `;
    els.wrongList.appendChild(article);
  });
}

function nextQuestion() {
  if (state.current < state.questions.length - 1) {
    state.current += 1;
    render();
    return;
  }
  showResults();
}

function previousQuestion() {
  if (state.current > 0) {
    state.current -= 1;
    render();
  }
}

function restart(questions = questionBank, filter = "all") {
  state.questions = prepareQuestions(questions);
  state.current = 0;
  state.answers.clear();
  state.filter = filter;
  els.filters.forEach((button) => button.classList.toggle("is-active", button.dataset.filter === filter));
  els.resultCard.hidden = true;
  render();
  document.querySelector("#quizCard").scrollIntoView({ behavior: "smooth", block: "start" });
}

function retryWrong() {
  const wrongQuestions = getWrongQuestions().map((item) => item.question);

  if (wrongQuestions.length === 0) return;
  restart(wrongQuestions);
}

els.nextBtn.addEventListener("click", nextQuestion);
els.prevBtn.addEventListener("click", previousQuestion);
els.startBtn.addEventListener("click", () => document.querySelector("#quizCard").scrollIntoView({ behavior: "smooth", block: "start" }));
els.shuffleBtn.addEventListener("click", () => restart(shuffle(state.questions), state.filter));
els.restartBtn.addEventListener("click", () => restart(questionBank));
els.retryWrongBtn.addEventListener("click", retryWrong);
els.filters.forEach((button) => button.addEventListener("click", () => applyFilter(button.dataset.filter)));

render();
