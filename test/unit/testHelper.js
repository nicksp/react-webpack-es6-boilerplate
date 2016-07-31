import jq from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import createHistory from 'react-router/lib/browserHistory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../src/js/reducers';

// Global prerequisites to make it work in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jq(window);

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = ReactTestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  // Produces HTML
  return $(ReactDOM.findDOMNode(componentInstance));
}

function mockHistory(component) {
  component.childContextTypes = { history: React.PropTypes.object };
  component.prototype.getChildContext = () => ({ history: createHistory() });
}

// Helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  ReactTestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, mockHistory, expect };
