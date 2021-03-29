import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';
import Login from "../screens/login"
import Signup from "../screens/signup"
import { Route } from 'react-router-dom';

let pathMap = {};
describe('routes using array of routers', () => {
    beforeAll(() => {
        const component = shallow(<Routes />);
        pathMap = component.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});
        // console.log(pathMap)
    })
    test('should show Login component for / router (getting array of routes)', () => {
        expect(pathMap['/']).toBe(Login);
    })
    test('should show Signup Feed component for /signup router', () => {
        expect(pathMap['/signup']).toBe(Signup);
    })
})