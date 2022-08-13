import Header from "../Header";

import "./help.scss"
export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="help-page-wrapper">
        <section className="help-box">
          <h1 className="title">Where to learn hiragana and katakana</h1>
          <div className="bar"></div>
          <a href="https://drlingua.com/japanese/games/kana-bento/" target={'_blank'}> Drlingua</a>
        </section>
      </main>
    </>
  );
}
