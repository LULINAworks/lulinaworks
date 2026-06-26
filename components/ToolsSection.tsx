function GearDecoration({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <path
        d="M49.1 19.4L50.6 6.8L56.2 6.1L63.8 6.1L69.4 6.8L70.9 19.4L78.5 9.3L83.7 11.5L90.2 15.2L94.7 18.6L89.7 30.3L101.4 25.3L104.8 29.8L108.5 36.3L110.7 41.5L100.6 49.1L113.2 50.6L113.9 56.2L113.9 63.8L113.2 69.4L100.6 70.9L110.7 78.5L108.5 83.7L104.8 90.2L101.4 94.7L89.7 89.7L94.7 101.4L90.2 104.8L83.7 108.5L78.5 110.7L70.9 100.6L69.4 113.2L63.8 113.9L56.2 113.9L50.6 113.2L49.1 100.6L41.5 110.7L36.3 108.5L29.8 104.8L25.3 101.4L30.3 89.7L18.6 94.7L15.2 90.2L11.5 83.7L9.3 78.5L19.4 70.9L6.8 69.4L6.1 63.8L6.1 56.2L6.8 50.6L19.4 49.1L9.3 41.5L11.5 36.3L15.2 29.8L18.6 25.3L30.3 30.3L25.3 18.6L29.8 15.2L36.3 11.5L41.5 9.3L49.1 19.4ZM82 60A22 22 0 1 0 38 60A22 22 0 1 0 82 60Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function ToolsSection() {
  return (
    <section className="section tools-section" aria-labelledby="tools-title">
      <div className="section-head tools-section-head">
        <div className="section-title-wrap tools-title-wrap">
          <h2 className="section-title" id="tools-title">
            制作補助ツール
          </h2>
          <p className="section-desc">プロンプト作成を少し楽にする、LULINAworksの制作補助ツールです。</p>
        </div>
      </div>

      <a className="tool-feature-card" href="/tools/anima-prompt-template">
        <GearDecoration className="tool-card-gear tool-card-gear-left" />
        <GearDecoration className="tool-card-gear tool-card-gear-right" />
        <div className="tool-feature-copy">
          <span className="tool-feature-label">Prompt Tool</span>
          <h3>
            <span>プロンプトガイド</span>
            <span>ジェネレーター β</span>
          </h3>
          <p>AnimaやNovelAI・SD系でも使える、プロンプトの骨組みやAI発注書を作れるβ版ツールです。</p>
          <span className="tool-feature-button">ツールを使ってみる</span>
        </div>
      </a>
    </section>
  );
}
