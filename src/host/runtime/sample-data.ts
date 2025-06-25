import { v4 as uuid } from "uuid";

import { COMPONENT_TYPE, type Component } from "./runtime";

export const SAMPLE_DATA: Component = {
  key: uuid(),
  type: COMPONENT_TYPE.Box,
  props: {
    backgroundColor: "#f9c4e4",
    children: [
      {
        key: uuid(),
        type: COMPONENT_TYPE.Text,
        props: {
          color: "#ea39a6",
          fontSize: 48,
          fontWeight: 900,
          text: "WHERE BRAND MEETS THE BROWSER",
        },
      },
      {
        key: uuid(),
        type: COMPONENT_TYPE.Text,
        props: {
          fontSize: 20,
          fontWeight: 100,
          text: "Makeswift gives marketers visual freedom and developers full control so teams can design, ship, and scale modern frontends without headaches.",
        },
      },
      {
        key: uuid(),
        type: COMPONENT_TYPE.Box,
        props: {
          padding: 20,
          width: 200,
          backgroundColor: "#ea39a6",
          children: [
            {
              key: uuid(),
              type: COMPONENT_TYPE.Text,
              props: {
                color: "white",
                text: "SIGN UP FREE",
              },
            },
          ],
        },
      },
      {
        key: uuid(),
        type: COMPONENT_TYPE.Box,
        props: {
          padding: 20,
          width: 200,
          backgroundColor: "black",
          children: [
            {
              key: uuid(),
              type: COMPONENT_TYPE.Text,
              props: {
                color: "white",
                text: "REQUEST A DEMO",
              },
            },
          ],
        },
      },
    ],
  },
};
