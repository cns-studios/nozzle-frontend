import CommandBar from "./CommandBar";
import Header from "./Header";

function LandingPage() {
  return (
    <main className="landing-page">
      <Header
        navLinks={[{ label: "Pricing" }, { label: "Features" }]}
        actionLabel="Coming soon"
        onAction={undefined}
        disabled
      />

      <section className="content-section">
        <div className="announcement">
          <span className="announcement-new">NEW</span>
          <span className="announcement-text">Bring your own APIs</span>
        </div>

        <div className="headline-block">
          <h1 className="headline">
            A coding Agent that lives in your Discord
          </h1>
          <p className="subheadline">
            Select your GitHub working repo,
            <br />
            @mention nozzle to create tasks, and it&rsquo;ll submit PR&rsquo;s
          </p>
        </div>

        <div className="cta-row">
          <button className="cta-btn primary" type="button" disabled>
            Try for free
          </button>
          <button className="cta-btn ghost" type="button" disabled>
            See pricing
          </button>
        </div>

        <CommandBar />
      </section>
    </main>
  );
}

export default LandingPage;
