import ServicePageLayout from "./servicesPageLayout";

const integrity =
  "AICTS provides advisory, readiness and documentation support. Outcomes such as credit issuance, certification, finance, buyer participation or offtake depend on applicable standards, regulation, registry processes, project performance, validation, verification and market conditions.";

const Article6Policy = () => (
  <ServicePageLayout

    who="Governments, ministries, regulators, designated national authorities, public-sector institutions, development partners and institutions supporting national carbon market readiness."
    how="We support policy advisory, Article 6 readiness, institutional frameworks, authorisation pathways, safeguards, stakeholder consultation and implementation planning. Our work recognises that credible carbon markets require more than policy documents; they require clear systems and trusted implementation."
    delivers={[
      "Carbon market policy and regulatory advisory",
      "Article 6 readiness assessments",
      "Host-country authorisation pathway design",
      "Institutional role mapping",
      "Carbon project approval process design",
      "Registry-readiness and governance advisory",
      "Benefit-sharing framework support",
      "Safeguards and grievance mechanism advisory",
      "Stakeholder consultation design",
      "Public-sector capacity building",
      "Policy briefs, technical notes and implementation roadmaps",
      "Regulatory gap assessments",
    ]}
    outputs={[
      "Carbon market readiness reports",
      "Policy gap assessments",
      "Draft policy briefs and technical notes",
      "Institutional framework maps",
      "Host-country authorisation process notes",
      "Stakeholder consultation reports",
      "Capacity-building materials",
      "Implementation roadmaps",
    ]}
    integrityNote={integrity}
    finalCta={{
      heading: "Take the next credible step",
      copy: "Share your project, policy, institutional or market-readiness question with AICTS and we will help identify a practical way forward.",
      button: "Request Policy Readiness Support",
      to: "/tools/diagnostic",
    }}
  />
);

export default Article6Policy;