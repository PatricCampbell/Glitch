import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withLoading from "./withLoading";
import SessionFormContainer from "../sessionFormContainer";

Enzyme.configure({ adapter: new Adapter() });

describe("withLoading", () => {
  let SessionFormWithLoading;

  beforeEach(() => {
    SessionFormWithLoading = withLoading(SessionFormContainer);
  });

  it("should render Loading when isLoading is true", () => {
    const wrapper = shallow(<SessionFormWithLoading isLoading={true} />);

    expect(wrapper.find("Loading").text()).toBe("<Loading />");
  });

  it("should render child Component when isLoading is false", () => {});
});
