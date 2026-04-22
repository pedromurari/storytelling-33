import { useState } from "react";

const DEFAULT_CONFIG = {
  turma: "33",
  aula1Link: "https://youtube.com/live/-QhPmq_Jeqs?feature=share",
  aula2Link: "https://youtube.com/live/38HH7C3UAmM?feature=share",
  aula3Link: "https://youtube.com/live/pXdWEuPIeQA?feature=share",
  dataAula1: "28/04",
  dataAula2: "29/04",
  dataAula3: "30/04",
  diaAula1: "terça-feira",
  dias: [
    { date: "19/04 — Domingo",       label: "Faltam 9 dias" },
    { date: "20/04 — Segunda-feira", label: "Faltam 8 dias" },
    { date: "21/04 — Terça-feira",   label: "Faltam 7 dias" },
    { date: "22/04 — Quarta-feira",  label: "Faltam 6 dias" },
    { date: "23/04 — Quinta-feira",  label: "Faltam 5 dias" },
    { date: "24/04 — Sexta-feira",   label: "Faltam 4 dias" },
    { date: "25/04 — Sábado",        label: "Faltam 3 dias" },
    { date: "26/04 — Domingo",       label: "Faltam 2 dias" },
    { date: "27/04 — Segunda-feira", label: "Falta 1 dia • VÉSPERA" },
  ],
};

function buildDays(cfg) {
  const T = cfg.turma;
  const AULA1 = cfg.aula1Link;
  const AULA2 = cfg.aula2Link;
  const AULA3 = cfg.aula3Link;
  const D1 = cfg.dataAula1;
  const D2 = cfg.dataAula2;
  const D3 = cfg.dataAula3;
  const DIA = cfg.diaAula1;

  const aquecimento = [
    {
      messages: [
        { time: "Manhã (~10h)", type: "manha", text: `Excelente dia! ☀️\n\nBem-vindo à Turma ${T} da Semana do Despertar!\n\nVocê deu o primeiro passo ao se inscrever. Agora começa a jornada. Durante os próximos dias, vou te preparar pro que vem aí — e acredita: *vai valer cada minuto*.\n\n📅 Aula 1 — *O Despertar* (${D1})\n📅 Aula 2 — *A Cura* (${D2})\n📅 Aula 3 — *A Revelação* (${D3})\n\nSempre às *20h*, ao vivo no YouTube.\n\n👉 Ativa o lembrete da Aula 1: ${AULA1}\n\nReage com um ❤️ pra eu saber que você tá aqui com a gente!` },
        { time: "Tarde (~14h)", type: "enquete", text: `Excelente tarde! ☀️\n\nUma pergunta rápida antes de começarmos essa jornada juntos:\n\n*Qual é o seu maior interesse na psicanálise?*\n\nSeleciona a opção que mais combina com você 👇\n\nReage com um 💡 nessa mensagem!`, pollTitle: "Qual é o seu maior interesse na psicanálise?", pollOptions: ["Quero me conhecer melhor","Quero ajudar pessoas ao meu redor","Quero atuar como psicanalista","Curiosidade — quero entender como funciona"] },
        { time: "Noite (~20h)", type: "noite", text: `Excelente noite! 🌙\n\nFaltam *9 dias* pra começar a Semana do Despertar — Turma ${T}!\n\nTrês aulas ao vivo que podem mudar a forma como você enxerga a si mesmo e o mundo.\n\n👉 Já ativa o lembrete e deixa o like nas três aulas:\n\n🔗 Aula 1: ${AULA1}\n🔗 Aula 2: ${AULA2}\n🔗 Aula 3: ${AULA3}\n\nReage com um 🔥 se você já tá ansioso pra começar!` },
      ]
    },
    {
      messages: [
        { time: "Manhã (~8h)", type: "manha", text: `Excelente dia! ☀️\n\nVocê sabia que *a maioria dos seus comportamentos de hoje foram decididos na sua infância?*\n\nA psicanálise mostra que carregamos padrões inconscientes que moldam nossas escolhas — nos relacionamentos, no trabalho, na forma como reagimos ao mundo.\n\nNa *Aula 1 — O Despertar*, Rodrygo Murari e Keila Reis vão abrir seus olhos pra isso.\n\n👉 ${AULA1}\n\nReage com um 🤔 se isso fez sentido pra você.` },
        { time: "Tarde (~14h)", type: "enquete", text: `Excelente tarde! ☀️\n\nVamos a mais uma reflexão:\n\n*Você sente que repete padrões nos seus relacionamentos?*\n\nSeleciona a opção que mais te representa 👇\n\nReage com um 💡 nessa mensagem!`, pollTitle: "Você sente que repete padrões nos seus relacionamentos?", pollOptions: ["Sim, sempre caio nas mesmas situações","Às vezes percebo que repito coisas","Não sei, nunca parei pra pensar nisso","Não, sinto que cada relação é diferente"] },
        { time: "Noite (~20h)", type: "noite", text: `Excelente noite! 🌙\n\nFaltam *8 dias* pra Semana do Despertar — Turma ${T}.\n\nEnquanto a maioria das pessoas vai dormir hoje no automático, você já deu o primeiro passo: *decidiu estar aqui*.\n\nIsso já te coloca à frente.\n\n👉 Garante teu lugar na Aula 1: ${AULA1}\n\nReage com um 🚀 se você vai estar ao vivo no dia ${D1}!` },
      ]
    },
    {
      messages: [
        { time: "Manhã (~8h)", type: "manha", text: `Excelente dia! ☀️\n\n*Uma semana.* É o que separa você de uma experiência que pode mudar a forma como você se enxerga.\n\nA maioria das pessoas vive uma vida inteira sem se perguntar: *"Por que eu sou assim?"*\n\nVocê já se perguntou. E por isso está aqui.\n\n👉 ${AULA1}\n\nReage com um 💪 se você tá comprometido com essa jornada!` },
        { time: "Tarde (~14h)", type: "enquete", text: `Excelente tarde! ☀️\n\nReflexão do dia:\n\n*Você acredita que é possível mudar padrões de comportamento que vêm da infância?*\n\nSeleciona a sua resposta 👇\n\nReage com um 🧠 nessa mensagem!`, pollTitle: "Você acredita que é possível mudar padrões de comportamento que vêm da infância?", pollOptions: ["Sim, com autoconhecimento tudo muda","Acho difícil, mas quero acreditar","Não sei, por isso estou aqui","Não, acho que somos quem somos"] },
        { time: "Noite (~20h)", type: "noite", text: `Excelente noite! 🌙\n\nFaltam *7 dias* pra Semana do Despertar — Turma ${T}.\n\nTrês aulas. Três noites. Uma oportunidade de se enxergar de verdade.\n\n📅 Aula 1 — *O Despertar* (${D1})\n📅 Aula 2 — *A Cura* (${D2})\n📅 Aula 3 — *A Revelação* (${D3})\n\n👉 Ativa o lembrete nas três:\n🔗 ${AULA1}\n🔗 ${AULA2}\n🔗 ${AULA3}\n\nReage com um 🔥 se você vai estar nas três aulas!` },
      ]
    },
    {
      messages: [
        { time: "Manhã (~8h)", type: "manha", text: `Excelente dia! ☀️\n\nVocê já parou pra pensar *por que certas pessoas te tiram do sério sem motivo aparente?*\n\nIsso não é fraqueza. É o inconsciente tentando te dizer algo.\n\nNa Semana do Despertar, você vai entender o quê.\n\n👉 ${AULA1}\n\nReage com um 🧿 se isso fez sentido pra você.` },
        { time: "Tarde (~14h)", type: "audio", text: `Excelente tarde! ☀️\n\n🎙️ *Áudio do Prof. Rodrygo Murari:*\n\n_"Excelente, pessoal da Turma ${T}! Aqui é o Rodrygo Murari. Eu quero te fazer uma pergunta: quantas vezes você já disse 'eu não sei por que fiz isso'? Essa pergunta… é o começo de tudo. É a porta de entrada pra psicanálise. Na ${DIA}, dia ${D1}, na Aula 1 — O Despertar, eu e a Keila vamos te mostrar o que está por trás dessas respostas. Te espero lá, ao vivo, às 20h. Ativa o lembrete!"_\n\n👉 ${AULA1}\n\nReage com um ❤️ depois de ouvir!`, note: "Roteiro sugerido — gravar áudio real do Rodrygo" },
        { time: "Noite (~20h)", type: "noite", text: `Excelente noite! 🌙\n\nFaltam *6 dias*.\n\nCada dia que passa é um dia a menos pra você se preparar pro que vem aí.\n\nSepara o caderno. Avisa quem mora com você. Na ${DIA} que vem, às 20h, sua vida pode mudar.\n\n👉 ${AULA1}\n\nReage com um 🚀 se tá pronto!` },
      ]
    },
    {
      messages: [
        { time: "Manhã (~8h)", type: "manha", text: `Excelente dia! ☀️\n\nFreud dizia que *"os sonhos são a estrada real para o inconsciente"*.\n\nMas não é só nos sonhos. Cada vez que você se irrita sem motivo aparente, que sente um medo que não explica, que sabota algo bom na sua vida… *é o inconsciente falando.*\n\nNa Semana do Despertar, você vai aprender a ouvir essa voz.\n\n👉 ${AULA1}\n\nReage com um ✨ se você já percebeu isso acontecendo com você.` },
        { time: "Tarde (~14h)", type: "enquete", text: `Excelente tarde! ☀️\n\nMais uma reflexão pra você:\n\n*Você costuma agir mais pela razão ou pela emoção?*\n\nSeleciona a sua resposta 👇\n\nReage com um 💡 nessa mensagem!`, pollTitle: "Você costuma agir mais pela razão ou pela emoção?", pollOptions: ["Mais pela razão — penso antes de agir","Mais pela emoção — sigo o que sinto","Depende do momento","Não sei — quero entender melhor"] },
        { time: "Noite (~20h)", type: "noite", text: `Excelente noite! 🌙\n\nFaltam *5 dias* pra Semana do Despertar — Turma ${T}.\n\nA cada dia, a gente tá mais perto. E eu quero te garantir uma coisa: *essas 3 aulas vão te surpreender*.\n\n👉 Garante teu lugar: ${AULA1}\n\nReage com um 💪 se você vai estar lá!` },
      ]
    },
    {
      messages: [
        { time: "Manhã (~8h)", type: "manha", text: `Excelente dia! ☀️\n\nFinal de semana chegando. Mas antes de descansar, uma reflexão:\n\n*Quantas vezes você já disse "eu não sei por que fiz isso"?*\n\nEssa pergunta é a porta de entrada da psicanálise. E na ${DIA}, Rodrygo Murari e Keila Reis vão te mostrar o que está por trás dela.\n\n👉 ${AULA1}\n\nReage com um 🤔 se já disse isso.` },
        { time: "Tarde (~14h)", type: "enquete", text: `Excelente tarde! ☀️\n\nÚltima enquete da semana:\n\n*O que mais te impede de se conhecer melhor?*\n\nSeleciona a sua resposta 👇\n\nReage com um 🧠 nessa mensagem!`, pollTitle: "O que mais te impede de se conhecer melhor?", pollOptions: ["Falta de tempo","Medo do que posso descobrir","Não sei por onde começar","Nada — já estou nessa jornada"] },
        { time: "Noite (~20h)", type: "noite", text: `Excelente noite! 🌙\n\nFaltam *4 dias*.\n\nO final de semana tá aí, mas o inconsciente não tira folga. Ele trabalha 24 horas — nos seus sonhos, nos seus medos, nas suas escolhas.\n\n👉 ${AULA1}\n\nReage com um ⏳ se você tá contando os dias!` },
      ]
    },
    {
      messages: [
        { time: "Manhã (~10h)", type: "manha", text: `Excelente dia! ☀️\n\nFinal de semana é quando a maioria para. Mas quem busca autoconhecimento *não tem dia de folga* — porque o inconsciente nunca descansa.\n\nAproveita esse sábado pra se perguntar: *"O que eu estou evitando sentir?"*\n\nNa ${DIA}, a gente vai fundo nessa resposta.\n\n👉 Ativa o lembrete: ${AULA1}\n\nReage com um 💪 se você tá comprometido com essa jornada!` },
        { time: "Tarde (~15h)", type: "enquete", text: `Excelente tarde! ☀️\n\nBora pra mais uma reflexão de sábado:\n\n*O que mais te incomoda nos outros geralmente diz algo sobre você mesmo.* Concorda?\n\nSeleciona a sua resposta 👇\n\nReage com um 🧿 nessa mensagem!`, pollTitle: "O que mais te incomoda nos outros geralmente diz algo sobre você mesmo. Concorda?", pollOptions: ["Concordo totalmente","Faz sentido, mas é difícil de aceitar","Discordo, cada um é cada um","Nunca tinha pensado nisso"] },
        { time: "Noite (~20h)", type: "noite", text: `Excelente noite! 🌙\n\nFaltam *3 dias* pra Semana do Despertar — Turma ${T}.\n\nTrês aulas. Três noites. Uma oportunidade de se enxergar de verdade.\n\n📅 Aula 1 — *O Despertar* (${D1})\n📅 Aula 2 — *A Cura* (${D2})\n📅 Aula 3 — *A Revelação* (${D3})\n\n👉 Ativa o lembrete nas três:\n🔗 ${AULA1}\n🔗 ${AULA2}\n🔗 ${AULA3}\n\nReage com um 🔥 se você vai estar nas três aulas!` },
      ]
    },
    {
      messages: [
        { time: "Manhã (~10h)", type: "manha", text: `Excelente dia! ☀️\n\nDomingo é dia de descanso, mas o inconsciente não descansa. Ele trabalha 24 horas — nos seus sonhos, nos seus medos, nas suas escolhas.\n\n*Você está no controle da sua vida ou está no piloto automático?*\n\nDepois de amanhã, você vai ter a resposta.\n\n👉 ${AULA1}\n\nReage com um 🤔 se essa pergunta te pegou.` },
        { time: "Tarde (~15h)", type: "audio", text: `Excelente tarde! ☀️\n\n🎙️ *Áudio da Profa. Keila Reis:*\n\n_"Excelente, Turma ${T}! Aqui é a Keila Reis. Eu quero te dizer uma coisa: a psicanálise não é sobre ser doente ou ser normal. É sobre ser honesto consigo mesmo. E eu sei que isso dá medo. Mas é exatamente esse medo que mostra que você tá no caminho certo. Na ${DIA} começa a nossa jornada — O Despertar. Eu e o Rodrygo preparamos algo especial pra você. Ativa o lembrete e nos encontramos ao vivo, às 20h!"_\n\n👉 ${AULA1}\n\nReage com um ❤️ depois de ouvir!`, note: "Roteiro sugerido — gravar áudio real da Keila" },
        { time: "Noite (~20h)", type: "noite", text: `Excelente noite! 🌙\n\nFaltam *2 dias*.\n\nAmanhã é o último dia antes de tudo começar.\n\nVocê entrou nesse grupo por um motivo. Talvez ainda não saiba qual. Mas depois da Aula 1, vai saber.\n\n👉 ${AULA1}\n\nReage com um 🚀 se tá pronto!` },
      ]
    },
    {
      messages: [
        { time: "Manhã (~8h)", type: "manha", text: `Excelente dia! ☀️\n\n*Amanhã começa a Semana do Despertar — Turma ${T}.*\n\nTrês aulas ao vivo que vão mexer com tudo o que você acha que sabe sobre si mesmo.\n\nVocê pode continuar vivendo no automático… ou pode escolher *despertar*.\n\nA escolha é sua. Mas o convite tá feito.\n\n👉 Ativa o lembrete da Aula 1: ${AULA1}\n\nReage com um 🙌 se você vai estar lá amanhã!` },
        { time: "Tarde (~14h)", type: "enquete", text: `Excelente tarde! ☀️\n\nAmanhã é o grande dia! Última enquete antes de começar:\n\n*O que você mais espera da Semana do Despertar?*\n\nSeleciona a sua resposta 👇\n\nReage com um 💡 nessa mensagem!`, pollTitle: "O que você mais espera da Semana do Despertar?", pollOptions: ["Entender por que eu sou como sou","Aprender a lidar melhor com as emoções","Descobrir se a psicanálise é pra mim","Transformar minha vida de verdade"] },
        { time: "Noite (~20h)", type: "noite", text: `Excelente noite! 🌙\n\n*AMANHÃ, 20h. Ao vivo.*\n\nAula 1 — *O Despertar*.\n\nSe você ativar só um lembrete na sua vida, que seja esse:\n\n👉 ${AULA1}\n\nE já aproveita pra ativar os lembretes das outras duas:\n🔗 Aula 2 — A Cura: ${AULA2}\n🔗 Aula 3 — A Revelação: ${AULA3}\n\nReage com um 🚀 — amanhã a gente se encontra!` },
      ]
    },
  ];

  const aulaMessages = [
    {
      date: `${D1} — Aula 1`, label: "🔴 AULA 1 — O DESPERTAR",
      messages: [
        { time: "Manhã (~8h)", type: "manha", text: `Excelente dia! ☀️\n\n*HOJE é o dia.*\n\nHoje à noite, às 20h, começa a Aula 1 — *O Despertar*.\n\nRodrygo Murari e Keila Reis vão ao vivo te mostrar o que a maioria das pessoas passa a vida inteira sem perceber.\n\nSepara o caderno. Avisa a família. Hoje você tem um compromisso com você mesmo.\n\n👉 ${AULA1}\n\nReage com um 🔥 se você vai estar lá HOJE!` },
        { time: "Tarde (~14h)", type: "enquete", text: `Excelente tarde! ☀️\n\nHOJE às 20h — *O Despertar*! 🔴\n\nÚltima enquete antes de entrar ao vivo:\n\n*Como você tá se sentindo pra aula de hoje?*\n\nSeleciona a sua resposta 👇\n\nReage com um ✨ nessa mensagem!`, pollTitle: "Como você tá se sentindo pra aula de hoje?", pollOptions: ["Ansioso — mal posso esperar","Curioso — quero ver o que vai rolar","Nervoso — assuntos profundos me mexem","Pronto — bora mudar de vida"] },
        { time: "17h — Faltam 3 horas", type: "contagem", text: `⏰ *Faltam 3 HORAS pra Aula 1 — O Despertar!*\n\nHoje às 20h, ao vivo. Você não vai querer perder o início.\n\n👉 ${AULA1}\n\nReage com um ⏰!` },
        { time: "18h — Faltam 2 horas", type: "contagem", text: `⏰ *Faltam 2 HORAS!*\n\nJá separa o caderno, o fone, e um lugar tranquilo. Essa aula pede atenção total.\n\n👉 ${AULA1}\n\nReage com um 📝!` },
        { time: "19h — Falta 1 hora", type: "contagem", text: `⏰ *Falta 1 HORA pra começar!*\n\nDaqui a 60 minutos, Rodrygo e Keila vão ao vivo.\n\nEssa noite pode ser o ponto de virada que você tava esperando.\n\n👉 ${AULA1}\n\nReage com um 🚀 se já tá se preparando!` },
        { time: "20h — AO VIVO", type: "live", text: `🔴 *ESTAMOS AO VIVO!*\n\nA Aula 1 — *O Despertar* — começou AGORA!\n\nCorre pra não perder o início 👇\n\n👉 ${AULA1}\n\nReage com um ❤️ e entra AGORA!` },
        { time: "20h10 — Provocação 1", type: "provocacao", text: `⚡ A aula já começou e a energia tá absurda!\n\nSe você ainda não entrou, esse é o momento. Vem 👇\n👉 ${AULA1}` },
        { time: "20h20 — Provocação 2", type: "provocacao", text: `🔓 Rodrygo e Keila estão ao vivo AGORA revelando o que poucos têm coragem de falar.\n\nNão deixa pra depois — entra agora 👇\n👉 ${AULA1}` },
        { time: "20h30 — Provocação 3", type: "provocacao", text: `🧠 O ao vivo tem algo que o replay nunca vai te dar: a experiência de viver isso em tempo real.\n\nAinda dá tempo. Entra 👇\n👉 ${AULA1}` },
        { time: "20h40 — Provocação 4 + Sorteio", type: "provocacao", text: `🎁 Atenção! Vai rolar *SORTEIO* pra quem tá ao vivo!\n\nEntra agora e ainda dá tempo de participar 👇\n👉 ${AULA1}` },
      ]
    },
    {
      date: `${D2} — Aula 2`, label: "🔴 AULA 2 — A CURA",
      messages: [
        { time: "Manhã (~8h)", type: "manha", text: `Excelente dia! ☀️\n\nSe a aula de ontem te mexeu, prepara o coração. *Hoje vai mais fundo.*\n\nAula 2 — *A Cura*. Hoje às 20h, ao vivo.\n\nOntem você despertou. Hoje, começa o processo de cura.\n\n👉 ${AULA2}\n\nReage com um 🔥 se a aula de ontem te impactou!` },
        { time: "Tarde (~14h)", type: "enquete", text: `Excelente tarde! ☀️\n\nDepois da Aula 1, quero saber:\n\n*O que mais te marcou em O Despertar?*\n\nSeleciona a opção 👇\n\nReage com um 💡 nessa mensagem!\n\nHoje às 20h — Aula 2, *A Cura* 👇\n👉 ${AULA2}`, pollTitle: "O que mais te marcou em O Despertar?", pollOptions: ["Entendi padrões que eu nem sabia que tinha","Me emocionei — mexeu comigo","Fiquei com vontade de saber mais","Não assisti ainda (vou assistir o replay!)"] },
        { time: "17h — Faltam 3 horas", type: "contagem", text: `⏰ *Faltam 3 HORAS pra Aula 2 — A Cura!*\n\nHoje Rodrygo e Keila vão mais fundo. Se ontem te mexeu, hoje vai transformar.\n\n👉 ${AULA2}\n\nReage com um ⏰!` },
        { time: "18h — Faltam 2 horas", type: "contagem", text: `⏰ *Faltam 2 HORAS!*\n\nCaderno pronto? Essa aula vai exigir coragem. Mas é pra isso que você tá aqui.\n\n👉 ${AULA2}\n\nReage com um 📝!` },
        { time: "19h — Falta 1 hora", type: "contagem", text: `⏰ *Falta 1 HORA pra Aula 2!*\n\nOntem foi o despertar. Hoje começa a cura.\n\n👉 ${AULA2}\n\nReage com um 🚀!` },
        { time: "20h — AO VIVO", type: "live", text: `🔴 *ESTAMOS AO VIVO!*\n\nAula 2 — *A Cura* — começou AGORA!\n\n👉 ${AULA2}\n\nReage com um ❤️ e entra AGORA!` },
        { time: "20h10 — Provocação 1", type: "provocacao", text: `🔥 A Aula 2 já começou e tá intensa!\n\nQuem assistiu ontem sabe: hoje promete ser ainda mais forte. Entra 👇\n👉 ${AULA2}` },
        { time: "20h20 — Provocação 2", type: "provocacao", text: `✨ O chat tá cheio de gente compartilhando o que tá sentindo. Essa aula tá tocando todo mundo.\n\nVem fazer parte disso ao vivo 👇\n👉 ${AULA2}` },
        { time: "20h30 — Provocação 3", type: "provocacao", text: `🚀 Se você perdeu a Aula 1, essa é a chance de entrar na jornada. Se assistiu, precisa ver a continuação.\n\nEntra agora 👇\n👉 ${AULA2}` },
        { time: "20h40 — Provocação 4 + Sorteio", type: "provocacao", text: `🎁 *SORTEIO* acontecendo pra quem tá ao vivo!\n\nEntra e concorre — ainda dá tempo 👇\n👉 ${AULA2}` },
      ]
    },
    {
      date: `${D3} — Aula 3`, label: "🔴 AULA 3 — A REVELAÇÃO",
      messages: [
        { time: "Manhã (~8h)", type: "manha", text: `Excelente dia! ☀️\n\nPrimeiro, você despertou. Depois, iniciou a cura. *Hoje vem a revelação.*\n\nAula 3 — *A Revelação*. Hoje às 20h. A última aula da Semana do Despertar.\n\nEssa é a aula que conecta tudo. Não perca.\n\n👉 ${AULA3}\n\nReage com um 🙌 se você assistiu as duas primeiras!` },
        { time: "Tarde (~14h)", type: "enquete", text: `Excelente tarde! ☀️\n\nÚltima enquete da Semana do Despertar:\n\n*Depois dessas duas aulas, o que mudou em você?*\n\nSeleciona a opção 👇\n\nReage com um 🧠 nessa mensagem!\n\nHoje às 20h — Aula 3, *A Revelação* 👇\n👉 ${AULA3}`, pollTitle: "Depois dessas duas aulas, o que mudou em você?", pollOptions: ["Estou me enxergando de um jeito diferente","Quero estudar psicanálise de verdade","Preciso digerir tudo ainda","Tô pronto pra revelação de hoje!"] },
        { time: "17h — Faltam 3 horas", type: "contagem", text: `⏰ *Faltam 3 HORAS pra última aula — A Revelação!*\n\nEssa é a aula que fecha o ciclo. Despertar → Cura → *Revelação*.\n\n👉 ${AULA3}\n\nReage com um ⏰!` },
        { time: "18h — Faltam 2 horas", type: "contagem", text: `⏰ *Faltam 2 HORAS!*\n\nRodrygo e Keila guardaram o melhor pro final. Essa aula vai te surpreender.\n\n👉 ${AULA3}\n\nReage com um 💪!` },
        { time: "19h — Falta 1 hora", type: "contagem", text: `⏰ *Falta 1 HORA pra Aula 3 — A Revelação!*\n\nÚltima aula. Última chance. Não assista amanhã — assista HOJE, ao vivo.\n\n👉 ${AULA3}\n\nReage com um 🚀!` },
        { time: "20h — AO VIVO", type: "live", text: `🔴 *ESTAMOS AO VIVO — ÚLTIMA AULA!*\n\nAula 3 — *A Revelação* — começou AGORA!\n\nEssa aula pode definir o seu próximo passo. Não perca o início.\n\n👉 ${AULA3}\n\nReage com um ❤️ e entra AGORA!` },
        { time: "20h10 — Provocação 1", type: "provocacao", text: `⚡ A última aula da Semana do Despertar já começou!\n\nSe você acompanhou até aqui, não pode perder o desfecho. Entra 👇\n👉 ${AULA3}` },
        { time: "20h20 — Provocação 2", type: "provocacao", text: `🔑 Essa é a aula que conecta tudo — O Despertar, A Cura e agora A Revelação.\n\nTá acontecendo AGORA. Vem 👇\n👉 ${AULA3}` },
        { time: "20h30 — Provocação 3", type: "provocacao", text: `🌟 Rodrygo e Keila guardaram algo especial pro final. E tá sendo entregue AGORA ao vivo.\n\nEntra antes que termine 👇\n👉 ${AULA3}` },
        { time: "20h40 — Provocação 4 + Sorteio", type: "provocacao", text: `🎁 Último *SORTEIO* da Semana do Despertar!\n\nFica até o final — o encerramento vai valer a pena.\n\n👉 ${AULA3}` },
      ]
    },
  ];

  return cfg.dias.map((d, i) => ({
    date: d.date,
    label: d.label,
    messages: aquecimento[i]?.messages || [],
  })).concat(aulaMessages);
}

// ─── Config Tab ───────────────────────────────────────────────────────────────
function ConfigTab({ config, onSave }) {
  const [form, setForm] = useState(config);
  const [saved, setSaved] = useState(false);

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));
  const setDia = (i, key, val) => setForm(f => {
    const dias = [...f.dias];
    dias[i] = { ...dias[i], [key]: val };
    return { ...f, dias };
  });

  const handleSave = () => {
    onSave(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const field = (label, key, placeholder) => (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>{label}</label>
      <input
        value={form[key]}
        onChange={e => set(key, e.target.value)}
        placeholder={placeholder}
        style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: "1.5px solid #e2e8f0", fontSize: 14, color: "#0f172a", boxSizing: "border-box" }}
      />
    </div>
  );

  return (
    <div style={{ paddingBottom: 40 }}>
      <div style={{ background: "linear-gradient(135deg,#1e293b,#334155)", borderRadius: 14, padding: "20px 22px", marginBottom: 18, color: "#fff" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Configurações</div>
        <h2 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 800 }}>⚙️ Editar Turma & Links</h2>
        <p style={{ margin: 0, fontSize: 12, color: "#94a3b8" }}>Edite e clique em Salvar — todas as mensagens atualizam automaticamente.</p>
      </div>

      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 20px", marginBottom: 14 }}>
        <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#0f172a" }}>📋 Dados da Turma</h3>
        {field("Número da Turma", "turma", "Ex: 34")}
        {field("Dia da semana da Aula 1", "diaAula1", "Ex: terça-feira")}
      </div>

      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 20px", marginBottom: 14 }}>
        <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#0f172a" }}>📅 Datas das Aulas</h3>
        {field("Data da Aula 1 — O Despertar", "dataAula1", "Ex: 28/04")}
        {field("Data da Aula 2 — A Cura", "dataAula2", "Ex: 29/04")}
        {field("Data da Aula 3 — A Revelação", "dataAula3", "Ex: 30/04")}
      </div>

      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 20px", marginBottom: 14 }}>
        <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#0f172a" }}>🔗 Links das Aulas (YouTube)</h3>
        {field("Link da Aula 1 — O Despertar", "aula1Link", "https://youtube.com/live/...")}
        {field("Link da Aula 2 — A Cura", "aula2Link", "https://youtube.com/live/...")}
        {field("Link da Aula 3 — A Revelação", "aula3Link", "https://youtube.com/live/...")}
      </div>

      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 20px", marginBottom: 20 }}>
        <h3 style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 700, color: "#0f172a" }}>🗓️ Cronograma de Aquecimento</h3>
        <p style={{ margin: "0 0 14px", fontSize: 12, color: "#64748b" }}>9 dias antes da Aula 1. Edite as datas e os labels de cada linha.</p>
        <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
          <span style={{ flex: 2, fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase" }}>Data + Dia da semana</span>
          <span style={{ flex: 1, fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase" }}>Label</span>
        </div>
        {form.dias.map((d, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <input value={d.date} onChange={e => setDia(i, "date", e.target.value)} style={{ flex: 2, padding: "7px 10px", borderRadius: 7, border: "1.5px solid #e2e8f0", fontSize: 13, color: "#0f172a" }} />
            <input value={d.label} onChange={e => setDia(i, "label", e.target.value)} style={{ flex: 1, padding: "7px 10px", borderRadius: 7, border: "1.5px solid #e2e8f0", fontSize: 13, color: "#0f172a" }} />
          </div>
        ))}
      </div>

      <button onClick={handleSave} style={{
        width: "100%", padding: "14px 0",
        background: saved ? "#22c55e" : "#0369a1",
        color: "#fff", border: "none", borderRadius: 10,
        fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "background 0.2s"
      }}>
        {saved ? "✓ Salvo! Todas as mensagens foram atualizadas." : "💾 Salvar e atualizar todas as mensagens"}
      </button>
    </div>
  );
}

// ─── UI ───────────────────────────────────────────────────────────────────────
const typeColors = {
  manha:     { bg: "rgba(251,191,36,0.1)",  border: "#f59e0b", label: "MANHÃ",      labelBg: "#f59e0b" },
  enquete:   { bg: "rgba(99,102,241,0.1)",  border: "#6366f1", label: "ENQUETE",    labelBg: "#6366f1" },
  noite:     { bg: "rgba(99,102,241,0.08)", border: "#4f46e5", label: "NOITE",      labelBg: "#4f46e5" },
  audio:     { bg: "rgba(236,72,153,0.1)",  border: "#ec4899", label: "ÁUDIO",      labelBg: "#ec4899" },
  contagem:  { bg: "rgba(245,158,11,0.15)", border: "#f59e0b", label: "CONTAGEM",   labelBg: "#d97706" },
  live:      { bg: "rgba(239,68,68,0.15)",  border: "#ef4444", label: "AO VIVO",    labelBg: "#ef4444" },
  provocacao:{ bg: "rgba(239,68,68,0.1)",   border: "#ef4444", label: "PROVOCAÇÃO", labelBg: "#dc2626" },
};

function CopyBtn({ text, label, small }) {
  const [copied, setCopied] = useState(false);
  const doCopy = async () => {
    try { await navigator.clipboard.writeText(text); } catch {
      const ta = document.createElement("textarea"); ta.value = text;
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
    }
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button onClick={doCopy} style={{
      background: copied ? "#22c55e" : small ? "#e0e7ff" : "#1e293b",
      color: copied ? "#fff" : small ? "#4338ca" : "#fff",
      border: "none", borderRadius: small ? 5 : 6,
      padding: small ? "3px 8px" : "5px 12px",
      fontSize: small ? 11 : 12, fontWeight: 600, cursor: "pointer",
      transition: "all 0.2s", whiteSpace: "nowrap", flexShrink: 0,
    }}>
      {copied ? "✓ Copiado!" : `📋 ${label || "Copiar"}`}
    </button>
  );
}

function PollBlock({ pollTitle, pollOptions }) {
  return (
    <div style={{ background: "linear-gradient(135deg,#eef2ff,#e0e7ff)", border: "1px solid #c7d2fe", borderRadius: 10, padding: "14px 16px", marginTop: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>📊 Enquete — Copie o título e cada opção</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, background: "#fff", border: "2px solid #a5b4fc", borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#6366f1", textTransform: "uppercase" }}>Título da enquete</span>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: "#1e293b", marginTop: 3 }}>{pollTitle}</div>
        </div>
        <CopyBtn text={pollTitle} label="Copiar" small />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {pollOptions.map((opt, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #ddd6fe", borderRadius: 7, padding: "8px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
              <span style={{ background: "#6366f1", color: "#fff", width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
              <span style={{ fontSize: 13, color: "#334155" }}>{opt}</span>
            </div>
            <CopyBtn text={opt} label="Copiar" small />
          </div>
        ))}
      </div>
    </div>
  );
}

function MessageCard({ msg }) {
  const style = typeColors[msg.type] || typeColors.manha;
  return (
    <div style={{ background: style.bg, border: `1px solid ${style.border}33`, borderLeft: `4px solid ${style.border}`, borderRadius: 12, padding: "16px 18px", marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ background: style.labelBg, color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4, textTransform: "uppercase" }}>{style.label}</span>
          <span style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>{msg.time}</span>
        </div>
        <CopyBtn text={msg.text} label="Copiar texto" />
      </div>
      <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", fontFamily: "'Segoe UI', system-ui, sans-serif", fontSize: 13.5, lineHeight: 1.65, color: "#1e293b", margin: 0, background: "rgba(255,255,255,0.5)", padding: 14, borderRadius: 8 }}>{msg.text}</pre>
      {msg.pollTitle && msg.pollOptions && <PollBlock pollTitle={msg.pollTitle} pollOptions={msg.pollOptions} />}
      {msg.note && <p style={{ fontSize: 11, color: "#94a3b8", fontStyle: "italic", margin: "8px 0 0" }}>ℹ️ {msg.note}</p>}
    </div>
  );
}

function DaySection({ day, isOpen, onToggle }) {
  const isLive = day.label.includes("🔴");
  return (
    <div style={{ marginBottom: 14, border: isLive ? "2px solid #ef4444" : "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden", background: "#fff", boxShadow: isLive ? "0 0 20px rgba(239,68,68,0.1)" : "0 1px 3px rgba(0,0,0,0.04)" }}>
      <button onClick={onToggle} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: isLive ? "linear-gradient(135deg,#fef2f2,#fff1f2)" : "linear-gradient(135deg,#f8fafc,#f1f5f9)", border: "none", cursor: "pointer", textAlign: "left" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{day.date}</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: isLive ? "#ef4444" : "#6366f1", marginTop: 2 }}>{day.label}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ background: "#e2e8f0", borderRadius: 12, padding: "2px 8px", fontSize: 11, fontWeight: 600, color: "#475569" }}>{day.messages.length} msgs</span>
          <span style={{ fontSize: 16, color: "#94a3b8", transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
        </div>
      </button>
      {isOpen && <div style={{ padding: "14px 16px" }}>{day.messages.map((msg, i) => <MessageCard key={i} msg={msg} />)}</div>}
    </div>
  );
}

export default function App() {
  const [tab, setTab]       = useState("mensagens");
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [openDays, setOpenDays] = useState({ 0: true });

  const days = buildDays(config);
  const totalMsgs = days.reduce((sum, d) => sum + d.messages.length, 0);

  const toggleDay   = (i) => setOpenDays(prev => ({ ...prev, [i]: !prev[i] }));
  const expandAll   = () => { const a = {}; days.forEach((_, i) => (a[i] = true)); setOpenDays(a); };
  const collapseAll = () => setOpenDays({});

  const tabBtn = (t, icon, txt) => (
    <button onClick={() => setTab(t)} style={{
      flex: 1, padding: "10px 0", border: "none", borderRadius: 8,
      fontSize: 13, fontWeight: 700, cursor: "pointer",
      background: tab === t ? "#0369a1" : "transparent",
      color: tab === t ? "#fff" : "#64748b",
      transition: "all 0.15s",
    }}>{icon} {txt}</button>
  );

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#0c4a6e,#0369a1,#0284c7)", borderRadius: 16, padding: "22px 24px 18px", marginBottom: 14, color: "#fff", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ fontSize: 10, fontWeight: 700, color: "#7dd3fc", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3 }}>Storytelling Completo</div>
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 2px" }}>Turma {config.turma}</h1>
        <p style={{ fontSize: 12, color: "#bae6fd", margin: "0 0 12px" }}>Semana do Despertar — Psicanálise</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
          {[{ n: days.length, l: "Dias" }, { n: totalMsgs, l: "Mensagens" }, { n: 3, l: "Aulas" }].map((s, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.12)", borderRadius: 8, padding: "6px 14px" }}>
              <div style={{ fontSize: 17, fontWeight: 800 }}>{s.n}</div>
              <div style={{ fontSize: 9, color: "#bae6fd", textTransform: "uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 6, background: "#f1f5f9", borderRadius: 10, padding: 4, marginBottom: 16 }}>
        {tabBtn("mensagens", "📋", "Mensagens")}
        {tabBtn("config", "⚙️", "Configurar Turma")}
      </div>

      {tab === "config" && <ConfigTab config={config} onSave={setConfig} />}

      {tab === "mensagens" && (
        <>
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "10px 14px", marginBottom: 12, fontSize: 12, color: "#166534", lineHeight: 1.6 }}>
            <strong>📌 Resumo:</strong> Aulas {config.dataAula1}, {config.dataAula2} e {config.dataAula3} às 20h · Rodrygo Murari & Keila Reis · Turma {config.turma}
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <button onClick={expandAll}   style={{ flex: 1, padding: "8px 0", background: "#0369a1", color: "#fff", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Abrir todos</button>
            <button onClick={collapseAll} style={{ flex: 1, padding: "8px 0", background: "#e2e8f0", color: "#475569", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Fechar todos</button>
          </div>
          {days.map((day, i) => <DaySection key={i} day={day} isOpen={!!openDays[i]} onToggle={() => toggleDay(i)} />)}
        </>
      )}

      <div style={{ textAlign: "center", padding: "18px 0 6px", fontSize: 11, color: "#94a3b8" }}>
        Turma {config.turma} — Semana do Despertar · Rodrygo Murari & Keila Reis
      </div>
    </div>
  );
}
