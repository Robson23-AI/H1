// --- Tworzenie widgetu
document.addEventListener("DOMContentLoaded", () => {
  const chatWidget = document.createElement("div");
  chatWidget.id = "chat-api-widget";
  chatWidget.innerHTML = `
    <div id="chat-toggle"><span>🤖</span> Chętnie Cię oprowadzę 🧭</div>
    <div id="chat-box">
      <div id="chat-header">Asystent H1 2025</div>
      <div id="chat-messages"></div>
      <div id="chat-questions">
        <button data-q="Opowiedz o Next Action Tool">Next Action Tool</button>
        <button data-q="Czym jest Quick Share App?">Quick Share App</button>
        <button data-q="Jakie szkolenia przeprowadzono?">Szkolenia zespołu</button>
        <button data-q="Jakie szkolenia ukończył Robert?">Rozwój Roberta</button>
        <button data-q="Co nowego planowane na H2?">Nowości H2</button>
        <button data-q="Kim jest Robert?">O Robercie</button>
      </div>
    </div>
  `;
  document.body.appendChild(chatWidget);

  // --- Styl widgetu
  const style = document.createElement("style");
  style.textContent = `
    #chat-api-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      font-family: 'Inter', sans-serif;
    }

    #chat-toggle {
      background: #0078D7;
      color: white;
      padding: 10px 16px;
      border-radius: 24px;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      transition: background 0.2s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    #chat-toggle span {
      font-size: 1.2rem;
    }

    #chat-box {
      display: none;
      width: 360px;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      padding: 16px;
      margin-top: 10px;
      background: #ffffff;
    }

    #chat-header {
      background-color: #0078D7;
      color: white;
      font-weight: 600;
      text-align: center;
      padding: 8px;
      border-radius: 8px;
      margin-bottom: 12px;
    }

    #chat-questions button {
      background: #0078D7;
      color: white;
      border: none;
      padding: 10px 14px;
      border-radius: 20px;
      font-weight: 500;
      font-size: 0.9rem;
      cursor: pointer;
      margin: 4px 0;
      width: 100%;
      transition: background 0.2s ease;
    }

    #chat-questions button:hover {
      background: #005fa3;
    }

    #chat-messages {
      font-size: 0.9rem;
      max-height: 180px;
      overflow-y: auto;
      background: #f1f9ff;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    #chat-messages p {
      margin: 6px 0;
      line-height: 1.4;
      background: #ffffff !important;
      color: #000 !important;
      padding: 8px 12px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    #chat-messages p strong {
      color: #0078D7;
    }
  `;
  document.head.appendChild(style);

  // --- Obsługa i odpowiedzi statyczne
  const toggle = document.getElementById("chat-toggle");
  const chatBox = document.getElementById("chat-box");
  const buttons = document.querySelectorAll("#chat-questions button");
  const chatMessages = document.getElementById("chat-messages");

  toggle.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  });

const odpowiedzi = {
  "Opowiedz o Next Action Tool": "Next Action Tool to moje autorskie narzędzie, które stworzyłem do automatycznego przypominania o zgłoszeniach SLA. Integruje się z Teams i Outlookiem, zapisuje logi, a jego celem jest ułatwienie pracy zespołu i poprawa terminowości w ITSM.",

  "Czym jest Quick Share App?": "QuickShare App to moja lekka aplikacja, która umożliwia szybkie tworzenie podsumowań z Excela i wysyłkę gotowych maili przez Outlook. Idealna do raportowania bez zbędnego klikania – oszczędność czasu i porządek w komunikacji.",

  "Jakie szkolenia przeprowadzono?": "W pierwszej połowie 2025 roku poprowadziłem szkolenie E2E dla zespołu (Friendly Reminder), a także indywidualne sesje shadowingowe dla nowych członków – Weroniki i Michała. Do każdego przygotowałem jasne instrukcje i certyfikaty.",

  "Jakie szkolenia ukończył Robert?": "Ukończyłem szkolenia z ServiceNow Flow Designer i IntegrationHub. Zdobyłem też certyfikat Associate Support Specialist i przygotowuję się do poziomu CSA. Automatyzacja procesów i ITSM to obszary, w których stale się rozwijam.",

  "Co nowego planowane na H2?": "W drugiej połowie roku chcę zdobyć certyfikat ITIL, AI Fundamentals oraz zdać egzaminy z fizyki, matematyki i chemii – to mój krok w stronę studiów IT. Planuję też rozwijać nowe funkcje w moich aplikacjach.",

  "Kim jest Robert?": `Pracuję na Service Desk, ale od dłuższego czasu rozwijam automatyzacje i aplikacje wspierające pracę zespołu.<br><br>
  Jestem osobą, na której można polegać – terminowy, zaangażowany, z inicjatywą. Lubię, gdy coś działa lepiej niż wczoraj – i dokładnie to staram się wdrażać.<br><br>
  Sprawdź moje projekty:<br>
  <a href="https://robson23-ai.github.io/rusz-sie-2025-landingpage/" target="_blank">Rusz się 2025</a><br>
  <a href="https://robson23-ai.github.io/Julka/" target="_blank">Julka</a>`
};


  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const question = button.dataset.q;
      const answer = odpowiedzi[question] || "Brak odpowiedzi.";

      chatMessages.innerHTML += `<p><strong>Ty:</strong> ${question}</p>`;
      chatMessages.innerHTML += `<p><strong>Asystent:</strong> ${answer}</p>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  });
});
