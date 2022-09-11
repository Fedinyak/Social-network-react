import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
  test("status from the props should be in the state", () => {
    const component = create(<ProfileStatus status="Go!" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Go!");
  });
});
