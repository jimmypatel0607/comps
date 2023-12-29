import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "ldggs2",
      label: "Can I use React in a project?",
      content:
        "Yes you can use React in a project. Yes you can use React in a project. Yes you can use React in a project.",
    },
    {
      id: "adfad4",
      label: "Can I use JavaScript in a project?",
      content:
        "Yes you can use JavaScript in a project. Yes you can use JavaScript in a project. Yes you can use JavaScript in a project.",
    },
    {
      id: "ldgdfa2",
      label: "Can I use CSS in a project?",
      content:
        "Yes you can use CSS in a project. Yes you can use CSS in a project. Yes you can use CSS in a project.",
    },
  ];

    return <Accordion items={items} />
}

export default AccordionPage;
