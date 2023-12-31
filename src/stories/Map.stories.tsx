import type { Meta, StoryObj } from "@storybook/react";
import { World } from "../components/Map/World";

const meta: Meta<typeof World> = {
  component: World
};



export default meta;
type WorldStory = StoryObj<typeof meta>;
export const Primary: WorldStory = {}