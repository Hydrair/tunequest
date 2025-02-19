import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SetteleQuest</title>
      </Head>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:px-6 sm:pb-5 lg:px-8">
      </div>

      <div className="h-screen overflow-scroll flex flex-col">
        <div className="px-6 pt-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              <span className="text-indigo-500">Settele</span>Quest
            </h1>
            <p className="mx-auto mt-12 max-w-xl text-lg leading-8 text-gray-600">
              Hiermit wird jede Party zu Setteles Geburtstag! Errate die Top 10000 Lieblingssongs von Settele himself.
            </p>
            <details className="mx-auto mt-10 max-w-xl text-lg leading-8 text-gray-600">
              <summary>Regeln anzeigen</summary>
              <ul className="text-left list-disc pl-6">
                <li>Der Spieler, der an der Reihe ist, zieht eine Karte vom Stapel.</li>
                <li>Der DJ scannt den QR-Code der Karte mit einer App, und die Musik wird abgespielt.</li>
                <li>Der Spieler versucht zu raten:
                  <ul>
                    <li>Wann der Song veröffentlicht wurde.</li>
                    <li>Wer der Interpret ist.</li>
                    <li>Wie der Song heißt (extra Token bei richtiger Antwort).</li>
                  </ul>
                </li>
                <li>Die Karte wird in die Zeitleiste eingeordnet, indem sie verdeckt an die empfundene richtige Stelle gelegt wird.</li>
                <li>Ein Mitspieler kann widersprechen, indem er einen Token einsetzt.</li>
                <li>Die Richtigkeit der Zeitleiste wird überprüft:
                  <ul>
                    <li>Stimmt die Reihenfolge nicht, muss die Karte abgegeben werden.</li>
                    <li>Falscher Interpret oder Titel sind nicht relevant.</li>
                  </ul>
                </li>
                <li>Der Spieler, der zuerst zehn Musik-Karten in seiner Zeitleiste hat, gewinnt.</li>
                <li>Tokens/Joker haben verschiedene Bedeutungen:
                  <ul>
                    <li>Als neuen Versuch einsetzen, um eine neue Karte zu ziehen, wenn ein Lied nicht bekannt ist.</li>
                    <li>Eine Karte beim Mitspieler stehlen, wenn man glaubt, dass sie falsch in der Zeitleiste liegt oder der Interpret/Titel falsch ist. Bei Recht bekommt man die Karte.</li>
                    <li>Drei Token opfern, um eine Musik-Karte geschenkt zu bekommen, ohne raten zu müssen.</li>
                  </ul>
                </li>
                <li>Kein Spieler darf während des Spiels mehr als fünf Token besitzen.</li>
              </ul>
            </details>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/api/login"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Los gehts!
              </Link>
            </div>
          </div>
        </div>
  
          <img src="/settele.png" alt="Settele" className="w-full h-full object-cover" />
        
      </div>
    </>
  );
}
