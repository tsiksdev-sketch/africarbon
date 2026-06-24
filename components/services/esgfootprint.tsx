import ServicePageLayout from "./servicesPageLayout";

const integrity =
  "AICTS provides advisory, readiness and documentation support. Outcomes such as credit issuance, certification, finance, buyer participation or offtake depend on applicable standards, regulation, registry processes, project performance, validation, verification and market conditions.";

const ESGFootprinting = () => (
  <ServicePageLayout
    who="Banks, corporates, mining companies, manufacturers, technology firms, public institutions, SMEs, NGOs, development actors and organisations preparing for sustainability reporting or investor expectations."
    how="We help clients establish credible emissions and ESG baselines, organise data, identify reduction opportunities, strengthen reporting and prepare for stakeholder, regulator, buyer and investor expectations."
    delivers={[
      "Organisational carbon footprint assessments",
      "Scope 1, Scope 2 and selected Scope 3 emissions assessments",
      "GHG inventories",
      "Carbon data collection templates",
      "ESG baseline assessments",
      "Sustainability reports",
      "Climate-risk and opportunity assessments",
      "Emissions reduction roadmaps",
      "Net-zero and carbon neutrality advisory",
      "Supplier sustainability assessments",
      "Board and executive ESG briefings",
    ]}
    outputs={[
      "Carbon footprint assessment reports",
      "GHG inventory reports",
      "ESG baseline reports",
      "Sustainability reports",
      "Emissions reduction roadmaps",
      "Climate-risk summary notes",
      "Data collection templates",
      "Executive briefing packs",
    ]}
    integrityNote={integrity}
    finalCta={{
      heading: "Take the next credible step",
      copy: "Share your project, policy, institutional or market-readiness question with AICTS and we will help identify a practical way forward.",
      button: "Start a Carbon Footprint Assessment",
      to: "/start-a-diagnostic",
    }}
  />
);

export default ESGFootprinting;
