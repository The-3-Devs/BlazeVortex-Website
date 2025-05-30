export default function Page() {
  return (
    <>
      <div className="m-10">
        <h1 className="mt-10 text-3xl max-sm:text-xl">
          BlazeVortex Privacy Policy
        </h1>
        <br />
        <p>
          <strong>Last updated:</strong> April 25, 2025
        </p>
        <h2 className="mt-4 text-2xl">1. What We Collect</h2>
        <p>
          - Basic Discord IDs (user, server, channel)
          <br />- Messages sent using bot commands (e.g., `!ai`)
          <br />- Error logs &amp; usage stats to keep the bot running (bare
          minimum)
        </p>
        <h2 className="mt-4 text-2xl">2. Why We Collect</h2>
        <p>
          - To make BlazeVortex not suck
          <br />- To debug stuff when it breaks
          <br />- To make AI replies a lil smarter
          <br />- To blacklist abusers and toxic servers
        </p>
        <h2 className="mt-4 text-2xl">3. Who Has Access</h2>
        <p>
          Only The 3 Devs™ — no third parties, no sketchy data brokers. Our
          code, our server, our responsibility.
        </p>
        <h2 className="mt-4 text-2xl">4. AI Stuff</h2>
        <p>
          When you use AI features, your prompts get sent to Google’s Gemini
          API. That data is processed to generate a response, then tossed. We
          don’t store AI convo history long-term. Gemini might do their own
          thing with the data, though — check their privacy docs if you care
          that much.
        </p>
        <h2 className="mt-4 text-2xl">5. Your Rights</h2>
        <p>
          You have the right to:
          <br />- Request data deletion (DM a dev)
          <br />- Complain if something feels off
          <br />- Stop using the bot if you’re paranoid
        </p>
        <h2 className="mt-4 text-2xl">6. Changes to This Policy</h2>
        <p>
          We might update this Privacy Policy whenever we feel like it. If you
          keep using BlazeVortex, that means youre cool with the changes. If
          not, bounce.
        </p>
        <h2 className="mt-4 text-2xl">7. Final Words</h2>
        <p>
          BlazeVortex is built to be fun, edgy, and a lil chaotic — but we still
          respect your privacy. We collect the *bare fkn minimum*. No shady biz.
          <br />
          Got concerns? DM us. Otherwise, vibe on. 🤙
        </p>
      </div>
    </>
  );
}
