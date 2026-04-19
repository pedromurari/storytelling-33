import { useState } from "react";

const AULA1 = "https://youtube.com/live/-QhPmq_Jeqs?feature=share";
const AULA2 = "https://youtube.com/live/38HH7C3UAmM?feature=share";
const AULA3 = "https://youtube.com/live/pXdWEuPIeQA?feature=share";
const T = "33";

const DAYS = [
  {
    date: "19/04 — Domingo",
    label: "Faltam 9 dias",
    messages: [
      {
        time: "Manhã (~10h)",
        type: "manha",
        text: `Excelente dia! ☀️

Bem-vindo à Turma ${T} da Semana do Despertar!

Você deu o primeiro passo ao se inscrever. Agora começa a jornada. Durante os próximos dias, vou te preparar pro que vem aí — e acredita: *vai valer cada minuto*.

📅 Aula 1 — *O Despertar* (28/04)
📅 Aula 2 — *A Cura* (29/04)
📅 Aula 3 — *A Revelação* (30/04)

Sempre às *20h*, ao vivo no YouTube.

👉 Ativa o lembrete da Aula 1: ${AULA1}

Reage com um ❤️ pra eu saber que você tá aqui com a gente!`
      },
      {
        time: "Tarde (~14h)",
        type: "enquete",
        text: `Excelente tarde! ☀️

Uma pergunta rápida antes de começarmos essa jornada juntos:

*Qual é o seu maior interesse na psicanálise?*

Seleciona a opção que mais combina com você 👇

Reage com um 💡 nessa mensagem!`,
        pollTitle: "Qual é o seu maior interesse na psicanálise?",
        pollOptions: [
          "Quero me conhecer melhor",
          "Quero ajudar pessoas ao meu redor",
          "Quero atuar como psicanalista",
          "Curiosidade — quero entender como funciona"
        ]
      },
      {
        time: "Noite (~20h)",
        type: "noite",
        text: `Excelente noite! 🌙

Faltam *9 dias* pra começar a Semana do Despertar — Turma ${T}!

Três aulas ao vivo que podem mudar a forma como você enxerga a si mesmo e o mundo.

👉 Já ativa o lembrete e deixa o like nas três aulas:

🔗 Aula 1: ${AULA1}
🔗 Aula 2: ${AULA2}
🔗 Aula 3: ${AULA3}

Reage com um 🔥 se você já tá ansioso pra começar!`
      }
    ]
  },
  {
    date: "20/04 — Segunda-feira",
    label: "Faltam 8 dias",
    messages: [
      {
        time: "Manhã (~8h)",
        type: "manha",
        text: `Excelente dia! ☀️

Você sabia que *a maioria dos seus comportamentos de hoje foram decididos na sua infância?*

A psicanálise mostra que carregamos padrões inconscientes que moldam nossas escolhas — nos relacionamentos, no trabalho, na forma como reagimos ao mundo.

Na *Aula 1 — O Despertar*, Rodrygo Murari e Jocimarah Anjos vão abrir seus olhos pra isso.

👉 ${AULA1}

Reage com um 🤔 se isso fez sentido pra você.`
      },
      {
        time: "Tarde (~14h)",
        type: "enquete",
        text: `Excelente tarde! ☀️

Vamos a mais uma reflexão:

*Você sente que repete padrões nos seus relacionamentos?*

Seleciona a opção que mais te representa 👇

Reage com um 💡 nessa mensagem!`,
        pollTitle: "Você sente que repete padrões nos seus relacionamentos?",
        pollOptions: [
          "Sim, sempre caio nas mesmas situações",
          "Às vezes percebo que repito coisas",
          "Não sei, nunca parei pra pensar nisso",
          "Não, sinto que cada relação é diferente"
        ]
      },
      {
        time: "Noite (~20h)",
        type: "noite",
        text: `Excelente noite! 🌙

Faltam *8 dias* pra Semana do Despertar — Turma ${T}.

Enquanto a maioria das pessoas vai dormir hoje no automático, você já deu o primeiro passo: *decidiu estar aqui*.

Isso já te coloca à frente.

👉 Garante teu lugar na Aula 1: ${AULA1}

Reage com um 🚀 se você vai estar ao vivo no dia 28!`
      }
    ]
  },
  {
    date: "21/04 — Terça-feira",
    label: "Faltam 7 dias",
    messages: [
      {
        time: "Manhã (~8h)",
        type: "manha",
        text: `Excelente dia! ☀️

*Uma semana.* É o que separa você de uma experiência que pode mudar a forma como você se enxerga.

A maioria das pessoas vive uma vida inteira sem se perguntar: *"Por que eu sou assim?"*

Você já se perguntou. E por isso está aqui.

👉 ${AULA1}

Reage com um 💪 se você tá comprometido com essa jornada!`
      },
      {
        time: "Tarde (~14h)",
        type: "enquete",
        text: `Excelente tarde! ☀️

Reflexão do dia:

*Você acredita que é possível mudar padrões de comportamento que vêm da infância?*

Seleciona a sua resposta 👇

Reage com um 🧠 nessa mensagem!`,
        pollTitle: "Você acredita que é possível mudar padrões de comportamento que vêm da infância?",
        pollOptions: [
          "Sim, com autoconhecimento tudo muda",
          "Acho difícil, mas quero acreditar",
          "Não sei, por isso estou aqui",
          "Não, acho que somos quem somos"
        ]
      },
      {
        time: "Noite (~20h)",
        type: "noite",
        text: `Excelente noite! 🌙

Faltam *7 dias* pra Semana do Despertar — Turma ${T}.

Três aulas. Três noites. Uma oportunidade de se enxergar de verdade.

📅 Aula 1 — *O Despertar* (28/04)
📅 Aula 2 — *A Cura* (29/04)
📅 Aula 3 — *A Revelação* (30/04)

👉 Ativa o lembrete nas três:
🔗 ${AULA1}
🔗 ${AULA2}
🔗 ${AULA3}

Reage com um 🔥 se você vai estar nas três aulas!`
      }
    ]
  },
  {
    date: "22/04 — Quarta-feira",
    label: "Faltam 6 dias",
    messages: [
      {
        time: "Manhã (~8h)",
        type: "manha",
        text: `Excelente dia! ☀️

Você já parou pra pensar *por que certas pessoas te tiram do sério sem motivo aparente?*

Isso não é fraqueza. É o inconsciente tentando te dizer algo.

Na Semana do Despertar, você vai entender o quê.

👉 ${AULA1}

Reage com um 🧿 se isso fez sentido pra você.`
      },
      {
        time: "Tarde (~14h)",
        type: "audio",
        text: `Excelente tarde! ☀️

🎙️ *Áudio do Prof. Rodrygo Murari:*

_"Excelente, pessoal da Turma ${T}! Aqui é o Rodrygo Murari. Eu quero te fazer uma pergunta: quantas vezes você já disse 'eu não sei por que fiz isso'? Essa pergunta… é o começo de tudo. É a porta de entrada pra psicanálise. Na terça-feira, dia 28, na Aula 1 — O Despertar, eu e a Jocimarah vamos te mostrar o que está por trás dessas respostas. Te espero lá, ao vivo, às 20h. Ativa o lembrete!"_

👉 ${AULA1}

Reage com um ❤️ depois de ouvir!`,
        note: "Roteiro sugerido — gravar áudio real do Rodrygo"
      },
      {
        time: "Noite (~20h)",
        type: "noite",
        text: `Excelente noite! 🌙

Faltam *6 dias*.

Cada dia que passa é um dia a menos pra você se preparar pro que vem aí.

Separa o caderno. Avisa quem mora com você. Na terça que vem, às 20h, sua vida pode mudar.

👉 ${AULA1}

Reage com um 🚀 se tá pronto!`
      }
    ]
  },
  {
    date: "23/04 — Quinta-feira",
    label: "Faltam 5 dias",
    messages: [
      {
        time: "Manhã (~8h)",
        type: "manha",
        text: `Excelente dia! ☀️

Freud dizia que *"os sonhos são a estrada real para o inconsciente"*.

Mas não é só nos sonhos. Cada vez que você se irrita sem motivo aparente, que sente um medo que não explica, que sabota algo bom na sua vida… *é o inconsciente falando.*

Na Semana do Despertar, você vai aprender a ouvir essa voz.

👉 ${AULA1}

Reage com um ✨ se você já percebeu isso acontecendo com você.`
      },
      {
        time: "Tarde (~14h)",
        type: "enquete",
        text: `Excelente tarde! ☀️

Mais uma reflexão pra você:

*Você costuma agir mais pela razão ou pela emoção?*

Seleciona a sua resposta 👇

Reage com um 💡 nessa mensagem!`,
        pollTitle: "Você costuma agir mais pela razão ou pela emoção?",
        pollOptions: [
          "Mais pela razão — penso antes de agir",
          "Mais pela emoção — sigo o que sinto",
          "Depende do momento",
          "Não sei — quero entender melhor"
        ]
      },
      {
        time: "Noite (~20h)",
        type: "noite",
        text: `Excelente noite! 🌙

Faltam *5 dias* pra Semana do Despertar — Turma ${T}.

A cada dia, a gente tá mais perto. E eu quero te garantir uma coisa: *essas 3 aulas vão te surpreender*.

👉 Garante teu lugar: ${AULA1}

Reage com um 💪 se você vai estar lá!`
      }
    ]
  },
  {
    date: "24/04 — Sexta-feira",
    label: "Faltam 4 dias",
    messages: [
      {
        time: "Manhã (~8h)",
        type: "manha",
        text: `Excelente dia! ☀️

Final de semana chegando. Mas antes de descansar, uma reflexão:

*Quantas vezes você já disse "eu não sei por que fiz isso"?*

Essa pergunta é a porta de entrada da psicanálise. E na terça, Rodrygo Murari e Jocimarah Anjos vão te mostrar o que está por trás dela.

👉 ${AULA1}

Reage com um 🤔 se já disse isso.`
      },
      {
        time: "Tarde (~14h)",
        type: "enquete",
        text: `Excelente tarde! ☀️

Última enquete da semana:

*O que mais te impede de se conhecer melhor?*

Seleciona a sua resposta 👇

Reage com um 🧠 nessa mensagem!`,
        pollTitle: "O que mais te impede de se conhecer melhor?",
        pollOptions: [
          "Falta de tempo",
          "Medo do que posso descobrir",
          "Não sei por onde começar",
          "Nada — já estou nessa jornada"
        ]
      },
      {
        time: "Noite (~20h)",
        type: "noite",
        text: `Excelente noite! 🌙

Faltam *4 dias*.

O final de semana tá aí, mas o inconsciente não tira folga. Ele trabalha 24 horas — nos seus sonhos, nos seus medos, nas suas escolhas.

👉 ${AULA1}

Reage com um ⏳ se você tá contando os dias!`
      }
    ]
  },
  {
    date: "25/04 — Sábado",
    label: "Faltam 3 dias",
    messages: [
      {
        time: "Manhã (~10h)",
        type: "manha",
        text: `Excelente dia! ☀️

Final de semana é quando a maioria para. Mas quem busca autoconhecimento *não tem dia de folga* — porque o inconsciente nunca descansa.

Aproveita esse sábado pra se perguntar: *"O que eu estou evitando sentir?"*

Na terça, a gente vai fundo nessa resposta.

👉 Ativa o lembrete: ${AULA1}

Reage com um 💪 se você tá comprometido com essa jornada!`
      },
      {
        time: "Tarde (~15h)",
        type: "enquete",
        text: `Excelente tarde! ☀️

Bora pra mais uma reflexão de sábado:

*O que mais te incomoda nos outros geralmente diz algo sobre você mesmo.* Concorda?

Seleciona a sua resposta 👇

Reage com um 🧿 nessa mensagem!`,
        pollTitle: "O que mais te incomoda nos outros geralmente diz algo sobre você mesmo. Concorda?",
        pollOptions: [
          "Concordo totalmente",
          "Faz sentido, mas é difícil de aceitar",
          "Discordo, cada um é cada um",
          "Nunca tinha pensado nisso"
        ]
      },
      {
        time: "Noite (~20h)",
        type: "noite",
        text: `Excelente noite! 🌙

Faltam *3 dias* pra Semana do Despertar — Turma ${T}.

Três aulas. Três noites. Uma oportunidade de se enxergar de verdade.

📅 Aula 1 — *O Despertar* (28/04)
📅 Aula 2 — *A Cura* (29/04)
📅 Aula 3 — *A Revelação* (30/04)

👉 Ativa o lembrete nas três:
🔗 ${AULA1}
🔗 ${AULA2}
🔗 ${AULA3}

Reage com um 🔥 se você vai estar nas três aulas!`
      }
    ]
  },
  {
    date: "26/04 — Domingo",
    label: "Faltam 2 dias",
    messages: [
      {
        time: "Manhã (~10h)",
        type: "manha",
        text: `Excelente dia! ☀️

Domingo é dia de descanso, mas o inconsciente não descansa. Ele trabalha 24 horas — nos seus sonhos, nos seus medos, nas suas escolhas.

*Você está no controle da sua vida ou está no piloto automático?*

Depois de amanhã, você vai ter a resposta.

👉 ${AULA1}

Reage com um 🤔 se essa pergunta te pegou.`
      },
      {
        time: "Tarde (~15h)",
        type: "audio",
        text: `Excelente tarde! ☀️

🎙️ *Áudio da Profa. Jocimarah Anjos:*

_"Excelente, Turma ${T}! Aqui é a Jocimarah Anjos. Eu quero te dizer uma coisa: a psicanálise não é sobre ser doente ou ser normal. É sobre ser honesto consigo mesmo. E eu sei que isso dá medo. Mas é exatamente esse medo que mostra que você tá no caminho certo. Na terça começa a nossa jornada — O Despertar. Eu e o Rodrygo preparamos algo especial pra você. Ativa o lembrete e nos encontramos ao vivo, às 20h!"_

👉 ${AULA1}

Reage com um ❤️ depois de ouvir!`,
        note: "Roteiro sugerido — gravar áudio real da Jocimarah"
      },
      {
        time: "Noite (~20h)",
        type: "noite",
        text: `Excelente noite! 🌙

Faltam *2 dias*.

Amanhã é o último dia antes de tudo começar.

Você entrou nesse grupo por um motivo. Talvez ainda não saiba qual. Mas depois da Aula 1, vai saber.

👉 ${AULA1}

Reage com um 🚀 se tá pronto!`
      }
    ]
  },
  {
    date: "27/04 — Segunda-feira",
    label: "Falta 1 dia • VÉSPERA",
    messages: [
      {
        time: "Manhã (~8h)",
        type: "manha",
        text: `Excelente dia! ☀️

*Amanhã começa a Semana do Despertar — Turma ${T}.*

Três aulas ao vivo que vão mexer com tudo o que você acha que sabe sobre si mesmo.

Você pode continuar vivendo no automático… ou pode escolher *despertar*.

A escolha é sua. Mas o convite tá feito.

👉 Ativa o lembrete da Aula 1: ${AULA1}

Reage com um 🙌 se você vai estar lá amanhã!`
      },
      {
        time: "Tarde (~14h)",
        type: "enquete",
        text: `Excelente tarde! ☀️

Amanhã é o grande dia! Última enquete antes de começar:

*O que você mais espera da Semana do Despertar?*

Seleciona a sua resposta 👇

Reage com um 💡 nessa mensagem!`,
        pollTitle: "O que você mais espera da Semana do Despertar?",
        pollOptions: [
          "Entender por que eu sou como sou",
          "Aprender a lidar melhor com as emoções",
          "Descobrir se a psicanálise é pra mim",
          "Transformar minha vida de verdade"
        ]
      },
      {
        time: "Noite (~20h)",
        type: "noite",
        text: `Excelente noite! 🌙

*AMANHÃ, 20h. Ao vivo.*

Aula 1 — *O Despertar*.

Se você ativar só um lembrete na sua vida, que seja esse:

👉 ${AULA1}

E já aproveita pra ativar os lembretes das outras duas:
🔗 Aula 2 — A Cura: ${AULA2}
🔗 Aula 3 — A Revelação: ${AULA3}

Reage com um 🚀 — amanhã a gente se encontra!`
      }
    ]
  },
  {
    date: "28/04 — Terça-feira",
    label: "🔴 AULA 1 — O DESPERTAR",
    messages: [
      {
        time: "Manhã (~8h)",
        type: "manha",
        text: `Excelente dia! ☀️

*HOJE é o dia.*

Hoje à noite, às 20h, começa a Aula 1 — *O Despertar*.

Rodrygo Murari e Jocimarah Anjos vão ao vivo te mostrar o que a maioria das pessoas passa a vida inteira sem perceber.

Separa o caderno. Avisa a família. Hoje você tem um compromisso com você mesmo.

👉 ${AULA1}

Reage com um 🔥 se você vai estar lá HOJE!`
      },
      {
        time: "Tarde (~14h)",
        type: "enquete",
        text: `Excelente tarde! ☀️

HOJE às 20h — *O Despertar*! 🔴

Última enquete antes de entrar ao vivo:

*Como você tá se sentindo pra aula de hoje?*

Seleciona a sua resposta 👇

Reage com um ✨ nessa mensagem!`,
        pollTitle: "Como você tá se sentindo pra aula de hoje?",
        pollOptions: [
          "Ansioso — mal posso esperar",
          "Curioso — quero ver o que vai rolar",
          "Nervoso — assuntos profundos me mexem",
          "Pronto — bora mudar de vida"
        ]
      },
      {
        time: "17h — Faltam 3 horas",
        type: "contagem",
        text: `⏰ *Faltam 3 HORAS pra Aula 1 — O Despertar!*

Hoje às 20h, ao vivo. Você não vai querer perder o início.

👉 ${AULA1}

Reage com um ⏰!`
      },
      {
        time: "18h — Faltam 2 horas",
        type: "contagem",
        text: `⏰ *Faltam 2 HORAS!*

Já separa o caderno, o fone, e um lugar tranquilo. Essa aula pede atenção total.

👉 ${AULA1}

Reage com um 📝!`
      },
      {
        time: "19h — Falta 1 hora",
        type: "contagem",
        text: `⏰ *Falta 1 HORA pra começar!*

Daqui a 60 minutos, Rodrygo e Jocimarah vão ao vivo.

Essa noite pode ser o ponto de virada que você tava esperando.

👉 ${AULA1}

Reage com um 🚀 se já tá se preparando!`
      },
      {
        time: "20h — AO VIVO",
        type: "live",
        text: `🔴 *ESTAMOS AO VIVO!*

A Aula 1 — *O Despertar* — começou AGORA!

Corre pra não perder o início 👇

👉 ${AULA1}

Reage com um ❤️ e entra AGORA!`
      },
      {
        time: "20h10 — Provocação 1",
        type: "provocacao",
        text: `⚡ A aula já começou e a energia tá absurda!

Se você ainda não entrou, esse é o momento. Vem 👇
👉 ${AULA1}`
      },
      {
        time: "20h20 — Provocação 2",
        type: "provocacao",
        text: `🔓 Rodrygo e Jocimarah estão ao vivo AGORA revelando o que poucos têm coragem de falar.

Não deixa pra depois — entra agora 👇
👉 ${AULA1}`
      },
      {
        time: "20h30 — Provocação 3",
        type: "provocacao",
        text: `🧠 O ao vivo tem algo que o replay nunca vai te dar: a experiência de viver isso em tempo real.

Ainda dá tempo. Entra 👇
👉 ${AULA1}`
      },
      {
        time: "20h40 — Provocação 4 + Sorteio",
        type: "provocacao",
        text: `🎁 Atenção! Vai rolar *SORTEIO* pra quem tá ao vivo!

Entra agora e ainda dá tempo de participar 👇
👉 ${AULA1}`
      }
    ]
  },
  {
    date: "29/04 — Quarta-feira",
    label: "🔴 AULA 2 — A CURA",
    messages: [
      {
        time: "Manhã (~8h)",
        type: "manha",
        text: `Excelente dia! ☀️

Se a aula de ontem te mexeu, prepara o coração. *Hoje vai mais fundo.*

Aula 2 — *A Cura*. Hoje às 20h, ao vivo.

Ontem você despertou. Hoje, começa o processo de cura.

👉 ${AULA2}

Reage com um 🔥 se a aula de ontem te impactou!`
      },
      {
        time: "Tarde (~14h)",
        type: "enquete",
        text: `Excelente tarde! ☀️

Depois da Aula 1, quero saber:

*O que mais te marcou em O Despertar?*

Seleciona a opção 👇

Reage com um 💡 nessa mensagem!

Hoje às 20h — Aula 2, *A Cura* 👇
👉 ${AULA2}`,
        pollTitle: "O que mais te marcou em O Despertar?",
        pollOptions: [
          "Entendi padrões que eu nem sabia que tinha",
          "Me emocionei — mexeu comigo",
          "Fiquei com vontade de saber mais",
          "Não assisti ainda (vou assistir o replay!)"
        ]
      },
      {
        time: "17h — Faltam 3 horas",
        type: "contagem",
        text: `⏰ *Faltam 3 HORAS pra Aula 2 — A Cura!*

Hoje Rodrygo e Jocimarah vão mais fundo. Se ontem te mexeu, hoje vai transformar.

👉 ${AULA2}

Reage com um ⏰!`
      },
      {
        time: "18h — Faltam 2 horas",
        type: "contagem",
        text: `⏰ *Faltam 2 HORAS!*

Caderno pronto? Essa aula vai exigir coragem. Mas é pra isso que você tá aqui.

👉 ${AULA2}

Reage com um 📝!`
      },
      {
        time: "19h — Falta 1 hora",
        type: "contagem",
        text: `⏰ *Falta 1 HORA pra Aula 2!*

Ontem foi o despertar. Hoje começa a cura.

👉 ${AULA2}

Reage com um 🚀!`
      },
      {
        time: "20h — AO VIVO",
        type: "live",
        text: `🔴 *ESTAMOS AO VIVO!*

Aula 2 — *A Cura* — começou AGORA!

👉 ${AULA2}

Reage com um ❤️ e entra AGORA!`
      },
      {
        time: "20h10 — Provocação 1",
        type: "provocacao",
        text: `🔥 A Aula 2 já começou e tá intensa!

Quem assistiu ontem sabe: hoje promete ser ainda mais forte. Entra 👇
👉 ${AULA2}`
      },
      {
        time: "20h20 — Provocação 2",
        type: "provocacao",
        text: `✨ O chat tá cheio de gente compartilhando o que tá sentindo. Essa aula tá tocando todo mundo.

Vem fazer parte disso ao vivo 👇
👉 ${AULA2}`
      },
      {
        time: "20h30 — Provocação 3",
        type: "provocacao",
        text: `🚀 Se você perdeu a Aula 1, essa é a chance de entrar na jornada. Se assistiu, precisa ver a continuação.

Entra agora 👇
👉 ${AULA2}`
      },
      {
        time: "20h40 — Provocação 4 + Sorteio",
        type: "provocacao",
        text: `🎁 *SORTEIO* acontecendo pra quem tá ao vivo!

Entra e concorre — ainda dá tempo 👇
👉 ${AULA2}`
      }
    ]
  },
  {
    date: "30/04 — Quinta-feira",
    label: "🔴 AULA 3 — A REVELAÇÃO",
    messages: [
      {
        time: "Manhã (~8h)",
        type: "manha",
        text: `Excelente dia! ☀️

Primeiro, você despertou. Depois, iniciou a cura. *Hoje vem a revelação.*

Aula 3 — *A Revelação*. Hoje às 20h. A última aula da Semana do Despertar.

Essa é a aula que conecta tudo. Não perca.

👉 ${AULA3}

Reage com um 🙌 se você assistiu as duas primeiras!`
      },
      {
        time: "Tarde (~14h)",
        type: "enquete",
        text: `Excelente tarde! ☀️

Última enquete da Semana do Despertar:

*Depois dessas duas aulas, o que mudou em você?*

Seleciona a opção 👇

Reage com um 🧠 nessa mensagem!

Hoje às 20h — Aula 3, *A Revelação* 👇
👉 ${AULA3}`,
        pollTitle: "Depois dessas duas aulas, o que mudou em você?",
        pollOptions: [
          "Estou me enxergando de um jeito diferente",
          "Quero estudar psicanálise de verdade",
          "Preciso digerir tudo ainda",
          "Tô pronto pra revelação de hoje!"
        ]
      },
      {
        time: "17h — Faltam 3 horas",
        type: "contagem",
        text: `⏰ *Faltam 3 HORAS pra última aula — A Revelação!*

Essa é a aula que fecha o ciclo. Despertar → Cura → *Revelação*.

👉 ${AULA3}

Reage com um ⏰!`
      },
      {
        time: "18h — Faltam 2 horas",
        type: "contagem",
        text: `⏰ *Faltam 2 HORAS!*

Rodrygo e Jocimarah guardaram o melhor pro final. Essa aula vai te surpreender.

👉 ${AULA3}

Reage com um 💪!`
      },
      {
        time: "19h — Falta 1 hora",
        type: "contagem",
        text: `⏰ *Falta 1 HORA pra Aula 3 — A Revelação!*

Última aula. Última chance. Não assista amanhã — assista HOJE, ao vivo.

👉 ${AULA3}

Reage com um 🚀!`
      },
      {
        time: "20h — AO VIVO",
        type: "live",
        text: `🔴 *ESTAMOS AO VIVO — ÚLTIMA AULA!*

Aula 3 — *A Revelação* — começou AGORA!

Essa aula pode definir o seu próximo passo. Não perca o início.

👉 ${AULA3}

Reage com um ❤️ e entra AGORA!`
      },
      {
        time: "20h10 — Provocação 1",
        type: "provocacao",
        text: `⚡ A última aula da Semana do Despertar já começou!

Se você acompanhou até aqui, não pode perder o desfecho. Entra 👇
👉 ${AULA3}`
      },
      {
        time: "20h20 — Provocação 2",
        type: "provocacao",
        text: `🔑 Essa é a aula que conecta tudo — O Despertar, A Cura e agora A Revelação.

Tá acontecendo AGORA. Vem 👇
👉 ${AULA3}`
      },
      {
        time: "20h30 — Provocação 3",
        type: "provocacao",
        text: `🌟 Rodrygo e Jocimarah guardaram algo especial pro final. E tá sendo entregue AGORA ao vivo.

Entra antes que termine 👇
👉 ${AULA3}`
      },
      {
        time: "20h40 — Provocação 4 + Sorteio",
        type: "provocacao",
        text: `🎁 Último *SORTEIO* da Semana do Despertar!

Fica até o final — o encerramento vai valer a pena.

👉 ${AULA3}`
      }
    ]
  }
];

const typeColors = {
  manha: { bg: "rgba(251, 191, 36, 0.1)", border: "#f59e0b", label: "MANHÃ", labelBg: "#f59e0b" },
  enquete: { bg: "rgba(99, 102, 241, 0.1)", border: "#6366f1", label: "ENQUETE", labelBg: "#6366f1" },
  noite: { bg: "rgba(99, 102, 241, 0.08)", border: "#4f46e5", label: "NOITE", labelBg: "#4f46e5" },
  audio: { bg: "rgba(236, 72, 153, 0.1)", border: "#ec4899", label: "ÁUDIO", labelBg: "#ec4899" },
  contagem: { bg: "rgba(245, 158, 11, 0.15)", border: "#f59e0b", label: "CONTAGEM", labelBg: "#d97706" },
  live: { bg: "rgba(239, 68, 68, 0.15)", border: "#ef4444", label: "AO VIVO", labelBg: "#ef4444" },
  provocacao: { bg: "rgba(239, 68, 68, 0.1)", border: "#ef4444", label: "PROVOCAÇÃO", labelBg: "#dc2626" },
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
    <div style={{ background: "linear-gradient(135deg, #eef2ff, #e0e7ff)", border: "1px solid #c7d2fe", borderRadius: 10, padding: "14px 16px", marginTop: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>📊 Enquete — Copie o título e cada opção</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, background: "#fff", border: "2px solid #a5b4fc", borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.05em" }}>Título da enquete</span>
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
          <span style={{ background: style.labelBg, color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>{style.label}</span>
          <span style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>{msg.time}</span>
        </div>
        <CopyBtn text={msg.text} label="Copiar texto" />
      </div>
      <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", fontFamily: "'Segoe UI', system-ui, sans-serif", fontSize: 13.5, lineHeight: 1.65, color: "#1e293b", margin: 0, background: "rgba(255,255,255,0.5)", padding: 14, borderRadius: 8 }}>{msg.text}</pre>
      {msg.pollTitle && msg.pollOptions && <PollBlock pollTitle={msg.pollTitle} pollOptions={msg.pollOptions} />}
      {msg.note && <p style={{ fontSize: 11, color: "#94a3b8", fontStyle: "italic", margin: "8px 0 0", paddingLeft: 4 }}>ℹ️ {msg.note}</p>}
    </div>
  );
}

function DaySection({ day, isOpen, onToggle }) {
  const isLive = day.label.includes("🔴");
  return (
    <div style={{ marginBottom: 16, border: isLive ? "2px solid #ef4444" : "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden", background: "#fff", boxShadow: isLive ? "0 0 20px rgba(239,68,68,0.12)" : "0 1px 4px rgba(0,0,0,0.04)" }}>
      <button onClick={onToggle} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: isLive ? "linear-gradient(135deg, #fef2f2, #fff1f2)" : "linear-gradient(135deg, #f8fafc, #f1f5f9)", border: "none", cursor: "pointer", textAlign: "left" }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{day.date}</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: isLive ? "#ef4444" : "#6366f1", marginTop: 2 }}>{day.label}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ background: "#e2e8f0", borderRadius: 12, padding: "2px 8px", fontSize: 11, fontWeight: 600, color: "#475569" }}>{day.messages.length} msgs</span>
          <span style={{ fontSize: 18, color: "#94a3b8", transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
        </div>
      </button>
      {isOpen && <div style={{ padding: "14px 16px" }}>{day.messages.map((msg, i) => <MessageCard key={i} msg={msg} />)}</div>}
    </div>
  );
}

export default function App() {
  const [openDays, setOpenDays] = useState({ 0: true });
  const toggleDay = (i) => setOpenDays((prev) => ({ ...prev, [i]: !prev[i] }));
  const expandAll = () => { const all = {}; DAYS.forEach((_, i) => { all[i] = true; }); setOpenDays(all); };
  const collapseAll = () => setOpenDays({});
  const totalMsgs = DAYS.reduce((sum, d) => sum + d.messages.length, 0);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #0c4a6e, #0369a1, #0284c7)", borderRadius: 16, padding: "28px 24px", marginBottom: 20, color: "#fff", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: -20, left: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ fontSize: 13, fontWeight: 600, color: "#7dd3fc", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Storytelling Completo</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.02em" }}>Turma {T}</h1>
        <p style={{ fontSize: 14, color: "#bae6fd", margin: "0 0 14px" }}>Semana do Despertar — Psicanálise</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          {[{ n: DAYS.length, l: "Dias" }, { n: totalMsgs, l: "Mensagens" }, { n: 3, l: "Aulas" }].map((s, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.12)", borderRadius: 8, padding: "8px 14px" }}>
              <div style={{ fontSize: 20, fontWeight: 800 }}>{s.n}</div>
              <div style={{ fontSize: 10, color: "#bae6fd", textTransform: "uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "12px 16px", marginBottom: 16, fontSize: 12.5, color: "#166534", lineHeight: 1.6 }}>
        <strong>📌 Resumo:</strong> Aulas 28 (ter), 29 (qua) e 30/04 (qui) às 20h · Professores: Rodrygo Murari e Jocimarah Anjos · Mantra: "Excelente" · Grupo fechado (só seleciona enquete + reação)
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={expandAll} style={{ flex: 1, padding: "8px 0", background: "#0369a1", color: "#fff", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Abrir todos</button>
        <button onClick={collapseAll} style={{ flex: 1, padding: "8px 0", background: "#e2e8f0", color: "#475569", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Fechar todos</button>
      </div>
      {DAYS.map((day, i) => <DaySection key={i} day={day} isOpen={!!openDays[i]} onToggle={() => toggleDay(i)} />)}
      <div style={{ textAlign: "center", padding: "20px 0 8px", fontSize: 11, color: "#94a3b8" }}>Turma {T} — Semana do Despertar · Rodrygo Murari & Jocimarah Anjos</div>
    </div>
  );
}
