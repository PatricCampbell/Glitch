import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withLoading from "./withLoading";

Enzyme.configure({ adapter: new Adapter() });

describe("withLoading", () => {
  let Mock, MockWithLoading;

  beforeEach(() => {
    Mock = props => {
      return <div>I'm a mock!</div>;
    };

    MockWithLoading = withLoading(Mock);
  });

  it("should render Loading when isLoading is true", () => {
    const wrapper = shallow(<MockWithLoading isLoading={true} />);

    expect(wrapper.find("Loading").text()).toBe("<Loading />");
  });

  it("should render child Component when isLoading is false", () => {
    const wrapper = shallow(<MockWithLoading isloading={false} />);

    expect(wrapper.find("Mock").text()).toBe("<Mock />");
  });
});
