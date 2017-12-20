import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Loading from "./loading";

Enzyme.configure({ adapter: new Adapter() });

describe("Loading", () => {
  it("should display loading text when loading", () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper.find("div").text()).toBe("Loading...");
  });
});
