//import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ForceGraph } from "../components/Graph/ForceGraph";
import { group } from "console";


const nodes = [
  { id: "Arrays", group: 1 },
  { id: "Linked List", group: 1 },
  { id: "Tree", group: 1 },
  {id: "Graph", group: 1}
];

const links = [
  { source: "Arrays", target: "Linked List", value: 1 },
  { source: "Tree", target: "Graph", value: 1 },
];

const meta: Meta<typeof ForceGraph> = {
  component: ForceGraph,
  args: {
    nodes: nodes,
    links: links
  }
}

export default meta;
type ForceStory = StoryObj<typeof meta>;

export const Primary: ForceStory = {
  argTypes: {
    nodes: nodes,
    links: links
  }
}